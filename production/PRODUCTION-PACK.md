# K-JAM 101.1 production pack

Everything to generate in ElevenLabs (voices) and Suno (songs). Name every file exactly as its **clip id** and save it as MP3. Voice files go in `production/raw/voice/` and songs go in `production/raw/music/`.

Totals: **167 voice clips** (one per line) and **16 songs**.

---

## Part 1: ElevenLabs voices

### Casting (pick once, then reuse for every line)

| Role | Look for in the Voice Library, or describe in Voice Design | Used in |
|---|---|---|
| **RICK** | Middle-aged man, deep and dry, deadpan, world-weary news-anchor gravitas, slightly slow | Most bits |
| **DANA** | Woman in her 30s or 40s, warm, bright and upbeat, morning-radio energy, quick | Most bits |
| **CALLER-F** | Woman, casual and friendly, phone-call feel | Brenda, Gloria |
| **CALLER-M** | Man, casual, laid-back, a bit sheepish | Kevin, Marco |

Tips:
- Pick the most expressive model offered. If it supports audio tags (Eleven v3 does), you can add the direction in square brackets at the start of a line, like `[deadpan]` or `[excited]`. Otherwise just pick the take that matches.
- Settings to start with: Stability around 40%, Style around 30%, Speaker Boost on. Lower stability means more expressive and less predictable.
- Regenerate any take that sounds flat. Comic timing matters more than perfect consistency.
- Write numbers the way they're spoken. The script below already does ("one-oh-one point one").
- Callers can sound a little lo-fi. I'll add a phone filter when wiring them in, so record them clean.

### Script

**Welcome** (plays once, right after Tap to drive; "Gee-gee-hue-ee" is how gghui is said, and the radio display shows "gghui")

| Clip id | Voice | Line | Direction |
|---|---|---|---|
| welcome-01-1 | RICK | Gee-gee-hue-ee welcomes you to Long Way Home in California. | announcer, grave |
| welcome-01-2 | DANA | Top down, sun low, take it slow! | big, sunny |
| welcome-01-3 | RICK | No destination. No score. The car drives itself. Your only job is to leave your phone alone. | deadpan, slow |
| welcome-01-4 | DANA | And we'll keep the hits coming! | cheerful |
| welcome-01-5 | RICK | One of us will. | dry, under his breath |

**Request plug** (follows the welcome until the player has requested a song once)

| Clip id | Voice | Line | Direction |
|---|---|---|---|
| plug-01-1 | DANA | Want a different song? Tap the radio, we take requests! | bright, helpful |
| plug-01-2 | RICK | We take them. We don't enjoy them. | deadpan |

**Station IDs**

| Clip id | Voice | Line | Direction |
|---|---|---|---|
| id-01-1 | DANA | You're locked in to K-Jam one-oh-one point one, Classic Rock and Gridlock. I'm Dana! | big, sunny |
| id-01-2 | RICK | And I'm Rick. Somewhere out there, a minivan has had its blinker on since breakfast. | deadpan |
| id-01-3 | DANA | Let's get you moving, folks! | cheerful |
| id-02-1 | RICK | K-Jam one-oh-one point one. Classic Rock and Gridlock. | announcer, grave |
| id-02-2 | DANA | The station that's stuck in traffic with you! | proud |
| id-02-3 | RICK | Dana, that's not the comfort you think it is. | dry |
| id-03-1 | DANA | Good evening, coast! Dana here, with Rick, and the sun is doing that gorgeous orange thing. | dreamy |
| id-03-2 | RICK | It's not gorgeous, Dana. It's in everyone's eyes. Every single driver. Squinting. | weary, slow |

**Traffic reports**

