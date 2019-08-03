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
//   this.showResult = function (winner, playerTwo) {
//     winner = checkResult(playerOne, playerTwo)
//     if (winner == playerOne) {
//       result.innerHTML = `<h1>You WIN!</h1>
//       <i class="fas-fa-hand-${playerTwo} fa-10x"></i>
//       <p>Computer chose ${playerTwo}!</p>
//       `;
//     } else if (winner == playerTwo) {
//       result.innerHTML = `<h1>You LOSE!</h1>
//       <i class="fas-fa-hand-${playerTwo} fa-10x"></i>
//       <p>Computer chose ${playerTwo}!</p>
//       `;
//     } else result.innerHTML = `<h1>You are in a TIE!</h1>
//     <i class="fas-fa-hand-${playerTwo} fa-10x"></i>
//     <p>Computer chose ${playerTwo}!</p>
//     `;
//   }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Game;
}