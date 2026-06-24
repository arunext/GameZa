/* BLINK Runner: BLACKPINK Quiz Game Engine */

// ==========================================================================
// 1. QUESTION DATABASE
// ==========================================================================
const QUESTION_BANK = {
  blackpink: {
    1: [ // Level 1: Trainee & Debut Era (Easy)
      {
        question: "In what year did BLACKPINK officially debut under YG Entertainment?",
        options: ["2014", "2015", "2016", "2017"],
        correct: 2,
        difficulty: "easy"
      },
      {
        question: "Who is the oldest member of BLACKPINK?",
        options: ["Rosé", "Lisa", "Jennie", "Jisoo"],
        correct: 3,
        difficulty: "easy"
      },
      {
        question: "Which member was born and raised in Thailand?",
        options: ["Jennie", "Lisa", "Jisoo", "Rosé"],
        correct: 1,
        difficulty: "easy"
      },
      {
        question: "What is the official name of BLACKPINK's fandom?",
        options: ["BLINKS", "BLACKIES", "PINKIES", "SHINES"],
        correct: 0,
        difficulty: "easy"
      },
      {
        question: "Which of the following was one of their double debut title tracks?",
        options: ["As If It's Your Last", "Boombayah", "Playing with Fire", "DDU-DU DDU-DU"],
        correct: 1,
        difficulty: "easy"
      },
      {
        question: "What is the famous catchphrase heard in many of BLACKPINK's songs?",
        options: ["BLACKPINK in your area", "BLACKPINK in the house", "We are BLACKPINK", "BLINKs in the area"],
        correct: 0,
        difficulty: "easy"
      },
      {
        question: "Which member released the solo track titled 'SOLO' in 2018?",
        options: ["Jisoo", "Lisa", "Jennie", "Rosé"],
        correct: 2,
        difficulty: "easy"
      },
      {
        question: "What are the signature colors of BLACKPINK's official lightstick?",
        options: ["White and Pink", "Black and Pink", "Black and Gold", "Pink and Silver"],
        correct: 1,
        difficulty: "easy"
      },
      {
        question: "Which member's English name is Roseanne Park?",
        options: ["Jennie", "Rosé", "Lisa", "Jisoo"],
        correct: 1,
        difficulty: "easy"
      },
      {
        question: "Which member is known for her iconic front bangs?",
        options: ["Lisa", "Jisoo", "Jennie", "Rosé"],
        correct: 0,
        difficulty: "easy"
      },
      {
        question: "What was BLACKPINK's first reality show called?",
        options: ["BLACKPINK House", "BLACKPINK TV", "YG Future Strategy Office", "BLACKPINK Diaries"],
        correct: 0,
        difficulty: "easy"
      },
      {
        question: "Which member is the main vocal of BLACKPINK?",
        options: ["Jisoo", "Jennie", "Rosé", "Lisa"],
        correct: 2,
        difficulty: "easy"
      }
    ],
    2: [ // Level 2: Global Hitmakers (Medium)
      {
        question: "Which music video was the first by a K-pop group to reach 1 billion views on YouTube?",
        options: ["Kill This Love", "How You Like That", "DDU-DU DDU-DU", "Boombayah"],
        correct: 2,
        difficulty: "medium"
      },
      {
        question: "Which American singer collaborated with BLACKPINK on the hit song 'Ice Cream'?",
        options: ["Dua Lipa", "Selena Gomez", "Lady Gaga", "Cardi B"],
        correct: 1,
        difficulty: "medium"
      },
      {
        question: "In 2019, BLACKPINK made history as the first K-pop girl group to perform at which US festival?",
        options: ["Coachella", "Lollapalooza", "Glastonbury", "Tomorrowland"],
        correct: 0,
        difficulty: "medium"
      },
      {
        question: "What is the title of BLACKPINK's first full-length studio album, released in 2020?",
        options: ["Born Pink", "The Album", "Square One", "Blackpink In Your Area"],
        correct: 1,
        difficulty: "medium"
      },
      {
        question: "Which member starred in the lead role of the historical drama 'Snowdrop'?",
        options: ["Jennie", "Rosé", "Lisa", "Jisoo"],
        correct: 3,
        difficulty: "medium"
      },
      {
        question: "Rosé made her solo debut in 2021 with a single album named what?",
        options: ["R", "Roseanne", "First Solo", "On the Ground"],
        correct: 0,
        difficulty: "medium"
      },
      {
        question: "Which luxury fashion house is Jennie a global ambassador for, earning her the nickname 'Human Chanel'?",
        options: ["Celine", "Chanel", "Dior", "Saint Laurent"],
        correct: 1,
        difficulty: "medium"
      },
      {
        question: "What was Lisa's birth name before she legally changed it to Lalisa?",
        options: ["Pranpriya Manoban", "Chitthip Manoban", "Panpriya Manoban", "Lalisa Koh"],
        correct: 0,
        difficulty: "medium"
      },
      {
        question: "Which Lady Gaga song features a collaboration with BLACKPINK?",
        options: ["Rain On Me", "Sour Candy", "Stupid Love", "Free Woman"],
        correct: 1,
        difficulty: "medium"
      },
      {
        question: "What is the name of Rosé's solo debut title track?",
        options: ["Gone", "On The Ground", "LALISA", "SOLO"],
        correct: 1,
        difficulty: "medium"
      },
      {
        question: "Which member is the global brand ambassador for Celine and Bulgari?",
        options: ["Lisa", "Jisoo", "Jennie", "Rosé"],
        correct: 0,
        difficulty: "medium"
      },
      {
        question: "Which video features the iconic visual of a glittery pink tank?",
        options: ["Kill This Love", "How You Like That", "DDU-DU DDU-DU", "Shut Down"],
        correct: 2,
        difficulty: "medium"
      }
    ],
    3: [ // Level 3: Born Pink Queens (Hard)
      {
        question: "What is Lisa's solo debut title track released in September 2021?",
        options: ["Money", "LALISA", "SG", "Shoong!"],
        correct: 1,
        difficulty: "hard"
      },
      {
        question: "Which classical music piece is sampled in their 2022 hit song 'Shut Down'?",
        options: ["Beethoven's Symphony No. 5", "Paganini's La Campanella", "Bach's Toccata and Fugue", "Mozart's Requiem"],
        correct: 1,
        difficulty: "hard"
      },
      {
        question: "What is the title of Jisoo's solo debut track released in March 2023?",
        options: ["All Eyes On Me", "Gone", "Flower", "Red Rose"],
        correct: 2,
        difficulty: "hard"
      },
      {
        question: "Jennie made her acting debut under the stage name Jennie Ruby Jane in which HBO show?",
        options: ["Euphoria", "The Idol", "Gossip Girl", "The White Lotus"],
        correct: 1,
        difficulty: "hard"
      },
      {
        question: "What is the name of Rosé's beloved adopted dog?",
        options: ["Kuma", "Kai", "Hank", "Luca"],
        correct: 2,
        difficulty: "hard"
      },
      {
        question: "Lisa's pets (cats and a dog) are collectively referred by which name?",
        options: ["The M Family", "The L Family", "The Star Cats", "The Pink Pack"],
        correct: 1,
        difficulty: "hard"
      },
      {
        question: "How many tracks are on BLACKPINK's second studio album 'Born Pink'?",
        options: ["6", "8", "10", "12"],
        correct: 1,
        difficulty: "hard"
      },
      {
        question: "Who was the first member to join YG Entertainment as a trainee?",
        options: ["Jisoo", "Jennie", "Rosé", "Lisa"],
        correct: 1,
        difficulty: "hard"
      },
      {
        question: "Jisoo was born in which South Korean city?",
        options: ["Seoul", "Busan", "Gunpo", "Incheon"],
        correct: 2,
        difficulty: "hard"
      },
      {
        question: "Which rapper collaborated with BLACKPINK on the track 'Bet You Wanna'?",
        options: ["Cardi B", "Nicki Minaj", "Megan Thee Stallion", "Doja Cat"],
        correct: 0,
        difficulty: "hard"
      },
      {
        question: "How many years did Jennie spend as a trainee at YG Entertainment?",
        options: ["4 years", "5 years", "6 years", "7 years"],
        correct: 2,
        difficulty: "hard"
      },
      {
        question: "Although born in New Zealand, in which city did Rosé grow up before moving to South Korea?",
        options: ["Auckland", "Sydney", "Melbourne", "Wellington"],
        correct: 2,
        difficulty: "hard"
      }
    ]
  },
  flags: {
    1: [ // Level 1 (Easy)
      {
        question: "Which country's flag features a red maple leaf in the center?",
        options: ["USA", "Canada", "United Kingdom", "France"],
        correct: 1,
        difficulty: "easy"
      },
      {
        question: "The flag of the United States of America is often called the 'Stars and...' what?",
        options: ["stripes", "bars", "lines", "dots"],
        correct: 0,
        difficulty: "easy"
      },
      {
        question: "Which country has a large yellow star in the middle of a solid red flag?",
        options: ["Vietnam", "Japan", "South Korea", "China"],
        correct: 0,
        difficulty: "easy"
      },
      {
        question: "What colors are on the flag of Italy?",
        options: ["Green, White, Red", "Red, White, Blue", "Black, Yellow, Red", "Blue, Yellow, Red"],
        correct: 0,
        difficulty: "easy"
      },
      {
        question: "Which flag has a big red circle in the center of a white background?",
        options: ["Japan", "South Korea", "China", "Thailand"],
        correct: 0,
        difficulty: "easy"
      },
      {
        question: "What color are the stars on the flag of Australia?",
        options: ["Yellow", "Red", "White", "Blue"],
        correct: 2,
        difficulty: "easy"
      }
    ],
    2: [ // Level 2 (Medium)
      {
        question: "Which country's flag is famous for having three vertical stripes of Blue, White, and Red (the Tricolor)?",
        options: ["Italy", "Germany", "France", "Spain"],
        correct: 2,
        difficulty: "medium"
      },
      {
        question: "Which country has a blue circular globe showing a starry night sky and a white band across it?",
        options: ["Argentina", "Brazil", "Mexico", "Colombia"],
        correct: 1,
        difficulty: "medium"
      },
      {
        question: "Which country's flag features a yellow sun with 8 rays and 3 yellow stars on white, blue, and red?",
        options: ["Philippines", "Malaysia", "Indonesia", "Singapore"],
        correct: 0,
        difficulty: "medium"
      },
      {
        question: "Which country features a black eagle in the center of its red, black, and gold stripes?",
        options: ["Germany", "Belgium", "Austria", "Russia"],
        correct: 0,
        difficulty: "medium"
      },
      {
        question: "Which country's flag has a red dragon on a green and white background?",
        options: ["Ireland", "Scotland", "Wales", "England"],
        correct: 2,
        difficulty: "medium"
      },
      {
        question: "Which country's flag has a yellow cross on a light blue background?",
        options: ["Norway", "Sweden", "Finland", "Denmark"],
        correct: 1,
        difficulty: "medium"
      }
    ],
    3: [ // Level 3 (Hard)
      {
        question: "Which country is the only one in the world with a non-rectangular (double-pennon) flag?",
        options: ["Switzerland", "Vatican City", "Nepal", "Monaco"],
        correct: 2,
        difficulty: "hard"
      },
      {
        question: "Which country's flag features a white temple called Angkor Wat in the center?",
        options: ["Thailand", "Cambodia", "Laos", "Vietnam"],
        correct: 1,
        difficulty: "hard"
      },
      {
        question: "Which country's flag features a blue wheel called the Ashoka Chakra in the center?",
        options: ["India", "Bangladesh", "Pakistan", "Sri Lanka"],
        correct: 0,
        difficulty: "hard"
      },
      {
        question: "Which country's flag has a green, white, and red vertical stripe with an eagle eating a snake?",
        options: ["Mexico", "Italy", "Egypt", "Spain"],
        correct: 0,
        difficulty: "hard"
      },
      {
        question: "The flag of Switzerland is unique because it is shaped like a what?",
        options: ["Triangle", "Square", "Circle", "Oval"],
        correct: 1,
        difficulty: "hard"
      },
      {
        question: "Which country's flag features a green cedar tree in the center of red and white stripes?",
        options: ["Lebanon", "Cyprus", "Greece", "Turkey"],
        correct: 0,
        difficulty: "hard"
      }
    ]
  },
  bts: {
    1: [ // Level 1 (Easy)
      {
        question: "How many members are in the K-pop group BTS?",
        options: ["4", "5", "7", "9"],
        correct: 2,
        difficulty: "easy"
      },
      {
        question: "What is the official name of BTS's fandom?",
        options: ["BLINK", "ARMY", "ONCE", "STAY"],
        correct: 1,
        difficulty: "easy"
      },
      {
        question: "Which BTS song became their first English single and hit #1 on the Billboard Hot 100?",
        options: ["Butter", "Dynamite", "Boy With Luv", "Permission to Dance"],
        correct: 1,
        difficulty: "easy"
      },
      {
        question: "What does the group name BTS stand for in Korean?",
        options: ["Bangtan Sonyeondan", "Boys To Success", "Beyond The Scene", "Brave Teen Soldiers"],
        correct: 0,
        difficulty: "easy"
      },
      {
        question: "Which color is famous in the BTS fandom for the phrase 'I Purple You'?",
        options: ["Pink", "Blue", "Gold", "Purple"],
        correct: 3,
        difficulty: "easy"
      },
      {
        question: "Who is the leader of BTS?",
        options: ["Jin", "RM", "Jungkook", "Jimin"],
        correct: 1,
        difficulty: "easy"
      }
    ],
    2: [ // Level 2 (Medium)
      {
        question: "Which member is the oldest in BTS?",
        options: ["Jin", "Suga", "RM", "j-hope"],
        correct: 0,
        difficulty: "medium"
      },
      {
        question: "Which member is known as the 'Golden Maknae' because he is the youngest and good at everything?",
        options: ["V", "Jimin", "Jungkook", "Suga"],
        correct: 2,
        difficulty: "medium"
      },
      {
        question: "Which member's real name is Kim Taehyung?",
        options: ["V", "Jimin", "Jin", "RM"],
        correct: 0,
        difficulty: "medium"
      },
      {
        question: "What is the title of BTS's collaboration song with the band Coldplay?",
        options: ["My Universe", "Boy With Luv", "Dynamite", "Waste It On Me"],
        correct: 0,
        difficulty: "medium"
      },
      {
        question: "Which member is known as a main dancer and has the solo song 'Chicken Noodle Soup'?",
        options: ["Jimin", "j-hope", "Jungkook", "V"],
        correct: 1,
        difficulty: "medium"
      },
      {
        question: "Which member's stage name is Suga when in the group, and Agust D for solos?",
        options: ["RM", "Suga", "Jin", "V"],
        correct: 1,
        difficulty: "medium"
      }
    ],
    3: [ // Level 3 (Hard)
      {
        question: "In which year did BTS debut with their song 'No More Dream'?",
        options: ["2011", "2012", "2013", "2014"],
        correct: 2,
        difficulty: "hard"
      },
      {
        question: "Which member released the solo album 'Indigo' in 2022?",
        options: ["RM", "Jin", "Jimin", "Suga"],
        correct: 0,
        difficulty: "hard"
      },
      {
        question: "What is the title of BTS's debut single album?",
        options: ["Dark & Wild", "O!RUL8,2?", "2 Cool 4 Skool", "Skool Luv Affair"],
        correct: 2,
        difficulty: "hard"
      },
      {
        question: "Which member's solo track is titled 'Like Crazy' and topped the Billboard Hot 100 in 2023?",
        options: ["Jimin", "Jungkook", "V", "j-hope"],
        correct: 0,
        difficulty: "hard"
      },
      {
        question: "Which city in South Korea is the hometown of both Jimin and Jungkook?",
        options: ["Seoul", "Daegu", "Busan", "Gwangju"],
        correct: 2,
        difficulty: "hard"
      },
      {
        question: "What is the name of BTS's cartoon characters created with LINE Friends?",
        options: ["BT21", "TinyTAN", "Kakao Friends", "Line Chibis"],
        correct: 0,
        difficulty: "hard"
      }
    ]
  },
  japan: {
    1: [ // Level 1 (Easy)
      {
        question: "What is the capital city of Japan?",
        options: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
        correct: 2,
        difficulty: "easy"
      },
      {
        question: "What is Japan's famous volcano and highest mountain?",
        options: ["Mount Fuji", "Mount Aso", "Mount Kita", "Mount Tate"],
        correct: 0,
        difficulty: "easy"
      },
      {
        question: "What is the popular Japanese dish made of vinegar-flavored rice, often served with raw fish?",
        options: ["Ramen", "Sushi", "Tempura", "Udon"],
        correct: 1,
        difficulty: "easy"
      },
      {
        question: "What is the traditional Japanese dress called?",
        options: ["Hanbok", "Kimono", "Sari", "Cheongsam"],
        correct: 1,
        difficulty: "easy"
      },
      {
        question: "What is the name of the popular Japanese animations known worldwide?",
        options: ["Anime", "Manga", "Manhwa", "Cartoons"],
        correct: 0,
        difficulty: "easy"
      },
      {
        question: "Which cute round pink Nintendo character was created in Japan?",
        options: ["Mario", "Kirby", "Link", "Pikachu"],
        correct: 1,
        difficulty: "easy"
      }
    ],
    2: [ // Level 2 (Medium)
      {
        question: "What is the currency of Japan?",
        options: ["Won", "Dollar", "Yen", "Yuan"],
        correct: 2,
        difficulty: "medium"
      },
      {
        question: "What is the name of the high-speed trains in Japan?",
        options: ["Shinkansen (Bullet Train)", "TGV", "ICE", "Maglev"],
        correct: 0,
        difficulty: "medium"
      },
      {
        question: "Which flower is the national symbol of spring in Japan and is celebrated with festivals?",
        options: ["Rose", "Lotus", "Cherry Blossom (Sakura)", "Orchid"],
        correct: 2,
        difficulty: "medium"
      },
      {
        question: "Japan is made up of how many main islands?",
        options: ["2", "4", "6", "8"],
        correct: 1,
        difficulty: "medium"
      },
      {
        question: "What is the traditional Japanese art of folding paper into shapes called?",
        options: ["Ikebana", "Bonsai", "Origami", "Sumi-e"],
        correct: 2,
        difficulty: "medium"
      },
      {
        question: "Which Japanese city is famous for its historical temples, shrines, and geishas?",
        options: ["Tokyo", "Osaka", "Kyoto", "Sapporo"],
        correct: 2,
        difficulty: "medium"
      }
    ],
    3: [ // Level 3 (Hard)
      {
        question: "Which of the main islands of Japan is the largest and contains Tokyo?",
        options: ["Hokkaido", "Honshu", "Kyushu", "Shikoku"],
        correct: 1,
        difficulty: "hard"
      },
      {
        question: "What is the traditional Japanese sport of wrestling where competitors try to push each other out of a ring?",
        options: ["Judo", "Sumo", "Karate", "Kendo"],
        correct: 1,
        difficulty: "hard"
      },
      {
        question: "In Japanese culture, what is a 'Torii'?",
        options: ["A type of noodle", "A traditional shrine gate", "A martial arts sword", "A hot spring bath"],
        correct: 1,
        difficulty: "hard"
      },
      {
        question: "What is the name of the northernmost main island of Japan, famous for cold winters and snow festivals?",
        options: ["Okinawa", "Honshu", "Kyushu", "Hokkaido"],
        correct: 3,
        difficulty: "hard"
      },
      {
        question: "In which year did Tokyo host its first Summer Olympic Games?",
        options: ["1964", "1972", "1988", "2000"],
        correct: 0,
        difficulty: "hard"
      },
      {
        question: "Which Japanese warrior class was known for following the Bushido code?",
        options: ["Ninja", "Samurai", "Shogun", "Geisha"],
        correct: 1,
        difficulty: "hard"
      }
    ]
  },
  riddles: {
    1: [ // Level 1 (Easy)
      {
        question: "What has hands but cannot clap?",
        options: ["A clock", "A skeleton", "A glove", "A tree"],
        correct: 0,
        difficulty: "easy"
      },
      {
        question: "What has to be broken before you can use it?",
        options: ["A pencil", "An egg", "A toy", "A promise"],
        correct: 1,
        difficulty: "easy"
      },
      {
        question: "What is full of holes but still holds water?",
        options: ["A bucket", "A sponge", "A net", "A cup"],
        correct: 1,
        difficulty: "easy"
      },
      {
        question: "What goes up but never comes down?",
        options: ["A balloon", "Your age", "A kite", "Rain"],
        correct: 1,
        difficulty: "easy"
      },
      {
        question: "What has a head and a tail but no body?",
        options: ["A coin", "A snake", "A book", "A pin"],
        correct: 0,
        difficulty: "easy"
      },
      {
        question: "What gets wetter the more it dries?",
        options: ["A sponge", "A towel", "A cloud", "Ice"],
        correct: 1,
        difficulty: "easy"
      }
    ],
    2: [ // Level 2 (Medium)
      {
        question: "What has a neck but no head?",
        options: ["A shirt", "A bottle", "A giraffe", "A violin"],
        correct: 1,
        difficulty: "medium"
      },
      {
        question: "I have keys but no locks. I have space but no room. You can enter but can't go outside. What am I?",
        options: ["A piano", "A keyboard", "A spaceship", "A house"],
        correct: 1,
        difficulty: "medium"
      },
      {
        question: "What belongs to you but is used more by others?",
        options: ["Your name", "Your toys", "Your shoes", "Your voice"],
        correct: 0,
        difficulty: "medium"
      },
      {
        question: "The more of them you take, the more you leave behind. What are they?",
        options: ["Fingerprints", "Footsteps", "Photos", "Leaves"],
        correct: 1,
        difficulty: "medium"
      },
      {
        question: "What has teeth but cannot bite?",
        options: ["A comb", "A saw", "A zipper", "A key"],
        correct: 0,
        difficulty: "medium"
      },
      {
        question: "What runs all around a backyard but never moves?",
        options: ["A dog", "A fence", "A hose", "A path"],
        correct: 1,
        difficulty: "medium"
      }
    ],
    3: [ // Level 3 (Hard)
      {
        question: "What can travel around the world while staying in a corner?",
        options: ["A bird", "A stamp", "A coin", "A plane"],
        correct: 1,
        difficulty: "hard"
      },
      {
        question: "What has many keys but cannot open a single door?",
        options: ["A piano", "A typewriter", "A keyboard", "All of the above"],
        correct: 3,
        difficulty: "hard"
      },
      {
        question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
        options: ["A radio", "An echo", "A whistle", "A shadow"],
        correct: 1,
        difficulty: "hard"
      },
      {
        question: "What has one eye but cannot see?",
        options: ["A needle", "A hurricane", "A potato", "All of the above"],
        correct: 3,
        difficulty: "hard"
      },
      {
        question: "I am tall when I am young, and I am short when I am old. What am I?",
        options: ["A tree", "A pencil", "A candle", "A shadow"],
        correct: 2,
        difficulty: "hard"
      },
      {
        question: "What has many leaves but no branches?",
        options: ["A book", "A flower", "A head of lettuce", "All of the above"],
        correct: 3,
        difficulty: "hard"
      }
    ]
  }
};

