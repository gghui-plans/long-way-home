# Workflow: how an idea becomes part of the game

The big picture: where work starts, who does what, and how the files hand off to each other. What's in progress right now is in STATE.md; the detailed audio history is in AUDIO-WORKFLOW.md.

## The files and how they relate

| File | Holds | Changes |
|---|---|---|
| FUTURE-WORK.md | Everything not started: ideas, requests, decisions for later | When an idea comes up or ships |
| STATE.md | Only what's in progress: what was done, decided (and why) and what's left, with dates | Every work session |
| Git history | What's done | Every commit |
| LESSONS.md | Bugs and traps that came back, with their fixes | When something bites twice or costs real time |
| Plan files (REDWOOD-PLAN.md, WINTER-PLAN.md) | The design for one big feature, such as a region | While it's being planned and built |
| Content files (LYRICS.md, REGION-SONGS.md, PRODUCTION-PACK.md, COFFEE-CABIN-SCRIPT.md) | The words that become audio | While writing, then frozen once recorded |

A piece of work moves **FUTURE-WORK → STATE → git**. When it ships, it leaves FUTURE-WORK and shrinks to one dated line in STATE.

## Stations

Each region has its own station, and each station has a song file, a voice script and an audio folder.

| Region | Station | Hosts | Songs | Script | Audio folder |
|---|---|---|---|---|---|
| LA | K-JAM 101.1, classic rock | Rick and Dana | LYRICS.md | PRODUCTION-PACK.md | `docs/audio/music/`, `docs/audio/voice/` |
| Redwood Coast | 89.3 The Coffee Cabin, acoustic folk | Marj and Walt | REGION-SONGS.md | COFFEE-CABIN-SCRIPT.md | `.../coffee-cabin/` |
| High Sierra | 96.1 The Fireside, fireside jazz | Vera and Moose | REGION-SONGS.md | FIRESIDE-SCRIPT.md | `.../fireside/` |

## The steps

1. **Idea.** The user asks for something, or Claude suggests it. If it's for later, it goes in FUTURE-WORK.md. Nothing there is scheduled.
2. **Plan.** When the user picks something up, it gets a section in STATE.md. A big feature, such as a region, also gets its own plan file.
3. **Write.** Claude drafts the lyrics, scripts or plan. The user reviews them and marks what to cut, change or keep. Rules for songs and scripts are below.
4. **Make the audio.**
   - **Songs:** the user generates them in Suno from the song file and downloads the keepers as **MP3** into Downloads (Suno names them by title, such as "Top Down, Radio Up.mp3"). Claude moves them to `production/raw/music/` (or `raw/music/<station folder>/`), renamed to the song's "Save as" name.
   - **Voices:** once the user approves a script, Claude generates them through the ElevenLabs API (`generate-voices.ps1` for K-JAM, `generate-coffee-voices.js` for the Cabin, `generate-fireside-voices.js` for the Fireside, which can take `--batch 1-4`). This spends credits (Eleven v4 dialogue bills about 0.4 credits per character), so test a few clips first. Check the balance with `/v1/user/subscription` (the key has User read since 2026-10-29).
5. **Process.** These turn raw files into game files in `docs/audio/`. `production/raw/` is never committed.
   - Songs: `process-music.ps1` (`-Sub coffee-cabin` for a station folder), then whisper (`production/raw/tools/whisper/run-all.sh`), then `align-lyrics.js` (plus the folder name) for the scrolling lyrics.
   - Voices: K-JAM uses `process-voices.ps1`, then `time-voices.js` for long bits. The Cabin uses `process-coffee-voices.js <clip>`, the Fireside `process-fireside-voices.js <clip>` (it reads the script through `fireside-script.js`, the same as its generator).
   - Nature sounds: `process-nature.ps1`.
6. **Build into the game** (only after the user says "build"). Edit `index.html` with targeted changes: the station's songs (`SONGS`, `CC_SONGS`), voice bits (`VBITS`, `CC_BITS`), regions (`REGIONS`) and stations (`STATIONS`). Big features go on their own branch, and `main` stays live.
7. **Test.** Preview "local" (port 8765) in the browser pane. Check the console, and check the change with a screenshot or by reading the page. Use "phone" (port 8766) for a test on the user's phone.
8. **Ship.** Run `build.ps1`, commit and push. GitHub Pages updates the live site in about a minute.
   - The private Claude artifact copy is optional and lags behind (it can't serve some model files).
9. **Close out.** Remove the item from FUTURE-WORK.md, shrink its STATE.md section to one dated line, note any change to how the work flows in this file, and add bugs or traps worth remembering to LESSONS.md.

## Song rules

- **Style of Music** describes the sound, because Suno won't take artist names. Keep it to one line.
- **The title is sung in the chorus** (or at least somewhere in the song). Otherwise Suno invents a chorus from the theme.
- **Every song gets its own chorus shape**, written into its entry: story, call and response, a chorus that grows, a last chorus that changes, duet trades, a chant, a list. Don't use the same "title, title, short line" formula on every song. After writing a set, run a chorus check: line counts, where the title lands, doubled titles, repeated openings, filler words.
- **Write from favourites.** Lean on the songs the user already likes, and keep each station in its own sound.
  - K-JAM: classic rock palette, no Motown.
  - Coffee Cabin: warm and sincere, no heartbreak.
  - Fireside: no Christmas.
- **Delivery:** paste one song at a time in chat (settings, style line and lyrics block), and keep the song file in sync.
- **Suno settings:** each station's settings block sits at the top of its section in the song file. An instrumental means Instrumental On, with "vocals" added to Exclude styles.

## Script rules

- No live street names in recordings. Town names are separate clips.
- Each song gets a recorded intro (K-JAM has two per song: intro and introb).
- Subtitles stay on, and the device voice only plays if a clip fails to load.
- The hosts carry the comedy, and the songs carry the feeling.
