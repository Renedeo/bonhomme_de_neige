
import { removehandler } from "../../Snowman.event/gameControl.moveSnowman.js";
import { timeManager } from "../../timeControl.event/gameControl.timerControl.js";
import { gameStatus } from "../gameStatus.gameStatus.js";

/**
 * This function stop the timer 
 */
function gameTime() {
  if (gameStatus.isPlaying && !gameStatus.isPaused) {
    gameStatus.isPaused = true;
    removehandler();
    gameStatus.stopButton.element.textContent = "Resume";

    // Clear the interval timer set in the gameStatus
    clearInterval(gameStatus.timeConfig.interval);
    gameStatus.timeConfig.interval = null;
  }
  else if (gameStatus.isPaused) {
    gameStatus.stopButton.element.textContent = "Stop";
    gameStatus.isPaused = false;
    timeManager();
  }
}

gameStatus.stopButton.element.addEventListener("click", gameTime);


/**
 * This function handles the keyboard event to pause/resume the game
 */
window.addEventListener("keydown", function (event) {
  if (event.key === " ") {
    gameTime();
  }
});