# 89.3 The Coffee Cabin: radio script (DRAFT, not recorded yet)

The Redwood Coast station. For review: mark lines to cut, rewrite or keep. Nothing goes to ElevenLabs until you approve.
Numbers are written as digits here and get spelled out for the voices when recorded ("eighty-nine point three"), like the K-JAM bits.

**Recording (same as K-JAM's DIALOGUE-SCRIPT):** Eleven v4 with Auto-tag off. Every line starts with an audio tag in square brackets, like `[deadpan]`, `[pause] [touched]` or `[whispering, playful]`. Official tags are listed at elevenlabs.io/blog/elevenlabs-audio-tags-list; plain-English directions also work. Paste the tag along with the words. Tags are hints: if one sounds odd, delete it and regenerate.
- An italic note after a speaker's name, like *(on the phone)*, *(outside)* or *(in the background)*, is for processing (Claude adds the filter afterwards). Don't paste it.
- `[cut]` at the end of a handoff line is for the game, which cuts the signal there. Don't paste it.

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
- DANA: [worried but bright] Rick, the signal's getting fuzzy. I think they're driving out of range!
- RICK: [grave] It's happening, Dana. They're leaving us. For trees.
- DANA: [cheerful] Aww! Go! Have fun! Wear a jacket, it's cold up there!
- RICK: [ominous, urgent] And don't trust the fog. The fog is— `[cut]`

**handoff-out-02 · Too tall**
- RICK: [grave] We're losing them, Dana.
- DANA: [cheerful, waving] Bye, sweetie! Send us a postcard!
- RICK: [indignant, rambling] And tell the redwoods they're too tall. It's showing off. Nobody needs to be three hundred feet— `[cut]`

**handoff-out-03 · Gary moved**
- DANA: [cheerful] Looks like you're heading north! Say hi to the elk for us!
- RICK: [ominous] Last time someone went north, Dana, we never heard from them again.
- DANA: [matter-of-fact] That was Gary. Gary moved.
- RICK: [solemn, mournful] Gary was a good man. Gary always signaled. Gary— `[cut]`

### Handoff: Coffee Cabin arrivals (after the static clears)

**arrive-01 · The little light** (plays the first time; doubles as the station introduction)
- MARJ: [surprised, warm] Oh! Walt, I think somebody new just tuned in.
- WALT: [dry] How can you tell.
- MARJ: [pleased] The little light on the board blinked.
- WALT: [flat] That's the generator.
- MARJ: [warm, welcoming] Well, whoever you are, welcome. You're listening to 89.3, The Coffee Cabin. Best served with a cozy sweater and hot coffee. I'm Marj.
- WALT: [gruff] Walt.
- MARJ: [warmly] We broadcast from our living room. Wipe your feet.

**arrive-02 · Smell that**
- MARJ: [warm, inviting] If you just drove in from the south, welcome to the redwoods, hon. Roll your window down. Smell that?
- WALT: [sniffs, dry] That's the percolator.
- MARJ: [fondly exasperated] It's the forest, Walter.
- WALT: [dry] It's a little of both.

**arrive-03 · At the window**
- WALT: [matter-of-fact] Car coming in from the south. Convertible.
- MARJ: [curious] How do you know that?
- WALT: [dry] I'm at the window.
- MARJ: [amused, warm] He's at the window. Welcome back to The Coffee Cabin, hon.

### Handoff: Coffee Cabin farewells (heading back south)

**leave-01 · The muffin**
- MARJ: [wistful, warm] Oh, the signal's going. Sounds like you're heading south, hon.
- WALT: [gruff] Back to the city.
- MARJ: [motherly] Drive safe. Take a muffin.
- WALT: [dry] They can't take a muffin, Marj. It's the radio.
- MARJ: [stubborn] Well, I wrapped one anyway, so it's— `[cut]`

**leave-02 · Slow down**
- WALT: [gruff] Losing you.
- MARJ: [calling out, warm] Bye, hon! Tell those L.A. folks to slow down!
- WALT: [flat] They won't.
- MARJ: [insistent, cheerful] Tell them anyway! And come back when the— `[cut]`

**leave-03 · He's waving**
- MARJ: [fondly] There they go. Walt, wave.
- WALT: [flat] I'm waving.
- MARJ: [amused, warm] He's waving. You can't see it, but he's waving. Bye now! The pot's always— `[cut]`

### Handoff: K-JAM welcome-backs

**return-01 · Wood smoke**
- DANA: [gasps, excited] Is that... Rick! They're back! They came back!
- RICK: [suspicious] They smell like wood smoke.
- DANA: [overjoyed] Welcome home, sweetie! How were the trees?
- RICK: [weary] Tall, Dana. They were tall. Now please. Merge.

**return-02 · Your seat**
- RICK: [dry] Signal's back. Unfortunately, so is the traffic.
- DANA: [excited] Welcome back to K-JAM! We missed you!
- RICK: [deadpan] I didn't. I kept your seat warm, though. By accident.

**return-03 · I'd take the elk**
- DANA: [sunny] Welcome back to the sunshine!
- RICK: [suspicious] Did they have traffic up there?
- DANA: [cheerful] Elk, mostly!
- RICK: [long pause] [wistful] ...I'd take the elk.

### Station IDs

**id-01 · Lukewarm**
- MARJ: [warm, announcer] You're listening to 89.3, The Coffee Cabin. Best served with a cozy sweater and hot coffee.
- WALT: [dry] Or lukewarm. I'm not picky.
- MARJ: [teasing] He's very picky.

**id-02 · Very professional**
- WALT: [gravelly announcer] 89.3. The Coffee Cabin. Live from our living room.
- MARJ: [apologetic] Excuse the dog.
- WALT: [proud] Biscuit's been very professional today.
- MARJ: [exasperated] Biscuit ate a microphone cable at nine a.m.
- WALT: [deadpan] Very professional otherwise.

**id-03 · Thirty-eight miles**
- MARJ: [warm, announcer] This is The Coffee Cabin, 89.3. Our signal reaches about 40 miles.
- WALT: [correcting] 38.
- MARJ: [insistent] 40 on a clear day.
- WALT: [dry] It's never clear, Marj.
- MARJ: [amused] Then 38. Hello to all 38 miles of you.

### Time of day (on the second break of a drive)

**clock-morning · The first cup**
- MARJ: [warm] Good morning, hon. Walt's had his first cup.
- WALT: [correcting] Second.
- MARJ: [suspicious] You said that was your first.
- WALT: [deadpan] The first one doesn't count. That's just to find the second one.

**clock-midday · Soup**
- WALT: [dry] Lunchtime. Marj made soup.
- MARJ: [mildly offended] I make soup every day.
- WALT: [deadpan] That's why I don't have to say what kind. It's soup.

**clock-evening · Best chair**
- MARJ: [cozy, warm] Evening, everybody. The fog's coming in, the woodstove's going, and Walt's in his chair.
- WALT: [proud] Best chair in the county.
- MARJ: [teasing] It's held together with duct tape.
- WALT: [proud, deadpan] Best duct tape in the county.

**clock-late · Eyes closed**
- MARJ: [soft, warm] If you're driving with us this late, pull over if you get sleepy, hon. Walt's asleep.
- WALT: [groggy] I'm awake.
- MARJ: [whispering, amused] He was asleep.
- WALT: [defensive] I was listening with my eyes closed.

### After a song

**after-01**
- MARJ: [sighs, warmly] Oh, I love that one.

**after-02**
- WALT: [deadpan] That one made Marj cry.
- MARJ: [sniffling, defensive] It did not.
- WALT: [dry] She's crying right now.

**after-03**
- MARJ: [teasing] Walt, you were humming.
- WALT: [gruff] I don't hum.
- MARJ: [amused] He hums.

### Stopped at a light

**red-01 · You found one**
- WALT: [dry] If you're stopped at a red light right now, congratulations. You found one.
- MARJ: [proud] We only have a few. We're very proud of them.

**red-02 · Long light**
- MARJ: [warm] Stopped at a light? Good time for a sip of coffee, hon.
- WALT: [dry] Or two sips. It's a long light.
- MARJ: [correcting] It's a forty-second light.
- WALT: [deadpan] Long light.

**red-03 · Every morning**
- WALT: [matter-of-fact] That stoplight went in in 1987. Town took a vote.
- MARJ: [teasing] You voted against it.
- WALT: [stubborn] I still do. Every morning.

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
- MARJ: [warm] Here's the Fogbank Family Band. Fog Line. Headlights on, hon.

**introb-fog-line · Happy Birthday at mile twelve**
- MARJ: [warm, storytelling] You know what a fog line is, hon? That white line along the edge of the road.
- WALT: [gruff] Follow it in the fog, you get home.
- MARJ: [proud] Walt painted that line. The whole way to Mossbridge. Summer of '87.
- WALT: [correcting] '86.
- MARJ: [pointed] '87. You missed my birthday doing it.
- WALT: [deadpan] I painted "Happy Birthday" on the shoulder at mile twelve.
- MARJ: [softening, touched] ...He did. It's still there if you squint. The Fogbank Family Band. Fog Line.

### 2. Headlights Home (Elliot Shore)

**intro-headlights-home**
- WALT: [gruff] Elliot Shore. Headlights Home.
- MARJ: [teasing, warm] Walt drove nights for thirty years. He says this one doesn't get him.
- WALT: [too quickly] It doesn't.

**introb-headlights-home · Sawdust on the stairs**
- WALT: [gruff, remembering] Thirty years I drove a log truck. Nights, mostly.
- MARJ: [warm] And every night I left the porch light on, and Becky tried to wait up.
- WALT: [softer] Fell asleep on the stairs. Every time. Little blanket.
- MARJ: [tender] And he'd carry her up still in his boots. Sawdust on every step.
- WALT: [quietly] Worth it.
- MARJ: [pause] [tender] ...It was. Here's Elliot Shore. Headlights Home.

### 3. Little Rain Boots (Kai Morrow)

**intro-little-rain-boots**
- MARJ: [cheerful] Kai Morrow. Little Rain Boots. Puddles are free, folks.

**introb-little-rain-boots · Lou**
- MARJ: [laughing, storytelling] When Becky was four, she wore her rain boots every single day for a year.
- WALT: [deadpan] To bed.
- MARJ: [laughing] To bed! To church! To the dentist!
- WALT: [fondly] Then she found a banana slug, named it Lou, and wouldn't leave the porch for a week.
- MARJ: [teasing] Walt says Lou's still out there.
- WALT: [certain] Lou's still out there.
- MARJ: [exasperated] Walt, that was thirty years ago.
- WALT: [deadpan] Lou's very slow.
- MARJ: [amused] Kai Morrow. Little Rain Boots.

### 4. Pie All Day (Ruby & the Roadhouse)

**intro-pie-all-day**
- WALT: [deadpan] Ruby and the Roadhouse. Pie All Day. Which is also my schedule.

**introb-pie-all-day · The pie situation**
- WALT: [serious, grave] Small update on the pie situation.
- MARJ: [wary] Oh no.
- WALT: [indignant] The diner in Gull Harbor put up a new sign. "Best Pie on the Coast."
- MARJ: [warning] Walt.
- WALT: [worked up] Our diner's sign says "Pie All Day." That's a quantity, Marj. That's a commitment.
- MARJ: [stern] You are not driving over there.
- WALT: [firm] I'm not driving over there. [pause] [sly] ...I'm sending Biscuit.
- MARJ: [resigned, amused] Ruby and the Roadhouse. Pie All Day.

### 5. Elk Crossing (Hollow Pine Revival)

**intro-elk-crossing**
- MARJ: [warm] Hollow Pine Revival. Elk Crossing. If you're stuck behind a herd right now, this one's for you.
- WALT: [grumbling] They don't care. They never care.

**introb-elk-crossing · Locked antlers**
- MARJ: [skeptical] Walt has a story about the elk.
- WALT: [matter-of-fact] Arm-wrestled one.
- MARJ: [flat] He did not.
- WALT: [proud, storytelling] Big bull, out by the meadow. 1982. We locked antlers.
- MARJ: [dry] You don't have antlers, Walter.
- WALT: [defensive] I had a hat with antlers on it.
- MARJ: [grudging, amused] ...He did have the hat. Hollow Pine Revival. Elk Crossing.

### 6. Second Cup (Theo Lane)

**intro-second-cup**
- WALT: [dry] Theo Lane. Second Cup. I'm on my fourth.
- MARJ: [amused] He's on his fourth.

**introb-second-cup · The morning of the flood**
- MARJ: [tender] Forty-one years, Walt's brought me coffee in bed every single morning.
- WALT: [correcting] Not every morning.
- MARJ: [insistent] Every morning.
- WALT: [remembering] There was the morning of the flood.
- MARJ: [laughing, fond] He waded to the kitchen in his fishing waders and brought it anyway.
- WALT: [dry] Cold, though.
- MARJ: [softly] Best cup I ever had. Theo Lane. Second Cup.

### 7. Two-Lane Hymn (The Evening Pines)

**intro-two-lane-hymn**
- MARJ: [warm, wistful] The Evening Pines. Two-Lane Hymn. Roll the window down for this one.

**introb-two-lane-hymn · Daddy's pickup**
- WALT: [remembering] First car we had was a borrowed pickup. Her father's.
- MARJ: [sheepish, laughing] Daddy didn't know we'd borrowed it.
- WALT: [dry] Found out when we drove it back with "Just Married" on the tailgate.
- MARJ: [touched] Then he made us keep it. Said it didn't feel like his anymore.
- WALT: [gruff] That truck's still out back.
- MARJ: [amused] Biscuit lives in it now. The Evening Pines. Two-Lane Hymn.

### 8. Driftwood Fire (Low Tide Lanterns)

**intro-driftwood-fire**
- WALT: [official] Low Tide Lanterns. Driftwood Fire. The fire chief says, put it out when you're done.
- MARJ: [teasing] You are the fire chief.
- WALT: [deadpan] I know what he says.

**introb-driftwood-fire · Well supervised**
- MARJ: [warm, storytelling] Every Fourth of July, the whole town builds a driftwood fire down on the beach.
- WALT: [proud] Fire chief supervises.
- MARJ: [pointed] You're the fire chief.
- WALT: [smug] That's why it's well supervised.
- MARJ: [teasing] Last year he brought an extinguisher, two buckets, a hose and a lawn chair.
- WALT: [dry] Chair's for supervising.
- MARJ: [laughing] He was asleep in it by nine. Low Tide Lanterns. Driftwood Fire.

### 9. Forty Miles to You (The Mile Markers)

**intro-forty-miles-to-you**
- MARJ: [warm, tender] The Mile Markers. Forty Miles to You. Somebody out there's almost home.

**introb-forty-miles-to-you · Long weather**
- WALT: [remembering] When Becky was at college, she'd call every Sunday from the road home.
- MARJ: [imitating a young woman, fondly] "Mom, I'm forty miles out." "Mom, I'm thirty." "Mom, I'm at the elk."
- WALT: [dry] There's always the elk.
- MARJ: [teasing, tender] And Walt would stand at the window the whole time.
- WALT: [defensive] I was checking the weather.
- MARJ: [pointed] For two hours.
- WALT: [deadpan] Long weather.
- MARJ: [warmly] The Mile Markers. Forty Miles to You.

### 10. Woodstove Waltz (Annie & Cal)

**intro-woodstove-waltz**
- WALT: [gruff] Annie and Cal. Woodstove Waltz.
- MARJ: [hopeful] Walt, are you getting up?
- WALT: [creaky, dry] My knees are thinking about it.

**introb-woodstove-waltz · Keeping score**
- MARJ: [nostalgic] Our first dance was at the Grange Hall. 1983.
- WALT: [correcting] '84.
- MARJ: [firm, teasing] '83, Walter. You stepped on my foot eleven times.
- WALT: [surprised] You counted.
- MARJ: [proud] I've counted every time since. We're at about four thousand.
- WALT: [smug] Four thousand and twelve.
- MARJ: [pause] [touched] ...You count too?
- WALT: [gruff, softly] Somebody has to keep score.
- MARJ: [warmly] Annie and Cal. Woodstove Waltz.

### 11. Sea Stack Serenade (Stella Rae)

**intro-sea-stack-serenade**
- MARJ: [soft, warm] Stella Rae. Sea Stack Serenade. Pull into the next turnout if you can, hon. Just for a minute.

**introb-sea-stack-serenade · Strategy**
- WALT: [remembering] There's a turnout past Driftwood Bay. Three big rocks in the water.
- MARJ: [fondly] That's where he proposed.
- WALT: [dry] Tried to. Ring fell in a tide pool.
- MARJ: [laughing] So he went in after it. In November.
- WALT: [proud] Found it in a sea anemone.
- MARJ: [laughing] And I said yes before he even got out of the water, because he was turning blue.
- WALT: [deadpan] Strategy.
- MARJ: [warmly] Stella Rae. Sea Stack Serenade.

### 12. Flannel Weather (Wren Holloway)

**intro-flannel-weather**
- WALT: [matter-of-fact] Wren Holloway. Flannel Weather. I'm wearing flannel.
- MARJ: [teasing] You're always wearing flannel.
- WALT: [deadpan] It's always flannel weather.

**introb-flannel-weather · Twelve pies**
- MARJ: [excited] First cold snap of the year, and Becky's bringing the grandkids up this weekend!
- WALT: [dry] Marj has made eleven pies.
- MARJ: [correcting] Twelve.
- WALT: [pointed] For five people.
- MARJ: [matter-of-fact] Your brother's coming.
- WALT: [pause] [resigned] ...Twelve's about right. Wren Holloway. Flannel Weather.

### 13. Old Growth (Tall Timber)

**intro-old-growth**
- MARJ: [soft] Tall Timber. Old Growth. Grab a tissue.
- WALT: [too quickly] I'm fine.
- MARJ: [teasing] I didn't say it was for you.

**introb-old-growth · Size of a pencil**
- WALT: [quiet, reverent] Some of these trees were here two thousand years before anybody.
- MARJ: [tender] Walt planted one in the yard the day Becky was born.
- WALT: [fondly] Little redwood. Size of a pencil.
- MARJ: [proud] It's taller than the house now.
- WALT: [dry] So's Becky. Practically.
- MARJ: [correcting] She's five foot two.
- WALT: [deadpan] It's a small house.
- MARJ: [warmly] Tall Timber. Old Growth.

### 14. Porch Light (Hazel Quinn)

**intro-porch-light**
- WALT: [proud] Hazel Quinn. Porch Light. Ours has been on since the day we moved in.
- MARJ: [correcting, fond] The bulb hasn't. He changes it every spring.

**introb-porch-light · The long way home**
- MARJ: [tender, remembering] My mother left her porch light on every night of her life.
- WALT: [fondly] Kept a spare bulb in her purse. Just in case.
- MARJ: [puzzled] In case of what, I never knew.
- WALT: [quiet, sincere] In case of me. Back when I was courting you, I took the long way home every night. Just to drive past it.
- MARJ: [long pause] [moved] ...You never told me that.
- WALT: [gruff, warm] Forty-one years. Gotta save something.
- MARJ: [softly] Hazel Quinn. Porch Light.

### 15. Fiddlehead (The Coffee Cabin House Band)

**intro-fiddlehead**
- MARJ: [warm] No words on this one. Here's the house band. Fiddlehead.
- WALT: [dry] The house band is a fella named Ernie and his cousin.

**introb-fiddlehead · Chewy**
- WALT: [explaining] A fiddlehead's a baby fern. Before it unrolls.
- MARJ: [proud] You can eat them, you know. I sautéed some once.
- WALT: [flat] They were chewy.
- MARJ: [insistent] They were lovely.
- WALT: [diplomatic] They were lovely and chewy.
- MARJ: [cheerful] Here's the house band, with a fiddlehead you can't eat. Fiddlehead.

### 16. Morning Burn-off (The Coffee Cabin House Band)

**intro-morning-burn-off**
- WALT: [quiet] Morning Burn-off. Just guitar. Like the fog lifting.
- MARJ: [surprised, teasing] That was almost poetic, Walt.
- WALT: [gruff] Don't get used to it.

**introb-morning-burn-off · Making sure it leaves**
- MARJ: [dreamy] You know how the fog burns off around ten? Comes up off the road like steam off a cup?
- WALT: [content] Every morning I sit on the porch and watch it go.
- MARJ: [fondly] Every single morning.
- WALT: [dry, serious] Somebody's got to make sure it leaves.
- MARJ: [warm] ...Here's the house band. Morning Burn-off.

---

## Batch 3: segments

These fill K-JAM's segment slots and rotate the same way (each kind once per round). About 15–30 s each.

### Fog Report (in place of K-JAM's traffic report)

Walt reports the fog from the window, measured in whatever he can still see.

**fog-01 · One cow**
- MARJ: [announcer, warm] Time for the Fog Report. Walt?
- WALT: [dry, official] Visibility is one cow.
- MARJ: [skeptical] One cow.
- WALT: [matter-of-fact] I can see one cow. Past the cow, unknown.
- MARJ: [curious] Is it a big cow?
- WALT: [deadpan] Medium cow. Drive accordingly.

**fog-02 · The mailbox**
- WALT: [official] Fog Report. I can see the mailbox.
- MARJ: [pleased] Oh, that's not bad!
- WALT: [flat] I can't see the post.
- MARJ: [pause] [confused] ...Then how is the mailbox—
- WALT: [mysterious] That's the mystery, Marj. That's the fog.

**fog-03 · The kettle**
- MARJ: [warm] Fog's thick this morning, hon. Walt, anything to add?
- WALT: [proud] I invented this fog.
- MARJ: [flat] You did not.
- WALT: [matter-of-fact] Summer of '71. Left the kettle on.
- MARJ: [incredulous] The whole coast, Walter?
- WALT: [deadpan] It was a big kettle.

**fog-04 · The instrument**
- MARJ: [announcer] Fog Report. Walt's out on the porch with the instrument.
- WALT: [dry] Licked my finger. Held it up.
- MARJ: [expectant] And?
- WALT: [deadpan] Wet.
- MARJ: [exasperated] It's always wet, Walt.
- WALT: [satisfied] Forecast's consistent. That's good news.

**fog-05 · The woodpile**
Walt's lines marked *(outside)* get a muffled, far-off filter in processing.
- MARJ: [announcer] Fog Report. Walt went out to check the fog about twenty minutes ago. [calling out] Walt?
- MARJ: [worried, calling out] ...Walt?
- WALT *(outside)*: [shouting from far away] I'm by the woodpile.
- MARJ: [exasperated] The woodpile is six feet from the door, Walter.
- WALT *(outside)*: [shouting from far away] Visibility, five feet.
- MARJ: [cheerful, resigned] There you have it, folks.

**fog-06 · Next Thursday**
- WALT: [official] Fog Report. Fog's lifting.
- MARJ: [delighted] Oh, lovely!
- WALT: [flat] Going up. Slowly.
- MARJ: [curious] How slowly?
- WALT: [confident] It'll be gone by Thursday.
- MARJ: [gently correcting] It's Friday, hon.
- WALT: [unbothered] Next Thursday.

### Elk Alert (in place of Sig Alert Theatre)

Breaking news about Harold, a 900-pound bull elk with no respect for traffic. A recurring character, like K-JAM's Gary.

**elk-01 · Harold**
- MARJ: [breaking news, serious] This is an Elk Alert.
- WALT: [grave] Harold's in the road.
- MARJ: [explaining] Harold is a bull elk, for our new listeners. About eight hundred pounds.
- WALT: [correcting] Nine hundred. He's been at the diner.
- MARJ: [breaking news] Harold is standing in the northbound lane, looking at a car.
- WALT: [deadpan] The car is looking back.
- MARJ: [serious] We'll keep you posted.

**elk-02 · The negotiation**
- WALT: [grave] Elk Alert. Harold's back.
- MARJ: [worried] He's blocking the road by the meadow again.
- WALT: [matter-of-fact] Fella in a camper van got out to reason with him.
- MARJ: [wincing] Oh no. How's that going?
- WALT: [deadpan] Harold's in the camper van now.
- MARJ: [pause] [resigned] ...Drive around, folks.

**elk-03 · Thirty-one elk**
- MARJ: [excited] Elk Alert! Harold's crossing with the whole herd. Cows, calves, everybody!
- WALT: [counting, flat] Thirty-one elk.
- MARJ: [surprised] You counted?
- WALT: [deadpan] Thirty-one elk. One Bigfoot.
- MARJ: [warning] Walter.
- WALT: [unbothered] Writing it down.

**elk-04 · Two parking spots**
- WALT: [grave] Elk Alert. Harold is lying down in the parking lot of the general store.
- MARJ: [incredulous] In a parking spot?
- WALT: [flat] Two parking spots.
- MARJ: [exasperated] Is anybody going to ask him to move?
- WALT: [matter-of-fact] Sheriff gave him a ticket.
- MARJ: [disbelieving] He gave the elk a ticket?
- WALT: [deadpan] Harold ate it. Case closed.

### Walt's "There Is One Road" (in place of Dana's shortcut of the day)

Marj keeps trying to make it a real segment. Walt's answer never changes.

**road-01 · Never been wrong**
- MARJ: [excited, announcer] Time for Walt's shortcut of the day!
- WALT: [solemn] There is one road.
- MARJ: [expectant] That's it?
- WALT: [firm] Stay on it.
- MARJ: [proud, warm] Every day, folks. Thirty-one years running.
- WALT: [smug] Never been wrong.

**road-02 · One pie**
- MARJ: [excited, reading] We got a letter for Walt's shortcut segment! "Dear Walt, is there a faster way to Gull Harbor?"
- WALT: [solemn] There is one road.
- MARJ: [reading] They also asked where to get pie.
- WALT: [firm, proud] There is one pie. It's ours.

**road-03 · The detour**
- WALT: [solemn] Shortcut of the day. There is one road.
- MARJ: [hesitant] Walt, the county put up a detour sign this morning.
- WALT: [long pause] [shaken] ...There are two roads.
- MARJ: [reassuring] Just for today.
- WALT: [troubled] I don't like it, Marj. I don't like it at all.

**road-04 · The old logging trail**
- MARJ: [bright] Shortcut of the day! Walt, folks want to know about the old logging trail.
- WALT: [dismissive] That's not a road. That's a rumor.
- MARJ: [teasing] Becky took it once.
- WALT: [grave] Took her three days.
- MARJ: [laughing] She was fifteen. She was on foot.
- WALT: [solemn] There is one road.

### Community Bulletin Board (in place of K-JAM's fake ads)

Notices from around town, read out between songs.

**ad-01 · Pepper**
- MARJ: [cheerful, announcer] The Community Bulletin Board! First up, lost goat. Answers to Pepper. Last seen eating a mailbox on Spruce Street.
- WALT: [official] Second notice. Found mailbox. Partially eaten.
- MARJ: [official, amused] Third notice. Found goat.
- WALT: [dry] Those three folks should talk.

**ad-02 · Earl's firewood**
- WALT: [official] Bulletin board. Firewood for sale. Seasoned, stacked. Ask for Earl.
- MARJ: [approving] Earl's firewood is very good.
- WALT: [flat] Earl's firewood is our firewood.
- MARJ: [surprised] What?
- WALT: [realizing] That's why it's so good. [pause] [determined] ...I'm going to go talk to Earl.

**ad-03 · Pancake breakfast**
- MARJ: [cheerful, announcer] Bulletin board! The volunteer fire department's pancake breakfast is Saturday at the station.
- WALT: [enthusiastic] All you can eat.
- MARJ: [teasing] All you can eat, until Walt eats it all.
- WALT: [proud] Last year we ran out at 7:15.
- MARJ: [pointed] It started at seven.
- WALT: [dignified] I was supervising.

**ad-04 · The sighting log**
- WALT: [official] Bulletin board. The Bigfoot sighting log is open at the general store. Write down your sightings.
- MARJ: [skeptical] Walt, there are forty entries in there.
- WALT: [correcting] Forty-two.
- MARJ: [pointed] And they're all in your handwriting.
- WALT: [tender, sincere] He's shy, Marj. He only comes out for me.

---

## Batch 4: Nature Notes (in place of Fast Lane Facts)

A real, checkable fact about the redwoods or the coast. Marj delights in it; Walt turns it into a tall tale, a callback or himself. Like Fast Lane Facts, they play in order and are remembered between drives. About 20–30 s each.

The numbers are rounded to what's widely published. Hedged wording ("up to", "about") is deliberate; keep it if lines get edited.

**nature-01 · The tall one**
- MARJ: [delighted] Nature Notes! The tallest tree in the world is a coast redwood, right up here. They call it Hyperion. Three hundred and eighty feet!
- WALT: [impressed] Taller than a thirty-five-story building.
- MARJ: [conspiratorial] And where it is is a secret. The rangers won't say. You can get fined just for going near it.
- WALT: [smug] I know where it is.
- MARJ: [flat] You do not.
- WALT: [deadpan] It's the tall one.

**nature-02 · Drinking the fog**
- MARJ: [delighted, explaining] Nature Notes! Redwoods drink the fog. It collects on the needles and drips down to the roots, and some of it soaks right in through the leaves. In summer, fog can be up to a third of their water.
- WALT: [unimpressed] So the fog's useful.
- MARJ: [encouraging] Very useful.
- WALT: [smug] Told you that kettle was a good idea.

**nature-03 · Somebody licked Lou**
- MARJ: [delighted] Nature Notes! Banana slugs can grow up to ten inches long. They're bright yellow, and their slime can numb your tongue.
- WALT: [suspicious] How do we know that?
- MARJ: [pause] [reluctant] ...Somebody licked one.
- WALT: [realizing] Somebody licked Lou.
- MARJ: [defensive] Becky was four, Walter.

**nature-04 · Mostly fog**
- WALT: [solemn] Nature Notes. Some coast redwoods are over two thousand years old.
- MARJ: [awed] Alive since the Roman Empire! Think of everything they've seen.
- WALT: [deadpan] Mostly fog.
- MARJ: [pause] [agreeing] ...Mostly fog.

**nature-05 · Thick-skinned**
- MARJ: [delighted] Nature Notes! Redwood bark can be a foot thick. It's spongy and it hardly burns, so most redwoods live right through a forest fire.
- WALT: [matter-of-fact] And there's no sap in it, so the bugs leave it alone.
- MARJ: [amused] Thick-skinned, doesn't burn, nothing bothers it.
- WALT: [proud] That's me.
- MARJ: [fondly] That's Walt.

**nature-06 · Fairy rings**
- MARJ: [tender] Nature Notes! When an old redwood falls, new trees sprout from its roots in a circle around where it stood. They call it a fairy ring.
- WALT: [quiet] Same roots. Same tree, really.
- MARJ: [tender] All the little ones grow up around where the parent was.
- WALT: [pause] [choked up] ...That's nice.
- MARJ: [teasing, warm] Walt's having a moment.
- WALT: [gruff, sniffling] I'm having allergies.

**nature-07 · Holding hands**
- WALT: [explaining] Nature Notes. Redwood roots only go down about six to twelve feet.
- MARJ: [surprised] For a tree three hundred feet tall?
- WALT: [explaining, gruff] But they spread out a hundred feet, and they grab onto the neighbors' roots. Whole grove holds on together. Wind can't knock 'em over.
- MARJ: [touched] Oh, Walt. They hold hands.
- WALT: [gruff] I didn't say hands.
- MARJ: [insistent, delighted] They hold hands.
- WALT: [long pause] [giving in] ...Fine. They hold hands.

**nature-08 · Big-boned**
- MARJ: [delighted] Nature Notes! The elk around here are Roosevelt elk. The biggest elk in North America, named after President Theodore Roosevelt.
- WALT: [matter-of-fact] Bulls get up to about a thousand pounds.
- MARJ: [pleased] So Harold's a normal size!
- WALT: [defensive] Harold's big-boned.

**nature-09 · Seal or sea lion**
- WALT: [official] Nature Notes. How to tell a seal from a sea lion.
- MARJ: [delighted] Ooh.
- WALT: [explaining] Sea lion's got little ear flaps, walks on its flippers and barks. Seal's got no ear flaps, wiggles on its belly and keeps quiet.
- MARJ: [curious] So which one are you?
- WALT: [proud] Seal. Quiet. Keeps to himself.
- MARJ: [teasing] You snore like a sea lion.
- WALT: [pause] [conceding] ...Sea lion.

**nature-10 · The keys**
- MARJ: [delighted] Nature Notes! The tallest trees on Earth start from a seed about the size of a tomato seed. And the cones are about the size of an olive.
- WALT: [mildly impressed] Huh.
- MARJ: [marveling] The tallest living thing in the world, from something you could lose in your pocket!
- WALT: [realizing] That's how I lost the house keys.
- MARJ: [correcting] You lost the house keys in the couch.
- WALT: [suspicious] Something's growing in there.

**nature-11 · No elk**
- MARJ: [delighted, dreamy] Nature Notes! Way up in the tops of the old redwoods, there are whole gardens. Ferns, huckleberry bushes, even little trees growing right on the branches.
- WALT: [matter-of-fact] And salamanders. Some of 'em spend their whole lives up there. Never touch the ground.
- MARJ: [surprised] Never come down at all?
- WALT: [deadpan] Why would they. Nice view. No elk.

**nature-12 · The secret nest**
- WALT: [explaining] Nature Notes. The marbled murrelet. Little seabird. Fishes in the ocean, but nests way up in the old trees, miles inland.
- MARJ: [curious] For the longest time, nobody could find their nests.
- WALT: [matter-of-fact] First one wasn't found till 1974. A tree trimmer spotted it.
- MARJ: [tender] Kept its secret all those years.
- WALT: [softly] Like me and your mother's porch light.
- MARJ: [pause] [touched] ...Like that.

**nature-13 · Picky**
- MARJ: [delighted] Nature Notes! Coast redwoods only grow in one skinny strip, from Big Sur up to the bottom of Oregon. About 450 miles long, and never far from the ocean.
- WALT: [matter-of-fact] They follow the fog.
- MARJ: [cheerful] No fog, no redwoods.
- WALT: [dry] Picky.
- MARJ: [teasing] Like somebody with his coffee.
- WALT: [defensive] I'm not picky. I just like it the one way.

**nature-14 · Three hundred and twelve** (the sincere one)
- WALT: [quiet, serious] Nature Notes. About ninety-five percent of the old-growth redwoods were cut down. Most of what's left is protected now.
- MARJ: [softly] That's a hard one, hon.
- WALT: [quiet, sincere] I hauled some of them, you know. Thirty years.
- MARJ: [proud, tender] And he's planted over three hundred since he retired. Every spring.
- WALT: [quiet pride] Three hundred and twelve.
- MARJ: [fondly] You count everything.
- WALT: [warm, gruff] They'll be big in about five hundred years. I'll check on them.

**nature-15 · Ghost trees**
- MARJ: [delighted, spooky] Nature Notes! There are albino redwoods. Pure white needles, no green at all. Folks call them ghost trees.
- WALT: [explaining] Can't make their own food. They live off the roots of the tree they sprouted from.
- MARJ: [marveling] There are only a few hundred known in the whole world.
- WALT: [pointed] Lives off the family, doesn't feed itself.
- MARJ: [teasing] Sounds like your brother.
- WALT: [grim] He's coming this weekend.

**nature-16 · Too bright**
- MARJ: [delighted] Nature Notes! Redwood sorrel. That little clover-looking plant all over the forest floor. When sunlight hits it, it folds its leaves down in just a few minutes.
- WALT: [sleepy, approving] Too bright. Goes back to sleep.
- MARJ: [warm] And when the shade comes back, it opens right up again.
- WALT: [content] That's me in the morning.
- MARJ: [teasing] That's you all day, hon.

---

## Batch 5: callers

Small scenes that escalate and end on a twist (about 30–45 s), like K-JAM's newer callers. Most call back to station lore, so they get funnier the longer you listen. Delivery is in the [tags]; italic notes after a name are processing filters.

**Voices:**
- Rick and Dana use their own voices.
- Becky calls twice, so she should get her own voice: a woman in her mid-30s, warm and teasing.
- Everyone else reuses the existing K-JAM caller voices under new names. The phone filter helps them sound different.
- In call-10, Walt himself is the caller, so his lines there get the phone filter.

**call-01 · Becky and Lou** (BECKY)
- MARJ: [warm] Line one, you're on The Coffee Cabin.
- BECKY: [casual, warm] Hi, Mom.
- MARJ: [delighted] Becky! Everybody, it's our daughter!
- WALT: [warm, gruff] Hi, kiddo.
- BECKY: [teasing] Dad, you're doing the radio voice.
- WALT: [defensive] This is my voice.
- BECKY: [teasing] At home you just say "huh" and point at things.
- MARJ: [laughing] She's not wrong.
- BECKY: [casual] Anyway, the kids want to know if Lou is real.
- WALT: [firm] Lou is real.
- BECKY: [patient, laughing] Dad. I made Lou up. I was four. Lou was a pinecone.
- MARJ: [pause] [horrified] ...Then what did you lick?
- BECKY: [embarrassed] I don't want to talk about it.
- WALT: [bewildered] Then who's been eating my lettuce for thirty years?

**call-02 · Rick needs this** (RICK, with DANA in the background)
- MARJ: [warm] We've got a long-distance caller! Go ahead, hon.
- RICK: [weary, suspicious] Is this The Coffee Cabin.
- MARJ: [cheerful] It is!
- RICK: [grave] Rick. K-JAM. Down in L.A. I'm calling to report a traffic problem.
- WALT: [surprised] Here?
- RICK: [desperate] Anywhere. I just need to know someone else is suffering.
- WALT: [matter-of-fact] Harold's in the road.
- RICK: [confused] Who's Harold?
- WALT: [deadpan] Nine hundred pounds. Antlers.
- RICK: [pause] [hopeful] ...How long has he been there?
- WALT: [flat] Since Tuesday.
- RICK: [quietly, relieved] Thank you. That's all I needed.
- DANA *(in the background)*: [suspicious] Rick, are you calling the tree people again?
- RICK: [hurried] Gotta go.

**call-03 · Dana asks for advice** (DANA, with RICK in the background)
- WALT: [gruff] Caller.
- DANA: [bubbly] Hi! It's Dana from K-JAM! Huge fan!
- MARJ: [delighted] Oh, Dana! We love your show!
- DANA: [conspiratorial] Rick doesn't know I'm calling. I just wanted to ask. Forty-one years! How do you two do it?
- MARJ: [wise, warm] Oh, hon. Patience. Laughing. Separate blankets.
- WALT: [dry] And she counts every time I step on her feet.
- MARJ: [proud] Four thousand and twelve.
- DANA: [pouty] Aww! Rick won't even dance.
- WALT: [deadpan] Smart man.
- MARJ: [scolding] Walter!
- DANA: [gasps] Oh. Oh no. He's in the next booth. He heard all of it. [softly] He's... Rick, are you crying?
- RICK *(in the background)*: [sniffling] It's allergies.
- WALT: [approving] Good man.

**call-04 · Tyler from L.A.** (TYLER)
- MARJ: [warm] Line two, you're on the air.
- TYLER: [nervous, uptalk] Hi, yeah, um. My GPS stopped working, like, an hour ago?
- WALT: [firm] There is one road.
- TYLER: [confused] Right, but it keeps saying "make a U-turn when possible."
- WALT: [flat] Don't.
- TYLER: [nervous] Also there's an elk in front of my car? And he's looking at me?
- MARJ: [curious] Is he a big one?
- TYLER: [panicked whisper] He's eating my windshield wiper.
- WALT: [deadpan] Harold.
- TYLER: [confused] How do you know his name?
- WALT: [matter-of-fact] Everybody knows Harold.
- MARJ: [motherly] Just stay in the car, hon, and stay on the road.
- TYLER: [nervous] Okay. Also there's a sign up here that says "Pie All Day." Is that, like, a threat?
- WALT: [dry] It's a promise.

**call-05 · Dolores from Gull Harbor** (DOLORES)
- WALT: [gruff] Caller, go ahead.
- DOLORES: [icy] Walter. It's Dolores. From the Gull Harbor diner.
- WALT: [long pause] [cold] Dolores.
- DOLORES: [accusing] I hear you're sending your dog over here.
- WALT: [defensive] I said that on the radio. Not to you.
- DOLORES: [stern] Everybody heard it, Walter. Biscuit came by this morning.
- MARJ: [worried] Oh no. What did he do?
- DOLORES: [indignant] Ate a whole blueberry pie off the counter. Then sat down and wagged.
- WALT: [proud] Good boy.
- DOLORES: [furious] Then he came back for a second one.
- WALT: [pause] [intrigued] ...So it's good pie.
- DOLORES: [smug] It's the best pie on the coast.
- WALT: [dismissive] Biscuit's a dog, Dolores. He doesn't know anything. [pause] [curious] What's in the crust?
- DOLORES: [sly] Come find out.
- WALT: [determined] I'm going to Gull Harbor.
- MARJ: [warning, amused] There is one road, hon.

**call-06 · Norm and the slug race** (NORM)
- MARJ: [cheerful] Line one! You're on the air.
- NORM: [hushed sports announcer] Marj! It's Norm, live from the annual banana slug race.
- MARJ: [excited] Oh, Norm! How's it going?
- NORM: [sports announcer] Well, it started Tuesday.
- WALT: [curious] How's it looking?
- NORM: [intense] Very tense. Slimy Pete is in the lead by nearly four inches.
- MARJ: [impressed] Four inches!
- NORM: [excited] The crowd is going wild. [deflating] Well. There's two of us.
- WALT: [curious] Who's in second?
- NORM: [grave] Hard to say. One went under a leaf on Wednesday and nobody's seen him since.
- MARJ: [sympathetic] Oh dear.
- NORM: [distracted] Hold on. [pause] [devastated] Oh no. Folks, I'm being told Slimy Pete is a pinecone.
- WALT: [unsurprised] Happens more than you'd think.
- MARJ: [sighs, knowing] It does around here.

**call-07 · Gus at the lighthouse** (GUS)
- WALT: [gruff] Caller.
- GUS: [weary] Walt, it's Gus. Out at the lighthouse.
- MARJ: [cheerful] Hi, Gus! How's the light?
- GUS: [flat] Light's fine. Foghorn's broke.
- WALT: [concerned] How long?
- GUS: [proud, weary] Since Sunday. So I've been doing it myself.
- MARJ: [confused] Doing what yourself?
- GUS: [deep foghorn impression] Bwaaaaah.
- MARJ: [startled] Oh my.
- GUS: [exhausted] Every thirty seconds. Four days.
- WALT: [matter-of-fact] Ships okay?
- GUS: [tender, bashful] Ships are fine. But a sea lion's fallen in love with me. Answers every time.
- MARJ: [touched] Aww.
- GUS: [shy, proud] Brought me a fish this morning.
- WALT: [warm, gruff] Leave the horn broke, Gus.

**call-08 · Sheriff Dot** (DOT)
- MARJ: [cheerful] We've got the sheriff on the line! Hi, Dot.
- DOT: [stern] Marj. Walt. I need to correct a rumor.
- WALT: [dry] Go ahead.
- DOT: [firm] I did not give Harold a ticket.
- MARJ: [surprised] You didn't?
- DOT: [exasperated] I wrote him a warning. He ate the warning. Then he ate my ticket book.
- WALT: [curious] The whole book?
- DOT: [fed up] And the pen. So nobody in this county gets a ticket till Thursday.
- WALT: [pause] [sly] How fast does the one road go, Dot?
- DOT: [warning] Don't you dare, Walter.
- MARJ: [laughing] Dot, his truck doesn't go over forty.
- WALT: [correcting, proud] Forty-two. Downhill.

**call-09 · Earl's apology** (EARL)
- WALT: [gruff] Caller.
- EARL: [sheepish] Walt. It's Earl.
- WALT: [flat] Earl.
- EARL: [sincere, sheepish] About the firewood. I want to say I'm sorry. I thought it was the community woodpile.
- MARJ: [patient] It's our woodpile, Earl. It's next to our house.
- EARL: [defensive] It looked very communal.
- WALT: [accusing] You sold eleven cords of it.
- EARL: [proud] And I'm bringing you the money. Minus my fee for stacking it.
- WALT: [flat] It was already stacked.
- EARL: [smug] I restacked it. Better.
- WALT: [long pause] [grudging] ...It is better, Marj.

**call-10 · Bigfoot calls in** (WALT, on the phone)
- MARJ: [warm] Line two, you're on The Coffee Cabin.
- WALT *(on the phone)*: [deep, disguised voice] Hello. This is... Bigfoot.
- MARJ: [sighs, unimpressed] Walter, I can see you out on the porch phone.
- WALT *(on the phone)*: [deep, disguised voice] No you can't.
- MARJ: [dry] You're wearing the antler hat.
- WALT *(on the phone)*: [deep, disguised, stubborn] Bigfoot also has an antler hat.
- MARJ: [sweet, knowing] Then come inside, Bigfoot. Your soup's getting cold.
- WALT *(on the phone)*: [pause] [normal voice, curious] ...What kind of soup?
- MARJ: [flat] It's soup.

**call-11 · Forty miles out** (BECKY)
- MARJ: [warm] Line one!
- BECKY: [cheerful] Hi, Mom. Forty miles out.
- MARJ: [excited] Oh! Walt, she's forty miles out!
- WALT: [already moving] I'm at the window.
- MARJ: [laughing] She's forty miles away, Walter. You can't see her yet.
- WALT: [defensive] Checking the weather.
- BECKY: [amused] Mom, the kids want to know if Grandpa's at the window.
- MARJ: [fondly] He's at the window.
- BECKY: [teasing] Tell him we're at the elk.
- WALT: [fondly, gruff] There's always the elk.
- BECKY: [cheerful] Oh, and Uncle Ray's in the car with us. Surprise!
- WALT: [long pause] [resigned] Marj. Make it fourteen pies.

**call-12 · Ernie's new song** (ERNIE)
- MARJ: [cheerful] We've got Ernie on the line! Ernie's half of our house band.
- ERNIE: [laid-back] Hey, Marj. Hey, Walt.
- WALT: [gruff] Ernie.
- ERNIE: [proud] So my cousin and I wrote a new song. It's got words this time.
- MARJ: [delighted] Oh, words!
- ERNIE: [sheepish] Well. One word.
- WALT: [curious] What's the word?
- ERNIE: [proud] "Fog."
- MARJ: [puzzled] Just "fog"?
- ERNIE: [earnest, performing] We say it a lot of different ways. Like a question. "Fog?" Like we're sad. "Fog." Like we're excited. "Fog!"
- WALT: [long pause] [sincere] We'll play it.
- MARJ: [surprised] We will?
- WALT: [solemn] It's honest.

**call-13 · The camper van guy** (GLEN)
- WALT: [gruff] Caller.
- GLEN: [friendly, a little dazed] Hi. You don't know me. I'm the guy with the camper van. From the Elk Alert?
- MARJ: [concerned] Oh! Are you all right, hon?
- GLEN: [serene] I'm good. Great, actually. Harold and I worked it out.
- WALT: [suspicious] Worked what out?
- GLEN: [happy] He's riding shotgun now. We're going to Oregon.
- MARJ: [astonished] Harold's going to Oregon?
- GLEN: [earnest] He seems to want to. He keeps looking north.
- WALT: [gentle, gruff] Tell him there's one road.
- GLEN: [wise, serene] He knows, Walt. He's always known.
- MARJ: [warm] Well, safe travels to you both!
- GLEN: [matter-of-fact] We'll be back Tuesday. He gets carsick.

---

## Batch 6: reactions and short bits

Mostly short (3–10 s). These fill the same slots as K-JAM's, so the game logic stays the same.

### Town names (one per town, played on the way in)

| Slug | Line |
|---|---|
| fern-hollow | MARJ: [cheerful] Rolling into Fern Hollow! |
| cedar-landing | MARJ: [cheerful] Here's Cedar Landing! |
| mossbridge | WALT: [proud] Mossbridge. Fog line starts here. |
| driftwood-bay | MARJ: [cheerful] Coming into Driftwood Bay! |
| gull-harbor | WALT: [grumbling] Gull Harbor. [pause] Hmph. |
| elkhorn-flat | MARJ: [cheerful] Rolling into Elkhorn Flat! |
| sawdust-junction | WALT: [nostalgic] Sawdust Junction. Used to haul out of here. |
| tidewater | MARJ: [cheerful] Here's Tidewater! |
| bramble-point | MARJ: [cheerful] Coming into Bramble Point! |
| lantern-cove | MARJ: [cheerful] Rolling into Lantern Cove! |
| hemlock | WALT: [deadpan] Hemlock. |
| old-mill | MARJ: [cheerful] Here's Old Mill! |

### Town reactions (after the town name)

**town-01 · Waving**
- MARJ: [warm] Oh, it's a sweet little town. Everybody waves.
- WALT: [dry] They're not waving. They're wondering where your roof went.

**town-02 · Next to the bait**
- WALT: [matter-of-fact] General store's got everything. Bait, coffee, wedding dresses.
- MARJ: [fondly] That's true. I got mine there.
- WALT: [dry] Next to the bait.

**town-03 · The landmark**
- MARJ: [proud] Main Street's three blocks long.
- WALT: [dry] Four if you count the dog.
- MARJ: [fondly] That dog's been lying there since 2009.
- WALT: [solemn] Town council made him a landmark.

**town-04 · Phyllis**
- WALT: [matter-of-fact] Library's open Tuesdays.
- MARJ: [correcting] And Thursdays.
- WALT: [dry] Thursdays is just Phyllis reading out loud on the steps.
- MARJ: [proud] People come for miles.

### Scenery reactions

K-JAM's `place` keys get Redwood versions: `grove` (new), `coast`, `mainstreet`, `homes`, `harbor`, `mill` and `campground`.

**grove-01 · Look up**
- MARJ: [soft, warm] Into the big trees now, hon. Look up, if you're not driving.
- WALT: [dry] Nobody's driving. The car drives itself.
- MARJ: [cheerful] Then everybody look up!

**grove-02 · Quieter**
- WALT: [hushed] Grove's quiet today.
- MARJ: [whispering] It's always quiet.
- WALT: [hushed] Quieter.
- MARJ: [pause] [whispering] ...It is quieter.

**grove-03 · Tuesday**
- MARJ: [awed] See that light coming down through the branches? Folks call those god rays.
- WALT: [deadpan] I call them Tuesday.

**grove-04 · Breathe harder**
- WALT: [reverent] If you're in the grove right now, roll down your window. That air's two thousand years old.
- MARJ: [gently correcting] It's a convertible, hon. There's no window.
- WALT: [deadpan] Then breathe harder.

**coast-01 · Living the dream**
- MARJ: [delighted] Back out on the coast! Look at those big rocks standing out in the water.
- WALT: [matter-of-fact] Sea stacks. Been there longer than the trees.
- MARJ: [envious] And they don't have to do a thing.
- WALT: [wistful, dry] Living the dream.

**coast-02 · Mostly "fish"**
- WALT: [official] Coast advisory. Sea lions on the rocks. Very loud.
- MARJ: [curious] What are they saying?
- WALT: [deadpan] Same as Biscuit. Mostly "fish."

**coast-03 · The fort**
- MARJ: [cheerful] Driftwood beach coming up. Folks build little forts down there.
- WALT: [proud] Built one in '72. Still standing.
- MARJ: [exasperated] That's the ranger station, Walter.
- WALT: [unbothered] They added a roof.

**mainstreet-01 · Lifts**
- WALT: [matter-of-fact] Main Street. Every building's got a big false front. Makes 'em look taller.
- MARJ: [teasing] Like Walt's boots.
- WALT: [defensive] They're lifts, Marj. It's different.

**homes-01 · The longest day**
- MARJ: [delighted] Oh, look at those old Victorian houses. All the colors!
- WALT: [proud] Painted ours purple once.
- MARJ: [pointed] For one day.
- WALT: [haunted, dry] Longest day of my life.

**harbor-01 · Sea lion told him**
- MARJ: [cheerful] Down by the harbor! The fishing boats are in.
- WALT: [matter-of-fact] Gus says the fish are biting.
- MARJ: [skeptical] Gus runs the lighthouse. How would he know?
- WALT: [deadpan] Sea lion told him.

**mill-01 · Marshmallows**
- WALT: [matter-of-fact] Old mill on your right. That big cone is the teepee burner.
- MARJ: [wistful] They haven't lit it in thirty years.
- WALT: [grumbling] And she still won't let me roast a marshmallow in it.
- MARJ: [exasperated] It's three stories tall, Walter.

**campground-01 · Burning pancakes**
- MARJ: [cheerful] Passing the campground! Somebody's making pancakes.
- WALT: [sniffing, dry] Somebody's burning pancakes.
- MARJ: [skeptical] You can't smell that from here.
- WALT: [certain] I can smell that from here.

### Drive-through tree (in place of K-JAM's pier reaction; plays when the hero tree is near)

**tree-01 · Duck**
- MARJ: [excited] Ooh, drive-through tree coming up! Duck, hon!
- WALT: [dry] They don't have to duck.
- MARJ: [insistent, cheerful] Duck anyway. It's tradition.

**tree-02 · Most of it**
- WALT: [proud] That's the drive-through tree. Took my log truck through there once.
- MARJ: [flat] You did not.
- WALT: [pause] [sheepish] Most of it.

### Player reactions

**steer-01 · A few roads** (the player picked a turn)
- MARJ: [delighted] Oh, somebody's picking their own way today!
- WALT: [firm] There is one road.
- MARJ: [gently correcting] In town there are a few, Walt.
- WALT: [pause] [grudging] ...I'm aware.

**steer-02 · Watch for Harold**
- WALT: [curious, gruff] Turned off, huh.
- MARJ: [encouraging] Exploring! Good for you, hon.
- WALT: [warning] Watch for Harold.

**speed-fast · Still works**
- WALT: [dry] Somebody's in a hurry.
- MARJ: [soothing] The trees aren't going anywhere, hon.
- WALT: [warning] And Dot's got radar.
- MARJ: [teasing] Dot's got a radar gun from 1979.
- WALT: [proud] Still works.

**speed-slow · The speed of fog**
- MARJ: [approving, warm] Somebody's taking it nice and slow. That's the way, hon.
- WALT: [content] Speed of the fog.

**postcard-01 · The freezer**
- MARJ: [delighted] Did somebody just take a postcard? Oh, send us one! We've got a fridge.
- WALT: [dry] Fridge is full, Marj.
- MARJ: [undeterred] There's room on the freezer.

**postcard-02 · Lie down**
- WALT: [instructing] Postcard. Get the trees in.
- MARJ: [laughing] You can't fit a whole redwood in a postcard, Walt.
- WALT: [deadpan] Then lie down.

### Hands-free streak

**milestone-05**
- MARJ: [proud, warm] Five minutes, no phone! Look at you, hon.
- WALT: [dry] Five minutes. That's one cup of coffee.

**milestone-10**
- WALT: [matter-of-fact] Ten minutes hands-free.
- MARJ: [proud] Walt's proud of you.
- WALT: [grudging] I'm mildly impressed.
- MARJ: [fondly] That's proud, for Walt.

**milestone-30**
- MARJ: [delighted] Thirty minutes without your phone! That deserves a slice of pie.
- WALT: [eager] Two slices.
- MARJ: [teasing] You just want pie.
- WALT: [sincere] I always want pie.

**milestone-60**
- WALT: [impressed, quiet] One hour. No phone.
- MARJ: [prompting] Walt, say something nice.
- WALT: [pause] [sincere] ...You'd make a good log truck driver.
- MARJ: [touched, laughing] That's the nicest thing he's ever said to anybody.

**milestone-120**
- MARJ: [overjoyed] Two hours, hon! Two whole hours, no phone!
- WALT: [proud] We should name a tree after you.
- MARJ: [delighted] Walt's going out to plant one right now.
- WALT: [satisfied] Three hundred and thirteen.

**record-01**
- MARJ: [excited] That's a new personal record! Walt, ring the bell!
- WALT: [flat] We don't have a bell.
- MARJ: [insistent] Then do the foghorn!
- WALT: [deep foghorn impression] Bwaaaah.

**back-01**
- WALT: [dry] Oh. You're back.
- MARJ: [reassuring] Everybody checks their phone sometimes, hon. New streak starts now!

**back-02**
- MARJ: [warm] Welcome back, hon! The trees waited for you.
- WALT: [dry] Trees wait for everybody. That's their whole thing.

**back-03**
- WALT: [disapproving] Phone, huh.
- MARJ: [teasing] Walt doesn't have a cell phone.
- WALT: [proud] Got the porch phone.
- MARJ: [pointed] It's on a cord.
- WALT: [smug] Never lost it once.

### Song requests

**request-01**
- MARJ: [excited] Ooh, we've got a request!

**request-02**
- WALT: [matter-of-fact] Request came in. Somebody wants something different.
- MARJ: [warm] Happy to oblige, hon.

**request-03**
- MARJ: [warm, dedicating] This one's going out to somebody driving through the redwoods. You know who you are.

**request-04**
- WALT: [dry] Request from a red convertible. No roof. In the fog.
- MARJ: [impressed] Brave.

**request-05**
- MARJ: [excited] The request line's ringing off the hook!
- WALT: [weary] It's Ernie. He wants us to play "Fog."

**request-06**
- WALT: [grumbling] We were going to play something else. Marj overruled me.
- MARJ: [smug] I always overrule you.
- WALT: [resigned, fond] Forty-one years.

**plug-01** (until the player has tried requests)
- MARJ: [warm] Want to hear something else, hon? Tap the radio. We take requests.
- WALT: [dry] We take 'em. We play 'em. Marj insists.

### Focus drive

**focus-20**
- MARJ: [encouraging] Focus drive! Twenty minutes. You get to work, hon. We'll keep it quiet.
- WALT: [gruff] I'm always quiet.

**focus-30**
- WALT: [official] Thirty-minute focus drive. Starting now.
- MARJ: [whispering] We'll whisper.
- WALT: [dry] Marj can't whisper.
- MARJ: [loud whisper, indignant] I can whisper!

**focus-end**
- MARJ: [cheerful] That's your focus drive, hon! Pull over, stretch your legs, get yourself a cup of coffee.
- WALT: [gruff] Five minutes. Then back to it.

**focus-back**
- WALT: [gruff] Break's over.
- MARJ: [warm] Back on the road, hon. Coffee in hand.