const LEVEL_NAMES = {
  1: "STAGE 1: ROOKIE DEBUT ERA",
  2: "STAGE 2: GLOBAL HITMAKERS",
  3: "STAGE 3: BORN PINK QUEENS"
};

const STAGE_THEME_COLORS = {
  1: { primary: "#ff1282", secondary: "rgba(255, 18, 130, 0.4)", sky: "rgba(255, 18, 130, 0.08)" },
  2: { primary: "#00bfff", secondary: "rgba(0, 191, 255, 0.4)", sky: "rgba(0, 191, 255, 0.08)" },
  3: { primary: "#ffd700", secondary: "rgba(255, 215, 0, 0.4)", sky: "rgba(255, 215, 0, 0.08)" }
};

// ==========================================================================
// 2. GAME STATE
// ==========================================================================
let state = {
  screen: "selection", // selection, topic, game, level_up, victory
  character: null,     // jisoo, jennie, rose, lisa
  topic: null,         // blackpink, flags, bts, japan, riddles
  level: 1,            // 1, 2, 3
  streak: 0,           // 0 to 10
  score: 0,            // Total game score
  soundEnabled: true,
  
  // Quiz state
  activeQuestions: [], // Shuffled questions for current level
  questionIndex: 0,    // Index in activeQuestions
  
  // Animation / physics state
  runnerPos: 0,        // Visual position steps (0 to 10)
  bgScrollOffset: 0,
  bgSpeed: 1.5,        // Pixels per frame, increases with streak
  targetBgSpeed: 1.5,
  isStumbling: false,
  isJumping: false,
  
  // Particles
  particles: []
};

