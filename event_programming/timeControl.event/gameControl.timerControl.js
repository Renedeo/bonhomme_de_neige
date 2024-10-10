import {
  reduceTime,
  getRemainingTime,
} from "../../functionnal_programming/RemainingTime.extension.js";
import { gameStatus } from "../Game.event/gameStatus.gameStatus.js";
import { endGame } from "../Game.event/LauchGame.event/gameControl.gamePhase.js";

function timeManager() {
  gameStatus.timeConfig.interval = setInterval(function () {
    changeTimer();

    if (getRemainingTime() <= 0) {
      clearInterval(gameStatus.timeConfig.interval);
      endGame();
    }
  }, 1000);
}

/**
 * Reduce the time and update the HTML element
 */
function changeTimer() {
  let timerElement = document.getElementById("time-control");

  // Reduce the timer value and update the text content in the HTML element
  let { minutes, seconds } = reduceTime();
  timerElement.textContent = timeFormater(minutes, seconds);

  // Update the game status
  gameStatus.timeConfig.timer = getRemainingTime();
}

/**
 * Stop the timer and reset the game status
 */
function restartTimer() {
  resetTimer();
}

/**
 * Reset the timer to its initial value and update the HTML element
*/
function resetTimer() {
  // Reset reset time
  clearInterval(gameStatus.timeConfig.interval);

  let timerElement = document.getElementById("time-control");
  // Reset game status
  gameStatus.timeConfig.timer = gameStatus.timeConfig.defaultTimer; // 15000 milliseconds = 15 seconds

  // Update the text content in the HTML element
  let minutes = Math.floor(gameStatus.timeConfig.timer / 1000 / 60);
  let seconds = (gameStatus.timeConfig.timer / 1000) % 60;

  timerElement.textContent = timeFormater(minutes, seconds);
}

function timeFormater(minutes, seconds) {
  return `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

export { timeManager, restartTimer, changeTimer, resetTimer };
