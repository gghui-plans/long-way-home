# Turns the raw Suno songs into radio-ready files in docs/audio/music/.
# Each song plays in full (Suno cuts most of them off around 2:30, so the last 4 s fade out),
# and is levelled to the same loudness so no song jumps out on the radio.
# -Sub coffee-cabin processes a station's own folder (raw/music/<sub> into docs/audio/music/<sub>).
param([string]$Sub = '')
$ErrorActionPreference = 'Continue' # ffmpeg writes progress to stderr
$ff   = "$env:LOCALAPPDATA\Microsoft\WinGet\Links\ffmpeg.exe"
$fp   = $ff -replace 'ffmpeg\.exe$', 'ffprobe.exe'
$raw  = Join-Path (Join-Path $PSScriptRoot 'raw\music') $Sub
$out  = Join-Path (Join-Path (Split-Path $PSScriptRoot) 'docs\audio\music') $Sub
$tmp  = Join-Path $env:TEMP 'claude\music-tmp'
$fade = 4; $target = -16
New-Item -ItemType Directory -Force $out, $tmp | Out-Null

Get-ChildItem $raw -Filter *.mp3 | Where-Object { $_.Name -notmatch 'take1' } | ForEach-Object {
  $len = [double](& $fp -v error -show_entries format=duration -of csv=p=0 $_.FullName)
  $wav = Join-Path $tmp "$($_.BaseName).wav"
  & $ff -hide_banner -loglevel error -y -i $_.FullName -af "afade=t=out:st=$($len-$fade):d=${fade}:curve=qsin" -c:a pcm_s16le $wav
  $o = & $ff -hide_banner -i $wav -af 'loudnorm=print_format=json' -f null - 2>&1 | Out-String
  $a = $o.LastIndexOf('{'); $b = $o.IndexOf('}', $a); $j = $o.Substring($a, $b - $a + 1) | ConvertFrom-Json
  $gain = [math]::Min($target - [double]$j.input_i, -1 - [double]$j.input_tp)
  $mp3 = Join-Path $out "$($_.BaseName).mp3"
  & $ff -hide_banner -loglevel error -y -i $wav -af "volume=$([math]::Round($gain,2))dB" -ar 44100 -ac 2 -c:a libmp3lame -b:a 112k $mp3
  "{0}: {1:N0} s, {2:N1} LUFS -> {3} LUFS (gain {4:N1} dB), {5:N0} KB" -f $_.BaseName, $len, [double]$j.input_i, $target, $gain, ((Get-Item $mp3).Length / 1KB)
}
