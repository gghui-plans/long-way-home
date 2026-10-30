# 96.1 The Fireside: radio script (DRAFT, not recorded yet)

The High Sierra station. For review: mark lines to cut, rewrite or keep. Nothing goes to ElevenLabs until you approve.
Numbers are written as digits here and get spelled out for the voices when recorded ("ninety-six point one"), like the other stations.

**Recording (same as the Cabin's):** Eleven v4 with Auto-tag off, stability 0.75. Every line starts with an audio tag in square brackets, like `[deadpan]` or `[booming, delighted]`. Tags are hints: if one sounds odd, delete it and regenerate.
- **Vera's tags describe attitude, never speed** ("dry", "deadpan", "matter-of-fact", "cool", "quick"). "[slow]", "[savouring]" and stray "[pause]" tags made her drag in the tests (2026-10-28). Use "slow" at most a couple of times in the whole script, for ballad intros.
- An italic note after a speaker's name, like *(on the phone)*, is for processing. Don't paste it.
- `[cut]` at the end of a handoff line is for the game, which cuts the signal there. Don't paste it.
- Rick, Dana, Marj and Walt lines in this file are recorded with their own voices (all in voices.json), the way the Cabin pipeline made K-JAM's farewells.

---

## The hosts

**Vera and Moose**, broadcasting from a studio above the bar of an old ski lodge. Smooth versus stoked: she wants everything cool and unhurried; he bursts in with powder reports. The songs are warm and romantic, so the hosts keep things dry and silly.

- **VERA:** the smooth one. A former lounge singer in her 40s who runs the board. Low, cool, dry, unimpressed by everything, sips something on air. Describes songs like fine wine, takes the lodge's ancient hot tub very seriously, half-sings the station ID. Says "jazz by the fire". No pet names; "hon" is Marj's.
- **MOOSE:** the stoked one. A ski patroller the size of a door, in his 50s, who does the morning chain-control and powder reports. Big, booming, delighted; every day is "the best day". Interrupts Vera's sentences and never notices. Says "fresh powder" and "stoked".

**Voices (ElevenLabs, chosen 2026-10-28, IDs in voices.json as VERA and MOOSE):** Vera is the library voice Sadie (deep, lived-in, dry). Moose is Tim (warm, big, upbeat). Both sit apart from the other four hosts: Vera is lower and cooler than Marj and Dana; Moose is bigger and faster than Rick and Walt.

**Station lore to call back to:**
- The studio above the lodge bar. Glasses clink; someone orders during the show.
- Bertha, the lodge's ancient snowcat. Starts on the third try. Moose loves her.
- Gerald, the bear who raids the dumpster. He has a key now. Moose says hi every time.
- Hank, the plow driver who calls in with road reports and opinions. His plow is named Linda, like his wife.
- Velvet, the station cat (all black, white tip on her tail), who sleeps on the mixing board.
- The hot tub: ancient, sacred to Vera, and somebody has been in it since Tuesday.
- A friendly rivalry with the Coffee Cabin: Walt says sitting next to a fire isn't radio. Vera sends Marj a postcard every winter.
- Rick and Dana call in from L.A., horrified by snow, altitude and chains.
- 7,000 feet. Everything up here goes slower (except Moose).

---

## Clip inventory

Mirrors the Cabin's set (about 150 clips) so the game code reuses the same slots. Batches get written in this order.

| Batch | K-JAM slot | Fireside version | Clips | Status |
|---|---|---|---|---|
| 1 | (new) | Handoff: K-JAM and Cabin goodbyes to the mountains, Fireside arrivals (from the south, from the coast), Fireside goodbyes, welcome-backs on K-JAM and the Cabin | 20 | **drafted below** |
| 1 | id | Station IDs | 3 | **drafted below** |
| 1 | clock | Time of day | 4 | **drafted below** |
| 1 | after | After a song | 3 | **drafted below** |
| 1 | red | Stopped (chain control, a bear, a plow) | 3 | **drafted below** |
| 2 | intro + introb | Song intros: a short one and a story one per song | 32 | **drafted below** |
| 3 | traffic | Chain control and road report | 6 | **drafted below** |
| 3 | sigalert | Plow Alert / Whiteout Watch | 4 | **drafted below** |
| 3 | shortcut | Moose's "secret stash" | 4 | **drafted below** |
| 3 | ad | Lodge bulletin board | 4 | **drafted below** |
| 4 | facts | Snow Notes (real snow and Sierra facts) | 16 | **drafted below** |
| 5 | call | Callers | 13 | **drafted below** |
| 6 | town, townname, place, pier→summit | Village and scenery reactions | 30 | **drafted below** |
| 6 | steer, speed, postcard | Player reactions | 6 | **drafted below** |
| 6 | milestone, record, back | Hands-free streak | 9 | **drafted below** |
| 6 | request, plug | Song requests | 7 | **drafted below** |
| 6 | focus (20, 30, end, back) | Focus drive | 4 | **drafted below** |
| 6 | welcome | How it works, when a drive starts in the Sierra | 1 | **drafted below** |
| 7 | holiday (new, optional) | Holiday bits, December only | 4 | **drafted below** |

---

## Batch 1

### Handoff: K-JAM goodbyes to the mountains (Rick and Dana, as the signal breaks up)

The game adds the static and dropouts. `[cut]` marks where the signal dies mid-line. The game picks one, preferring ones you haven't heard. These play instead of handoff-out-01 to 03 when the destination is the High Sierra.

**kjam-out-sierra-01 · Up**
- DANA: [bright, noticing] Ooh, Rick, the signal's thinning out. They're going up!
- RICK: [alarmed] Up? Up where? There is no up. We're a flat city, Dana.
- DANA: [cheerful] The mountains! Snow! Pack a sweater, sweetie!
- RICK: [rising panic] Seven thousand feet. People weren't meant to be at seven thousand feet. Birds, maybe. Not— `[cut]`

**kjam-out-sierra-02 · Chains**
- RICK: [grave] We're losing them to the mountains, Dana.
- DANA: [sunny] Say hi to the snow for us!
- RICK: [ominous] They're going to make you put chains on your tires. Chains. Like a prisoner. Like a— `[cut]`

**kjam-out-sierra-03 · The top**
- DANA: [waving, warm] Bye! Put the top up! It's cold up there!
- RICK: [dry] They won't put the top up.
- DANA: [insistent] They might!
- RICK: [deadpan] Nobody has ever put the top up. Not once. I've checked the— `[cut]`

### Handoff: Coffee Cabin goodbyes to the mountains (Marj and Walt)

These play instead of leave-01 to 03 when the destination is the High Sierra.

**cabin-out-sierra-01 · Not radio**
- MARJ: [warm] Signal's going, hon. You're climbing. Must be heading for the snow.
- WALT: [grumbling] The Fireside.
- MARJ: [gently] Now, Walter.
- WALT: [dry, firm] Sitting next to a fire isn't radio. It's a fireplace with a microphone.
- MARJ: [to the listener, warm] They're lovely people. Vera sent a card. Tell Moose that Walt says— `[cut]`

**cabin-out-sierra-02 · Chains in the trunk**
- MARJ: [calling out, cheerful] Bye, hon! Chains are in the trunk!
- WALT: [flat] They're not.
- MARJ: [cheerful] Well, they should be! And wave to Harold on the way— `[cut]`

**cabin-out-sierra-03 · Fog has manners**
- WALT: [gruff] Losing you. Heading up.
- MARJ: [fondly] Say hi to the snow. Walt doesn't like the snow.
- WALT: [dry] I like it fine. It's cold, is all. Fog's cold too, but fog's got manners. Snow just sits on you until— `[cut]`

### Handoff: Fireside arrivals from the south (after the static clears)

**arrive-south-01 · Boots off** (plays the first time; doubles as the station introduction)
- MOOSE: [excited, hushed] Vera. Vera. Somebody new. Convertible. Coming up from the city.
- VERA: [dry] How do you know that.
- MOOSE: [proud] Chain control. I waved them through. No chains. Very brave.
- VERA: [smooth, to the listener] Well, welcome up. You're listening to 96.1, The Fireside. Jazz by the fire, skis by the door. I'm Vera.
- MOOSE: [booming] Moose!
- VERA: [matter-of-fact] We broadcast from above the bar at the lodge. Boots off. Mind the cat.

**arrive-south-02 · Seven thousand feet**
- VERA: [cool, welcoming] If you just drove up from the city, you're at seven thousand feet now. Breathe slower. Everything up here goes slower.
- MOOSE: [bursting in] Except me!
- VERA: [deadpan] Except Moose. Welcome to The Fireside.

**arrive-south-03 · Top's down** (assumes the top stays down in the snow; rewrite if it goes up)
- MOOSE: [delighted] Top's down! Vera, they've got the top down! In the snow!
- VERA: [unbothered] Good for them.
- MOOSE: [awed] That is the most stoked thing I have ever seen.
- VERA: [dry] Welcome to 96.1. There are blankets at the lodge. Moose will bring one out. He's already gone.

### Handoff: Fireside arrivals from the coast (from the redwoods)

**arrive-coast-01 · Fog in the upholstery**
- MOOSE: [sniffing, excited] Vera, they came over from the coast. I can tell. Fog in the upholstery.
- VERA: [dry] You can't smell fog, Moose.
- MOOSE: [certain] You can up here.
- VERA: [smooth, to the listener] Welcome to the mountains. 96.1, The Fireside. Marj and Walt send you up well fed, and we send you back down well rested.

**arrive-coast-02 · Walt's opinion**
- VERA: [cool] Coming in from the redwoods. Is Walt still telling people a fire isn't radio?
- MOOSE: [cheerful] He says it every time!
- VERA: [unbothered, dry] He's welcome to come warm his opinion by it. Welcome to The Fireside.

**arrive-coast-03 · Taller**
- MOOSE: [bursting] Trees to mountains! You traded trees for mountains! Vera, that's an upgrade.
- VERA: [flat] The trees are very nice, Moose.
- MOOSE: [earnest] Mountains are taller.
- VERA: [to the listener, warm] He means welcome. Stay a while. It's warm in here and snowing out there.

### Handoff: Fireside goodbyes (heading down the mountain)

Destination-neutral, since the road trip loop goes to L.A. but the map can send you to the coast.

**leave-01 · Save you a chair**
- VERA: [noticing, cool] Signal's thinning. You're heading down the mountain.
- MOOSE: [sad, big] Already? They just got here!
- VERA: [gentle, dry] They had a whole drive, Moose.
- MOOSE: [calling out] Come back when it dumps! I'll save you a chair!
- VERA: [smooth] Mind the ice on the way down. The jazz stays warm up here until— `[cut]`

**leave-02 · Finders keepers**
- MOOSE: [calling] Bye! Drive safe! Chains off at the bottom!
- VERA: [matter-of-fact] And if you left anything in the hot tub, it's Moose's now.
- MOOSE: [cheerful] Finders keepers!
- VERA: [dry] That's how he got the— `[cut]`

**leave-03 · Gerald waved**
- VERA: [cool] There they go. Moose, say goodbye.
- MOOSE: [booming] Bye!
- VERA: [deadpan] Gerald, say goodbye.
- MOOSE: [whispering, awed] He waved. Vera, he waved. The bear— `[cut]`

### Handoff: K-JAM welcome-backs from the snow

These play instead of return-01 to 03 when you come down from the High Sierra.

**kjam-return-sierra-01 · It waited**
- DANA: [gasps, thrilled] Rick! They're back from the mountains! They survived!
- RICK: [suspicious] Are they wet? They sound wet.
- DANA: [cheerful] It's snowmelt, sweetie! Welcome back to the sunshine!
- RICK: [weary] Welcome back. Traffic's exactly where you left it. It waited for you.

**kjam-return-sierra-02 · The chains**
- RICK: [dry] Signal's back. Did they make you wear the chains?
- DANA: [bright] Rick, the chains go on the car.
- RICK: [long pause] [quiet] ...That's what they want you to think. Welcome home. Merge.

**kjam-return-sierra-03 · Rain that stopped trying**
- DANA: [sunny] Welcome back to K-JAM! How was the snow?
- RICK: [unimpressed] Snow is just rain that stopped trying.
- DANA: [delighted] Aww, I think it's magical!
- RICK: [deadpan] Magical. Sure. Top's down, you're home.

### Handoff: Coffee Cabin welcome-backs from the snow

New slot: today the Cabin has no welcome-back, because you only ever arrived from L.A.

**cabin-return-sierra-01 · That look**
- MARJ: [warm, surprised] Well, look who came down from the snow! Welcome back to The Coffee Cabin, hon.
- WALT: [gruff] They've got that look.
- MARJ: [curious] What look?
- WALT: [dry] Sat by a fire for an hour and thinks it's radio.
- MARJ: [fond, exasperated] Walter. Hon, the pot's on. Thaw out.

**cabin-return-sierra-02 · The postcard**
- MARJ: [pleased] Back from the mountains! Did Vera give you a postcard? She sends us one every winter.
- WALT: [flat] She sends you one.
- MARJ: [warm] It's addressed to both of us.
- WALT: [grudging] ...It's a nice postcard. Welcome back.

### Station IDs

**id-01 · The singing part**
- VERA: [half-singing, smooth] 96.1... The Fireside.
- MOOSE: [booming, off-key] The Fiiire-siiide!
- VERA: [dry] We don't let Moose do the singing part.
- MOOSE: [cheerful] I do it anyway!

**id-02 · The hole**
- VERA: [smooth, announcer] 96.1, The Fireside. Live from above the bar at the lodge.
- MOOSE: [calling down through the floor] Hot cocoa! Extra marshmallows!
- VERA: [deadpan] He orders through the floor. There's a hole. We don't talk about the hole.

**id-03 · Since Tuesday**
- MOOSE: [booming announcer] This is 96.1, The Fireside! Jazz by the fire, skis by the door!
- VERA: [cool] And a reminder: the hot tub is closed.
- MOOSE: [confused] Somebody's in it.
- VERA: [flat] Somebody's been in it since Tuesday. That's why it's closed.

### Time of day (on the second break of a drive)

**clock-morning · Fresh corduroy**
- MOOSE: [wide awake, booming] Good morning! I've been up since 4! Dawn patrol! Fresh corduroy on the groomers!
- VERA: [low, not awake yet] Moose. Inside voice.
- MOOSE: [whispering, still thrilled] Fresh corduroy.
- VERA: [dry] Thank you. Coffee first. Then snow.

**clock-midday · Warm-ups**
- MOOSE: [proud] Lunchtime on the mountain, and Bertha started on the first try today!
- VERA: [unimpressed] It took three.
- MOOSE: [insistent] The first two were warm-ups.
- VERA: [deadpan, to the listener] Bertha is the lodge snowcat. She's older than the lodge.

**clock-evening · Louder**
- VERA: [smooth, warm] Evening. Last chair's gone up, the fire's lit, and the bar downstairs is getting loud.
- MOOSE: [shouting down] Keep it down! We're on the radio!
- VERA: [dry] That made it louder.

**clock-late · Everyone where they should be**
- VERA: [soft, low] If you're driving this late, take the turns gently. It's just us and the snow now. Moose went to bed.
- MOOSE: [far off, muffled] I'm awake!
- VERA: [unbothered] He's on the couch in the hall. Velvet's on the mixing board. Everyone's where they should be.

### After a song

**after-01**
- VERA: [approving, dry] Mm. Good body. Smoky finish. Pairs well with snow.

**after-02**
- MOOSE: [sniffling] That one gets me every time.
- VERA: [dry] You cried at the weather report, Moose.
- MOOSE: [defensive] It said 18 inches!

**after-03**
- VERA: [cool] Moose. Were you dancing?
- MOOSE: [out of breath] No.
- VERA: [deadpan] He was dancing. In ski boots. Downstairs just called.

### Stopped (in place of "stopped at a light")

The game plays this near the end of a song, at most every 10 minutes, whether or not you're really stopped. So these cover any kind of stop up here: chain control, a bear, a plow.

**red-01 · Orange vest**
- MOOSE: [cheerful] If you're stopped right now, you might be at chain control. Wave at the guy in the orange vest! That's me!
- VERA: [dry] It isn't him. He's here.
- MOOSE: [pleased] It's someone like me!

**red-02 · Gerald doesn't hurry**
- VERA: [matter-of-fact] Stopped? Could be a light. Could be Gerald crossing the road.
- MOOSE: [excited] Hi, Gerald!
- VERA: [deadpan] Gerald doesn't hurry. Neither should you.

**red-03 · Honk twice**
- MOOSE: [delighted] Stuck behind a plow? That's Hank! Honk twice, he loves it!
- VERA: [flat] He does not love it.
- MOOSE: [certain] He honks back!
- VERA: [dry] That's not what that means, Moose.

---

## Batch 2: song intros

Same shape as the Cabin's. Each song gets two:

- **Short intro** (`intro-…`, about 3–8 s): the band, the title, one quick joke. Vera sometimes describes the song like a wine.
- **Story intro** (`introb-…`, about 15–25 s): a small Vera-and-Moose story that sets up the song's feeling. Funny, but it lands warm. Moose wears his feelings openly; Vera never admits one, but lets it slip in the last line.

The ids follow each song's "Save as" name in REGION-SONGS.md. Short intros with more than one line get stored like the Cabin's (see its code note).

**Facts the stories share** (kept consistent across the whole script):
- Vera sang in hotel lounges for 20 years, the last of them in Reno. 11 winters ago she came up to sing in the lodge bar for one weekend. The pass closed for 3 days, and she never left. She left Leon, a trumpet player, in Reno; the Blue Room, the lounge where they played, is a parking garage now.
- Moose was born on the mountain. His dad, Big Moose, drove Bertha for 40 years. Moose's real name is Eugene; only his dad uses it. He's been on ski patrol for 30 years and does the last sweep of the mountain every night.
- Darlene runs Chair 4. Moose has been working up to asking her for cocoa for 3 winters.
- The Fireside House Trio plays the bar downstairs every night. Velvet sits on the piano.
- The Hendersons, Edna and Ray, have stayed in Room 6 every winter for 40 years.

### 1. First Snow (June Laurent)

**intro-first-snow**
- VERA: [smooth] June Laurent. First Snow. Crisp, a little sweet. Best enjoyed before anyone shovels.

**introb-first-snow · First flake**
- MOOSE: [hushed, thrilled] Every year, I call the first flake.
- VERA: [dry] He calls the first flake.
- MOOSE: [proud] On the radio! "First flake!" 30 years running!
- VERA: [deadpan] Last year it was ash from the fireplace.
- MOOSE: [insistent] It was a very convincing flake.
- VERA: [cool, a little warmer] The real one came two days later. He called that one too. Quietly. June Laurent. First Snow.

### 2. Chains On (Benny Frost & the Tire Irons)

**intro-chains-on**
- MOOSE: [booming] Benny Frost and the Tire Irons! Chains On! Kneel in the slush, folks, it's romantic!

**introb-chains-on · The flashlight**
- MOOSE: [fond] 30 years at chain control, Vera. You know who has the best time out there?
- VERA: [dry] Not the one on their knees in the slush.
- MOOSE: [delighted] The one holding the flashlight! Every time! Laughing, pointing it the wrong way!
- VERA: [deadpan] On purpose.
- MOOSE: [stunned] ...On purpose?
- VERA: [smooth] 30 years, Moose. Benny Frost and the Tire Irons. Chains On.

### 3. Fogged-Up Windows (Della Moreau)

**intro-fogged-up-windows**
- VERA: [smooth] Della Moreau. Fogged-Up Windows. Velvety, with notes of a heater on high.

**introb-fogged-up-windows · He knocks**
- MOOSE: [official, booming] Public service announcement. Every night on patrol, I check the overlook.
- VERA: [dry] Here we go.
- MOOSE: [serious] And every night there's a car with the windows all fogged up. So I knock. Make sure they're okay.
- VERA: [deadpan] They're okay, Moose.
- MOOSE: [cheerful] That's what they always say! They seem a little annoyed!
- VERA: [smooth, to the listener] Stop knocking, Moose. Della Moreau. Fogged-Up Windows.

### 4. Cocoa for Two (Nina & Leo)

**intro-cocoa-for-two**
- MOOSE: [excited] Nina and Leo! Cocoa for Two!
- VERA: [dry] Moose takes his with 11 marshmallows.
- MOOSE: [correcting] 12.

**introb-cocoa-for-two · 4 words**
- VERA: [cool] Moose has a question for Darlene, who runs Chair 4.
- MOOSE: [flustered] Vera.
- VERA: [matter-of-fact] He's been working up to it for 3 winters. It's 4 words. "Cocoa after your shift?"
- MOOSE: [defensive] That's only 4 words?
- VERA: [dry] It is. He practices on Velvet.
- MOOSE: [earnest] Velvet says yes every time.
- VERA: [deadpan] Velvet says yes to anyone with a marshmallow. Nina and Leo. Cocoa for Two.

### 5. Snowed In (Charlie Ashford)

**intro-snowed-in**
- VERA: [smooth] Charlie Ashford. Snowed In. For anyone whose road just closed. Stay. The bar's open.

**introb-snowed-in · One weekend**
- MOOSE: [warm] Tell 'em how you got here, Vera.
- VERA: [dry] No.
- MOOSE: [booming, to the listener] One weekend! She came up from Reno to sing in the bar for one weekend! 11 winters ago!
- VERA: [matter-of-fact] And the pass closed.
- MOOSE: [delighted] For 3 days! And when it opened, she just... didn't go!
- VERA: [cool] The bar had a good piano. And the hot tub was very well kept at the time. Charlie Ashford. Snowed In.

### 6. Chairlift (Sonny Alvarez)

**intro-chairlift**
- MOOSE: [cheerful] Sonny Alvarez. Chairlift. Bar down, everybody!

**introb-chairlift · Little Gary**
- VERA: [cool] The chairlift takes 8 minutes. I rode it once.
- MOOSE: [delighted] With me!
- VERA: [dry] With Moose. He named the trees.
- MOOSE: [proud] Only the good ones!
- VERA: [deadpan] Out loud. For 8 minutes.
- MOOSE: [pointing, thrilled] That's Gary! That's Little Gary!
- VERA: [smooth] Sonny Alvarez. Chairlift. I took the gondola down.

### 7. Figure Eights (Clara Winters)

**intro-figure-eights**
- VERA: [smooth] Clara Winters. Figure Eights. Light, graceful—
- MOOSE: [bursting in] I can do one!
- VERA: [dry] He can't do one.

**introb-figure-eights · One slow circle**
- MOOSE: [proud] I skate on the pond behind the lodge every winter!
- VERA: [dry] Moose skates the way a snowplow skates.
- MOOSE: [cheerful] Straight lines! Very fast!
- VERA: [matter-of-fact] He can't turn. He goes all the way across, then walks back.
- MOOSE: [earnest] It's good exercise.
- VERA: [cool, softer] But at dusk, when the ice goes pink, he does one slow circle. Just one. Clara Winters. Figure Eights.

### 8. Night Skiing (Max Delaney)

**intro-night-skiing**
- MOOSE: [hushed, excited] Max Delaney. Night Skiing. The lights are on the mountain, folks!

**introb-night-skiing · The sweep**
- MOOSE: [softer than usual] Last thing every night, I do the sweep. Ski the whole mountain, make sure everybody got down.
- VERA: [cool] He's very thorough.
- MOOSE: [warm] Just me and the floodlights. So quiet you can hear the lift cables ticking.
- VERA: [dry] Then he comes in and tells me about it for an hour.
- MOOSE: [cheerful] You always wait up!
- VERA: [matter-of-fact] Somebody has to make sure you got down. Max Delaney. Night Skiing.

### 9. Top of the Pass (The Summit Club Orchestra)

**intro-top-of-the-pass**
- MOOSE: [booming] The Summit Club Orchestra! Top of the Pass! Windows down! ...It's cold. Windows down anyway!

**introb-top-of-the-pass · Whoa**
- MOOSE: [awed] You know that moment at the top of the pass? When the trees open up, and there's the whole lake?
- VERA: [cool] Moose pulls over every time.
- MOOSE: [earnest] Every time! 30 years! I still say "Whoa!"
- VERA: [dry] He says it on the radio. In the middle of the road report.
- MOOSE: [booming] Whoa!
- VERA: [deadpan] He's not even there right now. The Summit Club Orchestra. Top of the Pass.

### 10. Cold Hands, Warm Heart (Lena Marsh)

**intro-cold-hands-warm-heart**
- VERA: [warm, low] Lena Marsh. Cold Hands, Warm Heart. A quiet one. Smooth, with a long finish.

**introb-cold-hands-warm-heart · Twelve kids**
- MOOSE: [proud] I've got the warmest hands on ski patrol. It's a known thing.
- VERA: [dry] He holds them over the fire between calls.
- MOOSE: [earnest] So when somebody comes in frozen, I'm ready.
- VERA: [matter-of-fact] He warmed up a whole ski school once. 12 kids, in a line.
- MOOSE: [softer, warm] They held on a long time.
- VERA: [cool, softening] They did. Lena Marsh. Cold Hands, Warm Heart.

### 11. Mountain Stars (Julian Gray)

**intro-mountain-stars**
- MOOSE: [hushed] Julian Gray. Mountain Stars. Go outside after this one. Seriously. Look up.

**introb-mountain-stars · No wood**
- VERA: [dry] Moose went out for firewood last night.
- MOOSE: [sheepish] I did.
- VERA: [matter-of-fact] 40 minutes later, the fire's out and he's still in the yard, looking up.
- MOOSE: [awed] Vera, there were so many. You could see the Milky Way.
- VERA: [deadpan] No wood.
- MOOSE: [earnest] No wood. Worth it.
- VERA: [cool, softening] I went out to yell at him. Then I stayed. Julian Gray. Mountain Stars.

### 12. Snow Day (Dottie Mae & the Snowbirds)

**intro-snow-day**
- MOOSE: [booming] Dottie Mae and the Snowbirds! Snow Day! Everything's closed! Get your sled!

**introb-snow-day · The tray**
- MOOSE: [thrilled] School's closed, everybody's sledding, and guess who's first on the hill.
- VERA: [dry] The children.
- MOOSE: [proud] Me! On my cafeteria tray! I've had it since the 4th grade!
- VERA: [matter-of-fact] He took it in the 4th grade.
- MOOSE: [cheerful] And they never noticed!
- VERA: [deadpan] The school called last week. They noticed. Dottie Mae and the Snowbirds. Snow Day.

### 13. Alpenglow (Vivian & Ray)

**intro-alpenglow**
- VERA: [smooth] Vivian and Ray. Alpenglow. The pink light on the peaks right after sunset. Rosy, rich, and gone in 10 minutes.

**introb-alpenglow · Room 6**
- VERA: [warm, low] There's a couple who've stayed in Room 6 every winter for 40 years.
- MOOSE: [fond] The Hendersons!
- VERA: [cool] The first time, their car broke down at the bottom of the pass. Bertha towed them up.
- MOOSE: [proud] My dad was driving!
- VERA: [matter-of-fact] Every night at sunset, they stand on the deck and watch the peaks go pink. "One more minute." Every night.
- MOOSE: [softly] They're out there right now.
- VERA: [smooth] Then this one's theirs. Vivian and Ray. Alpenglow.

### 14. Mittens (Eddie Brooks)

**intro-mittens**
- MOOSE: [cheerful] Eddie Brooks. Mittens. Hold on to yours. Or hold on to somebody.

**introb-mittens · Not one pair**
- VERA: [dry] Moose runs the lost and found.
- MOOSE: [proud] 312 mittens! Not one pair!
- VERA: [deadpan] He thinks the other halves are out there. Together. Somewhere.
- MOOSE: [earnest] Under Chair 4! There's a whole family of them!
- VERA: [matter-of-fact] He goes looking every spring when the snow melts.
- MOOSE: [delighted] Found 9 last year!
- VERA: [cool] None of them matched. Eddie Brooks. Mittens.

### 15. Lodge Fire (The Fireside House Trio)

**intro-lodge-fire**
- VERA: [smooth, low] The Fireside House Trio. Lodge Fire. That's the band downstairs. We don't pay them. We feed them.

**introb-lodge-fire · Just the embers**
- VERA: [cool] The house trio plays the bar every night. Piano, bass, drums.
- MOOSE: [cheerful] And they let Velvet sit on the piano!
- VERA: [dry] She walks on the keys during the quiet ones. They work it in.
- MOOSE: [proud] People request her!
- VERA: [warm, low] Last song of the night, after everyone's gone up to bed, they play this one to the fire. Just the embers listening. And me. The Fireside House Trio. Lodge Fire.

### 16. Fresh Tracks (The Fireside House Trio)

**intro-fresh-tracks**
- MOOSE: [booming] The Fireside House Trio! Fresh Tracks! Nobody's skied it yet, folks! It's all yours!

**introb-fresh-tracks · Good morning**
- MOOSE: [thrilled] The morning after a storm, I'm first in line for first chair. Every time.
- VERA: [dry] He sleeps in the lift line.
- MOOSE: [defensive] One time!
- VERA: [matter-of-fact] 3 times. Darlene steps over him to open the gate.
- MOOSE: [dreamy] She said good morning.
- VERA: [deadpan] She said, "Moose, move." The Fireside House Trio. Fresh Tracks.

---

## Batch 3: segments

These fill K-JAM's segment slots and rotate the same way (each kind once per round). About 15–30 s each.

### Chain Control and Road Report (in place of K-JAM's traffic report)

Moose phones in from the checkpoint and measures snow on himself.

**chains-01 · Knee-deep**
- VERA: [cool, announcer] Chain control and road report. Moose is at the checkpoint.
- MOOSE *(on the phone)*: [booming, wind behind him] Good morning! Chains required from the lodge to the summit! We got knee-deep overnight!
- VERA: [dry] Knee-deep on who.
- MOOSE *(on the phone)*: [proud] On me!
- VERA: [deadpan, to the listener] For the rest of you, that's waist-deep. Chains on.

**chains-02 · Bring a snack**
- MOOSE *(on the phone)*: [official] Road report! Highway's open, chains required, and there's a 20-minute wait at the checkpoint.
- VERA: [cool] What do people do for 20 minutes.
- MOOSE *(on the phone)*: [delighted] They talk to me!
- VERA: [dry] So it's a 40-minute wait.
- MOOSE *(on the phone)*: [cheerful] Bring a snack!

**chains-03 · The question**
- MOOSE: [booming] Chain control! Today's most-asked question at the checkpoint: "Do I really need chains?"
- VERA: [cool] And the answer?
- MOOSE: [cheerful] Yes!
- VERA: [matter-of-fact] Second most-asked?
- MOOSE: [cheerful] "Do I really, really need chains?"
- VERA: [deadpan] Same answer.

**chains-04 · The clipboard**
- MOOSE *(on the phone)*: [official] Road report! Westbound's clear. Eastbound's clear. Gerald is on the shoulder at mile 9.
- VERA: [dry] Doing what.
- MOOSE *(on the phone)*: [puzzled] Checking the chains on a minivan. He's got a clipboard, Vera. I don't know where he got a clipboard.
- VERA: [deadpan] It's yours, Moose. You left it in the dumpster.

**chains-05 · Hank waved**
Moose's line marked *(outside)* gets a muffled, far-off filter in processing.
- VERA: [cool] Road report. Moose is out on the mountain, so I'll do it. It's snowing. The road is under there somewhere. There's a plow on it.
- VERA: [matter-of-fact] The plow is Hank. Hank waved. That's the report.
- MOOSE *(outside)*: [shouting from far away] Chains required!
- VERA: [dry] And chains are required. Thank you, Moose.

**chains-06 · A soup spoon**
- MOOSE: [awed] Road report! 4 feet overnight! Most since the winter of 1982!
- VERA: [cool] He remembers 1982.
- MOOSE: [fond] My dad dug Bertha out with a spoon!
- VERA: [dry] A shovel.
- MOOSE: [firm] A soup spoon, Vera. Took him till April.
- VERA: [deadpan] Chains required. Bring a spoon.

### Plow Alert / Whiteout Watch (in place of Sig Alert Theatre)

Breaking news about Hank the plow driver and his plow, Linda. A recurring pair, like K-JAM's Gary and the Cabin's Harold.

**plow-01 · Linda**
- MOOSE: [siren voice, booming] Plow Alert! Plow Alert!
- VERA: [cool] Hank is out with the plow.
- MOOSE: [explaining] For new listeners, Hank's plow is named Linda.
- VERA: [matter-of-fact] Hank's wife is also named Linda.
- MOOSE: [cheerful] She's fine with it!
- VERA: [dry] She isn't. Stay behind Linda, folks. The plow.

**plow-02 · The snowman**
- VERA: [cool, announcer] Plow Alert. Hank reports a snowman in the westbound lane.
- MOOSE: [alarmed] Is it okay?
- VERA: [dry] It's a snowman, Moose.
- MOOSE: [urgent] Is it okay, Vera?
- VERA: [deadpan] Hank won't plow anything with a carrot. Westbound is closed until further notice. By the snowman.

**plow-03 · Whiteout Watch: the window**
- MOOSE: [grave, booming] This is a Whiteout Watch.
- VERA: [cool, explaining] A whiteout is when the snow's so thick you can't see anything.
- MOOSE: [grave] I'm looking out the window right now, Vera.
- VERA: [dry] And?
- MOOSE: [stunned] I can't even see the window.
- VERA: [deadpan] He's facing the wall. Turn around, Moose.

**plow-04 · Whiteout Watch: talk less**
- VERA: [matter-of-fact] Whiteout Watch. Visibility near zero. Hank has pulled Linda over to wait it out.
- MOOSE: [concerned] Is he okay out there?
- VERA: [cool] He called in. He's got a thermos, a sandwich and the radio.
- MOOSE: [touched] He's listening to us!
- VERA: [dry] He asked if we could talk less.
- MOOSE: [booming] Hi, Hank!
- VERA: [deadpan] That's the opposite, Moose.

### Moose's Secret Stash (in place of Dana's shortcut of the day)

Vera keeps trying to make it a real segment. Moose won't say where the powder is.

**stash-01 · Going great**
- VERA: [cool, announcer] Moose's Secret Stash. Where's the best snow today, Moose?
- MOOSE: [whispering, thrilled] Oh, there's a spot.
- VERA: [dry] Where.
- MOOSE: [whispering] Can't say. Knee-deep. Nobody's touched it.
- VERA: [matter-of-fact] This is a radio segment. About where the snow is.
- MOOSE: [delighted] And it's going great!

**stash-02 · A good tree**
- MOOSE: [whispering] Secret Stash! Today's hint: it's near a tree.
- VERA: [deadpan] There are a million trees.
- MOOSE: [whispering] A good tree.
- VERA: [dry] Is it Little Gary.
- MOOSE: [gasps, scandalized] Vera! You can't say Little Gary on the air!

**stash-03 · Somebody found it**
- MOOSE: [devastated] Secret Stash. Bad news. Somebody found it.
- VERA: [cool] Who.
- MOOSE: [hurt] There were tracks. Fresh tracks, right through the middle.
- VERA: [matter-of-fact] They were bear tracks, Moose.
- MOOSE: [relieved, warm] ...Gerald? Oh, Gerald's allowed.

**stash-04 · Vera's stash**
- VERA: [cool] Secret Stash. Today it's mine.
- MOOSE: [surprised] You have one?
- VERA: [smooth] Downstairs. End of the bar. The good chair by the fire. Nobody's touched it.
- MOOSE: [indignant] That's not snow!
- VERA: [dry] It's the best spot on the mountain. And it's taken.

### Lodge Bulletin Board (in place of K-JAM's fake ads)

Notices from the board by the lodge door, read out between songs.

**ad-01 · The same boots**
- MOOSE: [cheerful, announcer] The Lodge Bulletin Board! Saturday is the ski swap in the lobby. Bring your old gear, take home somebody else's!
- VERA: [dry] Moose brings the same pair of boots every year.
- MOOSE: [proud] And every year I take them home again!
- VERA: [deadpan] Nobody wants them, Moose.
- MOOSE: [cheerful] Nobody gets them!

**ad-02 · Rule four**
- VERA: [stern, reading] Bulletin board. The hot tub rules, since some of you have forgotten. One: shower first.
- MOOSE: [reading along] Two: no glasses near the tub.
- VERA: [stern] Three: 20 minutes, then out.
- MOOSE: [hesitant] Four... Vera, somebody wrote a four in pen.
- VERA: [cool] Read it.
- MOOSE: [reading] "Four: whoever's been in there since Tuesday, we can see you."

**ad-03 · Fondue night**
- MOOSE: [delighted, announcer] Bulletin board! Thursday is fondue night in the bar! Cheese, chocolate, little forks!
- VERA: [dry] A reminder: if you drop your bread in the pot, you buy a round.
- MOOSE: [sheepish] I bought 9 rounds last year.
- VERA: [deadpan] He drops it on purpose. He thinks it's a game.
- MOOSE: [cheerful] It's a great game!

**ad-04 · Bertha's birthday**
- VERA: [cool, announcer] Bulletin board. Sunday is Bertha's birthday.
- MOOSE: [booming] Bertha's turning 60! Cake in the garage at noon!
- VERA: [matter-of-fact] Bertha is a snowcat. She won't be eating cake.
- MOOSE: [earnest] She'll be there, though. Wearing the hat.
- VERA: [dry] The party's at noon. Or whenever she starts.

---

## Batch 4: Snow Notes (in place of Fast Lane Facts)

A real, checkable fact about snow or the Sierra. Moose is thrilled by it; Vera adds the dry turn, a callback or the correction. Like Fast Lane Facts, they play in order and are remembered between drives. About 20–30 s each.

The numbers are rounded to what's widely published. Hedged wording ("about", "as many as", "some say") is deliberate; keep it if lines get edited.

**snow-01 · His thumb**
- MOOSE: [delighted] Snow Notes! In 1885, a Vermont farmer named Wilson Bentley took the first photo of a single snowflake!
- VERA: [cool] Snowflake Bentley.
- MOOSE: [awed] He photographed over 5,000 of them and never found two alike!
- VERA: [dry] Moose tried this last winter.
- MOOSE: [proud] Got 3 photos!
- VERA: [deadpan] All of his thumb.

**snow-02 · Not white**
- VERA: [matter-of-fact] Snow Notes. Snow isn't white. Ice is clear. Snow just bounces all the light back at you, and all the colors together look white.
- MOOSE: [stunned] So it's clear?
- VERA: [cool] It's clear.
- MOOSE: [long pause] [quiet] ...I don't like this one, Vera.
- VERA: [dry] Next week: the sky isn't really blue.
- MOOSE: [devastated] Vera, no.

**snow-03 · Character**
- MOOSE: [excited] Snow Notes! Fresh snow can be over 90 percent air! It's mostly nothing!
- VERA: [cool] Not here.
- MOOSE: [proud] Not here! Sierra snow is wet and heavy. Skiers call it Sierra cement!
- VERA: [dry] Moose shovels it every morning and says it builds character.
- MOOSE: [cheerful, out of breath] So much character!

**snow-04 · Hard to muffle**
- VERA: [cool, low] Snow Notes. Fresh snow is full of tiny air pockets, and they soak up sound. That's why everything goes quiet after a snowfall.
- MOOSE: [whispering] It's true. Listen.
- VERA: [dry] It doesn't work on Moose. We've tried.
- MOOSE: [booming] I'm very hard to muffle!

**snow-05 · The Snowy Saw**
- MOOSE: [announcer] Snow Notes! Sierra Nevada is Spanish. Sierra means a saw, like the jagged mountaintops. Nevada means snowy!
- VERA: [cool] So we live in the Snowy Saw.
- MOOSE: [delighted] Best name for a place ever.
- VERA: [deadpan] Rick at K-JAM calls it "the cold part."
- MOOSE: [offended] Rick's never even been here!
- VERA: [dry] He says that's how he knows.

**snow-06 · Even L.A.**
- VERA: [matter-of-fact] Snow Notes. Lake Tahoe holds enough water to cover the whole state of California about 14 inches deep.
- MOOSE: [awed] The whole state? Even L.A.?
- VERA: [dry] Even L.A. Rick would hate it.
- MOOSE: [delighted] Dana would bring a floatie!

**snow-07 · One year**
- MOOSE: [proud] Snow Notes! Lake Tahoe is so deep, it never freezes over! More than 1,600 feet at the deepest part!
- VERA: [cool] Moose takes this personally.
- MOOSE: [frustrated] I have skates, Vera! Look at all that lake!
- VERA: [deadpan] He goes down to the shore every January and checks. Just in case.
- MOOSE: [hopeful] One year.

**snow-08 · Under there till May**
- MOOSE: [awed] Snow Notes! The deepest snow ever measured in North America was right up here. Tamarack, California, March 1911. More than 37 feet on the ground!
- VERA: [dry] They say the lodge hot tub was under there till May.
- MOOSE: [whispering, spooky] And when they finally dug it out...
- VERA: [deadpan] Somebody was in it.

**snow-09 · The other boot**
- VERA: [matter-of-fact] Snow Notes. The Clark's nutcracker is a bird up here that buries as many as 30,000 pine seeds in a single season. And it finds most of them again, months later, under the snow.
- MOOSE: [amazed] 30,000! I can't find my truck keys!
- VERA: [dry] They're in your other boot.
- MOOSE: [delighted] Vera! You're a nutcracker!
- VERA: [deadpan] Please don't call me that on the air.

**snow-10 · He works so hard**
- MOOSE: [excited] Snow Notes! Black bears are supposed to sleep all winter. But bears that live near towns sleep less, and some don't sleep at all!
- VERA: [cool] Because of the dumpsters.
- MOOSE: [fond] Because of the dumpsters.
- VERA: [dry] Gerald napped for one weekend in February and called it a winter.
- MOOSE: [proud] He works so hard.

**snow-11 · Black tip**
- VERA: [cool] Snow Notes. Up here, the long-tailed weasel turns white for winter. All white, except the tip of its tail, which stays black.
- MOOSE: [puzzled] Why the tail?
- VERA: [matter-of-fact] One idea is that a hawk goes for the black tip and misses the weasel.
- MOOSE: [impressed] Smart.
- VERA: [dry] Velvet's the opposite. All black, with a white tip on her tail.
- MOOSE: [gasps] She's hiding from something!
- VERA: [deadpan] Work.

**snow-12 · Don't eat it**
- MOOSE: [delighted] Snow Notes! In summer, the snow up high can turn pink! It's a tiny algae that lives in the snow, and they call it watermelon snow!
- VERA: [cool] Some people say it even smells like watermelon.
- MOOSE: [eager] Does it taste like watermelon?
- VERA: [firm] You're not supposed to eat it.
- MOOSE: [long pause] [quiet] ...So that's a no on the taste.
- VERA: [deadpan, to the listener] He ate it. Don't eat it.

**snow-13 · Every day**
- MOOSE: [booming] Snow Notes! Sometimes you get thunder and lightning in a snowstorm. It's called thundersnow, and it's rare!
- VERA: [cool] The snow muffles the thunder, so you only hear it if you're close.
- MOOSE: [awed] I heard it once! Best day of my life!
- VERA: [dry] He says that about every day.
- MOOSE: [earnest] And every day I mean it!

**snow-14 · Bigger**
- VERA: [matter-of-fact] Snow Notes. The biggest trees on Earth are giant sequoias. And they only grow wild in one place: the western slopes of the Sierra Nevada.
- MOOSE: [proud] Ours!
- VERA: [cool] Walt at the Coffee Cabin says his redwoods are taller.
- MOOSE: [defensive] Taller, sure! Ours are bigger!
- VERA: [deadpan] Walt mailed us a tape measure. No note.

**snow-15 · No bobsled**
- MOOSE: [excited] Snow Notes! The 1960 Winter Olympics were right up here, near Lake Tahoe!
- VERA: [cool] And Walt Disney put on the opening ceremony.
- MOOSE: [delighted] Walt Disney!
- VERA: [dry] They also skipped the bobsled that year. Not enough teams signed up.
- MOOSE: [indignant] I would've signed up!
- VERA: [deadpan] He'd like the record to show he wasn't born yet.

**snow-16 · Our snow** (the sincere one)
- VERA: [warm, low] Snow Notes. About a third of California's water starts out as snow, right up here. It sits all winter, then melts in the spring, down to the rivers, the farms and the cities.
- MOOSE: [softer] So when it snows up here...
- VERA: [cool] Somebody in L.A. gets a glass of water in July.
- MOOSE: [quiet, moved] Rick's drinking our snow.
- VERA: [dry] Don't tell him. He'd stop.

---

## Batch 5: callers

Small scenes that escalate and end on a twist (about 30–45 s), like the Cabin's. Most call back to station lore, so they get funnier the longer you listen. Delivery is in the [tags]; italic notes after a name are processing filters. Callers play in any order, so none of them settles a running thread (Moose still hasn't asked Darlene).