// Audio Context (created lazily on user interaction)
let audioCtx = null;

// ==========================================================================
// 3. DOM ELEMENTS
// ==========================================================================
const screens = {
  selection: document.getElementById("screen-selection"),
  topic: document.getElementById("screen-topic"),
  game: document.getElementById("screen-game"),
  levelUp: document.getElementById("overlay-level-up"),
  victory: document.getElementById("screen-victory")
};

const elements = {
  btnSound: document.getElementById("btn-sound"),
  soundIcon: document.getElementById("sound-icon"),
  btnRestart: document.getElementById("btn-restart"),
  btnNextLevel: document.getElementById("btn-next-level"),
  btnPlayAgain: document.getElementById("btn-play-again"),
  
  runnerChar: document.getElementById("runner-character"),
  runnerImg: document.getElementById("runner-img"),
  trackFill: document.getElementById("track-fill"),
  trailCanvas: document.getElementById("trail-canvas"),
  flashEffect: document.getElementById("flash-effect"),
  
  levelNum: document.getElementById("level-num"),
  streakNum: document.getElementById("streak-num"),
  scoreNum: document.getElementById("score-num"),
  streakDots: document.getElementById("streak-dots"),
  questionText: document.getElementById("question-text"),
  optionsGrid: document.getElementById("options-grid"),
  
  clearedLevel: document.getElementById("cleared-level"),
  overlayCharImg: document.getElementById("overlay-char-img"),
  victoryCharImg: document.getElementById("victory-char-img"),
  finalScore: document.getElementById("final-score"),
  finalMember: document.getElementById("final-member"),
  
  parallaxStadium: document.querySelector(".layer-stadium"),
  parallaxCrowd: document.querySelector(".layer-crowd"),
  parallaxLights: document.querySelector(".layer-stage-lights")
};

