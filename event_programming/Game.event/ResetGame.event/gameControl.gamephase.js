import { gameStatus } from "../gameStatus.gameStatus.js";
import { endGame } from "../LauchGame.event/gameControl.gamePhase.js";

function resetGame() {
    endGame();
    gameStatus.stopButton.element.textContent = "Stop";
    gameStatus.isPaused = false;
}

gameStatus.resetButton.element.addEventListener("click", resetGame);