**Voices:**
- Rick, Dana, Marj and Walt use their own voices.
- Everyone else reuses the existing K-JAM caller voices under new names, as the Cabin did; the phone filter helps them sound different. Pick them at recording: Big Moose needs the deepest, biggest voice there is, and Leon the smoothest.

**call-01 · The car behind Linda** (HANK)
- VERA: [cool] Line one. You're on The Fireside.
- HANK: [gruff, plow engine behind him] Hank. Out on the pass with Linda.
- MOOSE: [booming] Hi, Hank!
- HANK: [flat] Got a car behind me. Been following me for 20 miles. Very polite. Won't pass.
- VERA: [dry] Hank, you're doing 15. It's one lane. They can't pass.
- HANK: [long pause] ...Then they're stuck with me.
- MOOSE: [curious] What kind of car?
- HANK: [unimpressed] Convertible. Top down. In the snow.
- MOOSE: [gasps, delighted] Vera, that's our listener!
- HANK: [deadpan] Tell 'em I can hear their radio. Tell 'em I like this station too.

**call-02 · How's the chair** (DARLENE)
- VERA: [cool] Line two. You're on the air.
- DARLENE: [friendly, busy] Hi, it's Darlene up at Chair 4. Just calling in the lift report.
- MOOSE: [strangled] Darlene.
- VERA: [smooth] Darlene. What a coincidence. Moose has a question for you.
- MOOSE: [panicking] I do?
- DARLENE: [warm, curious] Oh yeah? What is it, Moose?
- MOOSE: [long pause] [high-pitched] ...How's the chair?
- DARLENE: [puzzled] The chair's good.
- MOOSE: [too loud] Great! Great chair!
- DARLENE: [amused] Okay. Bye, Moose.
- VERA: [deadpan] 3 winters.

