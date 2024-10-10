import { AppleSpawn } from "../../Apple.event/AppleSpawn.js";
import { resetTimer, timeManager } from "../../timeControl.event/gameControl.timerControl.js";
import { enablehandler, removehandler } from "../../Snowman.event/gameControl.moveSnowman.js";
import { gameStatus } from "../gameStatus.gameStatus.js";
import { snowmanSpawn } from "../../Snowman.event/SnowmansSpawn.js";
import { resetScore } from "../../Score.event/gameControl.updateScore.js";

/**
 * This function handles the start/restart button click event.
 */
function startGame() {
  if (!gameStatus.isStarted) {
    gameStatus.startButton.element.textContent = "Restart";
    launchGame();
  }
  else {
    if (gameStatus.isPaused) {
      gameStatus.isPaused = false;
      gameStatus.stopButton.element.textContent = "Stop";
    }
    restartGame();
  }
}
gameStatus.startButton.element.addEventListener("click", startGame);

/**
 * This function restarts the game by clearing the game space, resetting the score, and restarting the game timer.
 */
function restartGame() {
  resetScore();
  resetTimer();
  gameStatus.gameSpace.element.removeChild(gameStatus.Snowmans.element);
  gameStatus.gameSpace.element.removeChild(gameStatus.apple.element);
  launchGame();
}

/**
 * This function is called when the game is launched.
 */
function launchGame() {

  // Snowman spawn
  snowmanSpawn();

  // Apple Spawned
  AppleSpawn();

  // Initialize game status
  gameStatus.isStarted = true;
  gameStatus.isPlaying = true;

  // Start the game timer
  timeManager();

  // enable keyboard event listener
  enablehandler();
}

/**
 * This function is called when the game is finished.
 */
export function endGame() {
  gameStatus.startButton.element.textContent = "Start";
  
  // Reset game status
  gameStatus.isStarted = false;
  gameStatus.isPlaying = false;
  gameStatus.isGameOver = true;
  
  // Disable keyboard event listener
  removehandler();
  
  // Remove Snowman and apple
  gameStatus.gameSpace.element.removeChild(gameStatus.Snowmans.element);
  gameStatus.gameSpace.element.removeChild(gameStatus.apple.element);
  
  // Reset the timer
  resetTimer();
  gameStatus.timeConfig.interval = null;
  // Reset the score
  resetScore();
}