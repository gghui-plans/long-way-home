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
- **Feedback, decided 2026-10-27 (waiting for "build"):** the user liked the road but said it "just looks like Redwood with snow" and wants to feel higher up in the mountains (reference photos: a guardrail with the drop right behind it and a sea of clouds below; a steep rock-and-snow face beside the road). To build, in this order:
  1. Above the treeline at the top: trees thin out as you climb, bare rock and snow near the summit, forest only on the lower slopes by the villages.
  2. The drop starts right at the guardrail.
  3. A sea of clouds below at the summit with far peaks poking through; the lake shows lower down near the villages.
  4. A steep rock-and-snow face right beside the road on the uphill side, rock showing through.
  5. Tighter S-bends near the summit (true hairpins aren't possible) and switchbacks drawn on the slope below, with a few headlights crawling up.
  6. Elevation on the road sign ("CA-89 NORTH · 7,240 FT"), rising and falling with the climb.
  7. A summit pull-out: elevation sign, a couple of parked cars, people taking photos at the rail.
  8. Clouds at road level near the top (drive through a wisp, come out above the cloud sea).
  9. Wind up high: snow blowing off the ridges and across the road at the summit, wind noise rising as you climb.
  10. A tiny village far below by the lake (rooftops and lights).
  11. Rock cuts: blasted rock walls where the road is carved in, with icicles, and a snow shed on one stretch.
  - Not picked: a deeper blue sky at the top, birds circling below, radio crackle at the summit.
- **Left in batch 2:** the villages' own buildings (A-frames, chalets, ski and rental shops, the ski hill with runs and lift towers, the rink, the sledding hill, the chain installer, gondola in place of the Ferris wheels, a boat dock and paddle-wheeler); lakeside villages instead of forest towns; pines thinning toward the summit; real lake shores at the villages; signs. Then batches 3 (life and weather), 5 (map and handoff) and 6 (audio and polish).
- **Not checked yet:** a phone (frame rate and heat with the snow shader, pines and far mountains), the lake shoreline moving in motion, the Redwood Coast → Sierra handover.
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