**call-03 · Like a jet ski** (BRAD)
- MOOSE: [booming] Caller! You're on the Fireside!
- BRAD: [laid-back, L.A.] Hey, so, I'm at chain control? And the guy says I need chains?
- MOOSE: [cheerful] Yes!
- BRAD: [hopeful] Like, really need them?
- MOOSE: [cheerful] Yes!
- BRAD: [thinking it through] Okay, but what if I just drive really fast? Like, over the top of the snow?
- VERA: [dry] Like a jet ski.
- BRAD: [excited] Exactly like a jet ski!
- VERA: [cool] Brad, what are you wearing on your feet.
- BRAD: [proud] Flip-flops.
- VERA: [deadpan] Stay where you are. Moose is bringing a blanket. He's already gone.

**call-04 · First place** (PEARL)
- VERA: [cool] Line one. Pearl, you're judging the snowman contest.
- PEARL: [official, very serious] I am. And I'm calling with the results. It's been a difficult year.
- MOOSE: [excited] Who won?
- PEARL: [grave] First place goes to Entry 12. 12 feet tall. Perfectly round. Very lifelike.
- MOOSE: [awed] 12 feet!
- PEARL: [long pause] [grave] Entry 12 turned out to be Bertha. Somebody forgot to dig her out.
- VERA: [dry] We've been looking for her since Thursday.
- PEARL: [stern] So she's disqualified. She started up during the judging.
- MOOSE: [gasps] On which try?
- PEARL: [reluctant] ...The first.
- MOOSE: [roaring] The first try!

