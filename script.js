'use strict';

console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = '?';

let score = 10;
document.querySelector('.score').textContent = score;

let highScore = 0;
document.querySelector('.highscore').textContent = highScore;

// secret number
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// show random number whilst developing

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!!!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#cccccc';
  } else if (guess !== secretNumber) {
    document.querySelector('.message').textContent =
      guess > secretNumber ? 'too high' : 'too low';
    score--;
    document.querySelector('.score').textContent = score;
  }

  // } else if (guess > secretNumber) {
  //   document.querySelector('.message').textContent = 'too high';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // } else if (guess < secretNumber) {
  //   document.querySelector('.message').textContent = 'too low';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // }
});

document.querySelector('.again').addEventListener('click', () => {
  let guessValue = parseInt(document.querySelector('.guess').value);

  if (guessValue === secretNumber) {
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#000000';
    if (Number(score) > Number(highScore)) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore; // Update the high score in the UI
    }
    score = 10;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Make a guess';
  }
});
