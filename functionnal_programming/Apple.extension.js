import { gameStatus } from "../event_programming/Game.event/gameStatus.gameStatus.js";
import { outOfBounds } from "./GameSpace.extensions.js";

function appleRandomPosition() {
  let gameSpaceSize = gameStatus.gameSpace;
  console.log("Game space size: ", gameSpaceSize);
  let appleSize = gameStatus.apple.size;
  console.log("Apple size: ", appleSize);
  // Ensure the apple doesn't overlap with the game board boundaries
  do {
    // Generate a random position within the game space boundaries, excluding the game board boundaries
    var randomX = Math.floor(
      Math.random() * (gameSpaceSize.width - appleSize.width)
    );
    var randomY = Math.floor(
      Math.random() * (gameSpaceSize.height - appleSize.height)
    );
    console.log(`Generated apple position: (${randomX}, ${randomY})`);
  } while (
    outOfBounds(
      {
        x: randomX,
        y: randomY,
      },
      appleSize
    )
  );

  return {
    x: randomX,
    y: randomY,
  };
}

export function setAppleRandomPosition() {
  // Get the size of the apple and generate a random position within the game space boundaries
  let applePosition = appleRandomPosition();
  let apple = document.getElementById("apple");
  
  // Set the apple's position and make it visible
  apple.style.position = "absolute";
  apple.style.left = applePosition.x + "px";
  apple.style.top = applePosition.y + "px";

  // Update the game status with the new apple position
  gameStatus.apple.Position = applePosition;
}


