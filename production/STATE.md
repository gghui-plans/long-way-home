# State: what's in progress

Only work that has started and isn't finished. The backlog is FUTURE-WORK.md, and finished work is in git. Update this file before every commit. When a task ships, shrink it to one line under "Recently finished".

Last updated: 2026-10-27

## Active

### K-JAM set 2: 16 more songs (17–32)

- **Worked on:**
  - 2026-10-18: wrote 16 songs on the theme "Postcards from one summer" (LYRICS.md, songs 17–32).
  - 2026-10-19: rewrote them all after the first Suno takes.
- **Decided:**
  - The theme is one LA summer, a place per song, with no named landmarks. **Why:** it ties into the in-game postcards and the user's favourite song, Postcard from the Pier.
  - Hookier choruses, with an [Intro] on every song. **Why:** the first takes weren't catchy.
  - Each song gets its own chorus shape. **Why:** the catchier versions all followed one formula and felt samey.
  - No Motown; the out-of-place genres went back to the classic-rock palette. **Why:** the user doesn't like the Motown sound.
  - Couples Skate and Ice Cream Truck keep their v2 lyrics, which the user liked.
- **Now:** the user is generating all 16 in Suno, starting from 17. Which ones are done isn't tracked here; ask.
- **Left:**
  1. The user finishes the Suno songs, then Claude checks and processes the MP3s (process-music, whisper, align-lyrics).
  2. Write a SONGS entry for each song, plus two host intros (intro and introb, so 32 clips). The user approves them, then they go to ElevenLabs.
  3. On "build": wire them in, check that the playlist scrolls well with 32 songs on a phone, then build and push.

### Coffee Cabin set 2: 16 more songs (17–32)

- **Worked on:** 2026-10-26: wrote all 16 into REGION-SONGS.md and ran the chorus check.
- **Decided (2026-10-26):**
  - Theme: "growing up on the coast, one tradition at a time". **Why:** the user liked both growing up and traditions, so they're combined. It replaced the earlier suggestion of neighbours and small-town life.
  - Sounds: 3 songs each in the Old Growth, Second Cup and Pie All Day sounds (the user's and their wife's favourites), plus 4 stomp-and-clap, 1 dreamy indie and 2 instrumentals.
  - The Fourth of July Parade became Banana Slug Derby, so the set doesn't have two parades. Fair Ribbon became Red Ribbon to match its chorus.
  - The chorus check's fixes:
    - no title sung twice in a line (Berry Season, Red Ribbon);
    - Training Wheels now sings its title;
    - Red Ribbon's chorus opens with "Little red ribbon".
- **Left:**
  1. The user reviews the lyrics.
  2. The user makes them in Suno, then Claude runs `process-music.ps1 -Sub coffee-cabin`, whisper and `align-lyrics.js coffee-cabin`.
  3. On "build": add the CC_SONGS entries. Song-specific Marj and Walt intros are optional.

### High Sierra region (target: live Dec 1)

