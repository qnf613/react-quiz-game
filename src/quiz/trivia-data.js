import he from "he"

// This will eventually come from a server!
let triviaData = [
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who was the mascot of SEGA before &quot;Sonic the Hedgehog&quot;?",
    correct_answer: "Alex Kidd",
    incorrect_answers: ["Opa Opa", "NiGHTS", "Ristar"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the Super Mario Bros. Series, what is Yoshi&#039;s scientific name?",
    correct_answer: "T. Yoshisaur Munchakoopas",
    incorrect_answers: ["Yoshi", "T. Yoshisotop Munchakoopas", "Yossy"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which eSports team came first place in The International Dota 2 Championship 2016?",
    correct_answer: "Wings Gaming",
    incorrect_answers: ["Digital Chaos", "Evil Geniuses", "Fnatic"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What video game genre were the original Warcraft games?",
    correct_answer: "RTS (Real Time Strategy)",
    incorrect_answers: ["RPG (Role Playing Game)","TBS (Turn Based Strategy)","MMO (Massively Multiplayer Online)"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Which of these Starbound races has a Wild West culture?",
    correct_answer: "Novakid",
    incorrect_answers: ["Avian", "Human", "Hylotl"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which company made the Japanese RPG &quot;Dragon Quest&quot;?",
    correct_answer: "Square Enix",
    incorrect_answers: ["Capcom", "Konami", "Blizzard"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What was Frank West&#039;s job in &quot;Dead Rising&quot;?",
    correct_answer: "Photojournalist",
    incorrect_answers: ["Janitor", "Chef", "Taxi Driver"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In vanilla Minecraft, you can make armor out of all BUT which of the following?",
    correct_answer: "Emeralds",
    incorrect_answers: ["Diamonds", "Iron", "Leather"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Who turns out to be the true victor in the Battle of Armageddon in Mortal Kombat?",
    correct_answer: "Shao Kahn",
    incorrect_answers: ["Liu Kang", "Shang Tsung", "Raiden"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "In Left 4 Dead, what is the character Bill&#039;s last name?",
    correct_answer: "Overbeck",
    incorrect_answers: ["Fish", "Roberts", "Stevenson"],
  },
];

// this operation should be done when we retrive our trivia data from the server
triviaData = triviaData.map((item) => {
  return{
    ...item,
    difficulty: he.decode(item.difficulty),
    question: he.decode(item.question),
    correct_answer: he.decode(item.correct_answer),
    incorrect_answers: item.incorrect_answers.map(incorrect => he.decode(incorrect)),
  };
});

// testing purpose
// triviaData = triviaData.slice(0, 2);

export default triviaData;
