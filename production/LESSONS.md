# Lessons learned

Bugs and traps that cost real time, came back, or weren't obvious from the code. Each entry: what you see, why, and the fix or rule. Add one when something bites twice or takes more than a quick look. When a lesson becomes a standing rule, move it into CLAUDE.md or WORKFLOW.md and delete it here.

## Rendering and phones

- **Rainbow static (fuzz) on soft images, phone only** (2026-10-27, `78f689e` on the winter branch)
  - **Why:** most likely the phone browser adding noise to canvas images (anti-fingerprinting). It hit the Sierra's soft cloud and snow-grain textures.
  - **Fix:** write soft textures straight into pixels (`softTex`), not through a canvas. Not confirmed on the phone yet.
- **Big black blocks on screen** (2026-10-27, winter branch)
  - **Why:** every row of a far chunk or terrain strip must push the same number of points. A row with more points gives broken triangles with NaN normals, and the bloom pass spreads them into blocks.
  - **Fix:** when one profile adds points (the lake), every other row adds the same number (`LAKE_ON`).
- **Height doesn't read from the road camera** (2026-10-27, `8ae5195`)
  - **Why:** the camera is low and looks along the road, so a steep slope hides behind its own edge and the horizon stays at eye level however high you are. A lake below just looks like a sea.
  - **Fix:** show height with a far shore across the water and a visible slope below the road (trees stepping down, rock, a guardrail), not with the drop alone.

- **The drive freezes for a moment every few seconds** (2026-10-27, winter branch)
  - **Why:** scenery is built on the fly as you drive (terrain strips, town blocks, far chunks, far towns), each piece all in one frame. A heavy piece stalls that frame. The Sierra's far chunks cost about 4x LA's, and each village's ski hill about 0.2 s at phone speed.
  - **Fix:** in the Sierra, far pieces are built a step at a time over the next frames, about 3 ms a frame (`farLater`, `farSteps`). The steps run in the same order, so the result is the same. Repeated ground-height lookups are cached (`gyAt`).
  - **Fix, every region:** a `Builder` made while `LAZY` is on only notes its adds; `bakeSome` does the vertex work about 5 ms a frame, in order, then shows the mesh. Sign words are painted the same way (`later`). The three.js objects are still made at the same moments, so the pixel checks stay at 0 px. Left in a strip: the land grid and the Sierra's `westProfile`.
- **The order things are made in only matters for the test harness.** The game never seeds `Math.random`, so in the live game people and traffic differ on every load anyway; the harness seeds it, and every three.js object draws its id from it. To add throwaway objects without disturbing the harness (the shader prewarm), stub `Math.random` while making them.
- **A thing switched on at a blend's halfway point stands at full size over half-blended ground** (2026-10-27, winter branch): the Sierra's rock cuts, snow shed and pull-out used `alpAt` (a hard 50% threshold) while the land used the smooth weight, so a roof hung over the road and rock floated in the air. **Rule:** scale road furniture with the blend (`alpW`), or build it only once the blend is complete.
  - **The same goes for the land's sample grid** (2026-10-28): a strip used the Sierra's close-together grid only once its row was picked as Sierra, but the wall and the lake drop rise from the first bit of Sierra, so trees and rocks (placed on the true height) floated or sank up to 16 m over the coarse LA grid. **Rule:** pick the grid by "any of it in the blend" (`alg=regW(z,isAlp)>0`), styling by the region.
  - **And props at a fixed height** (2026-10-28): LA's sea stacks and beach scene sat at sea or beach level while a Sierra blend's west side was still dropping, so they floated. **Rule:** a prop at a fixed height either skips where the ground moves (`!lookAt(zm,'lake')`, checked before any `rnd()` so the other regions keep their random numbers) or takes its height from `groundAt`.
- **A roof over the road plus a lifted camera fills the view with the roof.** The summit camera rise now drops to normal height near the snow shed (`shedAt`).
- **Measuring hitches:** `production/raw/wt/prof.html` (winter worktree, not committed) loads the game with timers round the per-frame and build functions. `node production/raw/wt/drive-prof.js <region> <secs> <cpuSlowdown> <out.json> [cpu]` drives it in headless Edge at phone size, with the CPU slowed (4 is roughly a phone), and saves the slow frames with what ran in each. `cpu` adds a CPU profile per build function. It needs the winter-phone server on 8768.
  - Headless Edge needs no browser pane. A hidden pane pauses the game, which spoils timings.
  - In Git Bash, prefix `MSYS_NO_PATHCONV=1` when passing a `/production/...` path in an environment variable, or it becomes a Windows path.

## Region code

- **A new region changes LA's people and traffic** (2026-10-27, winter branch)
  - **Why:** every new three.js geometry, material or mesh draws a random id from `Math.random`. Building one region's things at startup shifts the random numbers the other regions use.
  - **Rule:** build region-only things on first use (like `PINES()`) or inside region-gated code.
- **Proving nothing else changed:** after any region change, compare LA and the Redwood Coast pixel for pixel against the code from before. The test pages (`harness.html`, `regress.html?tag=x`, `diff.html`) are in `production/raw/wt/` in the winter worktree (not committed).

