import { gameStatus } from "../Game.event/gameStatus.gameStatus.js";

export function updateScore() {
  let score = document.getElementById("score");
  score.textContent = parseInt(score.textContent) + 1;
  gameStatus.score++;
}

export function resetScore() {
  let score = document.getElementById("score");
  score.textContent = 0;
  gameStatus.score == 0; 
}