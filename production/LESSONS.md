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

## Region code

- **A new region changes LA's people and traffic** (2026-10-27, winter branch)
  - **Why:** every new three.js geometry, material or mesh draws a random id from `Math.random`. Building one region's things at startup shifts the random numbers the other regions use.
  - **Rule:** build region-only things on first use (like `PINES()`) or inside region-gated code.
- **Proving nothing else changed:** after any region change, compare LA and the Redwood Coast pixel for pixel against the code from before. The test pages (`harness.html`, `regress.html?tag=x`, `diff.html`) are in `production/raw/wt/` in the winter worktree (not committed).

## Audio pipeline

Details and history are in AUDIO-WORKFLOW.md.

- **Whisper returns nothing but "[MUSIC]"** on dreamy songs (Couples Skate, Rooftop at Dusk, 2026-10-27).
  - **Fix:** add `-sns` (suppress non-speech tokens).
- **Whisper skips the first verse, or spreads the opening words from 0:00** when the intro and the first verse share its first 30-second window (Top Down, Radio Up; One-Hour Sailboat).
  - **Fix:** `-ot 8000` (start 8 s in).
- **Whisper drifts a few seconds early** in bridges and last choruses.
  - **Fix:** spot-check the timings and re-time by hand (`b581f14`, `266d67f`).

## Tooling

- **A worktree preview shows main's code** (2026-10-27)
  - **Why:** `.claude/launch.json` had absolute paths to the main checkout.
  - **Fix:** use relative paths so each checkout serves itself, and run a worktree on its own port ("winter", 8767) so it doesn't clash with "local".
- **Python isn't installed.** Use node or PowerShell for scripts.