// ==========================================================================
// 4. AUDIO SYSTEM (Web Audio API Synthesizer)
// ==========================================================================
function initAudio() {
  if (audioCtx) return;
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}

function playSound(type) {
  if (!state.soundEnabled) return;
  initAudio();
  if (!audioCtx) return;
  
  // Resume if suspended (browser security)
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  const now = audioCtx.currentTime;

  switch (type) {
    case 'select':
      // Soft modern synth chime
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now); // A4
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.2);
      osc.start(now);
      osc.stop(now + 0.2);
      break;

    case 'correct':
      // Uplifting double chime
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
      osc.frequency.setValueAtTime(1046.50, now + 0.24); // C6
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.2);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.36);
      break;

    case 'wrong':
      // Descending buzz
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now); // A3
      osc.frequency.linearRampToValueAtTime(110, now + 0.35); // A2
      
      // Low pass filter for retro muffling
      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(600, now);
      
      osc.disconnect(gain);
      osc.connect(filter);
      filter.connect(gain);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.linearRampToValueAtTime(0.001, now + 0.4);
      osc.start(now);
      osc.stop(now + 0.4);
      break;

    case 'level_up':
      // Arpeggio leading to high chord
      const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50]; // C Major arpeggio
      notes.forEach((freq, idx) => {
        const noteOsc = audioCtx.createOscillator();
        const noteGain = audioCtx.createGain();
        noteOsc.connect(noteGain);
        noteGain.connect(audioCtx.destination);
        noteOsc.type = 'sine';
        noteOsc.frequency.setValueAtTime(freq, now + idx * 0.08);
        noteGain.gain.setValueAtTime(0.12, now + idx * 0.08);
        noteGain.gain.linearRampToValueAtTime(0.001, now + idx * 0.08 + 0.3);
        noteOsc.start(now + idx * 0.08);
        noteOsc.stop(now + idx * 0.08 + 0.3);
      });
      break;

    case 'victory':
      // Full synth major blast
      const rootNotes = [523.25, 659.25, 783.99, 987.77, 1046.50]; // C5, E5, G5, B5, C6
      rootNotes.forEach((freq, idx) => {
        const noteOsc = audioCtx.createOscillator();
        const noteGain = audioCtx.createGain();
        noteOsc.connect(noteGain);
        noteGain.connect(audioCtx.destination);
        noteOsc.type = 'sawtooth';
        noteOsc.frequency.setValueAtTime(freq, now);
        noteOsc.frequency.exponentialRampToValueAtTime(freq * 1.5, now + 1.2);
        noteGain.gain.setValueAtTime(0.06, now);
        noteGain.gain.linearRampToValueAtTime(0.06, now + 0.8);
        noteGain.gain.linearRampToValueAtTime(0.001, now + 1.5);
        noteOsc.start(now);
        noteOsc.stop(now + 1.5);
      });
      break;
  }
}

