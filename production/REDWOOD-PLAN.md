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

**Lore to call back to:** the generator cutting out, a station dog, the one stoplight in the county, a feud with the next town over, the Bigfoot sighting log.

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

## Build batches

1. **Foundation (code, LA only):** a station table (K-JAM becomes entry #1) and a region table (LA becomes entry #1). LA looks and sounds exactly the same afterward.
2. **Writing (runs alongside batch 1):** station and host names, the 15 remaining songs, the radio script, and the farewell and welcome-back clips. The user then generates the audio. Buy the Suno month only once all 16 lyrics are final.
3. **Redwood world (code):** grove and coast stretches, trunks, ferns, fog, towns, districts, outfits, signs and names.
4. **Map and handoff (code):** the map button, the road trip toggle, the 30-minute timer, the focus hold, the scenery blend, the radio static and the return trip. Uses text-to-speech placeholders until the real clips arrive.
5. **Audio and polish:** drop in the songs and clips (the music and voice processing scripts, plus whisper for the lyrics), ambient sound per stretch, hero models (the drive-through tree and the log truck), and the region's postcard title and stamp.

## Shipping

- **Ship once, when it's all done.** Nothing goes live early.
- All five batches go on a `redwoods` branch. `main` stays exactly what's live; fixes to K-JAM or LA go on `main` and ship as usual, and get merged into `redwoods` now and then.
- Test locally with `serve.js`, on a phone over wifi too. A local-only `#redwoods` URL shortcut jumps straight to the region for testing.
- To release: merge `redwoods` into `main`, then run `build.ps1`. The Pages site and the artifact update together.

## Open


- Voices for Marj and Walt (ElevenLabs).
- Write songs 11–16 (1–10 are written).
- Write the radio script.
