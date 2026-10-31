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
  - **K-JAM (LA):** set 2 shipped 2026-10-27 as 14 songs. Left: the two instrumentals, Salt Air Stomp (21) and Heat Shimmer (30), are written in LYRICS.md but not generated. Make them in Suno some other time; run-all.sh already skips them for whisper.
  - Cost: no download cap to plan around (Suno Pro allows plenty, per the user on 2026-10-18), so these can be made any time (the 16 High Sierra songs were done 2026-10-30, so they no longer queue behind them).
  - Pipeline (already exists): write the songs into LYRICS.md and REGION-SONGS.md, then generate in Suno. After that, run process-music.ps1 (`-Sub coffee-cabin` for the cabin songs), then whisper run-all.sh, then align-lyrics.js, then build.
  - The playlist on the LCD doubles to 32 per station; check it still scrolls well on a phone.
  - Optional: song-specific host intros. Some current Coffee Cabin scripts name songs (Pie All Day, Second Cup and others). New songs work with the generic intros, and named intros would be new ElevenLabs clips.
- **Cancel the ElevenLabs and Suno subscriptions** once retakes and region audio are done (37,307 ElevenLabs credits left as of 2026-10-05).

## Game
- **High Sierra polish (after it ships):** the snowmobile tracks fade over the slope's brown rock bands (darker grooves, or snow under them); lights on the far-off villages for the holidays.
- **Regions (map button)**: pick a California region from a fold-out road map. The car drives there: the next open-coast stretch blends into the new region over a minute or two (sky, fog, ground colours, trees, signs). Also offer a quick fade-and-skip.
  - Build it as a `REGION` table: sky palette (SKYC), ground colours (TC), tree and prop builders, coast on or off, town and street names, district mix, outfits, ambient sound, station. Each town and coast cycle carries its own region.
  - **Rollout: build and ship one region at a time**, learning from each. Keep ElevenLabs Starter running through the regions (credits carry over); buy a Suno month only when a region needs songs (one month can cover two regions if they're close together).
    1. **Redwood Coast** (first release, with the shared foundation: region system, station system and SEEK knob, style rule, K-JAM signal-fade handoff). It keeps the ocean, so the shoreline, waves and beaches are reused. It's the biggest visual contrast for the effort (fog, giant trunks, ferns, god rays through the trees). Fog also cuts how far the game draws. Test song: *Fog Line* by the Fogbank Family Band (acoustic folk, female vocal); everything for Suno is in REGION-SONGS.md.
    2. **Big Sur**: the cheapest next step, since the cliffs and coast exist (add an arch bridge and a fog bank). It sits between LA and the redwoods on the real Highway 1, so road trip mode can run LA → Big Sur → Redwoods.
    3. **Desert and Wine Country**, together: both need the land-instead-of-ocean west side, so they share that work. Desert: Joshua trees, boulders, mid-century motels, wind turbines. Wine Country: vines, oaks, golden hills.
    4. **High Sierra winter**: shipped 2026-10-31 (WINTER-PLAN.md). What's left of it is under High Sierra polish above.
    - Big Sur is the least work, but it's not first because it looks too much like what already exists.
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
