function Player() {
  this.randomizeChoice = function () {
    let choice = Math.floor(Math.random() * 3) + 1
    switch (choice) {
      case 1:
        this.currentChoice = "rock"
        break
      case 2:
        this.currentChoice = "paper"
        break
      case 3:
        this.currentChoice = "scissors"
        break
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Player;
}