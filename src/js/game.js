function Game() {
  this.checkResult = function (playerOne, playerTwo) {
    let winner
    if (playerOne.currentChoice == "rock" && playerTwo.currentChoice == "scissors") {
      winner = playerOne
    } else if (playerOne.currentChoice == "scissors" && playerTwo.currentChoice == "paper") {
      winner = playerOne
    } else if (playerOne.currentChoice == "paper" && playerTwo.currentChoice == "rock") {
      winner = playerOne
    } else
      winner = playerTwo
    return winner
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Game;
}