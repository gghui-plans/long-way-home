# Turns the raw ElevenLabs bits into game-ready files in docs/audio/voice/, plus timings.json for the subtitles.
# For each bit: finds where each line starts (each line's share of the characters, snapped to the nearest real pause),
# puts a phone-line filter on callers' lines only, levels the speech, and compresses it to mono MP3.
$ErrorActionPreference = 'Continue' # ffmpeg writes progress to stderr
$ff   = "$env:LOCALAPPDATA\Microsoft\WinGet\Links\ffmpeg.exe"
$fp   = "$env:LOCALAPPDATA\Microsoft\WinGet\Links\ffprobe.exe"
$here = $PSScriptRoot
$raw  = Join-Path $here 'raw\voice'
$out  = Join-Path (Split-Path $here) 'docs\audio\voice'
$tmp  = Join-Path $env:TEMP 'claude\voice-tmp'
New-Item -ItemType Directory -Force $out, $tmp | Out-Null
$inv = [Globalization.CultureInfo]::InvariantCulture

# the approved script, grouped into bits exactly like generate-voices.ps1
$pack = [System.IO.File]::ReadAllText((Join-Path $here 'PRODUCTION-PACK.md'), [System.Text.Encoding]::UTF8)
$part1 = $pack.Substring(0, $pack.IndexOf('## Part 2'))
$bits = [ordered]@{}
foreach ($r in [regex]::Matches($part1, '(?m)^\| ([a-z]+(?:-[a-z0-9]+)+) \| ([^|]+) \| ([^|]+) \| ([^|]+) \|$')) {
  $id = $r.Groups[1].Value
  $bit = if ($id -match '^(townname|intro)-') { $id } else { $id -replace '-\d+$', '' }
  if (-not $bits.Contains($bit)) { $bits[$bit] = New-Object System.Collections.ArrayList }
  [void]$bits[$bit].Add(@{ caller = ($r.Groups[2].Value -match 'CALLER'); chars = $r.Groups[3].Value.Trim().Length })
}

$timings = [ordered]@{}
foreach ($b in $bits.Keys) {
  $src = Join-Path $raw "$b.mp3"
  if (-not (Test-Path $src)) { "missing $b"; continue }
  $D = [double]::Parse((& $fp -v error -show_entries format=duration -of csv=p=0 $src), $inv)
  $lines = $bits[$b]
  # pauses in the speech
  $s = & $ff -hide_banner -i $src -af 'silencedetect=noise=-40dB:d=0.18' -f null - 2>&1 | Out-String
  $starts = [regex]::Matches($s, 'silence_start: ([0-9.]+)') | ForEach-Object { [double]::Parse($_.Groups[1].Value, $inv) }
  $ends   = [regex]::Matches($s, 'silence_end: ([0-9.]+)')   | ForEach-Object { [double]::Parse($_.Groups[1].Value, $inv) }
  $pauses = @(); for ($i = 0; $i -lt [math]::Min(@($starts).Count, @($ends).Count); $i++) { if ($starts[$i] -gt 0.3 -and $ends[$i] -lt $D - 0.2) { $pauses += ($starts[$i] + $ends[$i]) / 2 } }
  # line starts: expected from character share, snapped to the closest unused pause after the previous boundary
  $total = ($lines | ForEach-Object { $_.chars } | Measure-Object -Sum).Sum
  $t = @(0.0); $cum = 0; $prev = 0.0
  if ($pauses.Count -eq $lines.Count - 1) { $pauses | ForEach-Object { $t += [math]::Round($_, 2) } } # one pause per speaker change: use them as they are
  else { for ($k = 0; $k -lt $lines.Count - 1; $k++) {
    $cum += $lines[$k].chars; $expect = $D * $cum / $total
    $cand = $pauses | Where-Object { $_ -gt $prev + 0.4 } | Sort-Object { [math]::Abs($_ - $expect) } | Select-Object -First 1
    $at = if ($cand -ne $null -and [math]::Abs($cand - $expect) -lt [math]::Max(1.5, $D * 0.18)) { $cand } else { $expect }
    $t += [math]::Round($at, 2); $prev = $at
  } }
  # phone-line sound on callers' lines only
  $filters = @()
  for ($k = 0; $k -lt $lines.Count; $k++) {
    if ($lines[$k].caller) {
      $a = $t[$k].ToString($inv); $z = $(if ($k -lt $lines.Count - 1) { $t[$k + 1] } else { $D + 1 }).ToString($inv)
      $filters += "highpass=f=320:enable='between(t,$a,$z)'"; $filters += "lowpass=f=3400:enable='between(t,$a,$z)'"
    }
  }
  $wav = Join-Path $tmp "$b.wav"
  $af = if ($filters) { $filters -join ',' } else { 'anull' }
  & $ff -hide_banner -loglevel error -y -i $src -af $af -ac 1 -c:a pcm_s16le $wav
  $o = & $ff -hide_banner -i $wav -af 'loudnorm=print_format=json' -f null - 2>&1 | Out-String
  $a1 = $o.LastIndexOf('{'); $b1 = $o.IndexOf('}', $a1); $j = $o.Substring($a1, $b1 - $a1 + 1) | ConvertFrom-Json
  $gain = [math]::Min(-17 - [double]::Parse($j.input_i, $inv), -1.5 - [double]::Parse($j.input_tp, $inv))
  & $ff -hide_banner -loglevel error -y -i $wav -af ("volume=" + [math]::Round($gain, 2).ToString($inv) + "dB") -ar 44100 -ac 1 -c:a libmp3lame -b:a 64k (Join-Path $out "$b.mp3")
  $timings[$b] = @{ d = [math]::Round($D, 2); t = $t }
  "{0,-26} {1,5:N1}s  lines {2}  starts {3}" -f $b, $D, $lines.Count, ($t -join ' ')
}
($timings | ConvertTo-Json -Depth 4 -Compress) | Set-Content -Encoding ASCII (Join-Path $out 'timings.json')
"wrote timings for $($timings.Count) bits"
