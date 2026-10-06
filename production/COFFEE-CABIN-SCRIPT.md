# 89.3 The Coffee Cabin: radio script (DRAFT, not recorded yet)

The Redwood Coast station. For review: mark lines to cut, rewrite or keep. Nothing goes to ElevenLabs until you approve.
Numbers are written as digits here and get spelled out for the voices when recorded ("eighty-nine point three"), like the K-JAM bits.

---

## The hosts

**Marj and Walt**, married 41 years, broadcasting from the living room of their cabin. Quiet, cozy, deadpan. The comedy is gentle bickering and treating tiny things as big news. The songs are sincere, so the hosts keep things light.

- **MARJ**: warm, quick, runs the board. Corrects every story Walt tells, with exact numbers. Gets misty about trees, her garden and the songs. Says "Walter" when he's in trouble. Calls listeners "hon".
- **WALT**: bone-dry, slow, few words. Tall tales (he invented fog; he once arm-wrestled an elk). Retired log-truck driver and volunteer fire chief. "Fixed" the antenna himself. Loves the percolator. Pretends songs don't get to him.

**Voices (ElevenLabs, to pick):** Marj in her 60s, warm, a little husky, lively. Walt in his late 60s, low, slow and gravelly.

**Station lore to call back to:**
- The percolator gurgles on air.
- The generator cuts out; Walt says he fixed it.
- Biscuit, the station dog, who has eaten several cables.
- The antenna Walt fixed with a coat hanger. The signal reaches "about 40 miles" (Walt says 38).
- Walt's chair, held together with duct tape.
- A pie feud with Gull Harbor, the next town over.
- Walt's Bigfoot sighting log. Every entry is Walt.
- Lou, the banana slug from *Little Rain Boots*.
- Their grown daughter Becky calls in now and then. Lou may have been a pinecone.
- Harold, a 900-pound bull elk (Elk Alert).
- Townsfolk: Earl (firewood), Dolores (the Gull Harbor diner), Sheriff Dot, Gus (the lighthouse), Norm (the slug race), Ernie (half the house band), and Walt's brother Ray.
- Rick and Dana call in from L.A. sometimes.

---

## Clip inventory

Mirrors K-JAM's set (about 150 clips) so the game code can reuse the same slots. Batches get written in this order.

| Batch | K-JAM slot | Coffee Cabin version | Clips | Status |
|---|---|---|---|---|
| 1 | (new) | Handoff: K-JAM farewells, Coffee Cabin arrivals, Coffee Cabin farewells, K-JAM welcome-backs | 12 | **drafted below** |
| 1 | id | Station IDs | 3 | **drafted below** |
| 1 | clock | Time of day | 4 | **drafted below** |
| 1 | after | After a song | 3 | **drafted below** |
| 1 | red | Stopped at a light | 3 | **drafted below** |
| 2 | intro + introb | Song intros: a short one and a story one per song | 32 | **drafted below** |
| 3 | traffic | Fog Report | 6 | **drafted below** |
| 3 | sigalert | Elk Alert | 4 | **drafted below** |
| 3 | shortcut | Walt's "There Is One Road" | 4 | **drafted below** |
| 3 | ad | Community Bulletin Board | 4 | **drafted below** |
| 4 | facts | Nature Notes (real redwood and coast facts) | 16 | **drafted below** |
| 5 | call | Callers | 13 | **drafted below** |
| 6 | town, townname, place, pier | Town and scenery reactions (the pier slot becomes the drive-through tree) | 30 | **drafted below** |
| 6 | steer, speed, postcard | Player reactions | 6 | **drafted below** |
| 6 | milestone, record, back | Hands-free streak | 9 | **drafted below** |
| 6 | request, plug | Song requests | 7 | **drafted below** |
| 6 | focus (20, 30, end, back) | Focus drive | 4 | **drafted below** |
| 6 | welcome | Not needed: the drive always starts on K-JAM, and the arrival clips do this job | 0 | |

---

## Batch 1

### Handoff: K-JAM farewells (Rick and Dana, as the signal breaks up)

The game adds the static and dropouts. `[cut]` marks where the signal dies mid-line. The game picks one, preferring ones you haven't heard.

**handoff-out-01 · For trees**
- DANA: Rick, the signal's getting fuzzy. I think they're driving out of range!
- RICK: It's happening, Dana. They're leaving us. For trees.
- DANA: Aww! Go! Have fun! Wear a jacket, it's cold up there!
- RICK: And don't trust the fog. The fog is— `[cut]`

**handoff-out-02 · Too tall**
- RICK: We're losing them, Dana.
- DANA: Bye, sweetie! Send us a postcard!
- RICK: And tell the redwoods they're too tall. It's showing off. Nobody needs to be three hundred feet— `[cut]`

**handoff-out-03 · Gary moved**
- DANA: Looks like you're heading north! Say hi to the elk for us!
- RICK: Last time someone went north, Dana, we never heard from them again.
- DANA: That was Gary. Gary moved.
- RICK: Gary was a good man. Gary always signaled. Gary— `[cut]`

### Handoff: Coffee Cabin arrivals (after the static clears)

**arrive-01 · The little light** (plays the first time; doubles as the station introduction)
- MARJ: Oh! Walt, I think somebody new just tuned in.
- WALT: How can you tell.
- MARJ: The little light on the board blinked.
- WALT: That's the generator.
- MARJ: Well, whoever you are, welcome. You're listening to 89.3, The Coffee Cabin. Best served with a cozy sweater and hot coffee. I'm Marj.
- WALT: Walt.
- MARJ: We broadcast from our living room. Wipe your feet.

**arrive-02 · Smell that**
- MARJ: If you just drove in from the south, welcome to the redwoods, hon. Roll your window down. Smell that?
- WALT: That's the percolator.
- MARJ: It's the forest, Walter.
- WALT: It's a little of both.

**arrive-03 · At the window**
- WALT: Car coming in from the south. Convertible.
- MARJ: How do you know that?
- WALT: I'm at the window.
- MARJ: He's at the window. Welcome back to The Coffee Cabin, hon.

### Handoff: Coffee Cabin farewells (heading back south)

**leave-01 · The muffin**
- MARJ: Oh, the signal's going. Sounds like you're heading south, hon.
- WALT: Back to the city.
- MARJ: Drive safe. Take a muffin.
- WALT: They can't take a muffin, Marj. It's the radio.
- MARJ: Well, I wrapped one anyway, so it's— `[cut]`

**leave-02 · Slow down**
- WALT: Losing you.
- MARJ: Bye, hon! Tell those L.A. folks to slow down!
- WALT: They won't.
- MARJ: Tell them anyway! And come back when the— `[cut]`

