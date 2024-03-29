const randomNumber = Math.floor(Math.random() * 100) + 1;

const userGuess = document.getElementById('guess');
const submitBtn = document.getElementById('submit-btn');
const alertMessage = document.getElementById('message');

function guessChecker() {
    const guess = parseInt(userGuess.value);

    if (guess === randomNumber) {
        alertMessage.textContent = 'Well done! You guessed it right!';
    } else if (guess > randomNumber) {
        alertMessage.textContent = 'Your guess is too high! Try again!';
    } else if (guess < randomNumber) {
        alertMessage.textContent = 'Your guess is too low! Try again!';
    }

    userGuess.value = '';
}

submitBtn.addEventListener('click', guessChecker);