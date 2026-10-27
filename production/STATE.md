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
  - LA and the Redwood Coast checked pixel-for-pixel against reference shots (a local test page with a fixed random seed and clock, in `production/raw/wt/`, not committed).
- **Defaults picked (easy to change, not decided):** road trip order LA → Redwood Coast → High Sierra → LA (the order of REGIONS); title line "Chains on, cocoa hot, take it slow."; radio-off words "mountain sounds"; the map buttons don't list the Sierra yet (batch 5).
- **Left:** the rest of WINTER-PLAN.md. The open items are the station and host names, the voices, the top up or down in snow, and the snowfall pattern.

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