- **Worked on:** the plan is in WINTER-PLAN.md, and 16 Fireside jazz songs are written in REGION-SONGS.md (not generated).
- **Decided:** fireside jazz, no Christmas on the station (decorations only, switched on by date). Suno downloads aren't capped (2026-10-18).
- **Behind schedule:** WINTER-PLAN's timeline had code batch 1 in the week of Oct 19–25. Lyrics are due Nov 2 and songs Nov 3.
- **Batch 1, started 2026-10-27** on the `claude/winter-35bb4b` branch (stands in for `winter`; not merged, not pushed):
  - Region code works for any number of regions. Each region says which scenery it builds from (`kit`), so "how much redwood country" now means "how much redwood-kit country" (`regW(z, test)`), and the by-name checks became region fields (`quiet` words for radio-off, `tagline`, postcard colours `pc`).
  - Third region `sierra` (High Sierra, CA-89), with `#sierra` in the address. Stand-ins until batch 2: the Redwood Coast's scenery and the Coffee Cabin on the radio, a colder sky with pink alpenglow, the village and street names from the plan.
  - Snow: one setting per region (`look.snow`, 0 to 1) on the shared material and the far scenery. Anything facing up turns white with a little patchiness; the road and its yellow lines stay clear. It follows the road trip's blend along the road, so the snow line sits on the road. On (1) in the Sierra, off in LA and the Redwood Coast.
  - **Lake test (lake follows the car):** built behind one setting (`look.lake`, metres of drop at the summit; 150 in the Sierra). West of the road the land falls away, deepest halfway between villages; the lake (the sea plane) sits at the car's drop. Surf and sea stacks are off on the lake.
    - **What I saw:** it works mechanically: no seams or floating land at the spots tested, and the lake moves smoothly. But on its own the height doesn't read. The road camera is low and looks along the road, so a steep slope is hidden behind its own edge and a gentle one is squashed into a thin snowy band, and the lake looks like a sea at road level (the horizon is at eye level however high you are). Snow makes it worse: the slope is one flat white.
    - **What made it read:** a far shore. A quick ridge across the lake (about 1.5 km out, its foot below the lowest lake) shows the water sitting well below eye level at the summit and at the horizon near villages. At 2.5–3.5 km the haze hid it completely. Batch 2 turned it into snowy peaks.
    - **Verdict:** keep the lake-follows-the-car approach, but only with a far shore and a visible near slope (trees stepping down with their tops below the road, rock bands, a guardrail). Not tried: the snowy-valley-floor fallback (it would need the same far side to read). Not checked yet: whether the shoreline creeping along the slope shows in motion (the lake moves up to about 5 m a second at full speed); look on the phone.
  - Road trip LA → Sierra checked: palms give way to pines, the snow fades in along the road, the sign and radio switch at the middle of the blend, no errors. The test ridge rises through the blend instead of popping up over LA's sea.
  - LA and the Redwood Coast checked pixel-for-pixel against the code from before the winter work after every commit (three spots each: open road, mid-stretch, rolling into a town). The test pages are in `production/raw/wt/` (not committed): `harness.html` (fixed random seed, fake clock and timers, ?region= ?run= ?u= ?view=), `regress.html?tag=x` (both regions against the references), `diff.html`. Run them in the front browser tab, one at a time.
- **Batch 2 (the world), started 2026-10-27,** same branch. The Sierra still builds on the Redwood Coast's scenery, with `alpine` swaps on top:
  - Open road: tall snow-holding pines (Jeffrey pine / red fir) in place of the giant redwoods and young firs; granite boulders and low shrubs in place of ferns, moss and sorrel; no lupine, cypress, surfers or drive-through tree. Far away: narrow dark pines, granite ridges, snowfields up top. The mountains inland are 70% taller (`look.peaks`), and granite walls rise right above the road on the uphill side, highest at the summit (`look.wall`, 28 m).
  - The road in winter: plowed snowbanks along both edges, orange-tipped snow poles, a guardrail on the drop side, and the asphalt a little glossier (wet) where it snows.
  - Villages: pines and low shrubs in place of the redwoods, firs and ferns (yards, the woods, between buildings, the forest edge, and far away). Buildings are still the Redwood Coast's (cabins, lodge, Victorians, harbour as the marina).
  - The lake's far shore is now snowy peaks (steep up top), with a pink alpenglow on the high snow far away. The road's snowbanks and guardrail stop where the road runs into town.
  - **Gotcha for later work:** every new three.js geometry, material or mesh draws a random id from `Math.random`. Building Sierra-only geometry at startup shifts the random numbers LA and the Redwood Coast use for people and traffic. Build region-only things on first use (like `PINES()`), or only inside region-gated code.