**call-05 · Since Tuesday** (CARL)
- VERA: [cool] You're on The Fireside.
- CARL: [relaxed, echoey] Hey, Vera. It's Carl. I'm in the hot tub.
- VERA: [ice cold] Carl.
- CARL: [relaxed] I've got the phone in a sandwich bag. Pretty good, right?
- MOOSE: [concerned] Carl, you've been in there since Tuesday!
- CARL: [reasonable] My towel blew away Tuesday. It's 20 feet to the door.
- MOOSE: [protesting] I brought you a towel Wednesday!
- CARL: [regretful] That one blew away too.
- VERA: [stern] The rule is 20 minutes, Carl.
- CARL: [proud] It's been 20 minutes. Lots of times.
- VERA: [dry] What do you want.
- CARL: [cheerful] Can you play something relaxing?
- VERA: [deadpan] You've been relaxing for 6 days, Carl.
- CARL: [brightening] Oh. Then something upbeat!

**call-06 · For emergencies** (RICK, with DANA in the background)
- MOOSE: [booming] Long distance! You're on The Fireside!
- RICK: [suspicious, quiet] Is this the snow station.
- VERA: [smooth] Rick. From K-JAM.
- RICK: [grave] I have questions. Is it true you put chains on the car?
- MOOSE: [cheerful] Yep!
- RICK: [horrified] And the air's thinner? Up there? Do you ration it?
- MOOSE: [takes a huge, happy breath] Nope!
- VERA: [dry] He's using yours, Rick.
- RICK: [shaken] How do you people live like this?
- MOOSE: [delighted] Happily!
- DANA *(in the background)*: [bright] Tell them you bought mittens!
- RICK: [hurried] They're for emergencies. Gotta go.

