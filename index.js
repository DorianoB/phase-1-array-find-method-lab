// written as arrow function
// function superbowlWin(superbowlArray) {
//   const winningGame = superbowlArray.find(game => game.result === "W");

//   // If a winning game is found, return the year, otherwise return undefined
//   return winningGame ? winningGame.year : undefined;
// }

function isWinningGame(game) {
    return game.result === "W";
  }
  
  function superbowlWin(superbowlArray) {
    const winningGame = superbowlArray.find(isWinningGame);
  
    // If a winning game is found, return the year, otherwise return undefined
    return winningGame ? winningGame.year : undefined;
  }