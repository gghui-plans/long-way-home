# High Sierra: winter region plan

The third region: a snowy mountain drive with lakeside ski villages, fireside jazz on the radio, and Christmas decorations in December. **Target: live by December 1, 2026.** Planning only; nothing is built. The shared foundation (region and station tables, map, road trip, handoff) already exists from the Redwood Coast; see REDWOOD-PLAN.md.

## Decided

- Snow region in the mountains, different from the Redwood Coast: you're climbing, not following a coast.
- Station genre: fireside jazz. No Christmas songs.
- Christmas decorations on this map only (not LA or the Redwood Coast), December 1 to January 1.
- It jumps the regions queue (ahead of Big Sur, Desert and Wine Country) so it's ready for December.
- 16 songs, laid out like the other stations: 14 vocal, 2 instrumental. Lyrics are in REGION-SONGS.md.

## 1. The big question: how to climb on a flat road

The road, the car, traffic and every prop sit at height 0, and the sea is a single flat plane at -6. A real road that goes uphill would mean adding a height under everything (car, traffic, people, props, signs, camera, far layer). That's too risky in six weeks.

**Recommended: the drop does the climbing.** The road stays level, and the land around it does the work:

- **Downhill side (west, where LA has the ocean):** a steep mountainside falling away below a guardrail to a valley and the lake. The drop grows toward the middle of each open stretch (the summit), so you feel higher and higher, then shrinks back to the shore as you reach the next village.
- **Uphill side (east):** granite walls and snowy peaks right above the road. The mountains that already exist inland get taller, with snow above a height line.
- **The lake** reuses the ocean plane. Its height follows the car, so it sits far below at the summit and comes up to the shore at the villages. Snowfall and haze hide the seams. **First job of batch 1: a quick test of this.** If it looks wrong, the fallback is a valley floor of snowy forest below the road, with the lake only near the villages.
- **More signs of height:** snow getting deeper toward the summit, pines thinning out, stronger wind, heavier snowfall, and an elevation sign at the top.
- **Bends:** the road can't do true hairpins (it can't double back on itself), but it can do tighter S-bends. The car already slows for curves. As a cheap touch, the switchbacks you "came up" are drawn on the slope below, with a few headlights crawling up them.

## 2. Look

- **Same style rule as the other regions:** the same materials, lighting and level of detail; only colours, props and fog change.
- **Snow on everything** comes from one setting on the shared material: anything facing up turns white, with a little noise in it. Roofs, pine tops, rocks and parked cars all get snow at once. The setting is off in LA and the Redwood Coast.
- **Light:** golden hour stays, but colder: a crisp blue fill light and pink alpenglow on the peaks.
- **Weather:** clear spells and snowing spells take turns (GPU snowflakes, like the bonfire smoke), with heavier snow near the summit.
- **The road:** the asphalt is wet and dark in the wheel tracks and white on the shoulders, with plowed snowbanks along the edges.

## 3. The open road (between villages)

- Climb out of a village, through pine forest, over the summit, then down to the next village.
- **Props:**
  - snowbanks and snow poles along the road;
  - rock cuts with icicles, a frozen waterfall;
  - a snow shed (a covered gallery over the road);
  - vista pull-outs over the lake;
  - a sno-park with sledders;
  - a chain-control checkpoint (generic signs, no agency branding) when it's snowing;
  - the summit pull-out with an elevation sign.
- **Traffic:** snowplows with flashing amber lights (the one outside model, baked like the log truck), and cars with ski racks and snow on their roofs.
- **Wildlife:** deer in the snow, ravens, Steller's jays.
- **Hero models:** the snowplow, and a chairlift that crosses over the road.

## 4. Villages

Lakeside ski villages: shorter grids, cozy, with lit windows everywhere (the same glow LA uses for neon).

- **Districts:**
  - a main street: A-frames and steep-roofed chalets, ski and rental shops, a bakery, a fondue place;
  - lakeside cabins with chimney smoke;
  - the ski hill on the village's inland edge: runs cut through the trees, chairlift towers, a lodge, skiers coming down;
  - a frozen rink or cove with skaters;
  - a sledding hill;
  - a gas station with a chain installer;
  - a motor lodge with a VACANCY sign.
- **The pier becomes a boat dock and marina,** with a paddle-wheel lake boat. The Ferris wheels become a gondola.
- **People:** puffy jackets, beanies, ski gear, carrying skis and boards; snowmen in the yards.
- **Region:** High Sierra. HUD highway: CA-89.
- **Village names** (fictional, 12 to match the others): Snowberry, Silver Fir, Alpenglow, Whitebark, Powder Ridge, Ember Lake, Hearthstone, Granite Hollow, Juniper Flat, Bear Paw, Cold Spring Crossing, Kettle Lake.
- **Street names:** Chairlift Rd, Gondola Way, Snowshoe Ln, Lodgepole Ave, Jeffrey Pine St, Aspen Dr, Mule Deer Rd, Boulder St, Cabin Ridge Rd, Sled Hill Ln, Summit Blvd, Ice House Rd, Trailhead Dr, Timberline Dr, Glacier Way.
- **Cross streets:** Lakeshore Blvd, Main St, Village Way, Dock St, Ski Run Blvd, Firelight Ln, Lantern St, Woodsmoke Dr, Snowmelt Ave, Hearth St, Cocoa St, Mitten Ln, Pinecone Ave, Marina Way.