// Toggle Sound setting
elements.btnSound.addEventListener("click", () => {
  state.soundEnabled = !state.soundEnabled;
  playSound('select');
  if (state.soundEnabled) {
    elements.soundIcon.className = "fas fa-volume-up";
    elements.btnSound.classList.remove("muted");
  } else {
    elements.soundIcon.className = "fas fa-volume-mute";
    elements.btnSound.classList.add("muted");
  }
});

// ==========================================================================
// 5. PARTICLE ENGINE (HTML5 Canvas Particles)
// ==========================================================================
let canvasCtx = null;

function initParticles() {
  const canvas = elements.trailCanvas;
  // Override canvas layout to cover the runner track & background
  canvas.style.position = "absolute";
  canvas.style.left = "0";
  canvas.style.top = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.width = canvas.parentElement.clientWidth;
  canvas.height = canvas.parentElement.clientHeight;
  canvasCtx = canvas.getContext("2d");
  
  // Handle resize
  window.addEventListener("resize", () => {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
  });
}

function spawnParticle(x, y, type, color = "#ff1282") {
  const p = {
    x: x,
    y: y,
    type: type, // 'dust', 'spark', 'smoke'
    vx: 0,
    vy: 0,
    alpha: 1,
    size: 0,
    color: color,
    rotation: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.1
  };

  switch (type) {
    case 'dust':
      p.vx = -Math.random() * 3 - state.bgSpeed * 0.8;
      p.vy = (Math.random() - 0.5) * 1.5;
      p.size = Math.random() * 4 + 2;
      p.color = "#ffffff";
      break;
    case 'spark':
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 6 + 3;
      p.vx = Math.cos(angle) * speed;
      p.vy = Math.sin(angle) * speed - 1; // Slight float up
      p.size = Math.random() * 6 + 3;
      p.color = Math.random() > 0.5 ? "#ffd700" : "#ff1282";
      break;
    case 'smoke':
      p.vx = (Math.random() - 0.5) * 2;
      p.vy = -Math.random() * 2 - 1;
      p.size = Math.random() * 8 + 6;
      p.color = "rgba(231, 76, 60, 0.4)";
      break;
  }

  state.particles.push(p);
}

