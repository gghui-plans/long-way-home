# Turns the raw nature recordings into game-ready files in docs/audio/nature/.
# Loops get an equal-power crossfade so they repeat without a seam. Everything is levelled and compressed.
$ErrorActionPreference = 'Continue' # ffmpeg writes progress to stderr, which Windows PowerShell would treat as an error
$ff  = "$env:LOCALAPPDATA\Microsoft\WinGet\Links\ffmpeg.exe"
$raw = Join-Path $PSScriptRoot 'raw\nature'
$out = Join-Path (Split-Path $PSScriptRoot) 'docs\audio\nature'
$tmp = Join-Path $env:TEMP 'claude\nature-tmp'
New-Item -ItemType Directory -Force $out, $tmp | Out-Null

function Measure-Lufs($file) { # integrated loudness and true peak, via loudnorm's analysis pass
  $o = & $ff -hide_banner -i $file -af 'loudnorm=print_format=json' -f null - 2>&1 | Out-String
  $a = $o.LastIndexOf('{'); $b = $o.IndexOf('}', $a)
  $j = $o.Substring($a, $b - $a + 1) | ConvertFrom-Json
  return @{ i = [double]$j.input_i; tp = [double]$j.input_tp }
}
function Encode($wav, $mp3, $targetLufs, $rate, $mono) { # apply a fixed gain to hit the target loudness, keeping peaks under -1 dB
  $m = Measure-Lufs $wav
  $gain = [math]::Min($targetLufs - $m.i, -1 - $m.tp)
  $ch = if ($mono) { '-ac 1' } else { '-ac 2' }
  & $ff -hide_banner -loglevel error -y -i $wav -af "volume=$([math]::Round($gain,2))dB" $ch.Split(' ') -ar 44100 -c:a libmp3lame -b:a $rate $mp3
  "{0}: {1:N1} LUFS -> {2} LUFS, {3} KB" -f (Split-Path $mp3 -Leaf), $m.i, $targetLufs, [math]::Round((Get-Item $mp3).Length / 1KB)
}
function Make-Loop($src, $start, $D, $C, $name, $lufs, $rate, $mono) {
  $wav = Join-Path $tmp "$name.wav"
  $e = $start + $D
  $fc = "[0]atrim=${start}:$($start+$C),asetpts=PTS-STARTPTS,afade=t=in:d=${C}:curve=qsin[h];" +
        "[0]atrim=${e}:$($e+$C),asetpts=PTS-STARTPTS,afade=t=out:d=${C}:curve=qsin[t];" +
        "[h][t]amix=inputs=2:normalize=0[x];" +
        "[0]atrim=$($start+$C):${e},asetpts=PTS-STARTPTS[b];[x][b]concat=n=2:v=0:a=1[o]"
  & $ff -hide_banner -loglevel error -y -i (Join-Path $raw $src) -filter_complex $fc -map '[o]' -c:a pcm_s16le $wav
  Encode $wav (Join-Path $out "$name.mp3") $lufs $rate $mono
}
function Make-Call($src, $start, $dur, $name) {
  $wav = Join-Path $tmp "$name.wav"
  $fo = [math]::Max(0, $dur - 0.04)
  & $ff -hide_banner -loglevel error -y -i (Join-Path $raw $src) -af "atrim=${start}:$($start+$dur),asetpts=PTS-STARTPTS,highpass=f=400,afade=t=in:d=0.02,afade=t=out:st=${fo}:d=0.04" -c:a pcm_s16le $wav
  # calls are too short for a loudness reading, so level them by peak instead (to -3 dB)
  $v = & $ff -hide_banner -i $wav -af volumedetect -f null - 2>&1 | Out-String
  $max = [double]([regex]::Match($v, 'max_volume: (-?[0-9.]+) dB').Groups[1].Value)
  $mp3 = Join-Path $out "$name.mp3"
  & $ff -hide_banner -loglevel error -y -i $wav -af "volume=$(-3 - $max)dB" -ac 1 -ar 44100 -c:a libmp3lame -b:a 96k $mp3
  "{0}: peak {1} dB -> -3 dB, {2} KB" -f "$name.mp3", $max, [math]::Round((Get-Item $mp3).Length / 1KB)
}

# loops: source, start (s), loop length (s), crossfade (s)
Make-Loop 'nature-ocean.wav'               10 60 4 'ocean'       -20 '112k' $false
Make-Loop 'nature-ocean-close.wav'          6 50 4 'ocean-close' -20 '112k' $false
Make-Loop 'nature-wind.wav'                 2 26 3 'wind'        -24 '96k'  $false
Make-Loop 'birds-someonecool15-419084.mp3' 20 75 4 'birds'       -24 '96k'  $false
# single gull calls
Make-Call 'gull-a-steaq-263786.mp3'        0     0.395 'gull-1'
Make-Call 'gull-c-siriusparsec-532092.mp3' 4.70  0.55  'gull-2'
Make-Call 'gull-b-craigsmith-479595.mp3'   1.87  0.93  'gull-3'
Make-Call 'gull-b-craigsmith-479595.mp3'   3.55  1.15  'gull-4'
Make-Call 'gull-c-siriusparsec-532092.mp3' 1.25  0.78  'gull-5'
Make-Call 'gull-c-siriusparsec-532092.mp3' 2.55  0.67  'gull-6'
Make-Call 'gull-c-siriusparsec-532092.mp3' 7.20  0.60  'gull-7'
Make-Call 'gull-c-siriusparsec-532092.mp3' 7.95  0.60  'gull-8'