- **The first frame's time step is negative** (2026-10-27, winter branch)
  - **Why:** the first frame's timestamp can come before the start time, so the first `dt` was about −0.8 s. The Sierra's switchback headlights then read past the end of their path and threw an error each frame for a few frames.
  - **Fix:** the loop clamps `dt` to 0–0.05 s.
- **A `//` comment pasted mid-line comments out the rest of the line.** The code packs several statements per line. A note added after `last=now;` silenced `clock+=dt;frame++;`: the clock froze, the traffic lights stuck, and the car sat at red lights for over a minute (2026-10-27).
  - **Rule:** a comment goes at the end of the line, after its last statement. After an edit, check the whole line.
  - **It happened again** (found 2026-10-28, live since 18b0540): "pelicans keep to the open coast" pasted mid-line in `updateLife` silenced the pelicans' `g.position.set(...)` and wing flaps, so they never move. Search for `//` followed by code on the same line when something stops moving.
  - **And again** (2026-10-31, caught before commit): a note pasted after `sp.userData={...};` cut off the rest of the wisp line, and the whole game failed to start. Add notes with a script that appends to the line's end, never with a replacement in the middle.
- **Switching region leaves the car on one map and the scenery from another** (2026-10-27, winter branch)
  - **Why:** a flag set again on every region change (`LAKE_ON`) was declared `const`. The assignment threw partway through "Start in" and the road trip's arrival: the road and saved region had switched, the scenery, radio and title hadn't. The pixel checks missed it because they never tap a button.
  - **Rule:** anything reassigned later is `let`. After a region change, test "Start in" both ways and a road trip with the error log open, not just the start-up shots.

## Audio pipeline

Details and history are in AUDIO-WORKFLOW.md.

- **Whisper returns nothing but "[MUSIC]"** on dreamy songs (Couples Skate, Rooftop at Dusk, 2026-10-27).
  - **Fix:** add `-sns` (suppress non-speech tokens).
- **Whisper skips the first verse, or spreads the opening words from 0:00** when the intro and the first verse share its first 30-second window (Top Down, Radio Up; One-Hour Sailboat).
  - **Fix:** `-ot 8000` (start 8 s in).
- **Whisper drifts a few seconds early** in bridges and last choruses.
  - **Fix:** spot-check the timings and re-time by hand (`b581f14`, `266d67f`).
- **A duet's `[Male]` / `[Female]` tags showed up in the scrolling lyrics** (Cocoa for Two, 2026-10-29). The tags sit at the start of a lyric line, not on a line of their own, so the aligner's "skip bracket lines" rule missed them.
  - **Fix:** `align-lyrics.js` strips a leading `[...]` tag from every line (`lyricLines`).
- **Whisper smears a song's first words back across the intro** even with `-ot 8000` (Snowed In: "The" at 0.2 s, "day" at 1.6, the rest from 11 s), so the first lyric line showed at 0:00 (2026-10-29).
  - **Fix:** `align-lyrics.js` now starts the first line where its words come thick and fast (the last gap over 1.6 s within a line that spans more than 8 s). It changed nothing in the K-JAM or Cabin files. Still check each first line in the report.
- **`process-music.ps1` redoes the whole station folder.** That's safe: ffmpeg's output is byte-identical, so re-running it for one new song leaves the committed ones untouched (checked 2026-10-30 with `git status`).

- **ElevenLabs API key permissions** (2026-10-28, cost an hour): the key made on 2026-10-03 could only generate speech, so the voice library search answered 401 "missing the permission voices_read". Keys can't be edited, so a new one is needed, and the dashboard afterwards shows the key's **ID**, not the key (the API says "API key ID used as API key"). The secret starts with `sk_` and is only shown at creation.
  - **Rule:** make one key with Text to Speech, Voices (read and write) and User (read), copy the `sk_` value at creation, and save it over `production/elevenlabs-key.txt`. The library search, adding voices, the dialogue calls and the credit balance all need it.
  - Searching the library (`/v1/shared-voices`) and adding a voice are free; only generation spends credits. Multi-word `search` terms return almost nothing; use `descriptives`, `use_cases` and single words, sorted by `cloned_by_count`.

## Tooling

- **A worktree preview shows main's code** (2026-10-27)
  - **Why:** `.claude/launch.json` had absolute paths to the main checkout.
  - **Fix:** use relative paths so each checkout serves itself, and run a worktree on its own port ("winter", 8767) so it doesn't clash with "local".
- **The preview tool always reads the main checkout's launch.json** (2026-10-30): from a worktree session, "winter" (8767) served main's code, and the worktree-only "winter-phone" wasn't found. Check with `curl -s localhost:<port>/index.html | grep <something new>` before testing. The phone server on 8768, started from the worktree, does serve the branch.
- **The browser pane only draws when the app window is in front.** Behind other windows its frame count stays at 0 and screenshots time out. Test in headless Edge instead (`production/raw/wt/` tools, or a CDP script like `regress-run.js`).
- **Python isn't installed.** Use node or PowerShell for scripts.