## 5. Christmas decorations (December 1 to January 1, this map only)

- On by date, plus a Settings toggle ("Holiday decorations": auto, on, off).
- **Village:**
  - string lights on the A-frames and shops, wreaths on doors and lampposts;
  - a big lit tree in the village square, a tree lot, carolers;
  - lit sleds, snowmen in scarves and Santa hats.
- **Pass and lake:**
  - lit trees at the chain-control stop and the summit pull-out;
  - a snowplow with a wreath on its grille;
  - skaters in Santa hats;
  - the lake boat lit up.
- **Postcards:** a "Season's Greetings from <village>" title and a holiday stamp.
- Visuals only: the radio plays as normal. A few holiday host bits are optional.
- All lights are instanced glow (the existing glow material). Check performance with the lights on.

## 6. Songs (16)

**Sound:** fireside jazz: piano trio, upright bass, brushed drums, muted trumpet, saxophone, clarinet, vibraphone, nylon guitar for the bossa songs, one big-band song. Warm vintage production. Original songs only, no standards.

**Themes:** winter romance and cozy mountain life, year-round (no Christmas words, no sleigh bells). First snow, chains on, fogged-up windows, cocoa, snowed in, the chairlift, skating, night skiing, the summit, cold hands, mountain stars, snow days, alpenglow, mittens.

Like the other stations: 7 male, 5 female, 2 duets, 2 instrumentals. Everything for Suno is in REGION-SONGS.md.