**call-07 · Lower** (DANA, with RICK in the background)
- VERA: [cool] Line two.
- DANA: [bubbly] Hi! It's Dana from K-JAM! Vera, I have to ask. How are you always so calm?
- VERA: [matter-of-fact] I don't care about things.
- DANA: [gasps] Teach me!
- VERA: [dry] Say "traffic" like it doesn't matter.
- DANA: [way too excited] Traffic!
- VERA: [cool] Lower.
- DANA: [low, trying hard] Traffic.
- VERA: [cool] Lower.
- DANA: [low, smooth, nailing it] This is K-JAM, 101.1. Traffic is heavy. Who cares. ...Rick, why are you looking at me like that?
- RICK *(in the background)*: [shaken] I like it. I'm scared.

**call-08 · For research** (MARJ, with WALT on the line)
- MOOSE: [booming] Caller, you're on The Fireside!
- MARJ: [warm] Hi, hon! It's Marj, from down at The Coffee Cabin.
- VERA: [smooth, warm for once] Marj. Did you get the postcard?
- MARJ: [delighted] It's on the fridge! Walt says hello.
- WALT: [gruff] I didn't say hello.
- VERA: [dry] Hello, Walt.
- WALT: [flat] It's not radio. It's a fireplace with a microphone.
- MOOSE: [cheerful] Hi, Walt! We got your tape measure!
- MARJ: [conspiratorial] Vera, he listens to you every night.
- WALT: [defensive] For research.
- VERA: [smooth] Goodnight, Walt.
- WALT: [long pause] [grudging] ...Goodnight, Vera.

