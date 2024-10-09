import { getApplePosition } from '../functionnal_programming/GetApplePosition.extension.js';
import { getGameSpaceSize } from '../functionnal_programming/GameSpace.extensions.js';
import { getSnowmanPosition} from "../functionnal_programming/Snowman.extension.js";
const gameStatus = {
    NOT_PLAYING: 'not_playing',
    PLAYING: 'playing',
    PAUSED: 'paused',
    GAME_OVER: 'game_over'
};

const possibleEnding = {
    NOT_REACHED: 'not_reached',
    TIME_OUT: 'time_out'
}

let objectInformations = {
    snowman: getSnowmanPosition(),
    apple: getApplePosition(),
    gameSpace: getGameSpaceSize(),
}

let snowmanOffset =  {
    x: objectInformations.snowman.width,
    y: objectInformations.snowman.height
}

const Status = {
    score: 0,
    remainingTime: 15000,
    isGameOver: false,
    gameStatus: gameStatus.NOT_PLAYING,
    possibleEnding: possibleEnding.NOT_REACHED,
}

export {snowmanOffset, gameStatus, possibleEnding, Status };