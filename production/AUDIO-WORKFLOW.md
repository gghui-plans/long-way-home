# Audio upgrade workflow: recorded hosts and real songs

Goal: replace the device text-to-speech hosts and the in-browser synth music with recorded audio, so every player hears the same Rick and Dana on any device.

Decided 2026-10-03. The planned fix for picking up iPhone Premium voices is dropped, because recordings make it unnecessary.

## Who does what

| Step | Who | Status |
|---|---|---|
| 1. Write the production pack: final script with clip names and voice directions, Suno prompts, checklist | Claude | ☑ done; you approved the script on 2026-10-03 |
| 2. Subscribe for one month: ElevenLabs Starter (~$6) and Suno Pro (~$10). Check that both grant commercial use | You | ☑ |
| 3. In ElevenLabs, pick four voices (Rick, Dana, a female caller, a male caller) and keep them for every line. Generate every clip in the pack | You | ☑ 2026-10-04: generated through the API (generate-voices.ps1) |
| 4. In Suno, generate the songs from the pack's prompts and download the keepers (Pro may cap downloads at about 20 a month) | You | ☑ 2026-10-03: all 16 in production/raw/music |
| 4b. On freesound.org (free account, CC0 filter), download the real nature recordings in Part 3 of the pack: ocean, gulls, wind, birds | You | ☑ 2026-10-03, in production/raw/nature/ (sources in NATURE-SOURCES.md; the gulls' source is still to confirm) |
| 5. Drop the files into `production/raw/voice/`, `production/raw/music/` and `production/raw/nature/`, named exactly as the pack says | You | ☑ |
| 6. Trim, level and compress the files into `docs/audio/`, wire them into the game, test, then build and push | Claude | ☑ 2026-10-04: all audio live |
| 7. Cancel both subscriptions once the files are downloaded | You | ☐ |

## Rules for the recordings

- **No live street names.** Recordings can't say a street the game picks on the fly, so bits that used {street} or {cross} get rewritten in the pack.
- **Town names are separate clips.** There are 12 towns, and their names are recorded on their own and slotted into the town bits.
- **Song intros are fixed per song.** Each Suno song gets its own recorded intro with its real title and band name.
- **Subtitles stay.** The radio display still shows each line as it plays.
- **Silent fallback.** The built-in device voice only plays if a clip fails to load.

## File conventions

- Raw downloads go in `production/raw/`. That folder isn't committed: it's in .gitignore.
- Finished files go in `docs/audio/voice/<clip-id>.mp3` and `docs/audio/music/<song-id>.mp3`. These are committed so GitHub Pages serves them.
- Size budget: about 30 MB in total. Voice clips are mono at 64 kbps; songs are about 90 seconds at 128 kbps. The game loads each one only when it's needed.

## Tools

- Processing in step 6 needs ffmpeg, which isn't installed yet. Claude will install it with winget when step 6 starts (with your OK).

## Log

- 2026-10-04: focus-drive clips added (focus-20, focus-30, focus-end, focus-back) for the pomodoro mode. About 498 credits; the pitch check is clean.
- 2026-10-04: plug-01 added (Dana: "Want a different song? Tap the radio, we take requests!" / Rick: "We take them. We don't enjoy them."). It plays after the welcome until the player has requested a song once. About 117 credits.
- 2026-10-04: welcome-01 added (Rick and Dana welcome you on Tap to drive; "Gee-gee-hue-ee" for gghui, approved by ear). About 312 credits.
- 2026-10-04: AUDIO FINISHED. You listened to Rick's emotional lines and said he sounds fine, so there are no retakes. Only step 7 is left: cancel the ElevenLabs and Suno subscriptions (about 14,700 ElevenLabs credits remain if you want more lines first).
- 2026-10-03: plan agreed.
- 2026-10-03: production pack drafted (production/PRODUCTION-PACK.md): 167 voice clips, 16 songs. Next: you review it, then step 2.
- 2026-10-04: PENDING, waiting for the user's ears (they'll listen later). Judge sigalert-04 and beach-02 (sent), and the other emotional Rick lines (traffic-04-3, shortcut-01-3, ad-02-1/3, red-02-2, homes-01-2). If they don't sound like Rick: soften the directions ("dry, stern" style), re-record those 9 Rick bits at -Stability 0.8 (about 2,000 credits), re-run voicecheck, process, build, push and republish. If they do sound like Rick, the audio is finished and step 7 (cancel the subscriptions) remains.
- 2026-10-04: voice consistency fix. A pitch check (scratchpad voicecheck: median F0 per line; Rick about 101 Hz, Dana about 270 Hz) found Dana's [DJ]-tagged song intros drifting to 205–239 Hz. All 16 intros were re-recorded with new tags (no "DJ") at -Stability 0.75; Dana is now 211–286. Seven Rick bits were redone at 0.65, but emotional lines still read 147–178 Hz; sent to the user to judge by ear. Originals are in production/raw/voice/_before-retake. process-voices now picks speaker changes by trying every combination of pauses and scoring the pitch class per segment (F/M; a whispered segment is neutral) plus length fit. Fixed traffic-03 (Rick whispers) and downtown-01. About 2,750 credits; about 14,700 left.
- 2026-10-04: song requests added. Tapping the LCD opens a playlist sheet; picking a song fades out the current one, then plays one of 6 recorded request bits (request-01 to 06, added to pack Part 1, about 450 credits) plus the song's intro. Media Session gives lock screen / Control Centre metadata and next, play and pause (pause = mute). Fade callbacks now check the token so they can't talk over a request. Verified live: request-05, then intro-longboard-summer, then the song streamed. 80 voice bits total.
- 2026-10-04: VOICES DONE AND LIVE. All 74 bits were generated with Eleven v4 (about 10,400 credits including tests). production/process-voices.ps1 makes docs/audio/voice/*.mp3 (mono 64k, -17 LUFS, phone filter on callers, 4.9 MB) plus timings.json (line starts: pauses used directly when there's one per speaker change, otherwise each line's character share snapped to a pause; never early). The game plays one file per bit (VBITS in index.html, generated from the pack): talk = bit (+ town name on arrival) + the song's intro + an optional after-tag, with subtitles timed per line. Device TTS is only the fallback. Verified on the live site: id-03 played, the subtitle switched DANA to RICK on cue, no errors. The artifact is republished with audio/voice/* in `files`. Remaining: the user listens and flags retakes (re-run generate-voices.ps1 -Only <bit> -Force -Model eleven_v4, then process-voices.ps1, build, push); step 7 is to cancel the subscriptions.
- 2026-10-04: caller test: call-01 to call-04 generated with v4 (about 1,063 credits; 18.4, 15.8, 11.5 and 19.5 s) and sent for review. They're kept as finals if approved.
- 2026-10-04: Dana's voice changed to 052jzHJceQiZr7ltnY0C (voices.json). The test bits were regenerated with -Force (about 384 credits) and sent for review.
- 2026-10-03: the user upgraded to Starter, and the key is saved (restricted key: text-to-speech works, models_read doesn't, which is fine). Eleven v4 works on the dialogue API with -Model eleven_v4. Test bits generated (id-01 14.2 s, traffic-06 7.2 s, intro-tan-lines 2.7 s, about 384 credits) and sent for review. Subtitle splitting note: mid-line pauses can be longer than speaker-change pauses, so place boundaries by each line's share of the characters, then snap to the nearest pause.
- 2026-10-03: switched to the ElevenLabs API instead of clicking through the website. Voice IDs are in production/voices.json (Rick, Dana, callers Kevin=M1, Marco=M2, Brenda=F1, Gloria=F2). production/generate-voices.ps1 reads the pack and posts each bit to /v1/text-to-dialogue (default model eleven_v3; -ListModels, -DryRun, -Only, -Force), saving to production/raw/voice/<bit>.mp3. The key lives in production/elevenlabs-key.txt, which is gitignored and the user saves it themselves. A full run is 74 bits, about 10,050 characters including tags. Plan: test 3 bits first, then the rest.
- 2026-10-03: voices switch to ElevenLabs dialogue mode (Eleven v4, "+ Add speaker"): one generation per bit, so 74 files instead of 167. The script is production/DIALOGUE-SCRIPT.md, files named by bit (e.g. traffic-01.mp3, townname-seal-rock.mp3, intro-tan-lines.mp3). Claude will split each file into lines by silence to time subtitles, and the game will play one file per bit. The user appeared to be on the free tier (9,916 credits): suggested Starter for 30k credits and a commercial licence. Reminded them not to type the clip id or direction into the text box.
- 2026-10-03: songs are wired in and live. production/process-music.ps1 makes docs/audio/music/*.mp3 (first 1:45 with a 5 s fade, -16 LUFS, 112k, 22.4 MB). The game streams them through one HTMLAudio player (unlocked by a silent clip on the first tap) routed via MediaElementSource into musicBus. The playlist is a shuffled SONGS array with no repeats; each song plays its scripted intro (device TTS for now) plus, 35% of the time, an AFTER line. If a song can't load, the synth plays, labelled "LIVE FROM THE K-JAM STUDIO". The artifact publish maps audio/music/* in `files`. Still to do: the voice clips.
- 2026-10-03: the script was rechecked against the final 16 songs (no old titles, 16 intros, all files present). production/VOICE-LINES.md was built from the pack, grouped by voice (Rick 75, Dana 84, Caller-F 4, Caller-M 4). You'll first try Suno's beta voice feature (test 3 to 5 lines per voice and make sure it speaks rather than sings); ElevenLabs is the fallback.
- 2026-10-03: all 16 Suno songs are in production/raw/music (checked: about 2:30 each, -14.7 to -16.4 LUFS, no clipping, first chorus around 0:30 to 0:45; plan to play about the first 1:45 with a fade). Next: ElevenLabs voices (step 3), and optionally wire the songs into the game now with temporary device-voice intros.
- 2026-10-03: you asked for more beach/surf/ocean songs. Six unmade songs were swapped: Low Tide Blues, Bonfire on the Beach, Tan Lines, Hammock by the Sea, Hot Sand Shuffle (instrumental, renamed), Longboard Summer. Ten of 16 songs are now beach or ocean themed. LYRICS.md and the pack are updated and rechecked (16 songs, 16 matching intros).
- 2026-10-03: you asked for fewer traffic/parking songs. Songs 1–4 were already made (Golden Hour Gasoline with new lyrics, Carpool Lane Lightning, Red Light Lullaby, Merge Left), so they stay; 5 downloads used. Seven unmade songs were replaced: Callback Blues, Backyard Barbecue Boogie, Moonlight Roller Rink, Postcard from the Pier, Coyote Moon, Catalina Sunset, Garage Band Summer. New lyrics are in LYRICS.md, and the pack's song table and intros are updated (16 songs, 16 intros, all matching). Raw songs are in production/raw/music.
- 2026-10-03: first Suno song (Golden Hour Gasoline, 2:29) came out clean, but Suno sang the theme sentence as the chorus, so the title wasn't sung. Fix: full original lyrics for all 16 songs, with the title in every chorus, are in production/LYRICS.md to paste into Suno's Lyrics box. Recommended Suno settings: exclude modern pop/EDM/trap/autotune/lo-fi, vocal gender set per song, Custom duration 2:00 to 2:30, weirdness about 30–35%, style influence about 65–75%, variety Normal, Personalize off.
- 2026-10-03: you approved the script as is. Order agreed: Suno songs first, then ElevenLabs voices, so song intros match the songs you keep. The Toronto hip hop station is deferred to a later version.
- 2026-10-03: nature sounds are done and live. The CC0 recordings (Pacific ocean, Baltic close waves, breeze, front-yard birds, 8 gull calls from 3 recordings) were processed by production/process-nature.ps1 into docs/audio/nature/ (2.7 MB) and loaded by the game; the synth is the fallback. ffmpeg is installed via winget (Gyan.FFmpeg, at %LOCALAPPDATA%\Microsoft\WinGet\Links\ffmpeg.exe). Voices and songs (steps 2 to 6) are still to do.
- 2026-10-03: a radio-off soundscape shipped, synthesized in the browser (surf, gulls, wind, songbirds). You asked for real recordings, so Part 3 of the pack lists CC0 Freesound sounds to download (step 4b). In step 6 they replace the synthesized ones, which stay as the fallback.
