'use strict';

// document.querySelector('.message').textContent = '⚡ ️Correct Number!';
// document.querySelector('.guess').value = 0;

const secretNumber = Math.floor(Math.random() * 5) + 1;
// document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        document.querySelector('.message').textContent = '❌ No Number!';

    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '⚡ ️Correct Number!';
        document.querySelector('body').style.backgroundColor = '#35a14e';
        document.querySelector('.number').style.width = '30rem';

    } else if (guess > secretNumber){

      if (score > 1){
        document.querySelector('.message').textContent = '↗️ Number too high';
        score--;
        document.querySelector('.score').textContent = score;
      }else{
        document.querySelector('.message').textContent = '🔥 You lost the game!';
        document.querySelector('.score').textContent = 0;
      }


    } else if (guess < secretNumber){
      if (score > 1){
        document.querySelector('.message').textContent = '↘️️ Number too low';
        score--;
        document.querySelector('.score').textContent = score;
      }else{
        document.querySelector('.message').textContent = '🔥 You lost the game!';
        document.querySelector('.score').textContent = 0;
      }

    }
});






































