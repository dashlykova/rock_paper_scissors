require('../spec.helper')

describe("Player", () => {
  let player = new Player()
  let computer = new Player()
  let game = new Game()
  it('rock beats scissors', () => {
    player.currentChoice = "rock"
    computer.currentChoice = "scissors"
    expect(game.checkResult(player, computer)).to.equal(player);
  })
  it('scissors beats paper', () => {
    player.currentChoice = "scissors"
    computer.currentChoice = "paper"
    expect(game.checkResult(player, computer)).to.equal(player);
  })
 

})