**call-09 · Big Moose** (BIG MOOSE)
- VERA: [cool] Line one. You're on The Fireside.
- BIG MOOSE: [even louder and bigger than Moose] Is my boy there?
- MOOSE: [delighted] Dad!
- VERA: [dry, to the listener] There's a bigger one.
- BIG MOOSE: [booming] Heard Bertha's giving you trouble. Three tries! In my day she started on the first try!
- MOOSE: [protesting] Dad, she won't start for anybody!
- BIG MOOSE: [proud] She started for me. Every morning. 40 years. You just gotta talk to her.
- VERA: [curious] What did you say to her?
- BIG MOOSE: [tender] "Good morning, Bertha." [booming] Tell Eugene to say good morning!
- MOOSE: [horrified] Dad!
- VERA: [delighted, dry] Eugene.

**call-10 · Who's knocking** (STEVE)
- MOOSE: [booming] Caller! You're on the air!
- STEVE: [awkward, quiet] Hi. Um. We're parked up at the overlook?
- VERA: [knowing] Of course you are.
- STEVE: [awkward] Is there a big guy on ski patrol who knocks on car windows?
- MOOSE: [proud] That's me! Are you okay?
- STEVE: [pained] We're okay. He's knocking right now.
- VERA: [cool] Moose is here, Steve. In the studio.
- STEVE: [long pause] [nervous] ...Then who's knocking?
- VERA: [deadpan] Gerald. He has a key now. He's been learning.
- MOOSE: [proud] From me!

