// Question deck. Edit freely — this is the only file you need to touch to change the questions.
//
// Fields:
//   tier  1 = light / warm-up (level 1), 2 = deeper (level 2), 3 = deepest (level 3)
//   both  true = a "mutual" question you both answer (used sparingly, at most one per hand)
//   text  the question itself
//
// Two batches, both sorted into tiers: your original 48 (minus one duplicate: #43 was a
// reworded #12), then the 100 she collected, kept in her five sections. Move things
// between tiers as you like — tier is the only thing the game reads.

window.QUESTIONS = [
  // ---- Tier 1: warm-up (level 1) ----
  { tier: 1, text: "What was the last hidden gem you discovered?" },
  { tier: 1, text: "What is the first thing you notice about a person (physical and/or personality)?" },
  { tier: 1, text: "What is your favorite part of yourself?" },
  { tier: 1, text: "Given the choice of anyone in the world, whom would you want as a dinner guest?" },
  { tier: 1, text: "What would constitute a “perfect” day for you?" },
  { tier: 1, text: "For what in your life do you feel most grateful?" },
  { tier: 1, text: "If you could wake up tomorrow having gained any one quality or ability, what would it be?" },
  { tier: 1, text: "What is the most trivial thing about which you have a strong opinion?" },
  { tier: 1, text: "What’s a quirk of yours that few people know about?" },
  { tier: 1, text: "What is the most useless talent or skill you possess? How and why did you learn it?" },
  { tier: 1, text: "What is the first thing you hope people notice about you?" },
  { tier: 1, text: "What is your perfect meal? Describe everything from the company to the setting to the music to the food." },
  { tier: 1, text: "What’s the strangest situation you’ve ever found yourself in?" },
  { tier: 1, text: "What is the most beautiful view you’ve ever seen?" },
  { tier: 1, text: "When was the last time you tried something new? What was it? Did you enjoy it?" },
  { tier: 1, text: "What is your worst habit?" },
  { tier: 1, text: "What song always reminds you of someone special in your life?" },
  { tier: 1, text: "What’s something you love about your hometown?" },
  { tier: 1, text: "Who was your best teacher?" },

  // ---- Tier 2: deeper (level 2) ----
  { tier: 2, text: "What’s something you’ve had to unlearn about relationships/dating?" },
  { tier: 2, text: "What makes you feel seen or appreciated in a relationship?" },
  { tier: 2, text: "If you could change anything about the way you were raised, what would it be?" },
  { tier: 2, text: "If a crystal ball could tell you the truth about yourself, your life, the future, or anything else, what would you want to know?" },
  { tier: 2, text: "Is there something that you’ve dreamed of doing for a long time? Why haven’t you done it?" },
  { tier: 2, text: "What is the greatest accomplishment of your life?" },
  { tier: 2, text: "What do you value most in a friendship?" },
  { tier: 2, text: "What is your most treasured memory?" },
  { tier: 2, text: "What roles do love and affection play in your life?" },
  { tier: 2, text: "What is something you’ve done/felt/seen/etc. that you wish you could experience again for the first time?" },
  { tier: 2, text: "What do you find yourself thinking about just before you fall asleep?" },
  { tier: 2, text: "What is the best or most memorable compliment you’ve ever received?" },
  { tier: 2, text: "How have you changed in the past five years?" },
  { tier: 2, text: "What adventure would you like to take together?", both: true },
  { tier: 2, text: "How do you define success?" },
  { tier: 2, text: "Is there a gift you’ve received that is particularly meaningful, valuable, or sentimental to you?" },
  { tier: 2, text: "Can you recall a moment when you felt proud of someone special to you?" },
  { tier: 2, text: "If you could experience life through any other person’s eyes for a day, who would you choose and why?" },

  // ---- Tier 3: deepest (level 3) ----
  { tier: 3, text: "What is your most terrible memory?" },
  { tier: 3, text: "If you knew that in one year you would die suddenly, would you change anything about the way you are now living? If so, why?" },
  { tier: 3, text: "How close and warm is your family? Do you feel your childhood was happier than most other people’s?" },
  { tier: 3, text: "How do you feel about your relationship with your parents? Is there anything you are particularly grateful for or wish could be different?" },
  { tier: 3, text: "Share an embarrassing moment in your life." },
  { tier: 3, text: "When did you last cry in front of another person? By yourself?" },
  { tier: 3, text: "Your house, containing everything you own, catches fire. After saving your loved ones and pets, you have time to safely make a final dash to save any one item. What would it be? Why?" },
  { tier: 3, text: "What single event or decision do you think most affected the rest of your life? Was there a turning point in your life?" },
  { tier: 3, text: "In the movie Inside Out, each person has a set of “core memories” that define who they are and how they behave. What’s one of yours?" },
  { tier: 3, text: "What is something you fantasize about often?" },

  // =====================================================================
  // Added from the list she collected — five sections, sorted into the three
  // tiers the game understands. Order in this array doesn’t matter (only `tier`
  // decides which level a question can appear in), so these are appended rather
  // than merged into the blocks above: an in-progress room remembers which
  // questions are spent by their position here, and merging would renumber them.
  // =====================================================================

  // ---- I. Before We Knew Ourselves — childhood, family, the little things that made us ----
  { tier: 1, text: "What’s the most reckless or adventurous thing you did as a kid?" },
  { tier: 1, text: "Who did you look up to when you were little, and what did you admire about them?" },
  { tier: 1, text: "What scared you as a kid but also made you weirdly curious?" },
  { tier: 2, text: "Did your parents ever make a decision you hated at the time but understand or appreciate now?" },
  { tier: 1, text: "If you had a secret hideout as a kid, real or imaginary, what did it look like?" },
  { tier: 1, text: "What’s the most trouble you ever got into growing up?" },
  { tier: 1, text: "Is there a smell, food, sound, or object that instantly takes you back to childhood?" },
  { tier: 1, text: "What kind of kid were you at school when adults weren’t paying attention?" },
  { tier: 1, text: "What was your first real act of rebellion?" },
  { tier: 3, text: "Was there a period of your childhood when you felt especially lonely? What did you do with that loneliness?" },
  { tier: 1, text: "What’s something you secretly did as a kid that you definitely weren’t supposed to?" },
  { tier: 2, text: "Who did you go to when you needed comfort growing up? Mom, dad, someone else, or mostly yourself?" },
  { tier: 1, text: "Did you have an object you were ridiculously attached to as a kid?" },
  { tier: 2, text: "What did other kids have that you were secretly jealous of?" },
  { tier: 1, text: "What’s a ridiculous lie you told as a kid that you genuinely thought you could get away with?" },
  { tier: 1, text: "What did “being rich” mean to little-you?" },
  { tier: 2, text: "What was the first book, movie, place, or person that made you realize there was a much bigger world outside the one you knew?" },
  { tier: 1, text: "Does your family have a joke, phrase, tradition, or weird little habit that would make absolutely no sense to anyone else?", both: true },
  { tier: 3, text: "What’s something about the way you were raised that you definitely want to carry into your own future family—and something you definitely don’t?" },
  { tier: 3, text: "If childhood-you met you today, what would surprise them most? And what would make them proud?" },

  // ---- II. The Person You Are on a Tuesday — not the résumé version, just you on an ordinary day ----
  { tier: 1, text: "What’s something that reliably makes your brain go quiet?" },
  { tier: 1, text: "When was the last time a movie, book, song, or piece of art genuinely stayed with you afterward? Why?" },
  { tier: 1, text: "What’s a hobby you abandoned that you sometimes wish you hadn’t?" },
  { tier: 1, text: "What’s something you can accidentally spend hours doing without noticing the time?" },
  { tier: 1, text: "If your personality had to be a type of weather, what would it be?" },
  { tier: 1, text: "What matters most to you when you go out to eat—and what can completely ruin a restaurant for you?" },
  { tier: 1, text: "What’s a tiny, oddly specific thing that makes you disproportionately happy?" },
  { tier: 1, text: "What does your perfect do-nothing evening look like?" },
  { tier: 3, text: "What was the last thing that made you cry?" },
  { tier: 3, text: "When you’re overwhelmed, what do you secretly wish someone who loves you would do without you having to ask?" },
  { tier: 2, text: "Is there a place where you feel unusually like yourself?" },
  { tier: 1, text: "Are you usually the person making plans or happily showing up to someone else’s?" },
  { tier: 1, text: "What’s something you’ve taught yourself recently just because you wanted to know how it worked?" },
  { tier: 1, text: "What’s the most obsessive phase you’ve ever gone through with a hobby, topic, game, food, etc.?" },
  { tier: 1, text: "What’s something completely mundane that you weirdly enjoy doing?" },
  { tier: 2, text: "What’s something people tend to misunderstand about you when they first meet you?" },
  { tier: 1, text: "Would you rather live somewhere exciting and chaotic or peaceful and inconvenient?" },
  { tier: 2, text: "When do you feel most independent, and when do you actually like being able to depend on someone?" },
  { tier: 3, text: "What part of yourself takes the longest for people to get access to?" },
  { tier: 2, text: "If I quietly followed you around for a completely normal day, what would I learn about you that I probably don’t know yet?" },

  // ---- III. The Things You Build a Life Around — work, purpose, choices ----
  { tier: 2, text: "How has your definition of success changed since you were younger?" },
  { tier: 2, text: "What’s something you used to think you wanted badly, but don’t really want anymore?" },
  { tier: 2, text: "What’s a decision you made that other people didn’t understand but still feels right to you?" },
  { tier: 3, text: "If you could undo one decision in your life, would you? Or would you rather keep everything that came from it?" },
  { tier: 2, text: "Who has changed the way you think about life the most?" },
  { tier: 3, text: "When you fail at something important, what does your brain usually do first?" },
  { tier: 2, text: "If you could design an ordinary day that you’d be genuinely happy to live over and over again, what would it look like?" },
  { tier: 2, text: "What kind of ordinary life would make you think, “yeah, I could happily do this for the next 30 years”?" },
  { tier: 2, text: "How much money would be “enough” for you to stop organizing your life around making more of it?" },
  { tier: 2, text: "What’s something you’re willing to work extremely hard for—and something you absolutely refuse to sacrifice for success?" },
  { tier: 2, text: "What makes something worth persisting with for you? And how do you know when persistence has turned into stubbornness?" },
  { tier: 3, text: "When “the right thing” and “the thing you want” point in different directions, which one usually wins?" },
  { tier: 2, text: "What makes a friendship survive major changes in life?" },
  { tier: 2, text: "What’s harder for you: committing to something or letting something go?" },
  { tier: 2, text: "What belief about life have you changed your mind about the most?" },
  { tier: 3, text: "In what parts of your life are you hardest on yourself?" },
  { tier: 2, text: "What’s something you’re proud of that probably wouldn’t sound impressive on a résumé?" },
  { tier: 3, text: "What do you think you owe the people you love—and what do you think you never owe anyone?" },
  { tier: 3, text: "What are you most afraid of accidentally building your life around?" },
  { tier: 3, text: "If nobody ever saw, praised, bought, rewarded, or validated the things you worked on, what would you still want to spend your life doing?" },

  // ---- IV. How You Love & Let Yourself Be Loved — romance, friendship, closeness, conflict ----
  { tier: 2, text: "What’s the most important thing a past relationship or close friendship taught you about yourself?" },
  { tier: 2, text: "When you really like someone, do you tend to move toward them or become a little more careful?" },
  { tier: 2, text: "What’s a seemingly small behavior in a partner that would slowly drive you insane?" },
  { tier: 3, text: "What makes you feel emotionally close to someone, separate from physical intimacy?" },
  { tier: 3, text: "Do you think partners should tell each other everything? Where does privacy end and secrecy begin?" },
  { tier: 2, text: "When you’re upset with someone you love, do you want to solve it immediately or have space first?" },
  { tier: 2, text: "What makes you feel more loved: being deeply understood or being taken care of? Do you think you need both at different times?" },
  { tier: 3, text: "What’s something you’re afraid a relationship could take away from you?" },
  { tier: 1, text: "What’s the least traditionally romantic thing that feels incredibly romantic to you?" },
  { tier: 3, text: "If you never got married, what parts of the life you imagine for yourself would stay exactly the same?" },
  { tier: 2, text: "What tends to make you jealous, even if you don’t always show it?" },
  { tier: 1, text: "What’s the most awkward, ridiculous, or out-of-character thing you’ve done because you liked someone?" },
  { tier: 1, text: "What’s the most thoughtful gift you’ve ever given someone, and why did it matter to you?" },
  { tier: 3, text: "What’s a way you show love that you don’t think people always recognize as love?" },
  { tier: 3, text: "What’s something about your family dynamic that would be important for a partner to understand?" },
  { tier: 2, text: "Do you want a partner who feels like a mirror, a missing puzzle piece, or neither?" },
  { tier: 2, text: "What usually makes attraction grow for you? And what can make it disappear surprisingly fast?" },
  { tier: 3, text: "Do you think liking someone deeply can make up for incompatibility? And can two people be incredibly compatible without actually being right for each other?" },
  { tier: 3, text: "What’s something you want your partner to notice without you having to explicitly ask for it?" },
  { tier: 3, text: "What does “home” mean to you when it’s a person rather than a place?", both: true },

  // ---- V. Lives We Haven’t Lived Yet — future selves, impossible choices, what-ifs ----
  { tier: 2, text: "Forget money, visas, jobs, family expectations, and practicality for a second. Where would you live and what would your life actually look like?" },
  { tier: 1, text: "If you could instantly become world-class at one skill—not necessarily a useful one—what would you choose?" },
  { tier: 1, text: "You have $1 million that has to be spent entirely on experiences. You can’t keep or invest any of it. What are you doing?" },
  { tier: 3, text: "Picture yourself at 80 on a completely ordinary morning. Where are you waking up, who’s around, and what happens next?" },
  { tier: 3, text: "If you could give one thing—not necessarily an object—to your younger self, what would it be?" },
  { tier: 1, text: "Would you rather have dinner with someone who could answer your biggest questions or someone who could take you on the greatest adventure of your life?" },
  { tier: 1, text: "If you could have one superpower, what’s the first completely selfish thing you’d use it for?" },
  { tier: 2, text: "If you could disappear from your current life for one year with zero consequences, what would you do with it?" },
  { tier: 2, text: "If you could experience one day of someone else’s life exactly as they experience it, whose would you choose?" },
  { tier: 2, text: "An alien asks you to show them one thing that explains why humanity is worth keeping around. What do you show them?" },
  { tier: 1, text: "If you could invent an animal from scratch, what ridiculous creature are you making?" },
  { tier: 1, text: "What’s the strangest or most vivid dream you still remember?" },
  { tier: 3, text: "If you had to lose every memory associated with one period of your life, which period would be hardest to give up?" },
  { tier: 2, text: "What kind of old person do you think you’ll be?" },
  { tier: 3, text: "You get exactly one minute with your 80-year-old self. What’s the first thing you ask?" },
  { tier: 3, text: "What do you hope the people closest to you say about you when you’re not in the room?" },
  { tier: 1, text: "If you could only keep one sense—sight, hearing, touch, taste, or smell—which would you choose?" },
  { tier: 3, text: "Somewhere there’s a version of you who made the opposite choice at every major fork in your life. What do you think their life looks like right now?" },
  { tier: 3, text: "If you somehow knew everything in your life was ultimately going to turn out okay, what would you do differently right now?" },
  { tier: 3, text: "After answering all of these, what’s something about you that you still don’t think these questions managed to capture?" },
];

// Shown once, after the final level is cleared.
window.FINAL_QUESTION = "Share something you like about each other, and one thing from tonight you want to remember.";
