import { gameStatus } from "../Game.event/gameStatus.gameStatus.js";

export function snowmanSpawn() {
  // Create a new snowman element
  let snowman = document.createElement("div");

  // Create an image element for the snowman
  let snowmanImage = document.createElement("img");
  snowmanImage.src = gameStatus.Snowmans.imageURL;

  // Set initial size
  snowmanImage.style.width = gameStatus.Snowmans.size.width + "px";
  snowmanImage.style.height = gameStatus.Snowmans.size.height + "px";

  // Append the image to the snowman element
  snowman.appendChild(snowmanImage);
  snowman.style.position = "absolute";

  // Set initial position
  let PosX = (gameStatus.gameSpace.width % gameStatus.Snowmans.size.width) / 2
  let PosY = (gameStatus.gameSpace.height % gameStatus.Snowmans.size.height) / 2
  snowman.style.left = PosX + "px";
  snowman.style.top = PosY + "px";

  // Update the game status with the snowman element
  gameStatus.Snowmans.Position = {
    x: PosX,
    y: PosY,
  }

  // Add the snowman to the game space element
  gameStatus.gameSpace.element.appendChild(snowman);

  // Update the gameStatus with the new snowman element
  gameStatus.Snowmans.element = snowman;
}
