# Builds the GitHub Pages site in docs/ from index.html (the artifact-format source).
# Usage: powershell -ExecutionPolicy Bypass -File build.ps1 -SiteUrl https://longwayhome.itsgordonhui.com/
param([Parameter(Mandatory=$true)][string]$SiteUrl)
$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
$src = [System.IO.File]::ReadAllText((Join-Path $root 'index.html'))
if (-not $SiteUrl.EndsWith('/')) { $SiteUrl += '/' }

# the source opens with its <title>; move it into the real <head>
$m = [regex]::Match($src, '<title>(.*?)</title>')
$title = $m.Groups[1].Value
$body = $src.Remove($m.Index, $m.Length)

$desc = 'Top down, sun low, take it slow. A self-driving convertible cruises golden-hour Highway 1 between beach towns while K-JAM''s Rick and Dana do the traffic report. A game by gghui.'
$head = @"
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover">
<title>$title</title>
<meta name="description" content="$desc">
<meta name="theme-color" content="#2b1b4a">
<meta property="og:type" content="website">
<meta property="og:title" content="$title">
<meta property="og:description" content="Top down, sun low, take it slow.">
<meta property="og:url" content="$SiteUrl">
<meta property="og:image" content="${SiteUrl}share.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="A red convertible on a golden-hour coast road, with the title Long Way Home in California">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="$title">
<meta name="twitter:description" content="Top down, sun low, take it slow.">
<meta name="twitter:image" content="${SiteUrl}share.png">
<link rel="icon" href="icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="icon-180.png">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Long Way Home">
</head>
<body>
"@

$docs = Join-Path $root 'docs'
New-Item -ItemType Directory -Force $docs | Out-Null
[System.IO.File]::WriteAllText((Join-Path $docs 'index.html'), $head + $body + "`n</body>`n</html>`n", (New-Object System.Text.UTF8Encoding($false)))
foreach ($f in 'share.png','icon.svg','icon-180.png') { if (Test-Path (Join-Path $root $f)) { Copy-Item (Join-Path $root $f) $docs -Force } }
New-Item -ItemType File -Force (Join-Path $docs '.nojekyll') | Out-Null
# A custom domain (anything not on github.io) needs a CNAME file in the published folder.
$siteHost = ([Uri]$SiteUrl).Host
if ($siteHost -notlike '*.github.io') { [System.IO.File]::WriteAllText((Join-Path $docs 'CNAME'), $siteHost, (New-Object System.Text.UTF8Encoding($false))) }
"Built docs/ for $SiteUrl"