- **Defaults picked (easy to change, not decided):** road trip order LA → Redwood Coast → High Sierra → LA (the order of REGIONS); title line "Chains on, cocoa hot, take it slow."; radio-off words "mountain sounds"; the map buttons don't list the Sierra yet (batch 5).
- **Feedback, decided and built 2026-10-27** (all 11 items; commits 064d166..the wind commit): the user liked the road but said it "just looks like Redwood with snow" and wants to feel higher up in the mountains (reference photos: a guardrail with the drop right behind it and a sea of clouds below; a steep rock-and-snow face beside the road). To build, in this order:
  1. Above the treeline at the top: trees thin out as you climb, bare rock and snow near the summit, forest only on the lower slopes by the villages. **Built** (`hiAt`, `treeAt`), with 2, 4 and 11.
  2. The drop starts right at the guardrail.
  3. A sea of clouds below at the summit with far peaks poking through; the lake shows lower down near the villages. **Built** (`updateAlpine`, three cloud layers), with 8 and 10.
  4. A steep rock-and-snow face right beside the road on the uphill side, rock showing through.
  5. Tighter S-bends near the summit (true hairpins aren't possible) and switchbacks drawn on the slope below, with a few headlights crawling up. **Built** (`look.bends`, `switchbacks(k)`): five legs and hairpins below each summit, the lowest disappearing into the cloud. They show best on the bends ahead; straight down they're out of the camera's view. The Sierra's slope mesh now runs straight west so the bends don't skew it.
  6. Elevation on the road sign ("CA-89 NORTH · 7,240 FT"), rising and falling with the climb. **Built** (region `elev`: 6,230 ft at the lake, 8,150 at the summit). Check it fits the sign on a phone.
  7. A summit pull-out: elevation sign, a couple of parked cars, people taking photos at the rail. **Built:** a plowed shelf by the drop at each summit with its own guardrail, the SUMMIT / ELEV sign, up to 3 parked cars, 5 people at the rail. The uphill face is now laid out straight too, so its rocks sit on it.
  8. Clouds at road level near the top (drive through a wisp, come out above the cloud sea). **Built:** wisps drift across the road and every so often the haze closes right in.
  9. Wind up high: snow blowing off the ridges and across the road at the summit, wind noise rising as you climb. **Built:** grains of snow streaming across the road, plumes off the ridge above, wind up to 2.6 times louder at the top (radio off). Only judged in stills so far.
  10. A tiny village far below by the lake (rooftops and lights). **Built:** one per pass on a point in the lake, a quarter of the way up; hidden once the cloud closes over the lake. The forest towns' woods no longer run 1.4 km out over the lake.
  11. Rock cuts: blasted rock walls where the road is carved in, with icicles, and a snow shed on one stretch. **Built:** two cuts per pass, the first roofed as a snow shed. The steep uphill face is snow-plastered with granite bands and dark rock outcrops; telephone poles stop above the treeline.
  - Not picked: a deeper blue sky at the top, birds circling below, radio crackle at the summit.
- **Phone feedback, built 2026-10-27** (the user drove it on their phone: smooth; notes: towns lose the height behind trees, the lake looks too close, the clouds don't read, a strange wall of fuzz, towns feel like the Redwoods because of the trees):
  1. The fuzz: rainbow static in the soft cloud and snow-grain images. Most likely the phone browser adding noise to canvas images (anti-fingerprinting). The Sierra's soft images are now written straight into pixels (`softTex`), no canvas. **Not confirmed on the phone yet.**
  2. Clouds: the flat cloud sheet is gone. Puffy cloud banks (solid shapes, lit tops, grey-blue undersides) sit over each summit with gaps down to the lake; they rise out of the lake as you climb and sink back into it.
  3. The lake: 420 m below the summit (was 150), the slope 8 times wider so the water starts about 600 m out, the top of the drop steeper, the water darker and less of a mirror (`look.oceanEnv`). Forest on the slope far below the road (the treeline is a height), in dark grey-green so the snow skips it and it shows from above. Near the summit the camera rises about 11 m and turns a little toward the drop, so you look down over the rail (a drone-ish shot; nothing changes below about a third of the way up).
  4. The villages sit on a bench above the lake: the lake never comes higher than 84 m below the road (`dropAt`). So every Sierra town is a forest town now (no harbour towns: a harbour can't sit up on a bench). The west edge of town is a short strip of low firs and granite, then a cliff down to the lake. Roadside trees on the drop side stand further down the slope, their tops below the road. Elevation in the villages now 6,480 ft.
  5. Trees: new Sierra conifers, fat and full-skirted red firs (6, 9 and 13 m, branches to the snow) and a tall skinny lodgepole (19 m), in place of the tall bare-trunked spires. They grow in clumps with open snow between. Far away: fat dark firs at about the same height.
  - Also: the road sign is shorter in the Sierra ("CA-89 N · 8,150 FT").
- **Batch "the view from the top", built 2026-10-27** (from the user's second phone drive: clouds were round balls and too sparse, a glitch at the summit, the drop flat brown; plus the full visual review):
  1. **Cloud sea v2.** 60 banks over each summit, each a cluster of 9–16 flattened spheres of varied size at its own height (the dome-on-a-disc look is gone), far ones fading into the haze, gaps down to the lake. Tried and dropped: a flat haze sheet under them (it read as a floor with a hard edge).
  2. **Switchbacks.** Each is now a ribbon draped on the slope: a level deck, a cut face into the hill above, a snowy embankment below, a snowbank along the drop side. The "glitch" was the old flat slabs stair-stepping down the steeper slope.
  3. **The drop.** Two extra points per stretch (20 across instead of 8, same count in every row), ledges and gullies, colours by slope (steep faces bare granite, ledges snow), dark avalanche chutes, dark outcrops down the slope. The beige came from pale snow colours on steep faces (no snow lands there) in the sunset light.
  4. **The far shore.** Seven points instead of three: serrated ridgelines, snow between granite bands, a band of forest down near the water.
  5. **The lake.** An ice rim where the slope meets the water, two snowy islands with firs per pass (they ride the lake's level like the village). Not done: lighter shallows and faint reflections of the peaks (the lake only reflects the sky; the shallows would need a second water plane).
  6. **Snowbanks.** Irregular plow berms of varied lumps with dirty chunks, a slush line along both shoulders, tyre tracks in the pull-out gravel.
  7. **Summit light.** The sky overhead goes a deeper blue and the sun drops (shadows about 1.8× longer) as the camera rises.
  8. **Camera lift.** Only on straight stretches now (`liftAt`): it eases off in the tight bends.
  - Also: the pull-out shelf is 42 m wide instead of 76 (the 8× stretch had made it a huge flat-topped block). From the lifted camera it still reads as a bluff with a sheer rock face below the viewpoint; could round the edge later. Boulders above the treeline are mid grey and smaller (they looked like white marshmallows from above).
  - **Gotcha:** every row of a far chunk and of a terrain strip must push the same number of points. The lake profile adds points, so the forest-town rows add the same number (`LAKE_ON`). Mismatched counts give broken triangles with NaN normals, and the bloom pass spreads them into big black blocks on screen.
  - Not checked on the phone yet (frame rate with 60 cloud banks of ~190k vertices in one draw call).
- **Decided 2026-10-27:** keep the summit camera rise. Harbour towns gone from the Sierra (every village a forest town on the bench): OK. So the plan's boat dock, marina and paddle-wheeler are dropped (changed from WINTER-PLAN section 4), and "lakeside villages" and real lake shores at the villages are off too.
- **Batch "the villages", started 2026-10-27** (the rest of batch 2; the user said "build"):
  1. **Main street:** chalets (plaster or wood below, timber above, steep dark roofs with deep eaves, a wooden gable end, balconies) and A-frames with a lit glass front; ski shop (skis in a rack, crossed skis on the blade sign), rental shop (snowboards), bakery (a golden pretzel), fondue place (a pot, lanterns), cocoa shop (a mug). Every window lit (the neon glow), string lights along the street, lanterns, snow piled at the curb, people in puffy jackets, some carrying skis. Far away: chalets with steep roofs.
  2. **Cabins:** about a third are A-frames (lit glass gable, stovepipe, deck); dark steeper roofs, icicles along the eaves, smoke from most chimneys, snowmen in the yards. Firs in the yards in place of alders and maples.
  3. **People:** puffy jackets in bright colours, ski pants or jeans, beanies on most, goggles now and then (`AL_STYLE`, set wherever `RW_STYLE` is).
  4. **The rink** (one block in from the highway, second row): ice inside white boards, string lights crossing over it, a warming hut, two rings of skaters going round (the inner one the other way; `turners`). The ice is in the glow layer so the snow shader leaves it blue.
  5. **The sledding hill** (inland edge, second row): a snow mound, sleds coming down, people at the top, someone towing a sled up, a fence.
  6. **The chain installer** at the gas station: a car by the pumps, someone in the snow fitting chains, chains on a rack, a yellow CHAINS / INSTALLED HERE board, cones.
  7. **The ski area's lot** in place of the mill (column 6): parked cars, a shuttle bus, a ski rack, people carrying skis.
  8. **Welcome signs:** a wooden board on log posts at each end of a village ("SNOWBERRY / ELEV 6,480 FT"). Words on boards come from `boardTex` (a canvas on a solid background, cached; no soft edges, so the phone's canvas noise shouldn't show).
  9. **The ski hill** on the mountainside just east of each village (`skiLayout`, `skiHill`; in the far layer, so it shows from the road and from town): three runs cut through a thick forest of plain dark spires (cheap: about 1,200 per village, a dozen triangles each), orange poles along the run edges, a big A-frame base lodge with its glass gable lit, a chairlift (T-shaped towers, two cables, huts at each end). Moving (`ALP.ski`, instanced, near the village only): chairs with two riders each, 30 skiers coming down in S-turns.
  10. **The gondola** in place of the Ferris wheels: a station up on legs in the ski lot (the mill's column, second row), towers up the hill, a top station; red, blue and orange cabins going up one cable and down the other, high enough to clear the cabins and chalets it crosses.
  - The ski hill stands on `hillY`: the land as drawn (the near strips' grid or the far chunks', whichever is higher, using the mesh's own two triangles per cell).
  - **Testing note:** the far towns are built after all the far chunks, one per frame, so a harness shot needs about 120 frames before the ski hill shows. `production/raw/wt/vB.html` is a copy with `RAD=11`, so the whole village is built in detail around the highway (for shots only).
  - Each Sierra far town is about 58k vertices with the ski hill (no broken normals). **Frame rate on the phone not checked.**
  - Already there from earlier: the street and village names from the plan, pines thinning toward the summit (`treeAt`), the motor lodge with its VACANCY sign.
- **Later (its own batch):** life on the road (a plow truck, a snowmobile track, deer low down, ravens up high, the chain-up area), varied weather (a squall, then sun breaks).
- **Batch 2 is done** (except the bits dropped with the harbour towns). Next: batches 3 (life and weather), 5 (map and handoff) and 6 (audio and polish).
- **Not checked yet:** on the phone: c5586ba (frame rate with the 60 cloud banks; is the static gone?) and the villages batch (frame rate with the ski hill, the gondola and skaters; the signs' words); the Redwood Coast to Sierra road trip since the villages. Before that: the phone again after the feedback build (the static gone? frame rate with the denser forest below and the cloud banks; the shorter sign), the camera rise in motion (how it feels on the bends), the cloud banks in motion, the Redwood Coast → Sierra handover. Checked on the phone 2026-10-27 before that build: smooth.
- **Phone preview:** the "winter-phone" preview serves this worktree to the wifi on port 8768 (http://192.168.2.13:8768/#sierra). The launch.json entry is only in this worktree, not committed.
- **Questions for the user:** the open items (station and host names, voices, top up or down in snow, snowfall pattern, loop order); is the Coffee Cabin OK as the radio stand-in until the Fireside exists; how glossy should the wet road be.

## Waiting for "build"

These are decided but not built. Details are in FUTURE-WORK.md.
- 30 fps after 2 minutes on phones and tablets (decided 2026-10-19). FUTURE-WORK has it under Battery saver.

## Loose ends

- The Claude artifact copy was last republished 2026-10-11 (v40), so it's behind the live site.
- Cancel the ElevenLabs and Suno subscriptions once the region audio is done.

## Recently finished

- 2026-10-26: CLAUDE.md, WORKFLOW.md and STATE.md set up. The song and plan files that had never been committed are now in git too.
- 2026-10-18: Marj and Walt's game explainer when a drive starts in the redwoods (d6ccd00).
- 2026-10-11: added the game to the iPhone home screen as an app, with its own icon and an install button (c46e5e0, 07a8434, e16e475).
- 2026-10-10: music mode replaces the host voices switch (a4a414b).
