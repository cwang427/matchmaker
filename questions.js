// Question deck. Edit freely — this is the only file you need to touch to change the questions.
//
// Fields:
//   tier  1 = light / warm-up (level 1), 2 = deeper (level 2), 3 = deepest (level 3)
//   both  true = a "mutual" question you both answer (used sparingly, at most one per hand)
//   text  the question itself
//
// Your 48 (minus one duplicate: #43 was a reworded #12), sorted into tiers. Move things between tiers as you like.

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
];

// Shown once, after the final level is cleared.
window.FINAL_QUESTION = "Share something you like about each other, and one thing from tonight you want to remember.";