**leave-03 · He's waving**
- MARJ: There they go. Walt, wave.
- WALT: I'm waving.
- MARJ: He's waving. You can't see it, but he's waving. Bye now! The pot's always— `[cut]`

### Handoff: K-JAM welcome-backs

**return-01 · Wood smoke**
- DANA: Is that... Rick! They're back! They came back!
- RICK: They smell like wood smoke.
- DANA: Welcome home, sweetie! How were the trees?
- RICK: Tall, Dana. They were tall. Now please. Merge.

**return-02 · Your seat**
- RICK: Signal's back. Unfortunately, so is the traffic.
- DANA: Welcome back to K-JAM! We missed you!
- RICK: I didn't. I kept your seat warm, though. By accident.

**return-03 · I'd take the elk**
- DANA: Welcome back to the sunshine!
- RICK: Did they have traffic up there?
- DANA: Elk, mostly!
- RICK: ...I'd take the elk.

### Station IDs

**id-01 · Lukewarm**
- MARJ: You're listening to 89.3, The Coffee Cabin. Best served with a cozy sweater and hot coffee.
- WALT: Or lukewarm. I'm not picky.
- MARJ: He's very picky.

**id-02 · Very professional**
- WALT: 89.3. The Coffee Cabin. Live from our living room.
- MARJ: Excuse the dog.
- WALT: Biscuit's been very professional today.
- MARJ: Biscuit ate a microphone cable at nine a.m.
- WALT: Very professional otherwise.

**id-03 · Thirty-eight miles**
- MARJ: This is The Coffee Cabin, 89.3. Our signal reaches about 40 miles.
- WALT: 38.
- MARJ: 40 on a clear day.
- WALT: It's never clear, Marj.
- MARJ: Then 38. Hello to all 38 miles of you.

### Time of day (on the second break of a drive)

**clock-morning · The first cup**
- MARJ: Good morning, hon. Walt's had his first cup.
- WALT: Second.
- MARJ: You said that was your first.
- WALT: The first one doesn't count. That's just to find the second one.

**clock-midday · Soup**
- WALT: Lunchtime. Marj made soup.
- MARJ: I make soup every day.
- WALT: That's why I don't have to say what kind. It's soup.

**clock-evening · Best chair**
- MARJ: Evening, everybody. The fog's coming in, the woodstove's going, and Walt's in his chair.
- WALT: Best chair in the county.
- MARJ: It's held together with duct tape.
- WALT: Best duct tape in the county.

**clock-late · Eyes closed**
- MARJ: If you're driving with us this late, pull over if you get sleepy, hon. Walt's asleep.
- WALT: I'm awake.
- MARJ: He was asleep.
- WALT: I was listening with my eyes closed.

### After a song

**after-01**
- MARJ: Oh, I love that one.

**after-02**
- WALT: That one made Marj cry.
- MARJ: It did not.
- WALT: She's crying right now.

**after-03**
- MARJ: Walt, you were humming.
- WALT: I don't hum.
- MARJ: He hums.

### Stopped at a light

**red-01 · You found one**
- WALT: If you're stopped at a red light right now, congratulations. You found one.
- MARJ: We only have a few. We're very proud of them.

**red-02 · Long light**
- MARJ: Stopped at a light? Good time for a sip of coffee, hon.
- WALT: Or two sips. It's a long light.
- MARJ: It's a forty-second light.
- WALT: Long light.

**red-03 · Every morning**
- WALT: That stoplight went in in 1987. Town took a vote.
- MARJ: You voted against it.
- WALT: I still do. Every morning.

---

## Batch 2: song intros

Every break ends with a song intro, so they can't all be long. Each song gets two:

- **Short intro** (`intro-…`, about 3–8 s): the band, the title, one quick joke.
- **Story intro** (`introb-…`, about 15–25 s): a small Marj-and-Walt memory that sets up the song's feeling. It's funny, but lands warm, so the sincere songs hit harder. Walt never admits a song got to him.

The game already alternates the two and prefers the one you haven't heard, so a story comes about every other time a song plays.

**Code note for batch 5:** K-JAM's first intro is a single line stored on the song. These short intros have up to three lines, so they'll be stored like `introb` instead.

**Timeline the stories share** (kept consistent across the whole script):
- 1983: first dance at the Grange Hall
- 1985: married; drove away in her father's borrowed pickup
- 1987: Walt paints the fog line to Mossbridge; the stoplight goes in
- About 1990: Becky is born and Walt plants a redwood in the yard
- 30 years driving log trucks, mostly nights
- Today: Becky is grown with kids of her own

### 1. Fog Line (The Fogbank Family Band)

**intro-fog-line**
- MARJ: Here's the Fogbank Family Band. Fog Line. Headlights on, hon.

**introb-fog-line · Happy Birthday at mile twelve**
- MARJ: You know what a fog line is, hon? That white line along the edge of the road.
- WALT: Follow it in the fog, you get home.
- MARJ: Walt painted that line. The whole way to Mossbridge. Summer of '87.
- WALT: '86.
- MARJ: '87. You missed my birthday doing it.
- WALT: I painted "Happy Birthday" on the shoulder at mile twelve.
- MARJ: ...He did. It's still there if you squint. The Fogbank Family Band. Fog Line.

### 2. Headlights Home (Elliot Shore)

**intro-headlights-home**
- WALT: Elliot Shore. Headlights Home.
- MARJ: Walt drove nights for thirty years. He says this one doesn't get him.
- WALT: It doesn't.

**introb-headlights-home · Sawdust on the stairs**
- WALT: Thirty years I drove a log truck. Nights, mostly.
- MARJ: And every night I left the porch light on, and Becky tried to wait up.
- WALT: Fell asleep on the stairs. Every time. Little blanket.
- MARJ: And he'd carry her up still in his boots. Sawdust on every step.
- WALT: Worth it.
- MARJ: ...It was. Here's Elliot Shore. Headlights Home.

### 3. Little Rain Boots (Kai Morrow)

**intro-little-rain-boots**
- MARJ: Kai Morrow. Little Rain Boots. Puddles are free, folks.

**introb-little-rain-boots · Lou**
- MARJ: When Becky was four, she wore her rain boots every single day for a year.
- WALT: To bed.
- MARJ: To bed! To church! To the dentist!
- WALT: Then she found a banana slug, named it Lou, and wouldn't leave the porch for a week.
- MARJ: Walt says Lou's still out there.
- WALT: Lou's still out there.
- MARJ: Walt, that was thirty years ago.
- WALT: Lou's very slow.
- MARJ: Kai Morrow. Little Rain Boots.

### 4. Pie All Day (Ruby & the Roadhouse)

**intro-pie-all-day**
- WALT: Ruby and the Roadhouse. Pie All Day. Which is also my schedule.

