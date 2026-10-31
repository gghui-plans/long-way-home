# State: what's in progress

Only work that has started and isn't finished. The backlog is FUTURE-WORK.md, and finished work is in git. Update this file before every commit. When a task ships, shrink it to one line under "Recently finished".

Last updated: 2026-10-30

## Active

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

- **Where it lives:**
  - Code: the `claude/winter-35bb4b` branch, checked out in the worktree `.claude/worktrees/winter-35bb4b`. Not merged and not pushed. Don't push or merge it without the user's word.
  - Build log: the branch's own STATE.md, under High Sierra. Its other sections are older than this file, so trust this file for everything else.
  - Plan: WINTER-PLAN.md. Songs: REGION-SONGS.md, High Sierra section.
- **Done:** code batches 1–3 (the foundation, the world, and life and weather), plus fixes for hitches and for floating things in the blends. The user checked them on the phone on 2026-10-27 and 28 ("looks good"). LA and the Redwood Coast stay pixel-identical after every change.
- **Decided:**
  - fireside jazz, with no Christmas songs; decorations switch on by date;
  - the climb is an illusion: the road stays level and the drop to the lake grows toward the summit;
  - no harbour towns, so no dock, marina or paddle-wheeler (every village sits on a bench above the lake);
  - keep the summit camera rise.
- **Next, in this order (agreed 2026-10-28):**
  1. **Station, hosts and voices: done 2026-10-28.** 96.1 The Fireside, "Jazz by the fire, skis by the door", LCD line WARM JAZZ & FRESH POWDER. Hosts Vera (smooth; library voice Sadie) and Moose (stoked; library voice Tim), IDs in voices.json. Lionel and Skye were dropped as too close to Rick and Dana. Details and the recording rule for Vera's pace in WINTER-PLAN section 7. About 4,000 ElevenLabs characters went on test bits.

  3. **Meanwhile Claude writes** the radio script. All of batch 1 is drafted in FIRESIDE-SCRIPT.md (33 clips: 20 handoffs on 2026-10-28; IDs, clock, after and red on 2026-10-29). Batch 2 (32 song intros, with shared story facts: how Vera got here, Moose's dad and Bertha, Darlene at Chair 4) is drafted too, 2026-10-29. Batch 3 (18 segments: chain control, Plow Alert with Hank and his plow Linda, secret stash, bulletin board) is drafted too, 2026-10-29. Batch 4 (16 Snow Notes, facts checked online 2026-10-29) is drafted too. Batch 5 (13 callers) is drafted too. Batch 6 (57 reactions and short bits) is drafted too. Batch 7 (4 December bits) too, so the whole script is drafted: 173 clips, 2026-10-28 and 29. QA/QC done 2026-10-29: format, tags, ids and song credits all check out; five lines that echoed the Cabin were rewritten and Vera's lounge years fixed (12, not 20). The user skimmed it and liked it. Before recording:
     - **Credits (checked 2026-10-29):** the script is about 37,500 characters, plus retakes. Starter plan: 27,207 of 39,916 left, resetting Nov 3 at 10:42 pm Eastern, and no overage (generation just stops at zero). Plan: record batches 1–4 (about 24,000) before the reset, and 5–7 plus retakes after it. No top-up needed. `/v1/user/subscription` works with the current key.
     - **Decided 2026-10-29:** the top stays down in the snow, and Velvet keeps her name.
     - **Caller voices:** pick K-JAM caller voices for the 10 new callers (Big Moose the deepest, Edna an older one).
     (Script batches 1–7 are separate from the build batches in WINTER-PLAN.) The user reviews each batch.
  4. **Batch 5 on "build":** goodbyes and welcomes tagged by where you're going or coming from; a Fireside station of its own playing the 16 Fireside songs (all in docs/audio/music/fireside since 2026-10-30); device voices reading the new lines until they're recorded; and the driver wears a Santa hat in the High Sierra, all year: it goes on as the car enters and comes off as it leaves (decided 2026-10-29; the walkers already swap sun hats for beanies by region, so it follows that code). Today a Redwoods-to-Sierra trip plays no handoff (both use the Coffee Cabin), and K-JAM's welcome-backs mention trees and elk even when you come from the snow. The map buttons and the road trip loop are already in.
  5. Batch 6 (audio and polish), then batch 7 (phone test and ship).
- **Behind schedule:** the writing (WINTER-PLAN batch 4) started 2026-10-28 with the handoffs. The plan had the station and hosts confirmed in the week of Oct 19–25.
- **Open:** the snowfall pattern (built as cycles, about 3 min clear then 2 min snowing); the loop order (built as LA → Redwood Coast → High Sierra → LA); how glossy the wet road is.
- **Known weak spots** (batch 3): the frozen waterfall is a thin pillar from the chase cam, the snowmobile tracks fade over brown rock, a few flakes show under the snow shed's ends, the deer are small, and the road goes dark navy in snow.
- **Phone preview:** from the worktree, `node production/serve.js . 8768 0.0.0.0` serves it to the wifi at http://192.168.2.13:8768/#sierra (add `?wx=40` to start snowing). Its launch.json entry ("winter-phone") is only in the worktree.

## Waiting for "build"

These are decided but not built. Details are in FUTURE-WORK.md.
- 30 fps after 2 minutes on phones and tablets (decided 2026-10-19). FUTURE-WORK has it under Battery saver.

## Loose ends

- K-JAM set 2 intros went live without a full listen. The user flags any that sound off on drives; retake with `generate-voices.ps1 -Only <bit> -Force -Model eleven_v4 -Stability 0.75`, then process-voices and build. ElevenLabs credits: see High Sierra, Next item 3.
- The Claude artifact copy was last republished 2026-10-11 (v40), so it's behind the live site.
- Cancel the ElevenLabs and Suno subscriptions once the region audio is done.

## Recently finished

- 2026-10-28: LA's pelicans fly again (a mid-line comment had frozen them since 18b0540; found by the winter batch 3 work).
- 2026-10-27: LESSONS.md started (bugs and traps with fixes), linked from CLAUDE.md and WORKFLOW.md.
- 2026-10-27: K-JAM set 2 is live: 14 "Postcards from one summer" songs (30 in all), each with a short intro and a two-host story intro. Salt Air Stomp and Heat Shimmer are in FUTURE-WORK.
- 2026-10-26: CLAUDE.md, WORKFLOW.md and STATE.md set up. The song and plan files that had never been committed are now in git too.
- 2026-10-18: Marj and Walt's game explainer when a drive starts in the redwoods (d6ccd00).
- 2026-10-11: added the game to the iPhone home screen as an app, with its own icon and an install button (c46e5e0, 07a8434, e16e475).
- 2026-10-10: music mode replaces the host voices switch (a4a414b).
