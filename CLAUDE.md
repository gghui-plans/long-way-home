# Long Way Home in California

A relaxing mobile browser driving game: a convertible drives itself along the California coast while a comedy radio station plays. One file of Three.js (`index.html`), live at https://longwayhome.itsgordonhui.com/ (GitHub Pages from `main`/`docs`, repo gghui-plans/long-way-home). **The repo is public:** anything committed can be read by anyone.

**Start every session with [production/STATE.md](production/STATE.md)** (what's in progress). Read the other files only when the task needs them.

## Rules

- **Nothing gets built until the user says "build".** Talking, planning and writing (lyrics, scripts, plans) are fine before that; changing the game is not.
- Targeted edits, never whole-file rewrites. The user batches feedback.
- Never hand-edit `docs/`. `build.ps1` regenerates it from `index.html`.
- Never print, echo, commit or ask for the ElevenLabs key (`production/elevenlabs-key.txt`).
- The user makes the songs in Suno; Claude writes them, and only runs ElevenLabs (which spends credits) once the script is approved.
- Keep replies casual and concise. It's a personal project.
- Before a commit, update STATE.md. When something ships, remove it from FUTURE-WORK.md.
- When a bug costs real time or comes back, add it to LESSONS.md.

## Where to look

| For | Read |
|---|---|
| What's in progress, decisions, what's left | [production/STATE.md](production/STATE.md) |
| How the work flows, idea to live site; song and script rules | [production/WORKFLOW.md](production/WORKFLOW.md) |
| Ideas and to-dos for later (the backlog) | [production/FUTURE-WORK.md](production/FUTURE-WORK.md) |
| K-JAM songs (LA, 101.1) | [production/LYRICS.md](production/LYRICS.md) |
| Region songs (Coffee Cabin, Fireside) | [production/REGION-SONGS.md](production/REGION-SONGS.md) |
| K-JAM voice script (Rick and Dana) | [production/PRODUCTION-PACK.md](production/PRODUCTION-PACK.md) (drafts: RADIO-SCRIPTS-DRAFT.md, CALLERS-DRAFT.md, SET2-INTROS-DRAFT.md) |
| Coffee Cabin voice script (Marj and Walt) | [production/COFFEE-CABIN-SCRIPT.md](production/COFFEE-CABIN-SCRIPT.md) |
| Region plans | [production/REDWOOD-PLAN.md](production/REDWOOD-PLAN.md) (shipped), [production/WINTER-PLAN.md](production/WINTER-PLAN.md) (High Sierra, due Dec 1) |
| Bugs and traps that came back, with fixes (check before debugging) | [production/LESSONS.md](production/LESSONS.md) |
| Audio history and file conventions | [production/AUDIO-WORKFLOW.md](production/AUDIO-WORKFLOW.md) |
| Nature sound licences (credits) | [production/NATURE-SOURCES.md](production/NATURE-SOURCES.md) |
| Voice IDs | `production/voices.json` |

## Commands

- Build the site: `powershell -ExecutionPolicy Bypass -File build.ps1 -SiteUrl https://longwayhome.itsgordonhui.com/`, then commit and push.
- Local preview: `.claude/launch.json` "local" (production/serve.js on port 8765; the built site is at `/docs/`). "phone" serves on 8766 to the wifi, and "winter" on 8767 (for a worktree, so it doesn't clash with "local"). All three serve whichever checkout they run in.
- Every script in `production/` explains its usage in its first lines. WORKFLOW.md says which to run when.