| Clip id | Voice | Line | Direction |
|---|---|---|---|
| traffic-01-1 | DANA | Let's check the roads. Rick, how's the coast looking? | bright |
| traffic-01-2 | RICK | Dana. A shopping cart has entered the left lane. | grave, breaking news |
| traffic-01-3 | DANA | Just one cart? | curious |
| traffic-01-4 | RICK | It's always just one cart. Until it isn't. | ominous |
| traffic-01-5 | DANA | I'm sure it'll roll on through any minute now! | optimistic |
| traffic-02-1 | RICK | Traffic on the four-oh-five is at a complete standstill. | flat |
| traffic-02-2 | DANA | Ooh, how long's the backup? | interested |
| traffic-02-3 | RICK | It doesn't end, Dana. It just becomes the ten. | haunted |
| traffic-02-4 | DANA | So it's a loop! That's kind of efficient. | delighted |
| traffic-03-1 | DANA | Good news on Ocean Avenue, folks. Things are wide open! | thrilled |
| traffic-03-2 | RICK | That's because everyone left. They saw what was coming. | low, conspiratorial |
| traffic-03-3 | DANA | What's coming, Rick? | worried |
| traffic-03-4 | RICK | Street sweeping. Tuesday. Nobody is ready. | doom |
| traffic-04-1 | RICK | Reports of a mattress on the one-oh-one northbound. | grave |
| traffic-04-2 | DANA | Somebody's gonna get a great nap! | giggly |
| traffic-04-3 | RICK | Three lanes are slowing down to look at it, Dana. Three. Lanes. | exasperated |
| traffic-04-4 | DANA | It is a very nice mattress. | sincere |
| traffic-05-1 | DANA | Quick look downtown. Light's green, sun's out, life is good! | breezy |
| traffic-05-2 | RICK | Green lights are a trap, Dana. They want you to feel safe. | paranoid |
| traffic-06-1 | RICK | We have a report of a red convertible doing exactly the speed limit. | suspicious |
| traffic-06-2 | DANA | A hero! | proud |
| traffic-06-3 | RICK | A suspect. | flat |

**Sig Alert Theatre** (Rick goes full dramatic actor)

| Clip id | Voice | Line | Direction |
|---|---|---|---|
| sigalert-01-1 | RICK | And now. Sig Alert Theatre. | hushed, theatrical |
| sigalert-01-2 | RICK | Tonight's production. A Traffic Cone, Alone. | theatrical |
| sigalert-01-3 | RICK | It stood in lane three. Orange. Defiant. No one asked it to be there. And yet. There it stood. | Shakespearean, long pauses |
| sigalert-01-4 | DANA | Bravo. Bravo, Rick. | moved, applauding |
| sigalert-01-5 | RICK | Lane three remains closed until further notice. | back to normal, flat |
| sigalert-02-1 | RICK | Sig Alert Theatre presents. A Ladder in the Carpool Lane. | theatrical |
| sigalert-02-2 | RICK | Act one. The ladder fell. Act two. Everyone slowed down to look at the ladder. | building drama |
| sigalert-02-3 | DANA | And act three? | eager |
| sigalert-02-4 | RICK | There is no act three, Dana. We are all still looking at the ladder. | tragic |
| sigalert-03-1 | RICK | Sig Alert Theatre. A tragedy in one lane. | theatrical |
| sigalert-03-2 | RICK | A man on Avocado Boulevard tried to merge. He waved. No one waved back. | heartbroken |
| sigalert-03-3 | DANA | Oh no. | genuinely sad |
| sigalert-03-4 | RICK | He is still there, Dana. Still waving. | hollow |
| sigalert-03-5 | DANA | Somebody wave at that man! | urgent, rallying |
| sigalert-04-1 | RICK | Sig Alert Theatre. The Beach Chair. | theatrical |
| sigalert-04-2 | RICK | It blew off a roof rack on Highway 1. It landed upright. Facing the ocean. | awed |
| sigalert-04-3 | DANA | Aww, it just wanted to see the sunset. | tender |
| sigalert-04-4 | RICK | It has a better view than any of us, Dana. It is mocking us. | bitter |

**Call-ins**

