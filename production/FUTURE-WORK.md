# Future work

Ideas and to-dos for later. Nothing here is scheduled; pick one and say "build".

## Radio
- **Fast Lane Facts jingle**: a short sting from a remaining Suno credit.
- **Dana's Traffic-scopes**: written and skipped for now; the script is in RADIO-SCRIPTS-DRAFT.md (about 950 credits).
- **Station system**: make stations data (hosts, bits, songs, idents) and let the SEEK knob switch between them. Regions and the Toronto station both build on it.
- **Region stations**: as you drive out of LA, K-JAM breaks up into static (with a Rick and Dana gag), then a local station comes in. Rick and Dana can still "call in" from the road. Each station gets 16 Suno songs (like K-JAM) and 25–40 clips. Suno Pro allows far more than 20 downloads a month (the user's word, 2026-10-18), so downloads don't limit the schedule.
  - Redwood Coast: acoustic folk and Americana. A sleepy community-radio host doing fog reports instead of traffic ("a log truck has been spotted").
  - Big Sur: late-60s folk-rock with dreamy harmonies. A hippie DJ who talks about sunsets for far too long.
  - Wine Country: yacht rock and smooth soft rock. A fancy host doing tasting notes on the traffic.
  - Desert: desert and psych rock, twangy surf-western guitars. A late-night conspiracy host with tumbleweed alerts and UFO call-ins.
  - High Sierra (winter map): fireside jazz (decided 2026-10-17, replacing ski-lodge rock). A ski-bum host with chain-control drama.
- **A second station**: a Toronto hip hop station on the SEEK knob, with its own hosts and Toronto traffic jokes.
- **Budget for region audio**: ElevenLabs shows 37,307 credits remaining (checked 2026-10-05). The usage dashboard shows 23.8K characters billed as only 2.69K credits (about 0.11 credits per character), so the old "1 credit per character" estimates were about 9× too high. That's roughly 330K characters left, which covers every region station several times over. The rate may be a launch promo for Eleven v4, so check it before relying on it. Check the renewal date on the Subscription page; unused credits only carry over while the plan stays active, so record before cancelling.
- **16 more songs per station** (requested 2026-10-17): 32 songs in all, same genres as now, each set with a fresh theme.
  - **The Coffee Cabin (Redwood Coast):** the current 16 are about family. Theme chosen 2026-10-26: **growing up on the coast, one tradition at a time** (it combines growing up and traditions; neighbours and small-town life was the earlier suggestion). Written into REGION-SONGS.md as songs 17–32, not generated yet.
    - Lean on the favourites' sounds: Old Growth (piano ballad with falsetto) and Second Cup (syncopated, romantic acoustic pop) are yours; Pie All Day (handclaps, breezy female vocal) is your wife's. Aim for about 3–4 songs in each of those styles, with the rest spread across the existing mix (stomp-and-clap folk, dreamy indie folk, one or two instrumentals).
  - **K-JAM (LA):** your favourite is Postcard from the Pier. Suggested theme: **postcards from one summer**, where each song is a snapshot of a different place and moment: drive-in movie, roller rink, rooftop at dusk, motel pool, boardwalk arcade, late-night taco stand, the last night before summer ends. It ties into the in-game postcards. Use places like these and avoid named landmarks. Give a few more songs the Postcard sound (80s new wave, chorus guitars, synth pads, dreamy female vocals) and keep the classic-rock spread for the rest.
  - Cost: no download cap to plan around (Suno Pro allows plenty, per the user on 2026-10-18), so these can be made alongside the High Sierra songs. K-JAM's set 2 is written first (LYRICS.md, songs 17–32).
  - Pipeline (already exists): write the songs into LYRICS.md and REGION-SONGS.md, then generate in Suno. After that, run process-music.ps1 (`-Sub coffee-cabin` for the cabin songs), then whisper run-all.sh, then align-lyrics.js, then build.
  - The playlist on the LCD doubles to 32 per station; check it still scrolls well on a phone.
  - Optional: song-specific host intros. Some current Coffee Cabin scripts name songs (Pie All Day, Second Cup and others). New songs work with the generic intros, and named intros would be new ElevenLabs clips.
- **Cancel the ElevenLabs and Suno subscriptions** once retakes and region audio are done (37,307 ElevenLabs credits left as of 2026-10-05).

## Game
- **Regions (map button)**: pick a California region from a fold-out road map. The car drives there: the next open-coast stretch blends into the new region over a minute or two (sky, fog, ground colours, trees, signs). Also offer a quick fade-and-skip.
  - Build it as a `REGION` table: sky palette (SKYC), ground colours (TC), tree and prop builders, coast on or off, town and street names, district mix, outfits, ambient sound, station. Each town and coast cycle carries its own region.
  - **Rollout: build and ship one region at a time**, learning from each. Keep ElevenLabs Starter running through the regions (credits carry over); buy a Suno month only when a region needs songs (one month can cover two regions if they're close together).
    1. **Redwood Coast** (first release, with the shared foundation: region system, station system and SEEK knob, style rule, K-JAM signal-fade handoff). It keeps the ocean, so the shoreline, waves and beaches are reused. It's the biggest visual contrast for the effort (fog, giant trunks, ferns, god rays through the trees). Fog also cuts how far the game draws. Test song: *Fog Line* by the Fogbank Family Band (acoustic folk, female vocal); everything for Suno is in REGION-SONGS.md.
    2. **Big Sur**: the cheapest next step, since the cliffs and coast exist (add an arch bridge and a fog bank). It sits between LA and the redwoods on the real Highway 1, so road trip mode can run LA → Big Sur → Redwoods.
    3. **Desert and Wine Country**, together: both need the land-instead-of-ocean west side, so they share that work. Desert: Joshua trees, boulders, mid-century motels, wind turbines. Wine Country: vines, oaks, golden hills.
    4. **High Sierra winter** (this replaces the old Tahoe idea; expanded 2026-10-17). **Moved up to next on 2026-10-18, aiming for December 1, 2026; plan in WINTER-PLAN.md, songs in REGION-SONGS.md.** It builds the land-instead-of-ocean work first (the lake reuses the ocean plane).: the snow map. It needs a lake and snow (pines, granite). California's real snow is in the Sierra Nevada (Tahoe, Mammoth), east of the coast and up high, with Mt Shasta in the far north as another option. See the winter map details below.
    - Big Sur is the least work, but it's not first because it looks too much like what already exists.
  - **Winter map details** (the full version is in WINTER-PLAN.md): to feel different from the Redwood Coast, the drive itself changes, not just the scenery: you're climbing a mountain instead of following a coast.
    - **The highway becomes a mountain pass.** Switchbacks and hairpins, guardrails, rock cuts, snow sheds and drop-offs with valley views. It climbs from the foothills (oaks, dry grass) through pine forest, past the snow line, to a summit, then down to a lake. The snow appears gradually as you climb, which is the "wow" moment.
    - **Towns become lakeside ski villages.** A-frame cabins with chimney smoke, ski and rental shops, a gondola or chairlift, string lights, snowbanks along the curbs. A frozen or icy lake can reuse the shoreline code: the lake takes the ocean's place, and the ice is a material swap.
    - **Life:** snowfall (GPU points, like the bonfire smoke), skaters on the lake, sledders, snowmen, snowball fights, skiers carrying skis, a snowplow with flashing lights, a chain-control checkpoint, deer in the snow.
    - **Sky:** keep golden hour, but with pink alpenglow on the peaks and a crisp blue hour. Clear-day or snowing variants.
    - **Car gag:** the convertible stays top-down and the hosts joke about it, or the top goes up just for this region.
    - **Station: fireside jazz** (decided 2026-10-17). It sounds nothing like K-JAM's classic rock or the Cabin's acoustic folk, and it gives a cozy, holiday-ish feel without Christmas songs.
      - Sound: piano trio, upright bass, brushed drums, warm crooner and female jazz vocals; some bossa nova, some swing, a few instrumentals. Original songs (Suno), no standards.
      - Themes: first snow, the climb to the summit, putting chains on, fogged-up windows, hot cocoa, snow days, snowed in together, skating on the frozen lake, night skiing, the chairlift ride, mountain stars, cold hands and a warm heart.
      - Host: a ski-bum doing powder reports and chain-control drama (a smooth late-night jazz DJ voice is another option).
      - In December the map gets its Christmas decorations (see below).
    - **Big build:** no ocean on the west side, so it shares the land-instead-of-ocean work with Desert and Wine Country. It also needs real elevation for the climb (inlandY and mountain ridges already exist), snow ground colours, and snow-capped pines and roofs.
    - **Christmas decorations** (2026-10-17; this map only, not LA or the Redwood Coast): visuals only, no Christmas songs; the fireside jazz plays as normal.
      - On by date, December 1 to January 1, plus a Settings toggle ("Holiday decorations": auto, on, off).
      - Ski village: string lights on the A-frames and shops, wreaths on doors and lampposts, a big lit tree in the village square, a tree lot, carolers, lit-up sleds, snowmen in scarves and Santa hats.
      - Pass and lake: lit trees at the chain-control stop and the summit pull-out, a snowplow with lights, skaters in Santa hats, maybe a lit boat or a lit gondola.
      - Postcards: a "Season's Greetings from <town>" title and a holiday stamp.
      - Optional: a few holiday host bits, only if wanted.
      - Timing: it ships with the winter map. For this December, the winter map would have to jump the regions queue (ahead of Big Sur, Desert and Wine Country), so it would be the first region to build the land-instead-of-ocean work.
  - Road trip mode: the destination changes on its own every 20–30 min, so the drive stays hands-free.
  - Postcard title and stamp per region. Ambient sound per region: forest birds, desert wind.
  - No trademarked or named landmark structures (a generic arch bridge is fine; no Golden Gate lookalike).
  - **Style rule (consistent immersion across regions):**
    1. Scenery is drawn in code with the existing Builder shapes and materials (trees, buildings, people, animals). No scenery packs; they would clash with the code-drawn palms.
    2. Outside models are only for vehicles (log trucks, RVs, camper vans), are CC0 or CC-BY, and get baked onto the shared faceted material like `bake-traffic.js` does. If no model fits, draw it in code.
    3. Each region changes colours, props and fog, never the materials, lighting rules or level of detail.
  - **Hero models:** 1–2 detailed models per region for things seen up close, like the Corvette (e.g. a drive-through redwood, a vintage desert gas station, an Airstream at a campsite). Every region gets them, LA included, so none stands out. They make postcards better. Pilot it on Redwood Coast to check the mix looks right first.
  - Later, only if a matching high-quality set turns up: a detail tier inside HQ that upgrades every region at once. Not a single showcase region (it would make the others look worse by comparison).
- **Battery saver and auto quality** (idea only, not tied to the redwoods build): a friend's phone got warm after 40 min on HQ.
  - **30 fps after 2 minutes** (decided 2026-10-19): on phones and tablets, every drive runs at 60 fps for the first 2 minutes, then quietly drops to 30 for the rest of it. No setting. Desktop stays at 60.
    - Make the drop at a quiet moment (a song change, or calm mode fading the HUD) so nobody sees it happen.
    - HQ is unchanged and still only controls the effects; the drop happens with HQ on or off, so there's still only one quality setting.
    - Once per drive: coming back from another app stays at 30, and a new drive starts at 60 again.
  - HQ stays on by default (the user's call). Auto-drop only: turn HQ effects off quietly if frames struggle.
  - Redwoods drawn cheaply: instanced trees, far versions, simple trunks, and fog for forest depth.
- **Dodge mode** (an opt-in arcade mode, discussed 2026-10-17; the default cruise stays as it is): you steer sideways to avoid traffic and road hazards.
  - Why it's cheap: the car already has a sideways offset (`car.pullOff`, used for the shoulder pull-off), and traffic agents have x/z positions, so crash detection is a simple box check against nearby cars each frame.
  - Controls: arrows, or tilt as analog steering (lean further, drift faster), between the road edges with a gentle pull back toward lane centre.
  - Highway only at first. Town grids with turns and lights are fiddlier, so maybe later.
  - Hazards: slow cars and lane-changers, road-work cones, a mattress or surfboard off a truck, rockfall on the cliffs. Redwood Coast: deer and log debris.
  - Crashes stay chill: a bump, a spin-out and screen shake, no wrecks. Three dents ends the run (or endless, with points lost per crash).
  - Score: distance plus near-miss bonuses, with your best saved. Kept separate from the hands-free streak. Speed and hazard frequency ramp up slowly.
  - Optional: Rick and Dana react ("a red convertible weaving on PCH"), as new ElevenLabs clips or text-only to start.
  - To decide: highway only or town too; dents or endless; radio reactions; a title-screen toggle ("Cruise · Dodge") or a setting.
- **Night drives**: these suit the Desert region (stars).
- **Installable app (PWA)**: home-screen icon, offline play.
- **Postcards in the Claude artifact**: Save and Share need the artifact `downloads` capability. They already work on the GitHub Pages site.
- **Feedback form**: `FEEDBACK_URL` in index.html is still empty.
- **Real-phone performance test**: a town frame is about 318k triangles. Check frame rate and battery on an actual phone. Done on the user's phone, which was fine. A friend's phone got warm after 40 min on HQ (see Battery saver above).
