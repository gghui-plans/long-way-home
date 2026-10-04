# Turns the raw Suno songs into radio-ready files in docs/audio/music/.
# Each song keeps its first 1:45 (intro, verse and at least one chorus), fades out over the last 5 s,
# and is levelled to the same loudness so no song jumps out on the radio.
$ErrorActionPreference = 'Continue' # ffmpeg writes progress to stderr
$ff   = "$env:LOCALAPPDATA\Microsoft\WinGet\Links\ffmpeg.exe"
$raw  = Join-Path $PSScriptRoot 'raw\music'
$out  = Join-Path (Split-Path $PSScriptRoot) 'docs\audio\music'
$tmp  = Join-Path $env:TEMP 'claude\music-tmp'
$len = 105; $fade = 5; $target = -16
New-Item -ItemType Directory -Force $out, $tmp | Out-Null

Get-ChildItem $raw -Filter *.mp3 | Where-Object { $_.Name -notmatch 'take1' } | ForEach-Object {
  $wav = Join-Path $tmp "$($_.BaseName).wav"
  & $ff -hide_banner -loglevel error -y -i $_.FullName -af "atrim=0:$len,asetpts=PTS-STARTPTS,afade=t=out:st=$($len-$fade):d=${fade}:curve=qsin" -c:a pcm_s16le $wav
  $o = & $ff -hide_banner -i $wav -af 'loudnorm=print_format=json' -f null - 2>&1 | Out-String
  $a = $o.LastIndexOf('{'); $b = $o.IndexOf('}', $a); $j = $o.Substring($a, $b - $a + 1) | ConvertFrom-Json
  $gain = [math]::Min($target - [double]$j.input_i, -1 - [double]$j.input_tp)
  $mp3 = Join-Path $out "$($_.BaseName).mp3"
  & $ff -hide_banner -loglevel error -y -i $wav -af "volume=$([math]::Round($gain,2))dB" -ar 44100 -ac 2 -c:a libmp3lame -b:a 112k $mp3
  "{0}: {1:N1} LUFS -> {2} LUFS (gain {3:N1} dB), {4:N0} KB" -f $_.BaseName, [double]$j.input_i, $target, $gain, ((Get-Item $mp3).Length / 1KB)
}