function updateAndDrawParticles() {
  if (!canvasCtx) return;
  const ctx = canvasCtx;
  const canvas = elements.trailCanvas;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = state.particles.length - 1; i >= 0; i--) {
    const p = state.particles[i];
    
    p.x += p.vx;
    p.y += p.vy;
    p.rotation += p.spin;

    // Decay
    if (p.type === 'dust') {
      p.alpha -= 0.04;
    } else if (p.type === 'spark') {
      p.vy += 0.15; // Gravity
      p.alpha -= 0.02;
    } else if (p.type === 'smoke') {
      p.alpha -= 0.025;
      p.size += 0.2; // Smoke expands
    }

    if (p.alpha <= 0) {
      state.particles.splice(i, 1);
      continue;
    }

    ctx.save();
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);

    if (p.type === 'spark') {
      // Draw a star shape
      ctx.beginPath();
      for (let j = 0; j < 5; j++) {
        ctx.lineTo(0, -p.size);
        ctx.rotate(Math.PI / 5);
        ctx.lineTo(0, -p.size / 2);
        ctx.rotate(Math.PI / 5);
      }
      ctx.closePath();
      ctx.fill();
    } else {
      // Circle for dust and smoke
      ctx.beginPath();
      ctx.arc(0, 0, p.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  }
}

// ==========================================================================
// 6. RUNNER GRAPHICS & MOVEMENT LOOP
// ==========================================================================
function updateRunnerPosition() {
  const container = elements.runnerChar;
  const trackWidth = document.querySelector(".running-track").clientWidth;
  const charWidth = container.clientWidth;
  
  // Total running track available for the runner
  const minX = 40;
  const maxX = trackWidth - charWidth - 110; 
  
  // Calculate horizontal target position based on progress (0 to 10)
  const targetX = minX + (state.runnerPos / 10) * (maxX - minX);
  
  // Smoothly update running character left style
  container.style.left = `${targetX}px`;
  
  // Fill progress bar fill width (0 to 100%)
  elements.trackFill.style.width = `${state.runnerPos * 10}%`;

  // Update visual milestones active state
  document.querySelectorAll(".milestone").forEach(mile => {
    const step = parseInt(mile.dataset.step);
    if (step <= state.runnerPos) {
      mile.classList.add("active");
    } else {
      mile.classList.remove("active");
    }
  });
}

function handleRunnerAnimLoop() {
  if (state.screen === "game") {
    // 1. Interpolate background speed based on streak
    // Higher streak = faster running speed & faster background scrolling
    state.targetBgSpeed = 1.5 + (state.streak * 0.7);
    state.bgSpeed += (state.targetBgSpeed - state.bgSpeed) * 0.1;

    // 2. Parallax background offsets
    state.bgScrollOffset += state.bgSpeed;

    // Move layers at different speeds (parallax effect)
    if (elements.parallaxStadium) {
      elements.parallaxStadium.style.backgroundPositionX = `${-state.bgScrollOffset * 0.2}px`;
    }
    if (elements.parallaxCrowd) {
      elements.parallaxCrowd.style.backgroundPositionX = `${-state.bgScrollOffset * 0.5}px`;
    }
    if (elements.parallaxLights) {
      elements.parallaxLights.style.backgroundPositionX = `${-state.bgScrollOffset * 0.9}px`;
    }

    // 3. Footstep Particles
    // Get feet coordinates roughly
    const charRect = elements.runnerChar.getBoundingClientRect();
    const arenaRect = document.querySelector(".runner-arena").getBoundingClientRect();
    
    const footX = charRect.left - arenaRect.left + (charRect.width * 0.2);
    const footY = charRect.top - arenaRect.top + charRect.height - 12;

    if (Math.random() < (0.15 + state.streak * 0.05) && !state.isStumbling) {
      spawnParticle(footX, footY, 'dust');
    }
  }

  // Render particles
  updateAndDrawParticles();

  // Next frame
  requestAnimationFrame(handleRunnerAnimLoop);
}