**introb-pie-all-day · The pie situation**
- WALT: Small update on the pie situation.
- MARJ: Oh no.
- WALT: The diner in Gull Harbor put up a new sign. "Best Pie on the Coast."
- MARJ: Walt.
- WALT: Our diner's sign says "Pie All Day." That's a quantity, Marj. That's a commitment.
- MARJ: You are not driving over there.
- WALT: I'm not driving over there. ...I'm sending Biscuit.
- MARJ: Ruby and the Roadhouse. Pie All Day.

### 5. Elk Crossing (Hollow Pine Revival)

**intro-elk-crossing**
- MARJ: Hollow Pine Revival. Elk Crossing. If you're stuck behind a herd right now, this one's for you.
- WALT: They don't care. They never care.

**introb-elk-crossing · Locked antlers**
- MARJ: Walt has a story about the elk.
- WALT: Arm-wrestled one.
- MARJ: He did not.
- WALT: Big bull, out by the meadow. 1982. We locked antlers.
- MARJ: You don't have antlers, Walter.
- WALT: I had a hat with antlers on it.
- MARJ: ...He did have the hat. Hollow Pine Revival. Elk Crossing.

### 6. Second Cup (Theo Lane)

**intro-second-cup**
- WALT: Theo Lane. Second Cup. I'm on my fourth.
- MARJ: He's on his fourth.

**introb-second-cup · The morning of the flood**
- MARJ: Forty-one years, Walt's brought me coffee in bed every single morning.
- WALT: Not every morning.
- MARJ: Every morning.
- WALT: There was the morning of the flood.
- MARJ: He waded to the kitchen in his fishing waders and brought it anyway.
- WALT: Cold, though.
- MARJ: Best cup I ever had. Theo Lane. Second Cup.

### 7. Two-Lane Hymn (The Evening Pines)

**intro-two-lane-hymn**
- MARJ: The Evening Pines. Two-Lane Hymn. Roll the window down for this one.

**introb-two-lane-hymn · Daddy's pickup**
- WALT: First car we had was a borrowed pickup. Her father's.
- MARJ: Daddy didn't know we'd borrowed it.
- WALT: Found out when we drove it back with "Just Married" on the tailgate.
- MARJ: Then he made us keep it. Said it didn't feel like his anymore.
- WALT: That truck's still out back.
- MARJ: Biscuit lives in it now. The Evening Pines. Two-Lane Hymn.

### 8. Driftwood Fire (Low Tide Lanterns)

**intro-driftwood-fire**
- WALT: Low Tide Lanterns. Driftwood Fire. The fire chief says, put it out when you're done.
- MARJ: You are the fire chief.
- WALT: I know what he says.

**introb-driftwood-fire · Well supervised**
- MARJ: Every Fourth of July, the whole town builds a driftwood fire down on the beach.
- WALT: Fire chief supervises.
- MARJ: You're the fire chief.
- WALT: That's why it's well supervised.
- MARJ: Last year he brought an extinguisher, two buckets, a hose and a lawn chair.
- WALT: Chair's for supervising.
- MARJ: He was asleep in it by nine. Low Tide Lanterns. Driftwood Fire.

### 9. Forty Miles to You (The Mile Markers)

**intro-forty-miles-to-you**
- MARJ: The Mile Markers. Forty Miles to You. Somebody out there's almost home.

**introb-forty-miles-to-you · Long weather**
- WALT: When Becky was at college, she'd call every Sunday from the road home.
- MARJ: "Mom, I'm forty miles out." "Mom, I'm thirty." "Mom, I'm at the elk."
- WALT: There's always the elk.
- MARJ: And Walt would stand at the window the whole time.
- WALT: I was checking the weather.
- MARJ: For two hours.
- WALT: Long weather.
- MARJ: The Mile Markers. Forty Miles to You.

### 10. Woodstove Waltz (Annie & Cal)

**intro-woodstove-waltz**
- WALT: Annie and Cal. Woodstove Waltz.
- MARJ: Walt, are you getting up?
- WALT: My knees are thinking about it.

**introb-woodstove-waltz · Keeping score**
- MARJ: Our first dance was at the Grange Hall. 1983.
- WALT: '84.
- MARJ: '83, Walter. You stepped on my foot eleven times.
- WALT: You counted.
- MARJ: I've counted every time since. We're at about four thousand.
- WALT: Four thousand and twelve.
- MARJ: ...You count too?
- WALT: Somebody has to keep score.
- MARJ: Annie and Cal. Woodstove Waltz.

### 11. Sea Stack Serenade (Stella Rae)

**intro-sea-stack-serenade**
- MARJ: Stella Rae. Sea Stack Serenade. Pull into the next turnout if you can, hon. Just for a minute.

**introb-sea-stack-serenade · Strategy**
- WALT: There's a turnout past Driftwood Bay. Three big rocks in the water.
- MARJ: That's where he proposed.
- WALT: Tried to. Ring fell in a tide pool.
- MARJ: So he went in after it. In November.
- WALT: Found it in a sea anemone.
- MARJ: And I said yes before he even got out of the water, because he was turning blue.
- WALT: Strategy.
- MARJ: Stella Rae. Sea Stack Serenade.

### 12. Flannel Weather (Wren Holloway)

**intro-flannel-weather**
- WALT: Wren Holloway. Flannel Weather. I'm wearing flannel.
- MARJ: You're always wearing flannel.
- WALT: It's always flannel weather.

**introb-flannel-weather · Twelve pies**
- MARJ: First cold snap of the year, and Becky's bringing the grandkids up this weekend!
- WALT: Marj has made eleven pies.
- MARJ: Twelve.
- WALT: For five people.
- MARJ: Your brother's coming.
- WALT: ...Twelve's about right. Wren Holloway. Flannel Weather.

### 13. Old Growth (Tall Timber)

**intro-old-growth**
- MARJ: Tall Timber. Old Growth. Grab a tissue.
- WALT: I'm fine.
- MARJ: I didn't say it was for you.

**introb-old-growth · Size of a pencil**
- WALT: Some of these trees were here two thousand years before anybody.
- MARJ: Walt planted one in the yard the day Becky was born.
- WALT: Little redwood. Size of a pencil.
- MARJ: It's taller than the house now.
- WALT: So's Becky. Practically.
- MARJ: She's five foot two.
- WALT: It's a small house.
- MARJ: Tall Timber. Old Growth.

### 14. Porch Light (Hazel Quinn)

**intro-porch-light**
- WALT: Hazel Quinn. Porch Light. Ours has been on since the day we moved in.
- MARJ: The bulb hasn't. He changes it every spring.

