import { setAppleRandomPosition } from "../../functionnal_programming/Apple.extension.js";
import { moveSnowman } from "../../functionnal_programming/Snowman.extension.js";
import { updateScore } from "../Score.event/gameControl.updateScore.js";
import { gameStatus } from "../Game.event/gameStatus.gameStatus.js";

// Add event listener for keydown event

var keydownHandler = keydownManagment();

/**
 * Manage the state of the game control and update the score based on the current snowman position
 * @returns
 * (none) when key isn't recognized or if snowman collides with an apple
 */
function keydownManagment() {
  return function (event) {
    let direction;
    // Check the key pressed and set the direction accordingly
    switch (event.key) {
      case "ArrowUp":
        direction = "up";
        break;
      case "ArrowDown":
        direction = "down";
        break;
      case "ArrowLeft":
        direction = "left";
        break;
      case "ArrowRight":
        direction = "right";
        break;
      default:
        return; // Ignore other keys
    }

    // Move the snowman in the given direction and handle collision detection
    try {
      moveSnowman(direction, {
        x: gameStatus.Snowmans.speedConfig.x_offset,
        y: gameStatus.Snowmans.speedConfig.y_offset,
      });
    } catch (Error) {
      console.error(Error.message);
      return; // Stop further processing if an error occurs during movement or collision detection
    }

    // Update score if a collision is detected with the apple
    if (snowmancolision()) {
      updateScore();
    }
  };
}

/**
 * Disables keydown event handling.
 */
function removehandler() {
  window.removeEventListener("keydown", keydownHandler, true);
}

/**
 * Enables keydown event handling.
 */
function enablehandler() {
  window.addEventListener("keydown", keydownHandler, true);
}

/**
 *
 * @returns {boolean}
 * * Returns true if a collision between the snowman and the apple has occurred.
 * * Returns false otherwise.
 */
function snowmancolision() {
  // Get positions of snowman and apple
  let snowmanPos = gameStatus.Snowmans.Position;
  let snowmanSize = gameStatus.Snowmans.size;
  
  if (gameStatus.apple.element) {
    let applePos = {
      x: gameStatus.apple.Position.x,
      y: gameStatus.apple.Position.y,
    };

    let appleSize = gameStatus.apple.size;

    // Check if the distance between the center of the snowman
    // and the center of the apple is less than their combined width and height
    let distance = Math.sqrt(
      Math.pow(snowmanPos.x - applePos.x, 2) +
      Math.pow(snowmanPos.y - applePos.y, 2)
    );

    // Check if the distance is less than the sum of their radii (half of their combined width and height)
    if (distance < ((snowmanSize.width / 2) + (appleSize.width / 2))) {
      // Collision detected!
      console.log("Collision detected!");
      setAppleRandomPosition();
      return true;
    }

    } 
  // }
  return false;
}

export { keydownHandler, removehandler, enablehandler };
