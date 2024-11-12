const OPTIONS = ["rock", "paper", "scissors"];
let userScore = 0;
let computerScore = 0;
let throwCount = 0;

const throwButton = document.getElementById("throw");
const userScoreDisplay = document.querySelector(".user-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const throwCountDisplay = document.querySelector(".throw-count");
const gameOverDialog = document.querySelector(".game-over");
const userHandElements = document.querySelectorAll('.user .content figure');
const computerHandElements = document.querySelectorAll('.computer .content figure');

function updateScoreDisplay() {
    console.log("Updating score display...");
    userScoreDisplay.innerText = `${userScore} points`;
    computerScoreDisplay.innerText = `${computerScore} points`;
    throwCountDisplay.innerText = `${throwCount} ${throwCount === 1 ? 'throw' : 'throws'}`;
    console.log(`User Score: ${userScore}, Computer Score: ${computerScore}, Throw Count: ${throwCount}`);
}

function resetGame() {
    console.log("Resetting game...");
    userScore = 0;
    computerScore = 0;
    throwCount = 0;
    updateScoreDisplay();

    userHandElements.forEach(hand => hand.classList.add('hide'));
    computerHandElements.forEach(hand => hand.classList.add('hide'));

    gameOverDialog.classList.add('hide');
    console.log("Game has been reset.");
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return null; 
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        return 'user'; 
    } else {
        return 'computer'; 
    }
}

throwButton.addEventListener('click', function () {
    console.log("Throw button clicked...");
    throwCount++;
    const userChoice = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];
    const computerChoice = OPTIONS[Math.floor(Math.random() * OPTIONS.length)];

    console.log(`User choice: ${userChoice}, Computer choice: ${computerChoice}`);

    
    userHandElements.forEach(hand => hand.classList.add('hide'));
    document.querySelector(`.user .${userChoice}`).classList.remove('hide');
    computerHandElements.forEach(hand => hand.classList.add('hide'));
    document.querySelector(`.computer .${computerChoice}`).classList.remove('hide');

    const result = determineWinner(userChoice, computerChoice);
    if (result === 'user') {
        userScore++;
    } else if (result === 'computer') {
        computerScore++;
    }

    updateScoreDisplay();

    if (userScore === 5 || computerScore === 5) {
        gameOverDialog.classList.remove('hide');
        gameOverDialog.querySelector('.message').innerText = `${userScore === 5 ? 'You' : 'Computer'} won!!`;
        console.log(`Game over. Winner: ${userScore === 5 ? 'User' : 'Computer'}`);
    }
});

document.getElementById("start-over").addEventListener('click', function () {
    resetGame();
});


resetGame();
