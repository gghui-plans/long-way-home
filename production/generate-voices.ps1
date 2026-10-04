# Generates the K-JAM voice files with the ElevenLabs text-to-dialogue API: one MP3 per bit, in production/raw/voice/.
# Reads the approved script from PRODUCTION-PACK.md (Part 1) and the voice IDs from voices.json.
# The API key is read from production/elevenlabs-key.txt (never committed, never printed).
#
#   -DryRun          list what would be generated and the character cost, without calling the API
#   -Only a,b        generate just these bits (e.g. -Only traffic-01,intro-tan-lines)
#   -Force           regenerate even if the file already exists (for retakes)
#   -Model id        model to use (default eleven_v3)
#   -ListModels      show which models this key can use, then stop
#   -Stability n     0 to 1; higher keeps the voice closer to the original (less drift), lower is more expressive
param([switch]$DryRun, [string[]]$Only, [switch]$Force, [string]$Model = 'eleven_v3', [switch]$ListModels, [double]$Stability = -1)
$ErrorActionPreference = 'Stop'
if ($Only) { $Only = @($Only | ForEach-Object { $_ -split ',' } | ForEach-Object { $_.Trim() } | Where-Object { $_ }) } # accept "a,b" too
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$here = $PSScriptRoot
$out = Join-Path $here 'raw\voice'
New-Item -ItemType Directory -Force $out | Out-Null

$keyFile = Join-Path $here 'elevenlabs-key.txt'
$key = $null
if (Test-Path $keyFile) { $key = ([System.IO.File]::ReadAllText($keyFile)).Trim() }
if (-not $DryRun -and -not $key) { throw "No API key found. Save it (just the key) in $keyFile" }

if ($ListModels) {
  $models = Invoke-RestMethod -Uri 'https://api.elevenlabs.io/v1/models' -Headers @{ 'xi-api-key' = $key }
  $models | ForEach-Object { '{0,-28} {1}' -f $_.model_id, $_.name }
  return
}

# voices: hosts by role, callers by name
$v = Get-Content (Join-Path $here 'voices.json') -Raw -Encoding UTF8 | ConvertFrom-Json
function VoiceFor($role, $name) {
  if ($role -eq 'RICK') { return $v.RICK }
  if ($role -eq 'DANA') { return $v.DANA }
  $id = $v.$name
  if (-not $id) { throw "No voice for caller '$name'" }
  return $id
}

# bits from the approved script: one file per bit; town names and song intros are one line each
$pack = [System.IO.File]::ReadAllText((Join-Path $here 'PRODUCTION-PACK.md'), [System.Text.Encoding]::UTF8)
$part1 = $pack.Substring(0, $pack.IndexOf('## Part 2'))
$bits = [ordered]@{}
foreach ($r in [regex]::Matches($part1, '(?m)^\| ([a-z]+(?:-[a-z0-9]+)+) \| ([^|]+) \| ([^|]+) \| ([^|]+) \|$')) {
  $id = $r.Groups[1].Value
  $bit = if ($id -match '^(townname|intro)-') { $id } else { $id -replace '-\d+$', '' }
  if (-not $bits.Contains($bit)) { $bits[$bit] = New-Object System.Collections.ArrayList }
  $speaker = $r.Groups[2].Value.Trim()
  $role = $speaker -replace ' \(.*', ''
  $name = [regex]::Match($speaker, '\((.*)\)').Groups[1].Value
  $text = '[' + $r.Groups[4].Value.Trim() + '] ' + $r.Groups[3].Value.Trim()
  [void]$bits[$bit].Add([ordered]@{ text = $text; voice_id = (VoiceFor $role $name) })
}
$todo = $bits.Keys | Where-Object { (-not $Only -or $Only -contains $_) -and ($Force -or -not (Test-Path (Join-Path $out "$_.mp3"))) }
$chars = ($todo | ForEach-Object { $bits[$_] | ForEach-Object { $_.text.Length } } | Measure-Object -Sum).Sum
"{0} bits to generate, {1} characters (about {1} credits), model {2}" -f @($todo).Count, $chars, $Model
if ($DryRun) { $todo | ForEach-Object { "  $_ ($($bits[$_].Count) lines)" }; return }

$ok = 0; $failed = @()
foreach ($b in $todo) {
  $req = @{ inputs = @($bits[$b]); model_id = $Model }
  if ($Stability -ge 0) { $req.settings = @{ stability = $Stability } }
  $body = $req | ConvertTo-Json -Depth 5
  $file = Join-Path $out "$b.mp3"
  for ($try = 1; $try -le 2; $try++) {
    try {
      Invoke-WebRequest -UseBasicParsing -Method Post -Uri 'https://api.elevenlabs.io/v1/text-to-dialogue?output_format=mp3_44100_128' `
        -Headers @{ 'xi-api-key' = $key; 'Accept' = 'audio/mpeg' } -ContentType 'application/json; charset=utf-8' `
        -Body ([System.Text.Encoding]::UTF8.GetBytes($body)) -OutFile $file -TimeoutSec 180
      "  ok    $b  ({0:N0} KB)" -f ((Get-Item $file).Length / 1KB); $ok++; break
    } catch {
      $msg = $_.Exception.Message
      if ($_.ErrorDetails -and $_.ErrorDetails.Message) { $msg += ' ' + $_.ErrorDetails.Message }
      if ($try -eq 2) { "  FAIL  $b  $msg"; $failed += $b; if (Test-Path $file) { Remove-Item $file } }
      else { Start-Sleep -Seconds 3 }
    }
  }
}
"done: $ok generated, $($failed.Count) failed $(if ($failed) { '(' + ($failed -join ', ') + ')' })"
