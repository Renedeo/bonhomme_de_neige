import { gameStatus } from "./gameStatus.gameStatus.js";

// When resizing the window, adjust the snowman's size
window.addEventListener("resize", function () {
  console.log("Window resized");
  var snowman = document.getElementById("snowman");
  snowman.style.width = window.innerWidth * 0.1 + "px";
  snowman.style.height = window.innerWidth * 0.1 + "px";
});

//When resizing the window, adjust the snowman's position to remain on the game-space

window.addEventListener("resize", function () {
  console.log("Window resized");
  let snowman = document.getElementById("snowman");
  let gameSpace = document.getElementById("game-space");

  // Get the current position of the snowman
  let snowmanPosition = {
    x: parseFloat(snowman.style.left) || 0, // Default to 0 if not set
    y: parseFloat(snowman.style.top) || 0, // Default to 0 if not set
  };

  // Get old dimensions of the game-space
  let gameSpaceDimensions = {
    old_width: gameStatus.gameSpace.width,
    old_height: gameStatus.gameSpace.height,
  };

  // Calculate the new dimensions of the game-space based on the window size
  let newGameSpaceDimensions = {
    new_width: gameSpace.offsetWidth,
    new_height: gameSpace.offsetHeight,
  };

  //Set the new dimensions of the game-space
  gameStatus.gameSpace.width = newGameSpaceDimensions.new_width;
  gameStatus.gameSpace.height = newGameSpaceDimensions.new_height;

  // Adjust the position of the snowman, proportional to the new dimensions of the game-space
  snowman.style.left =
    (snowmanPosition.x / gameSpaceDimensions.old_width) *
      newGameSpaceDimensions.new_width +
    "px";
  snowman.style.top =
    (snowmanPosition.y / gameSpaceDimensions.old_height) *
      newGameSpaceDimensions.new_height +
    "px";
});