| # | Title | Feel | Vocal | About |
|---|---|---|---|---|
| 1 | First Snow | Medium swing | F | The first snow; the whole town slows down |
| 2 | Chains On | Jump swing, playful | M | Putting chains on at the checkpoint, together |
| 3 | Fogged-Up Windows | Slow ballad | F | Parked at the overlook; the view disappears |
| 4 | Cocoa for Two | Bossa nova | Duet | Cocoa at the lodge, arguing over marshmallows |
| 5 | Snowed In | Mid-tempo swing | M | The pass is closed, and he's glad |
| 6 | Chairlift | Breezy bossa | M | Eight minutes on a lift beside someone new |
| 7 | Figure Eights | Jazz waltz | F | Skating on the frozen lake at dusk |
| 8 | Night Skiing | Cool jazz | M | Last runs under the floodlights |
| 9 | Top of the Pass | Big band | M | The climb, curve by curve, to the summit view (the station's driving song) |
| 10 | Cold Hands, Warm Heart | Piano-trio ballad | F | Tucking cold hands into his coat |
| 11 | Mountain Stars | Late-night ballad | M | More stars than he's ever seen |
| 12 | Snow Day | Bouncy swing, scat | F | Everything's closed; the whole town plays |
| 13 | Alpenglow | Ballad duet | Duet | Stay a minute more for the pink light |
| 14 | Mittens | Playful swing | M | One lost mitten, so they share a pair |
| 15 | Lodge Fire | Piano trio | Instrumental | Late night, embers |
| 16 | Fresh Tracks | Upbeat bossa | Instrumental | First run through untouched snow |

Suno Pro allows far more than 20 downloads a month (the user's word, 2026-10-18), so these 16 songs and the 32 new K-JAM and Coffee Cabin songs don't compete for downloads. The lyrics still need to be final by Nov 2.

## 7. Radio: The Fireside (proposed, not decided)

**Station:** "96.1, The Fireside. Jazz by the fire, chains on the tires."

**Tone:** smooth versus stoked. One host wants everything classy and slow; the other bursts in with powder reports. Same comedy rules as the others: escalation, twist endings, callbacks to station lore.

**Hosts (proposed):**
- **Lionel:** a velvet-voiced late-night jazz DJ in his 60s. Talks slowly, describes songs like fine wine, and takes the lodge's ancient hot tub very seriously.
- **Skye:** a ski patroller who does the morning chain-control and powder reports. Relentlessly stoked, and interrupts Lionel's sentences.

**Lore to call back to:**
- the studio above the bar of an old ski lodge;
- Bertha, the lodge's ancient snowcat;
- Gerald, the bear who raids the dumpster;
- Hank, the plow driver who calls in;
- Velvet, Lionel's cat;
- a friendly rivalry with the Coffee Cabin (Walt says sitting by a fire isn't radio);
- Rick and Dana calling from LA, horrified by snow.

**Segments (about 150 clips, the same set as the Coffee Cabin):**

| K-JAM | The Fireside | Count |
|---|---|---|
| Song intros (intro + introb) | Same | 32 |
| Traffic report | Chain control and road report | 6 |
| Sig Alert | Plow Alert / Whiteout Watch | 4 |
| Dana's shortcut | Skye's "secret stash" (a powder spot she won't name) | 4 |
| Ads | Lodge bulletin board (ski swap, lost glove, hot tub rules, fondue night) | 4 |
| Fast Lane Facts | Snow Notes (real snow and Sierra facts) | 16 |
| Callers | Locals: Hank the plow driver, a lift operator, an LA tourist with no chains, a snowman-contest judge, a man who's been in the hot tub since Tuesday, and others | 13 |
| Town names | Village names | 12 |
| Station IDs, welcome, clock | Same | ~8 |
| Reactions | town, lake (in place of coast), steer, speed, postcard, dock (in place of pier), summit (new) | ~16 |
| Milestones, record, back, focus, request | Same set, redone | ~20 |
| Handoffs | See below | ~20 |
| Holiday bits (optional, December only) | A few | ~4 |

**Handoffs:** the existing farewells name their destination (Dana says "heading north!"), so the mountains need their own:
- K-JAM goodbyes to the mountains, and Coffee Cabin goodbyes to the mountains;
- Fireside arrivals: from the south, and from the coast;
- Fireside goodbyes;
- welcome-backs on both other stations.

That's about 3 variants each.

ElevenLabs credits on hand cover this many times over (about 37K credits left as of 2026-10-05).

## 8. Ambient sound (radio off)

Wind through the pines, a soft crunch of tires on snow, the lake lapping at the docks, a distant ski-lift hum, ravens and jays, a creaking cabin, chimney crackle in the villages. No sleigh bells. Sourcing follows NATURE-SOURCES.md.

## 9. Map and road trip

- **Map:** "Drive to: Los Angeles · Redwood Coast · High Sierra".
- **Road trip:** a loop, LA → Redwood Coast → High Sierra → LA, 30 minutes each.
- **The handover** blends across an open stretch like now. The ocean turns into the lake and the beaches into granite, and the snow fades in across the blend. That's the "snow line" moment.
- **Code work:** a lot of region code is written for exactly two regions (about 17 checks for "how much redwood country" plus about 22 places that test for the Redwood Coast by name). Batch 1 turns these into "how much of region X", so a third region, and every one after it, slots in.

## Build batches

All work goes on a `winter` branch; `main` stays what's live. Ship once, when it's all done.

1. **Foundation and altitude test (code):**
   - make the region code work for any number of regions;
   - add a third REGIONS entry and a `#sierra` address shortcut;
   - the snow setting on the shared material;
   - test the lake-follows-the-car idea.
   - LA and the Redwood Coast must look exactly the same afterwards.
2. **World (code):** the pass profile (drop, walls, peaks, snow line), the lake and its shores, pines and granite, road snow and snowbanks, the villages and their districts, names and signs.
3. **Life and weather (code):** snowfall cycles, skaters, sledders, skiers, snowmen, deer, snowplows, the chain-control stop, the summit pull-out, the snow shed, the switchbacks below.
4. **Writing (runs alongside 1–3):**
   - station and host names;
   - final song lyrics (drafted) **by November 2**, so you can generate them in Suno on November 3;
   - the radio script (about 150 clips) by mid-November, then you record them.
5. **Map and handoff (code):** the three-region map, the road trip loop, and the new handoff clips (device voices stand in until the recordings arrive).
6. **Audio and polish:**
   - songs and clips dropped in (music and voice scripts, whisper for the lyrics);
   - ambient sound;
   - the hero models (snowplow, chairlift);
   - the region's postcard stamp and title;
   - the Christmas decorations.
7. **Phone test and ship:** a long drive on your phone (warmth and frame rate with snow and lights), then merge and run `build.ps1`. **Ship by December 1.**

## Timeline

| Week | Code | Writing and audio |
|---|---|---|
| Oct 19–25 | Batch 1 | Confirm the station, hosts and songs |
| Oct 26–Nov 1 | Batch 2 | Draft the radio script |
| Nov 2–8 | Batch 3 | **Nov 3: generate the 16 songs in Suno**; review the script |
| Nov 9–15 | Batch 5 | Record the clips (ElevenLabs) |
| Nov 16–22 | Batch 6 | Retakes |
| Nov 23–30 | Batch 7 | |

**If it runs late:** ship the map with the songs and only the most important clips (IDs, intros, handoffs), and add the rest of the script in December. The decorations switch on by date, so they're there from day one either way.

## Open

- Station name and frequency, and host names and voices.
- Convertible top up or down in the snow (the top stays down everywhere else; the hosts could joke about it).
- Snowfall: weather cycles (proposed) or always snowing.
- The road trip loop order.
