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
# voice pitch every 20 ms (0 = no voice); Rick and the male callers sit far below Dana and the female callers,
# which shows exactly where the speaker changes
Add-Type -TypeDefinition @"
using System; using System.Collections.Generic;
public static class PitchTrack {
  public static double[] Track(byte[] pcm) {
    int sr = 16000, n = pcm.Length / 2, win = 640, hop = 320, minLag = sr/400, maxLag = sr/65; short[] x = new short[n];
    for (int i = 0; i < n; i++) x[i] = (short)(pcm[2*i] | (pcm[2*i+1] << 8));
    var f = new List<double>();
    for (int st = 0; st + win + maxLag < n; st += hop) {
      double e = 0; for (int i = 0; i < win; i++) e += (double)x[st+i]*x[st+i];
      if (e / win < 250000) { f.Add(0); continue; }
      double best = 0; int bl = 0;
      for (int lag = minLag; lag <= maxLag; lag++) {
        double c = 0, e2 = 0; for (int i = 0; i < win; i++) { c += (double)x[st+i]*x[st+i+lag]; e2 += (double)x[st+i+lag]*x[st+i+lag]; }
        double r = c / Math.Sqrt(e*e2 + 1); if (r > best) { best = r; bl = lag; }
      }
      f.Add(best > 0.55 && bl > 0 ? (double)sr/bl : 0);
    }
    return f.ToArray();
  }
}
"@
function Match($track, $a, $b, $cls) { # share of voiced frames in [a,b] seconds that belong to a high (F) or low (M) voice
  $i0 = [math]::Max(0, [int]($a / 0.02)); $i1 = [math]::Min($track.Length - 1, [int]($b / 0.02)); $v = 0; $m = 0
  for ($i = $i0; $i -le $i1; $i++) { $f = $track[$i]; if ($f -gt 0) { $v++; if (($cls -eq 'F' -and $f -ge 170) -or ($cls -eq 'M' -and $f -lt 170)) { $m++ } } }
  if ($v -lt 5) { return 0.5 } else { return $m / $v }
}

# the approved script, grouped into bits exactly like generate-voices.ps1
$pack = [System.IO.File]::ReadAllText((Join-Path $here 'PRODUCTION-PACK.md'), [System.Text.Encoding]::UTF8)
$part1 = $pack.Substring(0, $pack.IndexOf('## Part 2'))
$bits = [ordered]@{}
foreach ($r in [regex]::Matches($part1, '(?m)^\| ([a-z]+(?:-[a-z0-9]+)+) \| ([^|]+) \| ([^|]+) \| ([^|]+) \|$')) {
  $id = $r.Groups[1].Value
  $bit = if ($id -match '^(townname|intro)-') { $id } else { $id -replace '-\d+$', '' }
  if (-not $bits.Contains($bit)) { $bits[$bit] = New-Object System.Collections.ArrayList }
  $sp = $r.Groups[2].Value
  $cls = if ($sp -match 'DANA|CALLER-F') { 'F' } else { 'M' }
  [void]$bits[$bit].Add(@{ caller = ($sp -match 'CALLER'); chars = $r.Groups[3].Value.Trim().Length; cls = $cls })
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
  $track = $null
  if ($lines.Count -gt 1) { $pcmFile = Join-Path $tmp 'track.pcm'; & $ff -hide_banner -loglevel error -y -i $src -ac 1 -ar 16000 -f s16le $pcmFile; $track = [PitchTrack]::Track([System.IO.File]::ReadAllBytes($pcmFile)) }
  $t = @(0.0); $cum = 0; $prev = 0.0
  # best overall split: try every combination of pauses, score how well each segment's voice matches its speaker
  # (a whispered or unvoiced segment counts as neutral) and how close each line's length is to its share of the words
  $m = $lines.Count - 1; $P = @($pauses | Sort-Object); $solved = $false
  if ($track -and $m -ge 1 -and $P.Count -ge $m -and $P.Count -le 14) {
    $exp = @($lines | ForEach-Object { $D * $_.chars / $total })
    $script:bestS = -1e9; $script:bestC = $null
    function Walk($start, $chosen) {
      if ($chosen.Count -eq $m) {
        $b = @(0.0) + $chosen + @($D); $s = 0
        for ($k = 0; $k -le $m; $k++) { $s += (Match $track $b[$k] $b[$k + 1] $lines[$k].cls) - 2 * [math]::Abs(($b[$k + 1] - $b[$k]) - $exp[$k]) / $D }
        if ($s -gt $script:bestS) { $script:bestS = $s; $script:bestC = $chosen }
        return
      }
      for ($i = $start; $i -le $P.Count - ($m - $chosen.Count); $i++) {
        if ($chosen.Count -and $P[$i] -lt $chosen[-1] + 0.4) { continue }
        Walk ($i + 1) (@($chosen) + @($P[$i]))
      }
    }
    Walk 0 @()
    if ($script:bestC) { $script:bestC | ForEach-Object { $t += [math]::Round($_, 2) }; $solved = $true }
  }
  if (-not $solved) { for ($k = 0; $k -lt $lines.Count - 1; $k++) {
    $cum += $lines[$k].chars; $expect = $D * $cum / $total
    $cands = @($pauses | Where-Object { $_ -gt $prev + 0.4 })
    $at = $null
    if ($track -and $lines[$k].cls -ne $lines[$k + 1].cls -and $cands.Count) {
      # speaker changes from a low to a high voice (or back): pick the pause where the voice actually flips
      $bestScore = -9
      foreach ($p in $cands) {
        $s = (Match $track ([math]::Max($prev, $p - 2)) $p $lines[$k].cls) + (Match $track $p ([math]::Min($D, $p + 2)) $lines[$k + 1].cls) - 0.15 * [math]::Abs($p - $expect) / [math]::Max(1, $D * 0.25)
        if ($s -gt $bestScore) { $bestScore = $s; $at = $p }
      }
      if ($bestScore -lt 1.2) { $at = $null }
    }
    if ($at -eq $null) { # same speaker continues, or no clear flip: nearest pause to the expected point
      $cand = $cands | Sort-Object { [math]::Abs($_ - $expect) } | Select-Object -First 1
      $at = if ($cand -ne $null -and [math]::Abs($cand - $expect) -lt [math]::Max(1.5, $D * 0.18)) { $cand } else { $expect }
    }
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