// Trigger correct jumping visual sequence
function triggerJump() {
  if (state.isJumping || state.isStumbling) return;
  state.isJumping = true;
  elements.runnerChar.className = "runner-character jump-state";
  playSound('select');

  setTimeout(() => {
    elements.runnerChar.className = "runner-character run-state";
    state.isJumping = false;
  }, 400);
}

// Trigger incorrect stumble visual sequence
function triggerStumble() {
  state.isStumbling = true;
  elements.runnerChar.className = "runner-character incorrect-state";
  
  // Spawn smoke particles around character
  const charRect = elements.runnerChar.getBoundingClientRect();
  const arenaRect = document.querySelector(".runner-arena").getBoundingClientRect();
  const centerX = charRect.left - arenaRect.left + (charRect.width / 2);
  const centerY = charRect.top - arenaRect.top + (charRect.height / 2);

  for (let i = 0; i < 15; i++) {
    spawnParticle(centerX + (Math.random() - 0.5) * 30, centerY + (Math.random() - 0.5) * 30, 'smoke');
  }

  setTimeout(() => {
    elements.runnerChar.className = "runner-character run-state";
    state.isStumbling = false;
  }, 800);
}

// Spawn sparkles around character
function triggerSuccessSparkles() {
  const charRect = elements.runnerChar.getBoundingClientRect();
  const arenaRect = document.querySelector(".runner-arena").getBoundingClientRect();
  const centerX = charRect.left - arenaRect.left + (charRect.width / 2);
  const centerY = charRect.top - arenaRect.top + (charRect.height / 2);

  const themeColor = STAGE_THEME_COLORS[state.level].primary;

  for (let i = 0; i < 20; i++) {
    spawnParticle(centerX, centerY, 'spark', themeColor);
  }
}

// ==========================================================================
// 7. SCREEN NAVIGATION & UTILS
// ==========================================================================
function setScreen(screenName) {
  state.screen = screenName;
  
  // Hide all screens
  Object.keys(screens).forEach(key => {
    screens[key].classList.add("hidden");
  });

  // Show active
  if (screenName === "selection") {
    screens.selection.classList.remove("hidden");
    elements.btnRestart.classList.add("hidden");
  } else if (screenName === "topic") {
    screens.topic.classList.remove("hidden");
    elements.btnRestart.classList.add("hidden");
  } else if (screenName === "game") {
    screens.game.classList.remove("hidden");
    elements.btnRestart.classList.remove("hidden");
    // Ensure canvases are sized correctly
    initParticles();
    updateRunnerPosition();
  } else if (screenName === "victory") {
    screens.victory.classList.remove("hidden");
    elements.btnRestart.classList.add("hidden");
  }
}

// Shuffle helper
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ==========================================================================
// 8. GAME & QUIZ LOGIC FLOWS
// ==========================================================================

// Initialize a game level
function initLevel(levelNum) {
  state.level = levelNum;
  state.streak = 0;
  state.runnerPos = 0;
  
  // Set stage theme color properties dynamically
  const colors = STAGE_THEME_COLORS[levelNum];
  document.documentElement.style.setProperty('--bp-pink', colors.primary);
  document.documentElement.style.setProperty('--bp-pink-glow', colors.secondary);
  
  // Load and shuffle questions for this level
  state.activeQuestions = shuffleArray(QUESTION_BANK[state.topic][levelNum]);
  state.questionIndex = 0;
  
  // Update levels panel UI
  elements.levelNum.textContent = levelNum;
  elements.streakNum.textContent = `0 / 10`;
  
  // Render streak dots tracker
  renderStreakTracker();
  
  // Render first question
  loadNextQuestion();
  
  // Update runner pos UI
  updateRunnerPosition();
}

// Generate the 10 progress dots for the streak panel
function renderStreakTracker() {
  elements.streakDots.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    const dot = document.createElement("div");
    dot.className = "streak-dot";
    dot.dataset.index = i;
    dot.innerHTML = `<i class="fas fa-bolt" style="opacity: 0;"></i>`;
    elements.streakDots.appendChild(dot);
  }
}

function updateStreakDotsUI() {
  const dots = elements.streakDots.children;
  for (let i = 0; i < 10; i++) {
    const dot = dots[i];
    if (i < state.streak) {
      dot.className = state.level === 3 ? "streak-dot active active-gold" : "streak-dot active";
      dot.querySelector("i").style.opacity = "1";
    } else {
      dot.className = "streak-dot";
      dot.querySelector("i").style.opacity = "0";
    }
  }
}

