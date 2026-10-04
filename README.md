# Long Way Home in California

*Top down, sun low, take it slow.*

A relaxing browser driving game with no goal. A convertible drives itself along a golden-hour Highway 1, through little beach towns, while K-JAM 101.1's Rick and Dana read an overdramatic traffic report between classic-rock-style songs.

A game by gghui. Built with [three.js](https://threejs.org/).

## Play

Open the GitHub Pages link in a phone or desktop browser and tap **Tap to drive**. Turn the sound on.

- **◀ ↑ ▶** (or the arrow keys) pick your turn at the next intersection. Otherwise the autopilot decides.
- **Tap the radio display** to request a song. **VOL** on the radio sets the volume or mutes.
- **The map button** shows the coast around you, or the town's streets.
- **Hands-free** counts how long you've stayed in the game without switching apps. Rick and Dana notice.
- **Settings** has tilt steering, cruise speed (60 to 160 km/h), host voices, calm mode and high-quality graphics (turn off to save battery).
- No sound on iPhone? Check the silent switch.

## Project layout

- `index.html` is the whole game in one file (it is also published as a Claude artifact).
- `build.ps1` builds the GitHub Pages site into `docs/`, adding the page head, share-preview tags and icons.
- `docs/` is the published site, including `docs/audio/` (music, voices, nature sounds). Don't edit it by hand; rebuild instead.
- `production/` holds the audio scripts, lyrics and the processing scripts that make `docs/audio/`.
- `share.png` is the link-preview image, and `icon.svg` / `icon-180.png` are the browser and home-screen icons.

To rebuild the site after changing `index.html`:

```
powershell -ExecutionPolicy Bypass -File build.ps1 -SiteUrl https://<username>.github.io/long-way-home/
```

The world is generated in the browser from rules, with no real maps or brands. Songs were made with Suno, voices with ElevenLabs, and nature sounds are CC0 recordings from Freesound (see `production/NATURE-SOURCES.md`).
