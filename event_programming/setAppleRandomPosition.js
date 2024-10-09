import { appleRandomPosition } from "./GetApplePosition.extension";


export function setAppleRandomPosition() {
  let appleSize = {
    width: 32,
    height: 32,
  };
  let applePosition = appleRandomPosition(appleSize);

  let apple = document.getElementById("apple");
  apple.style.position = "absolute";
  apple.style.left = applePosition.x + "px";
  apple.style.top = applePosition.y + "px";
}
