import { gameStatus } from "../event_programming/gameStatus.gameStatus.js";

function getRemainingTime() {
    return gameStatus.timeConfig.timer;
}

function reduceTime() {
    // Get the remaining time
    let remainingTime = getRemainingTime();
    let elapsedTime = gameStatus.timeConfig.decrement;
    let remainingTimeInMilliseconds = remainingTime - elapsedTime;
    
    if (remainingTimeInMilliseconds < 0) {
        // Time's up!
        return {
            minutes: 0,
            seconds: 0
        }
    }
    // Reduce the time
    let remainingTimeInMinutes = Math.floor((remainingTimeInMilliseconds) / (60 * 1000));
    let remainingTimeInSeconds = Math.floor((remainingTimeInMilliseconds % (60 * 1000)) / 1000);

    // Update the game status
    gameStatus.timeConfig.timer = remainingTimeInMilliseconds;

    return {
        minutes: remainingTimeInMinutes,
        seconds: remainingTimeInSeconds
    };
}

export { getRemainingTime, reduceTime };