// globale variables
export let gameStatus = {
  isStarted: false,
  isPlaying: false,
  isGameOver: false,
  score: 0,
  highScore: 0,

  // Game timer properties
  timeConfig: {
    timer: 25000, // 25 seconds
    defaultTimer: 15000, // 15 seconds
    decrement: 1000, // 1 second
  },

  // Apple properties
  apple: {
    element: null,
    imageURL: "../public/apple.png",
    size: {
      width: 50,
      height: 50,
    }, 
    Position: {
      x: null,
      y: null,
    }
  },

  // Snowman properties
  Snowmans: {
    count: 5,
    imageURL: "../public/bonhomme-de-neige (2).png",
    element : document.getElementById("snowman"),
    Position:{
      x:  0,
      y:  0,
    },
    size: {
      width: 50,
      height: 50,
    },
    speedConfig: {
      x_offset: 50,
      y_offset: 10,
    },
  },
  // Game space dimensions

  gameSpace: {
    element : document.getElementById("game-space"),
    width: document.getElementById("game-space").offsetWidth,
    height: document.getElementById("game-space").offsetHeight,
  },

  startButton: document.getElementById("start-button"),
};