| Clip id | Voice | Line | Direction |
|---|---|---|---|
| call-01-1 | DANA | We've got a caller! Brenda, you're on K-Jam. | bright |
| call-01-2 | CALLER-F (Brenda) | Hi guys. I've been on the ten eastbound since March. | cheerful, casual |
| call-01-3 | RICK | Brenda, I am so sorry. | solemn |
| call-01-4 | CALLER-F (Brenda) | Don't be. I've got an herb garden on the dashboard now. The basil's doing great. | content |
| call-01-5 | DANA | See, Rick? The ten is a community! | triumphant |
| call-02-1 | RICK | Caller, you're on the air. | flat |
| call-02-2 | CALLER-M (Kevin) | Hey, it's Kevin from the one-oh-one. I got married in the fast lane. | sheepish, proud |
| call-02-3 | DANA | Congratulations! | squealing |
| call-02-4 | CALLER-M (Kevin) | Thanks. We met at a merge. She let me in. | dreamy |
| call-02-5 | RICK | Love found a way, Kevin. You still haven't found an exit. | dry |
| call-03-1 | DANA | Line two, you're on K-Jam! | bright |
| call-03-2 | CALLER-F (Gloria) | Hi. I've been listening ever since my car became my apartment. | matter-of-fact |
| call-03-3 | RICK | How's the square footage? | polite |
| call-03-4 | CALLER-F (Gloria) | Great natural light. Terrible parking. | like a real-estate agent |
| call-04-1 | RICK | Caller, go ahead. | flat |
| call-04-2 | CALLER-M (Marco) | Hi, it's Marco. I'm on Highway 1 behind an R V called The Wanderer. | weary |
| call-04-3 | DANA | How long have you been behind it? | sympathetic |
| call-04-4 | CALLER-M (Marco) | We're on a first-name basis now. His name is Gary. | resigned |
| call-04-5 | RICK | Gary is never pulling over, Marco. Gary has never pulled over in his life. | grave prophecy |

**Dana's shortcut of the day**

| Clip id | Voice | Line | Direction |
|---|---|---|---|
| shortcut-01-1 | DANA | Time for Dana's shortcut of the day! | jingle energy |
| shortcut-01-2 | DANA | Skip the highway, cut over on Jacaranda, then hang a left through the car wash. | confident |
| shortcut-01-3 | RICK | Through the car wash, Dana? | disbelieving |
| shortcut-01-4 | DANA | In one end, out the other. Wax is optional. | breezy |
| shortcut-01-5 | RICK | Last week's shortcut put forty cars in a cul-de-sac. They've formed a homeowners association. | deadpan |
| shortcut-02-1 | DANA | Dana's shortcut of the day: take Sunset Vista all the way to the end! | excited |
| shortcut-02-2 | RICK | It ends in the ocean, Dana. | flat |
| shortcut-02-3 | DANA | Then you've arrived at the beach. Shortcut! | unbothered |
| shortcut-03-1 | DANA | Shortcut of the day! Follow the ice cream truck. They know things. | conspiratorial |
| shortcut-03-2 | RICK | That ice cream truck has been circling the same block since nineteen eighty-seven. | haunted |
| shortcut-04-1 | DANA | Shortcut of the day: take Highway 1. The whole way. No turns! | proud |
| shortcut-04-2 | RICK | That's not a shortcut, Dana. That's just the road. | patient |
| shortcut-04-3 | DANA | And isn't it beautiful? | dreamy |

**Fake ads** (both hosts read in ad voice)

| Clip id | Voice | Line | Direction |
|---|---|---|---|
| ad-01-1 | DANA | Tired of circling the block? | ad read, sympathetic |
| ad-01-2 | RICK | Madame Valeria. Parking-spot psychic. | mysterious |
| ad-01-3 | DANA | She sees an open meter... in your future. | spooky whisper |
| ad-01-4 | RICK | Readings by appointment. She's double-parked out front. Street sweeping is Tuesday. | fast legal disclaimer |
| ad-02-1 | RICK | Feeling stuck? Emotionally? Also physically, on the freeway? | ad read, concerned |
| ad-02-2 | DANA | Try Doctor Pam's Drive-Thru Therapy! Pull up, unload, pull forward. | perky |
| ad-02-3 | RICK | Would you like to talk about your mother, or upsize to a fear of abandonment? | drive-thru speaker voice |
| ad-02-4 | DANA | Now with a second window for couples! | perky |
| ad-03-1 | DANA | This traffic report is brought to you by Gridlock Gourmet. | sponsor read |
| ad-03-2 | RICK | A five-course meal you can eat between two exits. | smooth |
| ad-03-3 | DANA | The soup course alone takes the whole one-ten! | delighted |
| ad-04-1 | DANA | Sunset Surf School! Learn to surf in one lesson! | stoked |
| ad-04-2 | RICK | Or learn to sit on a board and stare at the horizon for three hours. | flat |
| ad-04-3 | DANA | Both count as surfing! | stoked |

