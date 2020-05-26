let randomNumber = Math.floor(Math.random() * 100) + 1; //makes a random number

const guesses = document.querySelector('.guesses'); //selects first element with the "guesses" class
const lastResult = document.querySelector('.lastResult'); //selects first element with the "lastResult" class
const lowOrHi = document.querySelector('.lowOrHi'); //selects first element with the "lowOrHi" class
const gameResult = document.querySelector('.result'); //select result element

const guessSubmit = document.querySelector('.guessSubmit'); //selects first element with the "guessSubmit" class
const guessField = document.querySelector('.guessField'); //selects first element with the "guessField" class

let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
      guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';
   
    if (100 < userGuess || userGuess < 1)
    {
        if (userGuess === randomNumber) {
            lastResult.textContent = 'Congratulations! You got it right!';
            gameResult.textContent = 'You guessed it!';
            lastResult.style.backgroundColor = 'green';
            lowOrHi.textContent = '';
            setGameOver();
          } else if (guessCount === 10) {
            lastResult.textContent = '!!!GAME OVER!!!';
            setGameOver();
          } else {
            lastResult.textContent = 'Wrong!';
            lastResult.style.backgroundColor = 'red';
            if(userGuess < randomNumber) {
              lowOrHi.textContent = 'Last guess was too low!';
            } else if(userGuess > randomNumber) {
              lowOrHi.textContent = 'Last guess was too high!';
            }
          }
          guessCount++;
    } else {
        lastResult.textContent = 'That was not a valid'
    }
    
   
    
    guessField.value = '';
    guessField.focus();
}

guessField.addEventListener('click', checkGuess);

// guessField.addEventListener('keydown', event => {
//     if (event.isComposing || event.keyCode === 13) {
//         checkGuess;
//       }
// });
  
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
  
    gameResult.textContent = 'Number Guessing Game';

    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
  
    lastResult.style.backgroundColor = 'white';
  
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }