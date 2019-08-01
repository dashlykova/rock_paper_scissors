require('../spec.helper')

describe("Game", () => {
  let game = new Game()  
  let player = new Player()
  let computer = new Player()
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
  it('paper beats rock', () => {
    player.currentChoice = "paper"
    computer.currentChoice = "rock"
    expect(game.checkResult(player, computer)).to.equal(player);
  })
  it('rock beats scissors', () => {
    player.currentChoice = "scissors"
    computer.currentChoice = "rock"
    expect(game.checkResult(player, computer)).to.equal(computer);
  })
  it('scissors beats paper', () => {
    player.currentChoice = "paper"
    computer.currentChoice = "scissors"
    expect(game.checkResult(player, computer)).to.equal(computer);
  })
  it('paper beats rock', () => {
    player.currentChoice = "rock"
    computer.currentChoice = "paper"
    expect(game.checkResult(player, computer)).to.equal(computer);
  })

})