**Red-light bits** (play while you're stopped at a light)

| Clip id | Voice | Line | Direction |
|---|---|---|---|
| red-01-1 | RICK | If you're sitting at a red light right now, that's fine. That's healthy. Breathe. | calm, therapist |
| red-01-2 | DANA | Use this time to wave at a pedestrian! | sunny |
| red-02-1 | DANA | Stopped at a light? Perfect time for a stretch! | peppy |
| red-02-2 | RICK | Not too big a stretch. The light could change. Then what, Dana. Then what. | rising panic |
| red-03-1 | RICK | A red light is just the city asking you to think about your choices. | philosophical |
| red-03-2 | DANA | And then it turns green and says, go for it! | cheering |

**Arriving in a town:** one name clip, then one of the four bits

| Clip id | Voice | Line | Direction |
|---|---|---|---|
| townname-playa-dorada | DANA | Rolling into Playa Dorada! | excited |
| townname-costa-linda | DANA | Rolling into Costa Linda! | excited |
| townname-pelican-point | DANA | Rolling into Pelican Point! | excited |
| townname-bahia-vista | DANA | Rolling into Bahía Vista! | excited |
| townname-seal-rock | DANA | Rolling into Seal Rock! | excited |
| townname-sunset-cove | DANA | Rolling into Sunset Cove! | excited |
| townname-rincon-bay | DANA | Rolling into Rincón Bay! | excited |
| townname-las-olas | DANA | Rolling into Las Olas! | excited |
| townname-marisol | DANA | Rolling into Marisol! | excited |
| townname-point-paloma | DANA | Rolling into Point Paloma! | excited |
| townname-coral-mesa | DANA | Rolling into Coral Mesa! | excited |
| townname-laguna-serena | DANA | Rolling into Laguna Serena! | excited |
| town-01-1 | RICK | Lovely. Their one traffic light has a waiting list. | dry |
| town-02-1 | DANA | Ooh, best fish tacos on the coast! | foodie joy |
| town-02-2 | RICK | Longest line for fish tacos on the coast. It merges with the highway, Dana. | deadpan |
| town-03-1 | DANA | Population: friendly! | sunny |
| town-03-2 | RICK | Population: everyone who missed the exit for the last town. | dry |
| town-04-1 | DANA | Where the parking meters take seashells! | delighted |
| town-04-2 | RICK | And the meter maids are seagulls. Very strict seagulls. | grave |

**Where you're driving** (picked by location)

| Clip id | Voice | Line | Direction |
|---|---|---|---|
| coast-01-1 | DANA | Cruising Highway 1. Ocean on one side, hills on the other. This is the life! | blissful |
| coast-01-2 | RICK | It's the life until a tour bus stops for a photo of a rock. | dry |
| coast-02-1 | RICK | Highway 1 advisory. A pelican has been spotted. It looks judgmental. | news anchor |
| coast-02-2 | DANA | Wave at the pelican, folks! | sunny |
| coast-03-1 | DANA | Not a single traffic light out here on the coast! | free |
| coast-03-2 | RICK | That's what worries me, Dana. No one is in charge. | uneasy |
| coast-04-1 | RICK | If you're on a cliff stretch of Highway 1 right now, both hands on the wheel. | stern |
| coast-04-2 | DANA | And both eyes on that view! | dreamy |
| coast-04-3 | RICK | No, Dana. Eyes on the road. The view isn't going anywhere. You might be. | grim |
| beach-01-1 | DANA | Ooh, cruising the coast! Smell that salt air! | inhaling, happy |
| beach-01-2 | RICK | That's not salt air, Dana. That's a seagull with a french fry and a plan. | deadpan |
| beach-02-1 | RICK | If you're on Pacific Coast Highway, keep your eyes on the road, not the sunset. | stern |
| beach-02-2 | DANA | The sunset's the best part! | protesting |
| beach-02-3 | RICK | That's how they get you. | ominous whisper |
| downtown-01-1 | RICK | If you're heading downtown right now, I want you to know. I respect your courage. | solemn salute |
| downtown-01-2 | DANA | Downtown's lovely this time of day! | sunny |
| downtown-01-3 | RICK | Name one thing. | flat |
| downtown-01-4 | DANA | The windows are very orange. | stalling, then proud |
| homes-01-1 | DANA | Out in the neighborhoods, folks are watering their lawns at golden hour. | peaceful |
| homes-01-2 | RICK | And every sprinkler is aimed directly at the sidewalk. Every single one. | aggrieved |
| strip-01-1 | DANA | Strip mall country! Donuts, dry cleaning and a nail salon, all in one lot! | thrilled |
| strip-01-2 | RICK | And one parking space. For all three. | dry |
| freeway-01-1 | RICK | Look up, folks. That's the freeway. You're not on it. Count your blessings. | grateful |
| freeway-01-2 | DANA | I bet it's moving great up there! | hopeful |
| freeway-01-3 | RICK | It is not, Dana. It has never once been moving great. | weary |
| park-01-1 | DANA | Passing a park! Somebody's having a birthday party under that tree. | charmed |
| park-01-2 | RICK | They've been setting up that bounce house since noon. It's not inflating, Dana. It's never inflating. | despairing |

**Song intros:** one per song in Part 2, plus a few lines that can follow any intro

| Clip id | Voice | Line | Direction |
|---|---|---|---|
| intro-golden-hour-gasoline | DANA | Here's Golden Hour Gasoline, from The Offramps. | bright, upbeat |
| intro-carpool-lane-lightning | RICK | This is Sig Alert. Carpool Lane Lightning. | dry |
| intro-red-light-lullaby | DANA | Next up, Valet Overdrive with Red Light Lullaby! | bright, upbeat |
| intro-merge-left-into-my-heart | RICK | The Carpoolers. Merge Left, Into My Heart. Turn it up and stay in your lane. | dry |
| intro-low-tide-blues | DANA | Here's Smog Cutters with Low Tide Blues. Kick off your shoes, folks. | mellow, relaxed |
| intro-bonfire-on-the-beach | RICK | This is my cousin's band. No. It's Dana's cousin's band. Dana's Cousin Kevin, Bonfire on the Beach. | dry, correcting himself |
| intro-tan-lines | DANA | Gridlock Prophets! Tan Lines! | bright, excited |
| intro-postcard-from-the-pier | DANA | Here's The Turn Signals, with Postcard from the Pier. | warm, upbeat |
| intro-taillight-serenade | RICK | Rush Hour Rebels. Taillight Serenade. Somebody hold me. | dry, quietly emotional |
| intro-hammock-by-the-sea | DANA | Tailgate Thunder, Hammock by the Sea. Put your feet up, everybody. | relaxed, warm |
| intro-hot-sand-shuffle | RICK | The Offramps. Hot Sand Shuffle. No words. Just sand. | dry |
| intro-off-ramp-outlaw | DANA | Here's Sig Alert with Off-Ramp Outlaw! | bright, upbeat |
| intro-catalina-sunset | DANA | Valet Overdrive. Catalina Sunset. Smooth as a fresh repave. | smooth, upbeat |
| intro-longboard-summer | RICK | Smog Cutters. Longboard Summer. I tried surfing once. The ocean won. | dry |
| intro-pacific-coast-cruise | DANA | Something mellow for the coast. The Turn Signals, Pacific Coast Cruise. | soft, warm |
| intro-long-way-home | DANA | And this one's for you, out there taking the long way home. Rush Hour Rebels. | heartfelt, warm |
| after-01-1 | DANA | A classic! | happy |
| after-02-1 | RICK | They broke up in traffic, you know. Different lanes. | dry |
| after-03-1 | DANA | Windows down, volume up! | hyped |
| after-03-2 | RICK | Dana, it's a convertible. There are no windows. | patient |
| after-03-3 | DANA | Then everything up! | hyped |

**Request line** (plays when you pick a song from the playlist, before that song's intro)

| Clip id | Voice | Line | Direction |
|---|---|---|---|
| request-01-1 | DANA | Ooh, we've got a request coming in! | excited |
| request-02-1 | DANA | This one's going out to a driver on the coast. You know who you are. | warm, playful |
| request-03-1 | RICK | Another request. Our listeners have opinions. | dry |
| request-04-1 | RICK | This request came in from a red convertible. Doing exactly the speed limit. | suspicious |
| request-05-1 | DANA | The request line is on fire tonight! | thrilled |
| request-05-2 | RICK | It's one person, Dana. It's always the same person. | flat |
| request-06-1 | RICK | We were going to play something else. But the people have spoken. | resigned |

**Hands-free streak** (milestones while you don't leave the game, a new personal best, and coming back after leaving)

| Clip id | Voice | Line | Direction |
|---|---|---|---|
| milestone-05-1 | DANA | Five minutes hands-free, folks! Somebody's on a roll! | cheerful |
| milestone-05-2 | RICK | Five minutes. That's a long red light. | dry |
| milestone-10-1 | DANA | Ten minutes, and somebody out there hasn't touched their phone. Look at you! | delighted |
| milestone-10-2 | RICK | Ten minutes. I'll believe it at twenty. | suspicious |
| milestone-30-1 | DANA | Thirty minutes phone-free! A hero! | thrilled |
| milestone-30-2 | RICK | A suspect. | flat |
| milestone-60-1 | RICK | One hour. No phone. In thirty years of traffic reports, I have never seen this. | awed, slow |
| milestone-60-2 | DANA | I'm not crying. It's the sunset. | choked up |
| milestone-120-1 | DANA | Two hours hands-free! We should name a lane after you! | excited |
| milestone-120-2 | RICK | They'd just close it for construction. | dry |
| record-01-1 | DANA | New personal record! Somebody get this driver a trophy! | excited |
| record-01-2 | RICK | We don't have a trophy. We have a traffic cone. | dry |
| back-01-1 | RICK | Oh. You're back. We noticed. | deadpan |
| back-01-2 | DANA | Everybody checks their phone sometimes! New streak starts now! | forgiving |
| back-02-1 | DANA | Welcome back! The ocean missed you. | cheerful |
| back-02-2 | RICK | The ocean didn't notice. The ocean never notices. | dry |
| back-03-1 | RICK | And the streak is over. Like all good things. Like the carpool lane. | weary |
| back-03-2 | DANA | Clean slate, folks! Eyes on the road! | upbeat |

---

## Part 2: Suno songs

How to make each one:
1. Use **Custom mode**. Paste the title into Title and the style into Style of Music.
2. For lyrics, paste the song's full lyrics from **production/LYRICS.md** into the Lyrics box, tags included. Don't paste the theme: Suno sings whatever is in the Lyrics box word for word. For the two instrumentals, switch on **Instrumental** instead. (The themes below are kept only as a description of each song.)
3. Make 2 versions, keep the better one, and download it as MP3, named as the song id.
4. Don't type real artist names anywhere; Suno blocks them and they aren't needed.

Songs can be any length. I'll trim each to about 90 seconds with a fade.

| Song id | Title | Band (for the radio) | Style of Music | Lyrics theme |
|---|---|---|---|---|
| golden-hour-gasoline | Golden Hour Gasoline | The Offramps | 1970s classic rock, mid-tempo driving groove, crunchy rhythm guitar, warm analog production, gritty male vocals, singalong chorus | Cruising the California coast at sunset with the top down |
| carpool-lane-lightning | Carpool Lane Lightning | Sig Alert | 1980s arena rock, big gated drums, soaring guitar solo, anthemic male vocals | Flying down the carpool lane with your best friend riding shotgun |
| red-light-lullaby | Red Light Lullaby | Valet Overdrive | laid-back 1970s soft rock, Rhodes piano, slide guitar, smooth female vocals | A love song to the quiet minute at a red light |
| merge-left-into-my-heart | Merge Left (Into My Heart) | The Carpoolers | upbeat 1960s surf rock, twangy reverb guitar, vocal harmonies | Falling in love when someone lets you merge |
| low-tide-blues | Low Tide Blues | Smog Cutters | slow electric blues rock, shuffle rhythm, harmonica, raspy male vocals, relaxed | A lazy afternoon in a beach chair, waiting for the tide |
| bonfire-on-the-beach | Bonfire on the Beach | Dana's Cousin Kevin | 1970s boogie rock, rollicking piano, cowbell, fun male vocals | A night bonfire party on the sand |
| tan-lines | Tan Lines | Gridlock Prophets | 1970s funk rock, wah-wah guitar, tight drums, groovy bass, male vocals, sunny | Summer days on the sand: volleyball, boombox, ice cream |
| postcard-from-the-pier | Postcard from the Pier | The Turn Signals | 1980s new wave rock, chorus-drenched guitars, synth pads, dreamy female vocals | A long-distance love kept alive by postcards |
| taillight-serenade | Taillight Serenade | Rush Hour Rebels | 1980s power ballad, piano intro, big emotional guitar solo, male vocals | Following someone's taillights home through the night |
| hammock-by-the-sea | Hammock by the Sea | Tailgate Thunder | laid-back 1970s country rock, pedal steel, gentle twangy guitar, relaxed male vocals | Swinging in a hammock between two palms, ignoring the boss's calls |
| hot-sand-shuffle | Hot Sand Shuffle | The Offramps | upbeat 1960s surf rock instrumental, reverb guitar, energetic drums | **Instrumental** |
| off-ramp-outlaw | Off-Ramp Outlaw | Sig Alert | southern rock, dual lead guitars, stomping beat, gritty male vocals | A free spirit who takes every off-ramp just to see where it goes |
| catalina-sunset | Catalina Sunset | Valet Overdrive | 1970s yacht rock, smooth groove, saxophone, male and female harmony vocals | Sailing out to the island with someone special |
| longboard-summer | Longboard Summer | Smog Cutters | 1960s garage surf rock, fuzz and reverb guitar, raw energy, male vocals | Learning to surf on a beat-up longboard all summer |
| pacific-coast-cruise | Pacific Coast Cruise | The Turn Signals | mellow 1970s rock, slide guitar, gentle drums, beachy and relaxed | **Instrumental** |
| long-way-home | Long Way Home | Rush Hour Rebels | 1980s heartland rock, jangly guitars, warm male vocals, uplifting chorus | Taking the long way home along the coast because there's no rush |

---

## Part 3: Nature sounds (real recordings, for when the radio is off)

Where to get them: **freesound.org** (a free account is needed to download).
1. Search for the terms below.
2. Under **Filters → License**, pick **Creative Commons 0**. CC0 means free for any use with no credit needed.
3. Sort by rating, preview a few, and download the best match. WAV or FLAC is ideal; MP3 is fine.
4. Rename it to the file name below and put it in `production/raw/nature/`.

If you fall in love with a recording that isn't CC0 (for example CC-BY), that's OK too. Just note the creator's name and the link so the game can credit them.

| File name | What to look for | Search terms | Length |
|---|---|---|---|
| nature-ocean.wav | Gentle waves on a sandy beach. Steady rhythm, no voices, music, boats or heavy wind noise | gentle ocean waves beach, calm surf | 1–3 minutes |
| nature-ocean-close.wav (optional) | Waves breaking closer, a bit fuller, for beach stretches | waves breaking shore, surf close | 1–2 minutes |
| nature-gull-01.wav to nature-gull-06.wav | Single seagull calls, as clean as possible (little surf behind them). Mix of near and far, short and long | seagull call, gull single, herring gull | 1–4 seconds each |
| nature-wind.wav | Soft steady breeze, no microphone buffeting or rumble | gentle wind, soft breeze ambience | about 1 minute |
| nature-birds.wav | Songbirds in a quiet neighbourhood or park, no traffic or voices | songbirds suburban, birds park evening | about 1 minute |

You can trim long recordings yourself if you want, but there's no need. I'll cut clean loops, match the levels and compress them (about 4 MB total). The current synthesized sounds stay as the backup if a file fails to load.

---

## Checklist

- [ ] ElevenLabs: four voices picked (Rick, Dana, Caller-F, Caller-M)
- [ ] 167 voice clips saved as `production/raw/voice/<clip id>.mp3`
- [ ] 16 songs saved as `production/raw/music/<song id>.mp3`
- [ ] Nature sounds (ocean, 6 gulls, wind, birds) saved in `production/raw/nature/`. Note the creator and link for anything that isn't CC0
- [ ] Commercial use confirmed in both services' terms for your plan
- [ ] Tell Claude the files are in, and it takes over from step 6 of AUDIO-WORKFLOW.md
