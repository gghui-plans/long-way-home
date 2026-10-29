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
- Hank, the plow driver who calls in with road reports and opinions.
- Velvet, the station cat, who sleeps on the mixing board.
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
| 1 | id | Station IDs | 3 | to do |
| 1 | clock | Time of day | 4 | to do |
| 1 | after | After a song | 3 | to do |
| 1 | red | Stopped at a light | 3 | to do |
| 2 | intro + introb | Song intros: a short one and a story one per song | 32 | to do |
| 3 | traffic | Chain control and road report | 6 | to do |
| 3 | sigalert | Plow Alert / Whiteout Watch | 4 | to do |
| 3 | shortcut | Moose's "secret stash" | 4 | to do |
| 3 | ad | Lodge bulletin board | 4 | to do |
| 4 | facts | Snow Notes (real snow and Sierra facts) | 16 | to do |
| 5 | call | Callers | 13 | to do |
| 6 | town, townname, place, pier→summit | Village and scenery reactions | 30 | to do |
| 6 | steer, speed, postcard | Player reactions | 6 | to do |
| 6 | milestone, record, back | Hands-free streak | 9 | to do |
| 6 | request, plug | Song requests | 7 | to do |
| 6 | focus (20, 30, end, back) | Focus drive | 4 | to do |
| 6 | welcome | How it works, when a drive starts in the Sierra | 1 | to do |
| 7 | (optional) | Holiday bits, December only | ~4 | to do |

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
