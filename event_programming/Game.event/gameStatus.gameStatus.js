// globale variables
export let gameStatus = {
  isStarted: false,
  isPlaying: false,
  isPaused: false,
  isGameOver: false,
  score: 0,
  highScore: 0,

  // Game timer properties
  timeConfig: {
    timer: 5000, // 25 seconds
    defaultTimer: 15000, // 15 seconds
    decrement: 1000, // 1 second
    interval: null,
  },

  // Apple properties
  apple: {
    element: null,
    imageURL: "../public/Apple.image/apple-1.png",
    size: {
      width: 50,
      height: 50,
    },
    Position: {
      x: null,
      y: null,
    },
  },

  // Snowman properties
  Snowmans: {
    count: 5,
    imageURL: "../public/Snowman.image/bonhomme-de-neige-1.png",
    element: document.getElementById("snowman"),
    Position: {
      x: 0,
      y: 0,
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
    element: document.getElementById("game-space"),
    width: document.getElementById("game-space").offsetWidth,
    height: document.getElementById("game-space").offsetHeight,
  },

  startButton: {
    element: document.getElementById("start-button"),
  },

  resetButton: {
    element: document.getElementById("reset-button"),
  },

  stopButton: {
    element: document.getElementById("stop-button"),
  }
};
