# Long Way Home in California

*Top down, sun low, take it slow.*

A relaxing browser driving game with no goal. A convertible drives itself along a golden-hour Highway 1, through little beach towns, while K-JAM 101.1's Rick and Dana read an overdramatic traffic report between classic-rock-style songs.

A game by gghui. Built with [three.js](https://threejs.org/).

## Play

Open the GitHub Pages link in a phone or desktop browser and tap **Tap to drive**. Turn the sound on.

- **◀ ↑ ▶** (or the arrow keys) pick your turn at the next intersection. Otherwise the autopilot decides.
- **Settings** has tilt steering, cruise speed (60 to 160 km/h), radio volume and host voices.
- For better host voices on iPhone, search Settings for "Voices" and download **Evan** and **Ava** (Premium).

## Project layout

- `index.html` is the whole game in one file (it is also published as a Claude artifact).
- `build.ps1` builds the GitHub Pages site into `docs/`, adding the page head, share-preview tags and icons.
- `docs/` is the published site. Don't edit it by hand; rebuild instead.
- `share.png` is the link-preview image, and `icon.svg` / `icon-180.png` are the browser and home-screen icons.

To rebuild the site after changing `index.html`:

```
powershell -ExecutionPolicy Bypass -File build.ps1 -SiteUrl https://<username>.github.io/long-way-home/
```

All world, music and voices are generated in the browser. No real songs, maps or brands are used.
