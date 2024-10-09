import { gameStatus } from "../event_programming/gameStatus.gameStatus.js";
import { outOfBounds } from "./GameSpace.extensions.js";

/**
 *
 * @param {string} direction "up" | "down" | "left" | "right"
 * @param {number} speedConfig the snowman's deplacement offset
 * @returns none
 * * Moves the snowman in the specified direction by the given speedConfig.
 * * Throws an error if the snowman tries to move outside the game space.
 */
function moveSnowman(direction) {
  // Snowman's current position.
  let newX = gameStatus.Snowmans.Position.x;
  let newY = gameStatus.Snowmans.Position.y;

  // Snowman's speed configuration.
  let offsetX = gameStatus.Snowmans.speedConfig.x_offset;
  let offsetY = gameStatus.Snowmans.speedConfig.y_offset;

  // Update the new position based on the given direction and speedConfig.
  switch (direction) {
    case "up":
      newY -= offsetY;
      break;
    case "down":
      newY += offsetY;
      break;
    case "left":
      newX -= offsetX;
      break;
    case "right":
      newX += offsetX;
      break;
    default:
      throw new Error("Invalid direction");
  }

  // Check if the new position is out of bounds and throw an error if so.
  let newPosition = {
    x: newX,
    y: newY,
  };
  if (
    outOfBounds(newPosition, {
      width: gameStatus.Snowmans.size.width,
      height: gameStatus.Snowmans.size.height,
    })
  ) {
    throw new Error("Snowman out of bounds");
  }    
  // Update the snowman's position and return the new position.
  gameStatus.Snowmans.element.style.left = newX + "px";
  gameStatus.Snowmans.element.style.top = newY + "px";

  // Update the gameStatus with the new position.
  gameStatus.Snowmans.Position = newPosition;
  return newPosition;
}

export { moveSnowman };