**call-11 · The Blue Room** (LEON)
- VERA: [cool] Line two. You're on The Fireside.
- LEON: [smooth, velvety] Vera. It's Leon.
- VERA: [flat] Leon.
- MOOSE: [whispering] Who's Leon?
- VERA: [dry] Trumpet. Reno.
- LEON: [romantic] Come back, Vera. Come back to the Blue Room. It misses you.
- VERA: [cool] The Blue Room closed, Leon. It's a parking garage.
- LEON: [undeterred] It's a parking garage that misses you.
- MOOSE: [protective, big] She's staying!
- VERA: [matter-of-fact] I'm staying. The hot tub needs me.
- LEON: [smooth] Then let me play you something.
- *(a few flat trumpet notes down the phone, added in processing)*
- VERA: [hangs up, unbothered] ...He was always flat.

**call-12 · The ranger station** (RANGER JO)
- VERA: [cool] You're on The Fireside.
- RANGER JO: [official, tired] This is Ranger Jo. We need to talk about Gerald and the key.
- MOOSE: [delighted] He found it!
- RANGER JO: [flat] He found a different key. To the ranger station.
- VERA: [dry] Gerald's moving up.
- RANGER JO: [weary] He's in there right now. Eating our lunches. Watching our TV.
- MOOSE: [curious] What's he watching?
- RANGER JO: [long pause] [reluctant] ...The weather channel.
- MOOSE: [proud] He's checking the snow!
- VERA: [deadpan] He's planning a dumpster route, Moose.

**call-13 · One more minute** (EDNA) (the sincere one)
- VERA: [cool] Line one. You're on The Fireside.
- EDNA: [elderly, warm] Hello, dear. It's Edna Henderson. Room 6.
- MOOSE: [warm, booming] Mrs. Henderson!
- EDNA: [fond] Ray's out on the deck again, watching the peaks go pink. He said "one more minute" 20 minutes ago.
- VERA: [dry, fond] He always does.
- EDNA: [softer] 40 winters, and he still says it like it's the first time. Could you play us something? Something slow.
- VERA: [warm, low] Go stand with him, Edna. Take a blanket. I'll play you something.
- EDNA: [touched] Thank you, dear.
- MOOSE: [quiet, moved] Vera, that was nice.
- VERA: [cool] I don't care about things, Moose.

---

## Batch 6: reactions and short bits

Mostly short (3–10 s). These fill the same slots as K-JAM's and the Cabin's, so the game logic stays the same.

### Village names (one per village, played on the way in)

| Slug | Line |
|---|---|
| snowberry | MOOSE: [cheerful] Rolling into Snowberry! |
| silver-fir | MOOSE: [cheerful] Here's Silver Fir! |
| alpenglow | VERA: [smooth] Alpenglow. Pretty name. We borrowed it for a song. |
| whitebark | MOOSE: [cheerful] Coming into Whitebark! Named after the pine! |
| powder-ridge | MOOSE: [roaring] Powder Ridge! Best name on the mountain! |
| ember-lake | VERA: [smooth] Ember Lake. Prettier at night. |
| hearthstone | VERA: [warm] Hearthstone. That's us. Wave at the window over the bar. |
| granite-hollow | VERA: [dry] Granite Hollow. Hank lives here. So does Linda. Both of them. |
| juniper-flat | VERA: [deadpan] Juniper Flat. It isn't. |
| bear-paw | MOOSE: [delighted] Bear Paw! Gerald's hometown! |
| cold-spring-crossing | VERA: [matter-of-fact] Cold Spring Crossing. Says what it is. |
| kettle-lake | VERA: [dry] Kettle Lake. It doesn't boil. People have asked. |

### Village reactions (after the village name)

**town-01 · How you meet people**
- MOOSE: [delighted] Look at those A-frame roofs! Steep, so the snow slides right off!
- VERA: [dry] Onto whoever's standing there.
- MOOSE: [cheerful] That's how you meet people!

**town-02 · Vacancy**
- VERA: [matter-of-fact] The motor lodge says vacancy.
- MOOSE: [cheerful] It always says vacancy.
- VERA: [dry] The "No" blew off in 1994. They've been full ever since.

**town-03 · Living cheese**
- MOOSE: [excited] The fondue place is open!
- VERA: [cool] The pot's been going since 1971. Same cheese. They just keep adding.
- MOOSE: [reverent] It's a living cheese.
- VERA: [deadpan] Please don't call it that.

**town-04 · Waved back**
- VERA: [cool] Every yard in this town has a snowman.
- MOOSE: [delighted, waving] Hi! Hi! Hi! [gasps] That one waved back!
- VERA: [dry] That's a man shoveling, Moose.

### Scenery reactions

New `place` keys for the Sierra's scenery: `pines`, `lake`, `snowshed`, and in the villages `mainstreet`, `cabins`, `skihill`, `rink` and `sledhill`. Batch 5 code ties each to what the car is passing.

**pines-01 · Butterscotch**
- MOOSE: [delighted] Into the pines! Jeffrey pines! Scratch the bark and sniff it. Smells like butterscotch!
- VERA: [dry] He stops the patrol truck to sniff trees. Every one.
- MOOSE: [blissful] Butterscotch, Vera.

**pines-02 · Don't honk**
- VERA: [hushed, cool] The pines are holding a lot of snow today.
- MOOSE: [whispering] Don't honk.
- VERA: [dry] He honked once. In 2011. He's still finding the truck.

**pines-03 · Doug**
- MOOSE: [proud] Wave to the trees! That one's Doug!
- VERA: [matter-of-fact] He names them.
- MOOSE: [proud] That's Big Doug!
- VERA: [deadpan] Past mile 6, they're all Doug.

**lake-01 · About a lake**
- MOOSE: [awed] There's the lake! Look at that blue!
- VERA: [cool] Prettiest thing on the mountain.
- MOOSE: [touched] Vera, you said something nice.
- VERA: [dry] About a lake.

**lake-02 · Safety first**
- MOOSE: [excited] Vista pull-out! Best view of the lake!
- VERA: [deadpan] It's also where he checks for fogged-up windows.
- MOOSE: [cheerful] Safety first!

**lake-03 · The word you want**
- VERA: [cool] Somebody's out on the lake in a kayak. In this.
- MOOSE: [delighted] Stoked!
- VERA: [dry] Frozen. That's the word you want.

**snowshed-01 · Respect the roof**
- VERA: [matter-of-fact] Into the snow shed. It's a roof over the road, so the snow slides go right over you.
- MOOSE: [whispering, thrilled] We're under an avalanche roof.
- VERA: [dry] He whispers in here. Every time.
- MOOSE: [whispering] Respect the roof.

