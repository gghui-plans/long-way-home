# Redwood Coast: region plan

The first region after LA. Planning only; nothing is built. See FUTURE-WORK.md (Regions) for the shared foundation this depends on: the region system, the station system and SEEK knob, the style rule, and the K-JAM signal handoff.

## Decided

- Two quieter hosts, a woman and a guy.
- 16 songs, laid out like K-JAM's.
- About the same amount of script as K-JAM, with the same kinds of segments.
- The map button can switch regions any time.
- **Road trip is on by default.** After 30 minutes in a region, the car moves on to the next one by itself.
- If a focus timer is running when the 30 minutes are up, the switch waits until you're driving again (after "Drive again" or the end of the break).

## 1. Matching LA's look and quality

- **Same style rule as LA.** Scenery is drawn in code with the same materials, lighting and level of detail. Only colours, props and fog change. Postcards, hands-free, focus drive, km/h and lyrics all carry over.
- **Light:** silver-grey with sun breaking through. Low fog, with warm light coming through the canopy. Still feels like golden hour, just filtered.
- **The road alternates like LA's Highway 1:**
  - **Grove stretches:** giant trunks right at the road edge, ferns, moss, light rays through the trees, a darker canopy. Fog hides the distance, which also makes it cheaper to draw.
  - **Coast stretches:** bluffs, rocks standing in the sea, driftwood beaches. The ocean, waves and shoreline are reused from LA.
- **Signature props:** elk in meadows, log trucks (the one outside model, baked onto the shared material), a chainsaw-carving stand, vista pull-outs.
- **Hero model:** a drive-through redwood (the postcard shot).
- **Performance:** instanced trunks, simple far versions, fog for depth. (Battery saver and auto quality stay a future-work idea, not part of this build.)

## 2. Songs (16)

**Sound:** 2000s–2010s acoustic pop and indie folk, modelled on the user's "nicee" playlist: sunny strummers, foot-stomping folk, tender acoustic songs, dreamy reverb, piano ballads.

**Themes:** happy and sincere: love, family, nostalgia, hometown. No heartbreak, no comic songs; Marj and Walt carry the comedy, which keeps the sweet songs from feeling too sweet.

Like K-JAM: 14 vocal songs and 2 instrumentals (7 male, 5 female, 2 duets). Each gets a fictional band. Suno settings, lyrics and progress are in REGION-SONGS.md.

| # | Title | Feel | Vocal | About |
|---|---|---|---|---|
| 1 | Fog Line | 2000s acoustic pop-rock | F | Driving through the fog toward the people waiting for you |
| 2 | Headlights Home | Tender, fingerpicked | M | Driving home at night to your wife and daughter |
| 3 | Little Rain Boots | Sunny, breezy strum | M | Your daughter jumping puddles under the big trees |
| 4 | Pie All Day | Breezy and upbeat | F | Sunday at the diner, the family sharing one slice |
| 5 | Elk Crossing | Foot-stomping folk, gang vocals | M | Family road trip; the kid in the back counting elk |
| 6 | Second Cup | Morning love song | M | A slow Sunday morning with your wife |
| 7 | Two-Lane Hymn | Dreamy reverb folk | M | The road you've driven together for years |
| 8 | Driftwood Fire | Foot-stomping duet | Duet | A family bonfire on the beach |
| 9 | Forty Miles to You | 2000s singalong pop-rock | M | Counting down the miles home |
| 10 | Woodstove Waltz | Tender acoustic | Duet | Dancing in the kitchen with your wife |
| 11 | Sea Stack Serenade | Dreamy, nostalgic | F | Back where you fell in love |
| 12 | Flannel Weather | Foot-stomping folk | F | Sweater season in your hometown, everyone home |
| 13 | Old Growth | Piano ballad | M | To your daughter: grow tall, I'll be your roots |
| 14 | Porch Light | Warm singer-songwriter | F | Someone always leaves the light on |
| 15 | Fiddlehead | Fingerpicked | Instrumental | |
| 16 | Morning Burn-off | Ambient guitar | Instrumental | Fog lifting |

Suno Pro's 20 downloads a month covers 16 songs plus 4 retakes.

## 3. Radio: The Coffee Cabin

**Tone:** a cozy, deadpan small-town community station. K-JAM is loud, and the joke is panic over traffic. Here nothing happens, and the hosts treat tiny things as huge news. It still has to be funny: escalation, twist endings, and callbacks to station lore.

**Station:** "89.3, The Coffee Cabin. Best served with a cozy sweater and hot coffee."

**Hosts:** Marj and Walt, married 41 years, broadcasting from their cabin. Gentle bickering; she corrects every story he tells.
- **Marj**: warm, sharp, keeps the show running. Gets emotional about trees and her garden.
- **Walt**: bone-dry, few words, tall tales (he claims he invented fog). Retired log-truck driver.

