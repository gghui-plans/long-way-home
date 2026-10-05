# Future work

Ideas and to-dos for later. Nothing here is scheduled; pick one and say "build".

## Radio
- **Fast Lane Facts jingle**: a short sting from a remaining Suno credit.
- **Dana's Traffic-scopes**: written and skipped for now; the script is in RADIO-SCRIPTS-DRAFT.md (about 950 credits).
- **Station system**: make stations data (hosts, bits, songs, idents) and let the SEEK knob switch between them. Regions and the Toronto station both build on it.
- **Region stations**: as you drive out of LA, K-JAM breaks up into static (with a Rick and Dana gag), then a local station comes in. Rick and Dana can still "call in" from the road. Each station needs about 8–12 Suno songs and 25–40 clips.
  - Redwood Coast: acoustic folk and Americana. A sleepy community-radio host doing fog reports instead of traffic ("a log truck has been spotted").
  - Big Sur: late-60s folk-rock with dreamy harmonies. A hippie DJ who talks about sunsets for far too long.
  - Wine Country: yacht rock and smooth soft rock. A fancy host doing tasting notes on the traffic.
  - Desert: desert and psych rock, twangy surf-western guitars. A late-night conspiracy host with tumbleweed alerts and UFO call-ins.
  - Tahoe: 70s/80s ski-lodge rock. A ski-bum host with chain-control drama.
- **A second station**: a Toronto hip hop station on the SEEK knob, with its own hosts and Toronto traffic jokes.
- **Budget for region audio**: the 5,500 ElevenLabs credits left won't cover a full station (the last 44 clips cost about 8,200). Plan another month of ElevenLabs and Suno, and record several regions in one session.
- **Cancel the ElevenLabs and Suno subscriptions** once retakes and region audio are done.

## Game
- **Regions (map button)**: pick a California region from a fold-out road map. The car drives there: the next open-coast stretch blends into the new region over a minute or two (sky, fog, ground colours, trees, signs). Also offer a quick fade-and-skip.
  - Build it as a `REGION` table: sky palette (SKYC), ground colours (TC), tree and prop builders, coast on or off, town and street names, district mix, outfits, ambient sound, station. Each town and coast cycle carries its own region.
  - Order: Redwood Coast first (keeps the ocean; foggy cliffs, giant trunks, ferns, god rays through the trees), then Big Sur (arch bridge, fog bank), Wine Country (vines, oaks, golden hills; no ocean), Desert (Joshua trees, boulders, mid-century motels, wind turbines), Tahoe (pines, granite, lake).
  - Road trip mode: the destination changes on its own every 20–30 min, so the drive stays hands-free.
  - Postcard title and stamp per region. Ambient sound per region: forest birds, desert wind.
  - No trademarked or named landmark structures (a generic arch bridge is fine; no Golden Gate lookalike).
- **Battery saver and auto quality** (do before redwoods): a friend's phone got warm after 40 min on HQ.
  - A 30 fps cap option.
  - Turn HQ off automatically if frames struggle. Consider HQ off by default on phones.
  - Redwoods drawn cheaply: instanced trees, far versions, simple trunks, and fog for forest depth.
- **Night drives**: these suit the Desert region (stars).
- **Installable app (PWA)**: home-screen icon, offline play.
- **Postcards in the Claude artifact**: Save and Share need the artifact `downloads` capability. They already work on the GitHub Pages site.
- **Feedback form**: `FEEDBACK_URL` in index.html is still empty.
- **Real-phone performance test**: a town frame is about 318k triangles. Check frame rate and battery on an actual phone. Done on the user's phone, which was fine. A friend's phone got warm after 40 min on HQ (see Battery saver above).