**mainstreet-01 · One ski**
- MOOSE: [cheerful] Main Street! Every shop rents skis! Even the bakery!
- VERA: [dry] The bakery rents one ski.
- MOOSE: [earnest] It's a great ski!

**cabins-01 · It has a window**
- VERA: [cool] Little cabins on the lake. Smoke from every chimney.
- MOOSE: [warm] I'd live in any of 'em.
- VERA: [dry] You live in the closet at the lodge.
- MOOSE: [proud] It has a window!

**skihill-01 · A lesson**
- MOOSE: [excited] Ski hill! Look at 'em go!
- VERA: [cool] Somebody's going down backwards.
- MOOSE: [squinting] That's a lesson.
- VERA: [deadpan] That's a lesson that went wrong.

**rink-01 · He's out there**
- VERA: [smooth] Skaters on the rink. Very graceful.
- MOOSE: [fond] Except that one.
- VERA: [dry] He's holding on to the wall.
- MOOSE: [warm] Good for him. He's out there.

**sledhill-01 · Cooler lid**
- MOOSE: [delighted] Sledding hill! Whoo!
- VERA: [cool] The kids are going down on sleds. The grown-ups are going down on anything.
- MOOSE: [thrilled] Somebody's on a cooler lid!

### The summit (in place of K-JAM's pier reaction; plays at the summit pull-out)

**summit-01 · The extra 7 feet**
- MOOSE: [roaring] Summit! Top of the pass!
- VERA: [cool] The sign says over 8,000 feet.
- MOOSE: [awed] Highest road on the mountain!
- VERA: [dry] Moose stands on the sign for the extra 7 feet.

**summit-02 · I'm looking**
- MOOSE: [awed, quiet] ...Whoa.
- VERA: [dry] Every time.
- MOOSE: [quiet] Look at it, Vera.
- VERA: [softer] I'm looking.

### Player reactions

**steer-01 · Let them have it** (the player picked a turn)
- MOOSE: [delighted] They turned! Where are they going?
- VERA: [cool] Somewhere. Let them have it.

**steer-02 · Sledding hill**
- MOOSE: [excited] Ooh, a side street!
- VERA: [matter-of-fact] Every side street up here ends at a sledding hill.
- MOOSE: [cheerful] Best way to end a street!

**speed-fast · Right in front of you**
- VERA: [cool] Somebody's in a hurry. On ice.
- MOOSE: [warning] Ease up, friend! The snow's not going anywhere!
- VERA: [dry] Hank is. At 15 miles an hour. Right in front of you.

**speed-slow · Mountain speed**
- VERA: [approving, smooth] Nice and easy. That's mountain speed.
- MOOSE: [cheerful] Hank speed!

**postcard-01 · Eleven**
- MOOSE: [excited] Postcard! Send one to Marj! Vera does!
- VERA: [dry] Every winter. Same view. She has 11.

**postcard-02 · Draw me in**
- VERA: [cool] Postcard. Get the peaks in.
- MOOSE: [eager] Get me in!
- VERA: [dry] You're not there, Moose.
- MOOSE: [undeterred] Draw me in!

### Hands-free streak

**milestone-05**
- MOOSE: [booming] Five minutes, no phone! Stoked!
- VERA: [dry] He was stoked about a sandwich this morning.

**milestone-10**
- VERA: [cool] Ten minutes. No phone.
- MOOSE: [delighted] Vera's impressed!
- VERA: [dry] I'm awake. That's my impressed.

**milestone-30**
- MOOSE: [excited] 30 minutes hands-free! That's a cocoa! With marshmallows!
- VERA: [cool] 12 marshmallows.
- MOOSE: [touched] You remembered!

**milestone-60**
- VERA: [warm, low] An hour. No phone. Just you and the mountain.
- MOOSE: [quiet, awed] Vera, that was beautiful.
- VERA: [dry] Don't tell anyone.

**milestone-120**
- MOOSE: [roaring] Two hours! Two hours, no phone! You get a free lift ticket!
- VERA: [dry] We don't sell lift tickets.
- MOOSE: [whispering] Darlene owes me a favor.
- VERA: [deadpan] She doesn't.

**record-01**
- VERA: [cool] New personal record.
- MOOSE: [booming] Somebody tell Hank!
- VERA: [dry] Hank honked. That one was for you.

**back-01**
- VERA: [dry] Oh. Phone.
- MOOSE: [encouraging] That's okay! Fresh tracks! New streak starts now!

**back-02**
- MOOSE: [cheerful] Welcome back! The mountain waited!
- VERA: [cool] Mountains are good at that.

**back-03**
- VERA: [cool] Phone, huh.
- MOOSE: [cheerful] Vera doesn't have a cell phone!
- VERA: [smooth] I have one. It's in a drawer. In Reno.

### Song requests

**request-01**
- MOOSE: [excited] The request line's lighting up!

**request-02**
- VERA: [cool] A request. Somebody wants something different. Happy to oblige.

**request-03**
- VERA: [smooth, dedicating] This one goes out to somebody driving over the pass. You know who you are.

**request-04**
- MOOSE: [delighted] Request from a red convertible! Top down! In the snow!
- VERA: [dry] Brave. Or cold.

**request-05**
- MOOSE: [cheerful] Request line! It's Carl, from the hot tub. He wants something upbeat.
- VERA: [flat] It's been a week, Carl.

**request-06**
- MOOSE: [cheerful] We were going to play something else! Vera overruled me!
- VERA: [smooth] I run the board, Moose.
- MOOSE: [proud] She runs the board!

**plug-01** (until the player has tried requests)
- VERA: [cool] Want to hear something else? Tap the radio. We take requests.
- MOOSE: [booming] Any song! Any time!
- VERA: [dry] Any song we have, Moose.

### Focus drive

**focus-20**
- VERA: [smooth] Focus drive. 20 minutes. Get to work. We'll play the quiet ones.
- MOOSE: [booming] Good luck!
- VERA: [dry] That was the last loud thing. I promise.

**focus-30**
- MOOSE: [booming] 30-minute focus drive! Starting now!
- VERA: [cool] Moose is going to whisper.
- MOOSE: [loud whisper] I'm whispering!
- VERA: [deadpan] Downstairs heard that.

**focus-end**
- MOOSE: [cheerful] That's your focus drive! Pull over, stretch, throw a snowball!
- VERA: [cool] Get a cocoa. Then back to it.

**focus-back**
- VERA: [cool] Break's over.
- MOOSE: [cheerful] Back on the road! Boots on, chains on!

### Welcome (how it works, when a drive starts in the Sierra)

**welcome-01**
- VERA: [smooth] Evening, or whatever time it is out there. This is 96.1, The Fireside. I'm Vera.
- MOOSE: [booming] Moose!
- VERA: [cool] Here's how it works up here. No destination, no score. The car drives itself.
- MOOSE: [proud] Chains and all!
- VERA: [matter-of-fact] Your only job is to leave your phone alone and watch the snow.
- MOOSE: [earnest] And if you see a bear, wave!
- VERA: [dry] His name is Gerald. He'll wave back. Boots off. Get comfortable.

---

## Batch 7: December bits (optional)

These play only while the holiday decorations are on (December 1 to January 1, or the Settings toggle), mixed in with the short bits. They're about the decorations and the season, not Christmas songs, so the station's no-Christmas rule still holds for the music. Code note for build batch 5: a `holiday` kind that's skipped outside those dates.

**holiday-01 · Hers is smaller**
- MOOSE: [thrilled] Holiday update! Hank put a wreath on Linda!
- VERA: [cool] The plow.
- MOOSE: [cheerful] The plow! And he got one for Linda too!
- VERA: [dry] The wife.
- MOOSE: [long pause] [worried] ...Vera, hers is smaller.
- VERA: [deadpan] That's going to come up.

**holiday-02 · The ornaments**
- VERA: [smooth] The big tree's lit in the village square.
- MOOSE: [proud] I put the star on top!
- VERA: [dry] He didn't need a ladder. Gerald's already been at the ornaments.
- MOOSE: [fond] Only the edible ones!
- VERA: [deadpan] None of them were edible. He decided.

**holiday-03 · The low part**
- MOOSE: [excited] Carolers on Main Street!
- VERA: [cool] Moose joined them.
- MOOSE: [proud] I do the low part!
- VERA: [dry] They didn't have a low part. Now they have Moose.

**holiday-04 · A chair for you** (the sincere one)
- VERA: [warm, low] Whatever you're celebrating this month, or if you're just driving through it, the fire's on up here and there's a chair for you.
- MOOSE: [softer] Vera, that was really nice.
- VERA: [dry] Bring your own cocoa. Moose drank ours.
- MOOSE: [sheepish] There were marshmallows.