**Lore to call back to:** the percolator, the generator cutting out, Biscuit the station dog, the coat-hanger antenna, a pie feud with Gull Harbor, the Bigfoot sighting log, Lou the banana slug, their daughter Becky calling in, Rick and Dana calling from L.A. Full list in COFFEE-CABIN-SCRIPT.md.

**Segments, mapped from K-JAM (about 150 clips):**

| K-JAM | The Coffee Cabin | Count |
|---|---|---|
| Song intros (intro + introb) | Same | 32 |
| Traffic report | Fog report ("visibility: one cow") | 6 |
| Sig Alert | Elk Alert (a herd is blocking the road) | 4 |
| Dana's shortcut | Walt's "there is one road" | 4 |
| Ads | Community bulletin board (lost goat, potluck, firewood for sale) | 4 |
| Fast Lane Facts | Nature Notes (real redwood facts) | 16 |
| Callers | Locals: the slug-race organizer, the lighthouse keeper, a lost LA tourist, the Bigfoot guy, and others | 13 |
| Town names | Redwood town names | 12 |
| Station IDs, welcome, clock | Same | ~8 |
| Reactions (town, coast, steer, speed, postcard, pier→harbour) | Same set, redone | ~15 |
| Milestones, record, back, focus, request | Same set, redone | ~20 |

Rick and Dana can still "call in" from LA now and then.

## 4. Ambient sound (music off)

Crossfades by stretch, the same way the ocean sound works now. The sourcing workflow is in NATURE-SOURCES.md.

