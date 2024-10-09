import { AppleSpawn } from "./AppleSpawn.js";
import { timeControl } from "./gameControl.timerControl.js";
import { enablehandler } from "./gameControl.moveSnowman.js";
import { gameStatus } from "./gameStatus.gameStatus.js";
import { snowmanSpawn } from "./SnowmansSpawn.js";

function startGame() {
  // Status.gameStatus = gameStatus.PLAYING;
  if (!gameStatus.isStarted) {
    // Snowman spawn
    snowmanSpawn();
    // Apple Spawned
    // Create a div with id "apple" and apple image
    AppleSpawn();

    // Initialize game status
    gameStatus.isStarted = true;
    gameStatus.isPlaying = true;

    // Start the game timer
    timeControl();

    // enable keyboard event listener
    enablehandler();
  }
}

gameStatus.startButton.addEventListener("click", startGame);
