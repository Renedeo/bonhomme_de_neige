import { setAppleRandomPosition } from "../../functionnal_programming/Apple.extension.js";
import { gameStatus } from "../Game.event/gameStatus.gameStatus.js";

/**
 * Spawn an apple in a random position in the game space.
 */
export function AppleSpawn() {
  // Create the apple div and image element
  let apple = document.createElement("div");
  apple.id = "apple";

  // Create the apple image element and set its source
  let appleImage = document.createElement("img");
  appleImage.src = gameStatus.apple.imageURL;

  // Add the apple image to the apple div
  apple.appendChild(appleImage);

  // Reduce image size for better collision detection
  appleImage.width = gameStatus.apple.size.width;
  appleImage.height = gameStatus.apple.size.height;

  // Add the apple to the game space
  let gameSpace = document.getElementById("game-space");
  gameSpace.appendChild(apple);

  // Update the game status with the apple element
  gameStatus.apple.element = apple;

  // Set the apple's random initial position
  setAppleRandomPosition();
}
