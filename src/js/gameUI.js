const icons = document.querySelectorAll('.choices')
let game = new Game()
let computer = new Player()


icons.forEach(function(icon) {
    icon.addEventListener('click', function() {
         
        let computerMoveDisplay = document.querySelector('#result p')
        computer.currentChoice = "scissors" 
        computerMoveDisplay.innerText = `Computer chose ${computer.currentChoice}`
    })
}) 