// Render the active question to UI
function loadNextQuestion() {
  // If we run out of shuffled questions, reshuffle the pool and continue
  if (state.questionIndex >= state.activeQuestions.length) {
    state.activeQuestions = shuffleArray(QUESTION_BANK[state.topic][state.level]);
    state.questionIndex = 0;
  }

  const q = state.activeQuestions[state.questionIndex];
  elements.questionText.textContent = q.question;
  
  // Clear option grid
  elements.optionsGrid.innerHTML = "";
  
  // Generate option buttons
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="opt-indicator">${String.fromCharCode(65 + idx)}</span> <span class="opt-label">${opt}</span>`;
    btn.addEventListener("click", () => handleAnswerSelect(idx, btn));
    elements.optionsGrid.appendChild(btn);
  });
}

// Handle answer clicking
function handleAnswerSelect(selectedIdx, btnElement) {
  // Disable options during animation
  const buttons = elements.optionsGrid.querySelectorAll(".option-btn");
  buttons.forEach(btn => btn.classList.add("disabled"));

  const q = state.activeQuestions[state.questionIndex];
  const isCorrect = selectedIdx === q.correct;

  if (isCorrect) {
    // 1. Success feedback
    btnElement.classList.add("correct");
    playSound('correct');
    
    // UI Flash green
    elements.flashEffect.className = "flash-effect flash-correct";
    setTimeout(() => elements.flashEffect.className = "flash-effect", 250);

    // 2. Adjust State
    state.streak++;
    state.runnerPos++; // +1 forward on track
    state.score += (state.level * 100) + (state.streak * 20); // Scale score with level + streak
    
    elements.scoreNum.textContent = state.score;
    elements.streakNum.textContent = `${state.streak} / 10`;
    
    updateStreakDotsUI();
    triggerJump();
    triggerSuccessSparkles();
    updateRunnerPosition();

    // 3. Progress check
    setTimeout(() => {
      if (state.streak >= 10) {
        handleLevelCleared();
      } else {
        state.questionIndex++;
        loadNextQuestion();
      }
    }, 1200);

  } else {
    // 1. Failure feedback
    btnElement.classList.add("wrong");
    
    // Highlight the correct answer
    buttons.forEach((btn, idx) => {
      if (idx === q.correct) {
        btn.classList.add("correct");
      }
    });

    playSound('wrong');
    triggerStumble();

    // UI Flash red & shake quiz panel
    elements.flashEffect.className = "flash-effect flash-wrong";
    document.querySelector(".quiz-panel").classList.add("shake-anim");
    setTimeout(() => {
      elements.flashEffect.className = "flash-effect";
      document.querySelector(".quiz-panel").classList.remove("shake-anim");
    }, 500);

    // 2. Adjust State: reset streak, move back 3 steps
    state.streak = 0;
    state.runnerPos = Math.max(0, state.runnerPos - 3); // Back 3 steps
    
    elements.streakNum.textContent = `0 / 10`;
    updateStreakDotsUI();
    updateRunnerPosition();

    // 3. Load next question
    setTimeout(() => {
      state.questionIndex++;
      loadNextQuestion();
    }, 1500);
  }
}

// Stage completed
function handleLevelCleared() {
  playSound('level_up');
  
  // Run off screen animation
  const runner = elements.runnerChar;
  runner.style.transition = "left 1.2s ease-in";
  runner.style.left = "110%";

  setTimeout(() => {
    // Reset runner style transition for next levels
    runner.style.transition = "left 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)";
    
    if (state.level < 3) {
      // Go to level up screen
      state.screen = "level_up";
      elements.clearedLevel.textContent = state.level;
      
      // Update image in overlay showcase
      elements.overlayCharImg.src = `assets/${state.character}.png`;
      screens.levelUp.classList.remove("hidden");
      
      // Trigger virtual confetti on overlay canvas
      initConfetti();
    } else {
      // Beat the final stage! Show Victory Screen
      triggerGameVictory();
    }
  }, 1200);
}

// Final Game Win Screen
function triggerGameVictory() {
  state.screen = "victory";
  playSound('victory');
  
  elements.finalScore.textContent = state.score;
  elements.finalMember.textContent = state.character.toUpperCase();
  elements.victoryCharImg.src = `assets/${state.character}.png`;
  
  setScreen("victory");
}

// Next level button
elements.btnNextLevel.addEventListener("click", () => {
  playSound('select');
  screens.levelUp.classList.add("hidden");
  stopConfetti();
  setScreen("game");
  initLevel(state.level + 1);
});

// Restart controls
function handleRestartGame() {
  playSound('select');
  stopConfetti();
  screens.levelUp.classList.add("hidden");
  setScreen("selection");
}

elements.btnRestart.addEventListener("click", handleRestartGame);
elements.btnPlayAgain.addEventListener("click", handleRestartGame);

// Character selection cards
document.querySelectorAll(".char-card").forEach(card => {
  card.addEventListener("click", () => {
    const characterName = card.dataset.char;
    state.character = characterName;
    
    playSound('select');
    
    // Set runner image src
    elements.runnerImg.src = `assets/${characterName}.png`;
    elements.overlayCharImg.src = `assets/${characterName}.png`;
    elements.victoryCharImg.src = `assets/${characterName}.png`;
    
    // Go to Topic Selection Screen
    setScreen("topic");
  });
});

// Topic selection cards
document.querySelectorAll(".topic-card").forEach(card => {
  card.addEventListener("click", () => {
    const topicName = card.dataset.topic;
    state.topic = topicName;
    
    playSound('select');
    
    // Start game on Level 1
    setScreen("game");
    initLevel(1);
  });
});

// ==========================================================================
// 9. CONFETTI OVERLAY ENGINE (Level up celebration)
// ==========================================================================
let confettiInterval = null;
let confettiCanvas = null;
let confettiCtx = null;
let confettiParticles = [];

function initConfetti() {
  confettiCanvas = document.getElementById("confetti-canvas");
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  confettiCtx = confettiCanvas.getContext("2d");
  
  confettiParticles = [];
  
  // Fill initial particles
  for (let i = 0; i < 80; i++) {
    confettiParticles.push(createConfettiParticle());
  }

  if (confettiInterval) clearInterval(confettiInterval);
  confettiInterval = setInterval(updateAndDrawConfetti, 1000 / 60);
}

function createConfettiParticle() {
  return {
    x: Math.random() * confettiCanvas.width,
    y: Math.random() * -100 - 20,
    size: Math.random() * 8 + 4,
    color: `hsl(${Math.random() * 360}, 80%, 60%)`,
    vx: (Math.random() - 0.5) * 3,
    vy: Math.random() * 4 + 2,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 10
  };
}

function updateAndDrawConfetti() {
  if (!confettiCtx) return;
  const ctx = confettiCtx;
  const canvas = confettiCanvas;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confettiParticles.forEach((p, idx) => {
    p.x += p.vx;
    p.y += p.vy;
    p.rotation += p.rotationSpeed;

    // Wind wave
    p.vx += Math.sin(p.y / 30) * 0.05;

    // Draw
    ctx.save();
    ctx.fillStyle = p.color;
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
    ctx.restore();

    // Recycle if out of bounds
    if (p.y > canvas.height) {
      confettiParticles[idx] = createConfettiParticle();
    }
  });
}

function stopConfetti() {
  if (confettiInterval) {
    clearInterval(confettiInterval);
    confettiInterval = null;
  }
  if (confettiCanvas) {
    const ctx = confettiCanvas.getContext("2d");
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  }
}

// Start visual runner backgrounds animation loop immediately
requestAnimationFrame(handleRunnerAnimLoop);
