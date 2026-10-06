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

Acoustic folk and Americana. Like K-JAM: 14 vocal songs and 2 instrumentals, with a mix of female, male and duet vocals. Each gets a fictional band. Suno settings and lyrics go in REGION-SONGS.md.

Title ideas:

| # | Title | Notes |
|---|---|---|
| 1 | Fog Line | written (Fogbank Family Band, female) |
| 2 | Log Truck Lullaby | |
| 3 | Banana Slug Two-Step | |
| 4 | Pie All Day | |
| 5 | Elk Crossing | |
| 6 | Moss on My Mailbox | |
| 7 | Two-Lane Hymn | |
| 8 | Driftwood Fire | |
| 9 | Last Gas for 40 Miles | |
| 10 | Woodstove Waltz | |
| 11 | Sea Stack Serenade | |
| 12 | Old Growth | |
| 13 | Grey Whale Goodbye | |
| 14 | Lighthouse Keeper's Daughter | |
| 15 | Fiddlehead | instrumental |
| 16 | Morning Burn-off | instrumental |

Suno Pro's 20 downloads a month covers 16 songs plus 4 retakes.

## 3. Radio: The Clearing

**Tone:** a cozy, deadpan small-town community station. K-JAM is loud, and the joke is panic over traffic. Here nothing happens, and the hosts treat tiny things as huge news. It still has to be funny: escalation, twist endings, and callbacks to station lore.

**Station:** "88.3 The Clearing. Listener-supported, generator-powered." (working name)

**Hosts** (placeholder names):
- **Willa**: a former park ranger. Earnest and hushed; gets genuinely emotional about trees.
- **Hank**: a retired log-truck driver and volunteer fire chief. Bone-dry, few words.

**Lore to call back to:** the generator cutting out, a station dog, the one stoplight in the county, a feud with the next town over, the Bigfoot sighting log.

**Segments, mapped from K-JAM (about 150 clips):**

| K-JAM | The Clearing | Count |
|---|---|---|
| Song intros (intro + introb) | Same | 32 |
| Traffic report | Fog report ("visibility: one cow") | 6 |
| Sig Alert | Elk Alert (a herd is blocking the road) | 4 |
| Dana's shortcut | Hank's "there is one road" | 4 |
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
  4. The Clearing fades in with a station ID and a "welcome, you just drove in from the south" bit.
- **Visuals:** sky, fog, ground and trees blend over the open stretch (a minute or two).
- **The return trip** needs a mirror set: Willa and Hank say goodbye, and Rick and Dana say "welcome back". That's about 6–8 extra clips, with a few variants so repeats don't wear thin.

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

## Open

- Final names for the station and hosts.
- Voices for Willa and Hank (ElevenLabs).
- Write the 15 remaining songs.
- Write the radio script.