**introb-porch-light · The long way home**
- MARJ: My mother left her porch light on every night of her life.
- WALT: Kept a spare bulb in her purse. Just in case.
- MARJ: In case of what, I never knew.
- WALT: In case of me. Back when I was courting you, I took the long way home every night. Just to drive past it.
- MARJ: ...You never told me that.
- WALT: Forty-one years. Gotta save something.
- MARJ: Hazel Quinn. Porch Light.

### 15. Fiddlehead (The Coffee Cabin House Band)

**intro-fiddlehead**
- MARJ: No words on this one. Here's the house band. Fiddlehead.
- WALT: The house band is a fella named Ernie and his cousin.

**introb-fiddlehead · Chewy**
- WALT: A fiddlehead's a baby fern. Before it unrolls.
- MARJ: You can eat them, you know. I sautéed some once.
- WALT: They were chewy.
- MARJ: They were lovely.
- WALT: They were lovely and chewy.
- MARJ: Here's the house band, with a fiddlehead you can't eat. Fiddlehead.

### 16. Morning Burn-off (The Coffee Cabin House Band)

**intro-morning-burn-off**
- WALT: Morning Burn-off. Just guitar. Like the fog lifting.
- MARJ: That was almost poetic, Walt.
- WALT: Don't get used to it.

**introb-morning-burn-off · Making sure it leaves**
- MARJ: You know how the fog burns off around ten? Comes up off the road like steam off a cup?
- WALT: Every morning I sit on the porch and watch it go.
- MARJ: Every single morning.
- WALT: Somebody's got to make sure it leaves.
- MARJ: ...Here's the house band. Morning Burn-off.

---

## Batch 3: segments

These fill K-JAM's segment slots and rotate the same way (each kind once per round). About 15–30 s each.

### Fog Report (in place of K-JAM's traffic report)

Walt reports the fog from the window, measured in whatever he can still see.

**fog-01 · One cow**
- MARJ: Time for the Fog Report. Walt?
- WALT: Visibility is one cow.
- MARJ: One cow.
- WALT: I can see one cow. Past the cow, unknown.
- MARJ: Is it a big cow?
- WALT: Medium cow. Drive accordingly.

**fog-02 · The mailbox**
- WALT: Fog Report. I can see the mailbox.
- MARJ: Oh, that's not bad!
- WALT: I can't see the post.
- MARJ: ...Then how is the mailbox—
- WALT: That's the mystery, Marj. That's the fog.

**fog-03 · The kettle**
- MARJ: Fog's thick this morning, hon. Walt, anything to add?
- WALT: I invented this fog.
- MARJ: You did not.
- WALT: Summer of '71. Left the kettle on.
- MARJ: The whole coast, Walter?
- WALT: It was a big kettle.

**fog-04 · The instrument**
- MARJ: Fog Report. Walt's out on the porch with the instrument.
- WALT: Licked my finger. Held it up.
- MARJ: And?
- WALT: Wet.
- MARJ: It's always wet, Walt.
- WALT: Forecast's consistent. That's good news.

**fog-05 · The woodpile**
Walt's lines marked *(outside)* get a muffled, far-off filter in processing.
- MARJ: Fog Report. Walt went out to check the fog about twenty minutes ago. Walt?
- MARJ: ...Walt?
- WALT *(outside)*: I'm by the woodpile.
- MARJ: The woodpile is six feet from the door, Walter.
- WALT *(outside)*: Visibility, five feet.
- MARJ: There you have it, folks.

**fog-06 · Next Thursday**
- WALT: Fog Report. Fog's lifting.
- MARJ: Oh, lovely!
- WALT: Going up. Slowly.
- MARJ: How slowly?
- WALT: It'll be gone by Thursday.
- MARJ: It's Friday, hon.
- WALT: Next Thursday.

### Elk Alert (in place of Sig Alert Theatre)

Breaking news about Harold, a 900-pound bull elk with no respect for traffic. A recurring character, like K-JAM's Gary.

**elk-01 · Harold**
- MARJ: This is an Elk Alert.
- WALT: Harold's in the road.
- MARJ: Harold is a bull elk, for our new listeners. About eight hundred pounds.
- WALT: Nine hundred. He's been at the diner.
- MARJ: Harold is standing in the northbound lane, looking at a car.
- WALT: The car is looking back.
- MARJ: We'll keep you posted.

**elk-02 · The negotiation**
- WALT: Elk Alert. Harold's back.
- MARJ: He's blocking the road by the meadow again.
- WALT: Fella in a camper van got out to reason with him.
- MARJ: Oh no. How's that going?
- WALT: Harold's in the camper van now.
- MARJ: ...Drive around, folks.

**elk-03 · Thirty-one elk**
- MARJ: Elk Alert! Harold's crossing with the whole herd. Cows, calves, everybody!
- WALT: Thirty-one elk.
- MARJ: You counted?
- WALT: Thirty-one elk. One Bigfoot.
- MARJ: Walter.
- WALT: Writing it down.

**elk-04 · Two parking spots**
- WALT: Elk Alert. Harold is lying down in the parking lot of the general store.
- MARJ: In a parking spot?
- WALT: Two parking spots.
- MARJ: Is anybody going to ask him to move?
- WALT: Sheriff gave him a ticket.
- MARJ: He gave the elk a ticket?
- WALT: Harold ate it. Case closed.

### Walt's "There Is One Road" (in place of Dana's shortcut of the day)

Marj keeps trying to make it a real segment. Walt's answer never changes.

**road-01 · Never been wrong**
- MARJ: Time for Walt's shortcut of the day!
- WALT: There is one road.
- MARJ: That's it?
- WALT: Stay on it.
- MARJ: Every day, folks. Thirty-one years running.
- WALT: Never been wrong.

**road-02 · One pie**
- MARJ: We got a letter for Walt's shortcut segment! "Dear Walt, is there a faster way to Gull Harbor?"
- WALT: There is one road.
- MARJ: They also asked where to get pie.
- WALT: There is one pie. It's ours.

**road-03 · The detour**
- WALT: Shortcut of the day. There is one road.
- MARJ: Walt, the county put up a detour sign this morning.
- WALT: ...There are two roads.
- MARJ: Just for today.
- WALT: I don't like it, Marj. I don't like it at all.

**road-04 · The old logging trail**
- MARJ: Shortcut of the day! Walt, folks want to know about the old logging trail.
- WALT: That's not a road. That's a rumor.
- MARJ: Becky took it once.
- WALT: Took her three days.
- MARJ: She was fifteen. She was on foot.
- WALT: There is one road.

### Community Bulletin Board (in place of K-JAM's fake ads)

Notices from around town, read out between songs.

**ad-01 · Pepper**
- MARJ: The Community Bulletin Board! First up, lost goat. Answers to Pepper. Last seen eating a mailbox on Spruce Street.
- WALT: Second notice. Found mailbox. Partially eaten.
- MARJ: Third notice. Found goat.
- WALT: Those three folks should talk.

**ad-02 · Earl's firewood**
- WALT: Bulletin board. Firewood for sale. Seasoned, stacked. Ask for Earl.
- MARJ: Earl's firewood is very good.
- WALT: Earl's firewood is our firewood.
- MARJ: What?
- WALT: That's why it's so good. ...I'm going to go talk to Earl.

**ad-03 · Pancake breakfast**
- MARJ: Bulletin board! The volunteer fire department's pancake breakfast is Saturday at the station.
- WALT: All you can eat.
- MARJ: All you can eat, until Walt eats it all.
- WALT: Last year we ran out at 7:15.
- MARJ: It started at seven.
- WALT: I was supervising.

**ad-04 · The sighting log**
- WALT: Bulletin board. The Bigfoot sighting log is open at the general store. Write down your sightings.
- MARJ: Walt, there are forty entries in there.
- WALT: Forty-two.
- MARJ: And they're all in your handwriting.
- WALT: He's shy, Marj. He only comes out for me.

---

## Batch 4: Nature Notes (in place of Fast Lane Facts)

A real, checkable fact about the redwoods or the coast. Marj delights in it; Walt turns it into a tall tale, a callback or himself. Like Fast Lane Facts, they play in order and are remembered between drives. About 20–30 s each.

The numbers are rounded to what's widely published. Hedged wording ("up to", "about") is deliberate; keep it if lines get edited.

**nature-01 · The tall one**
- MARJ: Nature Notes! The tallest tree in the world is a coast redwood, right up here. They call it Hyperion. Three hundred and eighty feet!
- WALT: Taller than a thirty-five-story building.
- MARJ: And where it is is a secret. The rangers won't say. You can get fined just for going near it.
- WALT: I know where it is.
- MARJ: You do not.
- WALT: It's the tall one.

**nature-02 · Drinking the fog**
- MARJ: Nature Notes! Redwoods drink the fog. It collects on the needles and drips down to the roots, and some of it soaks right in through the leaves. In summer, fog can be up to a third of their water.
- WALT: So the fog's useful.
- MARJ: Very useful.
- WALT: Told you that kettle was a good idea.

**nature-03 · Somebody licked Lou**
- MARJ: Nature Notes! Banana slugs can grow up to ten inches long. They're bright yellow, and their slime can numb your tongue.
- WALT: How do we know that?
- MARJ: ...Somebody licked one.
- WALT: Somebody licked Lou.
- MARJ: Becky was four, Walter.

**nature-04 · Mostly fog**
- WALT: Nature Notes. Some coast redwoods are over two thousand years old.
- MARJ: Alive since the Roman Empire! Think of everything they've seen.
- WALT: Mostly fog.
- MARJ: ...Mostly fog.

**nature-05 · Thick-skinned**
- MARJ: Nature Notes! Redwood bark can be a foot thick. It's spongy and it hardly burns, so most redwoods live right through a forest fire.
- WALT: And there's no sap in it, so the bugs leave it alone.
- MARJ: Thick-skinned, doesn't burn, nothing bothers it.
- WALT: That's me.
- MARJ: That's Walt.

**nature-06 · Fairy rings**
- MARJ: Nature Notes! When an old redwood falls, new trees sprout from its roots in a circle around where it stood. They call it a fairy ring.
- WALT: Same roots. Same tree, really.
- MARJ: All the little ones grow up around where the parent was.
- WALT: ...That's nice.
- MARJ: Walt's having a moment.
- WALT: I'm having allergies.

**nature-07 · Holding hands**
- WALT: Nature Notes. Redwood roots only go down about six to twelve feet.
- MARJ: For a tree three hundred feet tall?
- WALT: But they spread out a hundred feet, and they grab onto the neighbors' roots. Whole grove holds on together. Wind can't knock 'em over.
- MARJ: Oh, Walt. They hold hands.
- WALT: I didn't say hands.
- MARJ: They hold hands.
- WALT: ...Fine. They hold hands.

**nature-08 · Big-boned**
- MARJ: Nature Notes! The elk around here are Roosevelt elk. The biggest elk in North America, named after President Theodore Roosevelt.
- WALT: Bulls get up to about a thousand pounds.
- MARJ: So Harold's a normal size!
- WALT: Harold's big-boned.

**nature-09 · Seal or sea lion**
- WALT: Nature Notes. How to tell a seal from a sea lion.
- MARJ: Ooh.
- WALT: Sea lion's got little ear flaps, walks on its flippers and barks. Seal's got no ear flaps, wiggles on its belly and keeps quiet.
- MARJ: So which one are you?
- WALT: Seal. Quiet. Keeps to himself.
- MARJ: You snore like a sea lion.
- WALT: ...Sea lion.

**nature-10 · The keys**
- MARJ: Nature Notes! The tallest trees on Earth start from a seed about the size of a tomato seed. And the cones are about the size of an olive.
- WALT: Huh.
- MARJ: The tallest living thing in the world, from something you could lose in your pocket!
- WALT: That's how I lost the house keys.
- MARJ: You lost the house keys in the couch.
- WALT: Something's growing in there.

**nature-11 · No elk**
- MARJ: Nature Notes! Way up in the tops of the old redwoods, there are whole gardens. Ferns, huckleberry bushes, even little trees growing right on the branches.
- WALT: And salamanders. Some of 'em spend their whole lives up there. Never touch the ground.
- MARJ: Never come down at all?
- WALT: Why would they. Nice view. No elk.

**nature-12 · The secret nest**
- WALT: Nature Notes. The marbled murrelet. Little seabird. Fishes in the ocean, but nests way up in the old trees, miles inland.
- MARJ: For the longest time, nobody could find their nests.
- WALT: First one wasn't found till 1974. A tree trimmer spotted it.
- MARJ: Kept its secret all those years.
- WALT: Like me and your mother's porch light.
- MARJ: ...Like that.

**nature-13 · Picky**
- MARJ: Nature Notes! Coast redwoods only grow in one skinny strip, from Big Sur up to the bottom of Oregon. About 450 miles long, and never far from the ocean.
- WALT: They follow the fog.
- MARJ: No fog, no redwoods.
- WALT: Picky.
- MARJ: Like somebody with his coffee.
- WALT: I'm not picky. I just like it the one way.

**nature-14 · Three hundred and twelve** (the sincere one)
- WALT: Nature Notes. About ninety-five percent of the old-growth redwoods were cut down. Most of what's left is protected now.
- MARJ: That's a hard one, hon.
- WALT: I hauled some of them, you know. Thirty years.
- MARJ: And he's planted over three hundred since he retired. Every spring.
- WALT: Three hundred and twelve.
- MARJ: You count everything.
- WALT: They'll be big in about five hundred years. I'll check on them.

**nature-15 · Ghost trees**
- MARJ: Nature Notes! There are albino redwoods. Pure white needles, no green at all. Folks call them ghost trees.
- WALT: Can't make their own food. They live off the roots of the tree they sprouted from.
- MARJ: There are only a few hundred known in the whole world.
- WALT: Lives off the family, doesn't feed itself.
- MARJ: Sounds like your brother.
- WALT: He's coming this weekend.

**nature-16 · Too bright**
- MARJ: Nature Notes! Redwood sorrel. That little clover-looking plant all over the forest floor. When sunlight hits it, it folds its leaves down in just a few minutes.
- WALT: Too bright. Goes back to sleep.
- MARJ: And when the shade comes back, it opens right up again.
- WALT: That's me in the morning.
- MARJ: That's you all day, hon.

---

## Batch 5: callers

Small scenes that escalate and end on a twist (about 30–45 s), like K-JAM's newer callers. Most call back to station lore, so they get funnier the longer you listen. Lines in *(italics)* are delivery notes, not spoken.

**Voices:**
- Rick and Dana use their own voices.
- Becky calls twice, so she should get her own voice: a woman in her mid-30s, warm and teasing.
- Everyone else reuses the existing K-JAM caller voices under new names. The phone filter helps them sound different.
- In call-10, Walt himself is the caller, so his lines there get the phone filter.

**call-01 · Becky and Lou** (BECKY)
- MARJ: Line one, you're on The Coffee Cabin.
- BECKY: Hi, Mom.
- MARJ: Becky! Everybody, it's our daughter!
- WALT: Hi, kiddo.
- BECKY: Dad, you're doing the radio voice.
- WALT: This is my voice.
- BECKY: At home you just say "huh" and point at things.
- MARJ: She's not wrong.
- BECKY: Anyway, the kids want to know if Lou is real.
- WALT: Lou is real.
- BECKY: Dad. I made Lou up. I was four. Lou was a pinecone.
- MARJ: ...Then what did you lick?
- BECKY: I don't want to talk about it.
- WALT: Then who's been eating my lettuce for thirty years?

**call-02 · Rick needs this** (RICK, with DANA in the background)
- MARJ: We've got a long-distance caller! Go ahead, hon.
- RICK: Is this The Coffee Cabin.
- MARJ: It is!
- RICK: Rick. K-JAM. Down in L.A. I'm calling to report a traffic problem.
- WALT: Here?
- RICK: Anywhere. I just need to know someone else is suffering.
- WALT: Harold's in the road.
- RICK: Who's Harold?
- WALT: Nine hundred pounds. Antlers.
- RICK: ...How long has he been there?
- WALT: Since Tuesday.
- RICK: *(quietly)* Thank you. That's all I needed.
- DANA *(in the background)*: Rick, are you calling the tree people again?
- RICK: Gotta go.

**call-03 · Dana asks for advice** (DANA, with RICK in the background)
- WALT: Caller.
- DANA: Hi! It's Dana from K-JAM! Huge fan!
- MARJ: Oh, Dana! We love your show!
- DANA: Rick doesn't know I'm calling. I just wanted to ask. Forty-one years! How do you two do it?
- MARJ: Oh, hon. Patience. Laughing. Separate blankets.
- WALT: And she counts every time I step on her feet.
- MARJ: Four thousand and twelve.
- DANA: Aww! Rick won't even dance.
- WALT: Smart man.
- MARJ: Walter!
- DANA: Oh. Oh no. He's in the next booth. He heard all of it. He's... Rick, are you crying?
- RICK *(in the background)*: It's allergies.
- WALT: Good man.

**call-04 · Tyler from L.A.** (TYLER)
- MARJ: Line two, you're on the air.
- TYLER: Hi, yeah, um. My GPS stopped working, like, an hour ago?
- WALT: There is one road.
- TYLER: Right, but it keeps saying "make a U-turn when possible."
- WALT: Don't.
- TYLER: Also there's an elk in front of my car? And he's looking at me?
- MARJ: Is he a big one?
- TYLER: He's eating my windshield wiper.
- WALT: Harold.
- TYLER: How do you know his name?
- WALT: Everybody knows Harold.
- MARJ: Just stay in the car, hon, and stay on the road.
- TYLER: Okay. Also there's a sign up here that says "Pie All Day." Is that, like, a threat?
- WALT: It's a promise.

**call-05 · Dolores from Gull Harbor** (DOLORES)
- WALT: Caller, go ahead.
- DOLORES: Walter. It's Dolores. From the Gull Harbor diner.
- WALT: *(long pause)* Dolores.
- DOLORES: I hear you're sending your dog over here.
- WALT: I said that on the radio. Not to you.
- DOLORES: Everybody heard it, Walter. Biscuit came by this morning.
- MARJ: Oh no. What did he do?
- DOLORES: Ate a whole blueberry pie off the counter. Then sat down and wagged.
- WALT: Good boy.
- DOLORES: Then he came back for a second one.
- WALT: ...So it's good pie.
- DOLORES: It's the best pie on the coast.
- WALT: Biscuit's a dog, Dolores. He doesn't know anything. *(pause)* What's in the crust?
- DOLORES: Come find out.
- WALT: I'm going to Gull Harbor.
- MARJ: There is one road, hon.

**call-06 · Norm and the slug race** (NORM)
- MARJ: Line one! You're on the air.
- NORM: Marj! It's Norm, live from the annual banana slug race.
- MARJ: Oh, Norm! How's it going?
- NORM: Well, it started Tuesday.
- WALT: How's it looking?
- NORM: Very tense. Slimy Pete is in the lead by nearly four inches.
- MARJ: Four inches!
- NORM: The crowd is going wild. Well. There's two of us.
- WALT: Who's in second?
- NORM: Hard to say. One went under a leaf on Wednesday and nobody's seen him since.
- MARJ: Oh dear.
- NORM: Hold on. *(pause)* Oh no. Folks, I'm being told Slimy Pete is a pinecone.
- WALT: Happens more than you'd think.
- MARJ: It does around here.

**call-07 · Gus at the lighthouse** (GUS)
- WALT: Caller.
- GUS: Walt, it's Gus. Out at the lighthouse.
- MARJ: Hi, Gus! How's the light?
- GUS: Light's fine. Foghorn's broke.
- WALT: How long?
- GUS: Since Sunday. So I've been doing it myself.
- MARJ: Doing what yourself?
- GUS: *(deep, long)* Bwaaaaah.
- MARJ: Oh my.
- GUS: Every thirty seconds. Four days.
- WALT: Ships okay?
- GUS: Ships are fine. But a sea lion's fallen in love with me. Answers every time.
- MARJ: Aww.
- GUS: Brought me a fish this morning.
- WALT: Leave the horn broke, Gus.

**call-08 · Sheriff Dot** (DOT)
- MARJ: We've got the sheriff on the line! Hi, Dot.
- DOT: Marj. Walt. I need to correct a rumor.
- WALT: Go ahead.
- DOT: I did not give Harold a ticket.
- MARJ: You didn't?
- DOT: I wrote him a warning. He ate the warning. Then he ate my ticket book.
- WALT: The whole book?
- DOT: And the pen. So nobody in this county gets a ticket till Thursday.
- WALT: *(pause)* How fast does the one road go, Dot?
- DOT: Don't you dare, Walter.
- MARJ: Dot, he drives a 1985 pickup. It doesn't go over forty.
- WALT: Forty-two. Downhill.

**call-09 · Earl's apology** (EARL)
- WALT: Caller.
- EARL: Walt. It's Earl.
- WALT: Earl.
- EARL: About the firewood. I want to say I'm sorry. I thought it was the community woodpile.
- MARJ: It's our woodpile, Earl. It's next to our house.
- EARL: It looked very communal.
- WALT: You sold eleven cords of it.
- EARL: And I'm bringing you the money. Minus my fee for stacking it.
- WALT: It was already stacked.
- EARL: I restacked it. Better.
- WALT: *(long pause)* ...It is better, Marj.

**call-10 · Bigfoot calls in** (WALT, on the phone)
- MARJ: Line two, you're on The Coffee Cabin.
- WALT *(on the phone, deep, disguised)*: Hello. This is... Bigfoot.
- MARJ: *(sighs)* Walter, I can see you out on the porch phone.
- WALT *(on the phone)*: No you can't.
- MARJ: You're wearing the antler hat.
- WALT *(on the phone)*: Bigfoot also has an antler hat.
- MARJ: Then come inside, Bigfoot. Your soup's getting cold.
- WALT *(on the phone, normal voice)*: ...What kind of soup?
- MARJ: It's soup.

**call-11 · Forty miles out** (BECKY)
- MARJ: Line one!
- BECKY: Hi, Mom. Forty miles out.
- MARJ: Oh! Walt, she's forty miles out!
- WALT: I'm at the window.
- MARJ: She's forty miles away, Walter. You can't see her yet.
- WALT: Checking the weather.
- BECKY: Mom, the kids want to know if Grandpa's at the window.
- MARJ: He's at the window.
- BECKY: Tell him we're at the elk.
- WALT: There's always the elk.
- BECKY: Oh, and Uncle Ray's in the car with us. Surprise!
- WALT: *(pause)* Marj. Make it fourteen pies.

**call-12 · Ernie's new song** (ERNIE)
- MARJ: We've got Ernie on the line! Ernie's half of our house band.
- ERNIE: Hey, Marj. Hey, Walt.
- WALT: Ernie.
- ERNIE: So my cousin and I wrote a new song. It's got words this time.
- MARJ: Oh, words!
- ERNIE: Well. One word.
- WALT: What's the word?
- ERNIE: "Fog."
- MARJ: Just "fog"?
- ERNIE: We say it a lot of different ways. Like a question. "Fog?" Like we're sad. "Fog." Like we're excited. "Fog!"
- WALT: *(pause)* We'll play it.
- MARJ: We will?
- WALT: It's honest.

**call-13 · The camper van guy** (GLEN)
- WALT: Caller.
- GLEN: Hi. You don't know me. I'm the guy with the camper van. From the Elk Alert?
- MARJ: Oh! Are you all right, hon?
- GLEN: I'm good. Great, actually. Harold and I worked it out.
- WALT: Worked what out?
- GLEN: He's riding shotgun now. We're going to Oregon.
- MARJ: Harold's going to Oregon?
- GLEN: He seems to want to. He keeps looking north.
- WALT: Tell him there's one road.
- GLEN: He knows, Walt. He's always known.
- MARJ: Well, safe travels to you both!
- GLEN: We'll be back Tuesday. He gets carsick.

---

## Batch 6: reactions and short bits

Mostly short (3–10 s). These fill the same slots as K-JAM's, so the game logic stays the same.

### Town names (one per town, played on the way in)

| Slug | Line |
|---|---|
| fern-hollow | MARJ: Rolling into Fern Hollow! |
| cedar-landing | MARJ: Here's Cedar Landing! |
| mossbridge | WALT: Mossbridge. Fog line starts here. |
| driftwood-bay | MARJ: Coming into Driftwood Bay! |
| gull-harbor | WALT: Gull Harbor. *(pause)* Hmph. |
| elkhorn-flat | MARJ: Rolling into Elkhorn Flat! |
| sawdust-junction | WALT: Sawdust Junction. Used to haul out of here. |
| tidewater | MARJ: Here's Tidewater! |
| bramble-point | MARJ: Coming into Bramble Point! |
| lantern-cove | MARJ: Rolling into Lantern Cove! |
| hemlock | WALT: Hemlock. |
| old-mill | MARJ: Here's Old Mill! |

### Town reactions (after the town name)

**town-01 · Waving**
- MARJ: Oh, it's a sweet little town. Everybody waves.
- WALT: They're not waving. They're wondering where your roof went.

**town-02 · Next to the bait**
- WALT: General store's got everything. Bait, coffee, wedding dresses.
- MARJ: That's true. I got mine there.
- WALT: Next to the bait.

**town-03 · The landmark**
- MARJ: Main Street's three blocks long.
- WALT: Four if you count the dog.
- MARJ: That dog's been lying there since 2009.
- WALT: Town council made him a landmark.

**town-04 · Phyllis**
- WALT: Library's open Tuesdays.
- MARJ: And Thursdays.
- WALT: Thursdays is just Phyllis reading out loud on the steps.
- MARJ: People come for miles.

### Scenery reactions

K-JAM's `place` keys get Redwood versions: `grove` (new), `coast`, `mainstreet`, `homes`, `harbor`, `mill` and `campground`.

**grove-01 · Look up**
- MARJ: Into the big trees now, hon. Look up, if you're not driving.
- WALT: Nobody's driving. The car drives itself.
- MARJ: Then everybody look up!

**grove-02 · Quieter**
- WALT: Grove's quiet today.
- MARJ: It's always quiet.
- WALT: Quieter.
- MARJ: *(pause)* ...It is quieter.

**grove-03 · Tuesday**
- MARJ: See that light coming down through the branches? Folks call those god rays.
- WALT: I call them Tuesday.

**grove-04 · Breathe harder**
- WALT: If you're in the grove right now, roll down your window. That air's two thousand years old.
- MARJ: It's a convertible, hon. There's no window.
- WALT: Then breathe harder.

**coast-01 · Living the dream**
- MARJ: Back out on the coast! Look at those big rocks standing out in the water.
- WALT: Sea stacks. Been there longer than the trees.
- MARJ: And they don't have to do a thing.
- WALT: Living the dream.

**coast-02 · Mostly "fish"**
- WALT: Coast advisory. Sea lions on the rocks. Very loud.
- MARJ: What are they saying?
- WALT: Same as Biscuit. Mostly "fish."

**coast-03 · The fort**
- MARJ: Driftwood beach coming up. Folks build little forts down there.
- WALT: Built one in '72. Still standing.
- MARJ: That's the ranger station, Walter.
- WALT: They added a roof.

**mainstreet-01 · Lifts**
- WALT: Main Street. Every building's got a big false front. Makes 'em look taller.
- MARJ: Like Walt's boots.
- WALT: They're lifts, Marj. It's different.

**homes-01 · The longest day**
- MARJ: Oh, look at those old Victorian houses. All the colors!
- WALT: Painted ours purple once.
- MARJ: For one day.
- WALT: Longest day of my life.

**harbor-01 · Sea lion told him**
- MARJ: Down by the harbor! The fishing boats are in.
- WALT: Gus says the fish are biting.
- MARJ: Gus runs the lighthouse. How would he know?
- WALT: Sea lion told him.

**mill-01 · Marshmallows**
- WALT: Old mill on your right. That big cone is the teepee burner.
- MARJ: They haven't lit it in thirty years.
- WALT: And she still won't let me roast a marshmallow in it.
- MARJ: It's three stories tall, Walter.

**campground-01 · Burning pancakes**
- MARJ: Passing the campground! Somebody's making pancakes.
- WALT: Somebody's burning pancakes.
- MARJ: You can't smell that from here.
- WALT: I can smell that from here.

### Drive-through tree (in place of K-JAM's pier reaction; plays when the hero tree is near)

**tree-01 · Duck**
- MARJ: Ooh, drive-through tree coming up! Duck, hon!
- WALT: They don't have to duck.
- MARJ: Duck anyway. It's tradition.

**tree-02 · Most of it**
- WALT: That's the drive-through tree. Took my log truck through there once.
- MARJ: You did not.
- WALT: Most of it.

### Player reactions

**steer-01 · A few roads** (the player picked a turn)
- MARJ: Oh, somebody's picking their own way today!
- WALT: There is one road.
- MARJ: In town there are a few, Walt.
- WALT: ...I'm aware.

**steer-02 · Watch for Harold**
- WALT: Turned off, huh.
- MARJ: Exploring! Good for you, hon.
- WALT: Watch for Harold.

**speed-fast · Still works**
- WALT: Somebody's in a hurry.
- MARJ: The trees aren't going anywhere, hon.
- WALT: And Dot's got radar.
- MARJ: Dot's got a radar gun from 1979.
- WALT: Still works.

**speed-slow · The speed of fog**
- MARJ: Somebody's taking it nice and slow. That's the way, hon.
- WALT: Speed of the fog.

**postcard-01 · The freezer**
- MARJ: Did somebody just take a postcard? Oh, send us one! We've got a fridge.
- WALT: Fridge is full, Marj.
- MARJ: There's room on the freezer.

**postcard-02 · Lie down**
- WALT: Postcard. Get the trees in.
- MARJ: You can't fit a whole redwood in a postcard, Walt.
- WALT: Then lie down.

### Hands-free streak

**milestone-05**
- MARJ: Five minutes, no phone! Look at you, hon.
- WALT: Five minutes. That's one cup of coffee.

**milestone-10**
- WALT: Ten minutes hands-free.
- MARJ: Walt's proud of you.
- WALT: I'm mildly impressed.
- MARJ: That's proud, for Walt.

**milestone-30**
- MARJ: Thirty minutes without your phone! That deserves a slice of pie.
- WALT: Two slices.
- MARJ: You just want pie.
- WALT: I always want pie.

**milestone-60**
- WALT: One hour. No phone.
- MARJ: Walt, say something nice.
- WALT: *(pause)* ...You'd make a good log truck driver.
- MARJ: That's the nicest thing he's ever said to anybody.

**milestone-120**
- MARJ: Two hours, hon! Two whole hours, no phone!
- WALT: We should name a tree after you.
- MARJ: Walt's going out to plant one right now.
- WALT: Three hundred and thirteen.

**record-01**
- MARJ: That's a new personal record! Walt, ring the bell!
- WALT: We don't have a bell.
- MARJ: Then do the foghorn!
- WALT: *(deep)* Bwaaaah.

**back-01**
- WALT: Oh. You're back.
- MARJ: Everybody checks their phone sometimes, hon. New streak starts now!

**back-02**
- MARJ: Welcome back, hon! The trees waited for you.
- WALT: Trees wait for everybody. That's their whole thing.

**back-03**
- WALT: Phone, huh.
- MARJ: Walt doesn't have a cell phone.
- WALT: Got the porch phone.
- MARJ: It's on a cord.
- WALT: Never lost it once.

### Song requests

**request-01**
- MARJ: Ooh, we've got a request!

**request-02**
- WALT: Request came in. Somebody wants something different.
- MARJ: Happy to oblige, hon.

**request-03**
- MARJ: This one's going out to somebody driving through the redwoods. You know who you are.

**request-04**
- WALT: Request from a red convertible. No roof. In the fog.
- MARJ: Brave.

**request-05**
- MARJ: The request line's ringing off the hook!
- WALT: It's Ernie. He wants us to play "Fog."

**request-06**
- WALT: We were going to play something else. Marj overruled me.
- MARJ: I always overrule you.
- WALT: Forty-one years.

**plug-01** (until the player has tried requests)
- MARJ: Want to hear something else, hon? Tap the radio. We take requests.
- WALT: We take 'em. We play 'em. Marj insists.

### Focus drive

**focus-20**
- MARJ: Focus drive! Twenty minutes. You get to work, hon. We'll keep it quiet.
- WALT: I'm always quiet.

**focus-30**
- WALT: Thirty-minute focus drive. Starting now.
- MARJ: We'll whisper.
- WALT: Marj can't whisper.
- MARJ: *(whispering loudly)* I can whisper!

**focus-end**
- MARJ: That's your focus drive, hon! Pull over, stretch your legs, get yourself a cup of coffee.
- WALT: Five minutes. Then back to it.

**focus-back**
- WALT: Break's over.
- MARJ: Back on the road, hon. Coffee in hand.
