# State: what's in progress

Only work that has started and isn't finished. The backlog is FUTURE-WORK.md, and finished work is in git. Update this file before every commit. When a task ships, shrink it to one line under "Recently finished".

Last updated: 2026-10-27

## Active

### K-JAM set 2: 14 more songs (17–32, minus 21 and 30)

- **Worked on:**
  - 2026-10-18: wrote 16 songs on the theme "Postcards from one summer" (LYRICS.md, songs 17–32).
  - 2026-10-19: rewrote them all after the first Suno takes.
  - 2026-10-26/27: all 14 generated, moved to raw/music and run through process-music, whisper and align-lyrics (78–100% of words matched). Four songs needed whisper re-runs (see AUDIO-WORKFLOW.md, 2026-10-27).
  - 2026-10-27: all 28 intro clips generated and processed (eleven_v4, stability 0.75, about 8,400 credits including test takes; about 23,300 left). Every story says its script (88–100% of words matched by whisper), and the subtitles are timed from the spoken words. Committed without a full listen; the user will flag retakes from drives.
- **Decided:**
  - The theme is one LA summer, a place per song, with no named landmarks. **Why:** it ties into the in-game postcards and the user's favourite song, Postcard from the Pier.
  - Hookier choruses, with an [Intro] on every song. **Why:** the first takes weren't catchy.
  - Each song gets its own chorus shape. **Why:** the catchier versions all followed one formula and felt samey.
  - No Motown; the out-of-place genres went back to the classic-rock palette. **Why:** the user doesn't like the Motown sound.
  - Couples Skate and Ice Cream Truck keep their v2 lyrics, which the user liked.
  - 2026-10-27: set 2's second intros are two-host story intros (summer memories), with a lore sheet for Rick and Dana. **Why:** the user wanted Rick and Dana to have longer bits now and then, like Marj and Walt.
  - 2026-10-27: Rick's story lines use feeling-based directions ("dry, a little proud"), not bare dry/deadpan/flat. **Why:** the first take sounded flat and not quite like him; the user picked the livelier take at stability 0.75.
  - 2026-10-27: the set stops at 14. The two instrumentals (Salt Air Stomp, Heat Shimmer) moved to FUTURE-WORK. **Why:** the user felt Last Night of Summer caps off the set.
- **Left:**
  1. On "build": add the SONGS entries and the introb story lines (SET2-INTROS-DRAFT.md has the code; take the line text from PRODUCTION-PACK.md, which has the final wording), wire them in, check that the playlist scrolls well with 30 songs on a phone, then build and push.
  2. After that, the user flags any intros that sound off on drives. Retake with `generate-voices.ps1 -Only <bit> -Force -Model eleven_v4 -Stability 0.75`, then process-voices.

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
- **Behind schedule:** WINTER-PLAN's timeline had code batch 1 in the week of Oct 19–25, and it hasn't started. Lyrics are due Nov 2 and songs Nov 3.
- **Now (2026-10-27):** batch 1 runs overnight in its own session, on a `winter` branch in a worktree. Its preview is "winter" (port 8767), so it doesn't clash with "local" on main.
- **Left:** everything in WINTER-PLAN.md. The open items are the station and host names, the voices, the top up or down in snow, and the snowfall pattern.

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
