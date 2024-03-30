const randomNumber = Math.floor(Math.random() * 100) + 1;

const userGuess = document.getElementById('guess');

const submitButton = document.getElementById('submit-btn');
const endGameButton = document.getElementById('endGame-btn');
const restartButton = document.getElementById('restart-btn');

const alertMessage = document.getElementById('message');
const totalGuessDisplay = document.getElementById('totalGuesses');

submitButton.addEventListener("click", function () {
    guessChecker();
});

endGameButton.addEventListener("click", function () {
    endGame();
});

restartButton.addEventListener("click", function () {
    restartGame();
});

let totalGuess = 0;

function guessChecker() {
    const guess = parseInt(userGuess.value);

    if (guess === randomNumber) {
        alertMessage.textContent = 'Well done! You guessed it right! (∩˃o˂∩)♡';
        totalGuess++;
    } else if (guess > randomNumber) {
        alertMessage.textContent = 'Your guess is too high! Try again! (⁠╥⁠﹏⁠╥⁠)';
        totalGuess++;
    } else if (guess < randomNumber) {
        alertMessage.textContent = 'Your guess is too low! Try again! (,,>﹏<,,)';
        totalGuess++;
    }
    userGuess.value = '';
    totalGuessDisplay.textContent = totalGuess;
}

submitBtn.addEventListener('click', guessChecker);

function endGame() {
    totalGuess = 0;
    totalGuessDisplay.textContent = totalGuess;
    alertMessage.textContent = '< - - GAME OVER - - >';
}

function restartGame() {
    totalGuess = 0;
    totalGuessDisplay.textContent = totalGuess;
    alertMessage.textContent = '< - - GAME RESTART - - >';
}