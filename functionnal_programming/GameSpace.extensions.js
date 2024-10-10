import { gameStatus } from "../event_programming/Game.event/gameStatus.gameStatus.js";

/**
 * This function checks if an element is within the game space boundaries.
 * @param {any} elementToMovePosition Position of the element to move. {x: number, y: number}
 * @param {any} elementToMoveSize Size of the element to move. {width: number, height: number}
 * @returns {boolean} Whether the element is within the game space boundaries.
 */
export function outOfBounds(elementToMovePosition, elementToMoveSize) {
  return (
    elementToMovePosition.x < 0 ||
    elementToMovePosition.x + elementToMoveSize.width > gameStatus.gameSpace.width ||
    elementToMovePosition.y < 0 ||
    elementToMovePosition.y + elementToMoveSize.height > gameStatus.gameSpace.height
  );
}