- **Grove:** wind high in the canopy, creaking trunks, a creek, fog drip, birds (a thrush's whistle, jays, a raven croak, a woodpecker). A rare elk bugle.
- **Coast:** the existing ocean sound, a distant foghorn, sea lions barking (instead of gulls).
- **Town:** quieter forest sound, a distant dog, a screen door, a sawmill hum.

## 5. Transition

- **Map button:** switch regions any time.
- **Road trip** (on by default, a single "Road trip: On · Off" line in the map panel): after 30 minutes in a region, head to the next one. With two regions this is LA → Redwoods → LA. Once Big Sur exists, it follows the real coast order (LA → Big Sur → Redwoods).
- **When it happens:**
  - The switch waits for the next open-coast stretch, never mid-town.
  - It waits for a focus session to end, including the pull-over and break.
  - The hands-free streak carries on through the switch.
- **The handoff:**
  1. K-JAM crackles and drops out over about 60–90 seconds, cutting into the current song.
  2. Rick and Dana say goodbye through the static. Rick gets cut off mid-sentence ("Dana, if I don't make it—").
  3. A few seconds of tuning noise.
  4. The Coffee Cabin fades in with a station ID and a "welcome, you just drove in from the south" bit.
- **Visuals:** sky, fog, ground and trees blend over the open stretch (a minute or two).
- **The return trip** needs a mirror set: Marj and Walt say goodbye, and Rick and Dana say "welcome back". That's about 6–8 extra clips, with a few variants so repeats don't wear thin.

## 6. Towns

Small logging and fishing towns, with shorter grids and longer forest stretches between them than in LA.

- **Districts:**
  - a main street with wooden false-front shops (diner, general store, bait shop)
  - Victorian houses
  - a harbour with fishing boats (in place of LA's pier)
  - a lumber mill with log piles and a teepee burner
  - an RV park or campground
- **People:** flannel, rain jackets, beanies, hiking gear.
- **Town names** (fictional, 12 to match LA): Fern Hollow, Cedar Landing, Mossbridge, Driftwood Bay, Gull Harbor, Elkhorn Flat, Sawdust Junction, Tidewater, Bramble Point, Lantern Cove, Hemlock, Old Mill.
- **Street names:** Spruce St, Alder Ave, Madrone Dr, Sitka St, Huckleberry Ln, Mill St, Harbor Rd, Grange Rd, Tanoak Way, Salal St, Hemlock Ave, Fir Crest Dr.
- **Between towns:** honey and fruit stands, the carving stand, campgrounds, vista pull-outs.

## 7. More forest, less coast (agreed and built 2026-10-07)

Why: the groves are what makes this region look like nowhere in LA, while the coast stretches overlap most with the original map. It's also true to life: the famous redwood drives (like Avenue of the Giants) run inland along river valleys, and the ocean only shows now and then.

**Built:** groves on 81% of the open road; second growth, meadows (split-rail fence, pull-outs, the elk graze there), creek crossings (a channel, glossy water, rocks, alders, a short bridge); forest towns alternate with harbour towns (forest edge to the west, the motor lodge / general store and gas station / carving yard, log cabins, giants between the buildings). Worst grove frame about 557k triangles, forest town about 493k (LA town about 612k). The drive-through tree stays with batch 5.

**The open road**
- Groves take about **80%** of the open road (now about 60%).
- The coast becomes a reveal: every so often the forest opens onto a bluff and a sea view for 20–30 seconds, then closes again.

**Forest variety** (so 80% never feels like the same grove on repeat)
- **Cathedral groves:** the giants, dark and foggy, with light shafts. What exists now.
- **Second-growth forest:** younger, denser and brighter, with more firs and ferns, smaller trunks.
- **Meadows and clearings:** open grass where the elk graze, a split-rail fence, a pull-out.
- **Creek crossings:** a short bridge over a rocky stream, ferns and alders on the banks.
- **The drive-through tree** (the hero model from batch 5), now and then on a grove stretch.

**Forest towns** (about half the redwood towns; the other half stay harbour towns, so they alternate)
- **Trees:** giant redwoods in the gaps between buildings and along the sidewalks, never in the roads. A couple per lot, so you drive down streets lined with trunks and the buildings sit at their feet. Most of the canopy is above the camera, so in-town redwoods get simpler tops.
- **Buildings:** smaller and woodier. Log cabins and lodges, a couple of A-frames, a general store, a gas station, a motor lodge with a glowing VACANCY sign, a chainsaw-carving shop with bears out front. Mossy roofs, woodpiles, chimney smoke.
- **Light:** darker and cosier under the canopy, light shafts coming through, warm porch lights and lit windows glowing (the same glow LA uses for neon). The warm light is what keeps it inviting rather than gloomy.
- **Layout:** no beach or harbour; the west side becomes forest, maybe a creek with a little bridge. The mill, campgrounds and forest lots stay.

**Watch**
- **Performance:** keep forest towns under LA's busiest town frame (about 612k triangles; redwood towns are about 555k now). Simpler in-town crowns, fewer but bigger trunks, fog hiding the distance. Measure before and after.
- **Readability:** a dark town can turn murky on a phone; the warm lights and brighter street surfaces matter. Check on the user's phone.
- **Radio:** a few bits assume the coast (harbour, Gus at the lighthouse, sea lions, coastal fog banks). With about 20% coast and the harbour towns kept, they still fit. The general store and Main Street town lines suit forest towns as is.
- **The LA handover** still blends across a coast stretch; you come out of LA's coast straight into the trees.

## Build batches

1. **Foundation (code, LA only):** a station table (K-JAM becomes entry #1) and a region table (LA becomes entry #1). LA looks and sounds exactly the same afterward. **Done 2026-10-06 on the `redwoods` branch.** The region table holds sky, terrain colours, town and street names, ambient sounds and its station; trees, props, districts and outfits get added in batch 3, when the redwood versions exist. The station table holds name, frequency, songs, bits, segment rotation, host names and its own audio folder (`dir`); `setStation()` switches stations.
2. **Writing (runs alongside batch 1):** station and host names, the 15 remaining songs, the radio script, and the farewell and welcome-back clips. The user then generates the audio. Buy the Suno month only once all 16 lyrics are final.
3. **Redwood world (code):** grove and coast stretches, trunks, ferns, fog, towns, districts, outfits, signs and names. **Done 2026-10-06 on the `redwoods` branch.** Reach it with `#redwoods` on the address until batch 4's road trip exists.
   - **Light and air:** silver-grey sky with a warm glow towards the sun, softer sun disc, thicker haze (2.6 km on high quality), cooler fill light, grey-green sea. `applyLook(a,b,t)` blends two regions' looks, ready for the batch 4 handover.
   - **Open road:** each coast stretch alternates groves (the forest floor runs out to the bluff edge, giants right at the road, ferns, sorrel, nurse logs, stumps, light shafts, low fog between the trunks) with open coast (rocky bluffs, more and taller sea stacks, sea lions, driftwood beaches, spruce, coyote brush, lupine, wind-bent cypress). The HUD reads US-101.
   - **Towns:** harbour front (weathered sheds, crab pots, buoys), wooden main street (false fronts, covered boardwalks, a diner with a pie on the roof), Victorian houses (turrets, porches, picket fences, hydrangeas), the mill (one teepee burner per town, log decks), campgrounds, patches of forest, firs and maples as street trees. The pier becomes a harbour (wharf, gangway, floating dock, fishing boats on the swell, breakwater).
   - **People and wildlife:** flannel, rain jackets, jeans and beanies; an elk herd grazing in the coastal meadows.
   - **Polish pass (same day):** low fog banks on the water along the open coast, groves at about 60% of the open road, moss mats and bigger, more varied ferns, softer redwood crowns, wilder firs, and main street rebuilt with shops on the sidewalk facing each other across the street (parallel parking at the curbs, lots out back).
   - **Cost:** grove frames are about 490k triangles (LA highway about 424k); redwood towns about 555k (LA towns about 612k).
   - **Still to come:** the drive-through tree and log truck (hero models, batch 5), forest ambient sounds (batch 5), the region's postcard stamp (batch 5), and the Coffee Cabin on the radio (batches 4 and 5; K-JAM plays up north for now).
4. **Map and handoff (code):** the map button, the road trip toggle, the 30-minute timer, the focus hold, the scenery blend, the radio static and the return trip. Uses text-to-speech placeholders until the real clips arrive. **Done 2026-10-07 on the `redwoods` branch.**
   - **Map:** a "Drive to" row (Los Angeles · Redwood Coast) and a Road trip checkbox (on by default), with a note saying how far off the new region begins, or when the road trip moves on next.
   - **How a switch works:** the car's own stretch stays as it is; on both sides, from the next open-coast stretch at least 7 rows away (with 10+ rows of it left), the new region begins, and that stretch blends: sky, haze and light, ground colours, coast shape and groves fade across it, and the scenery switches over row by row. So you drive there whichever way you leave town. Once the car is fully in, the new region becomes the base.
   - **Road trip:** every 30 minutes of driving (not counting breaks or the postcard screen) the car heads for the other region. If it comes due during a focus session, it waits for the drive after the break (or the end of focus mode).
   - **Radio:** at the halfway point of the blend, the song fades, the old station says goodbye through rising static and gets cut off, the dial hisses (TUNING), and the new station comes in with its arrival bit (Marj's first-time welcome the first time). The way back mirrors it. With the radio off, it just comes back on the new station.
   - **The Coffee Cabin** is now a full station: all 160 scripted clips and the 16 songs' titles and intros, generated from the script and song files. Until the recordings arrive, the device voices read it (Marj and Walt have their own voice settings) and the songs fall back to the synth band; its files will live in `audio/voice/coffee-cabin/` and `audio/music/coffee-cabin/`.
5. **Audio and polish:** drop in the songs and clips (the music and voice processing scripts, plus whisper for the lyrics), ambient sound per stretch, hero models (the drive-through tree and the log truck), and the region's postcard title and stamp. **In progress 2026-10-07.**
   - **Songs:** all 16 in `docs/audio/music/coffee-cabin/`, levelled and faded like K-JAM's (`process-music.ps1 -Sub coffee-cabin`), lyrics timed with whisper (`align-lyrics.js coffee-cabin`).
   - **Voices:** `process-coffee-voices.js` times every clip from the spoken words, snaps line starts to pauses, and applies the script's notes: phone line on callers (and Walt on the porch phone), quieter for *(in the background)*, muffled with an echo for *(outside)*. Rick and Dana's goodbyes and welcome-backs go with K-JAM's files.
   - **The drive-through tree:** a 96 m giant straddling the road on about half the open stretches, deep in a grove, with a carved tunnel tall enough for a log truck. The tree bits ("Duck, hon!") cue as it comes up.
   - **Log trucks:** long-hood cab, chrome stacks, three bunks of logs; open road up north only (about 1 in 12 vehicles).
   - **Radio-off sound:** the sea fades behind the trees, a babbling creek near crossings, varied-thrush whistles with a forest echo, a woodpecker now and then, a distant foghorn on the coast. Real recordings take over each layer when they exist (forest, canopy, creek, creaks, thrush, jay, raven, woodpecker, elk, foghorn, sea lions; sea lions replace LA's gulls). The radio-off tip says "forest sounds".
   - **Postcards:** the Coffee Cabin stamp (two redwoods, a lit cabin, chimney smoke), amber-to-rust title letters, and the caption "Sweater on, coffee hot, take it slow."
   - **Still to come:** the forest recordings (Freesound downloads), then a final phone drive.

## Shipping

- **Ship once, when it's all done.** Nothing goes live early.
- All five batches go on a `redwoods` branch. `main` stays exactly what's live; fixes to K-JAM or LA go on `main` and ship as usual, and get merged into `redwoods` now and then.
- Test locally with `serve.js`, on a phone over wifi too. A local-only `#redwoods` URL shortcut jumps straight to the region for testing.
- To release: merge `redwoods` into `main`, then run `build.ps1`. The Pages site and the artifact update together.

## Open


- Voices for Marj and Walt (ElevenLabs).
- All 16 songs are written; next is generating them in Suno.
- Write the radio script (all 6 batches drafted in COFFEE-CABIN-SCRIPT.md, 163 clips; needs review, then voices).
