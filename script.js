'use strict';

// document.querySelector('.message').textContent = '⚡ ️Correct Number!';
// document.querySelector('.guess').value = 0;

const secretNumber = Math.floor(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if (!guess) {
        document.querySelector('.message').textContent = '❌ No Number!';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '⚡ ️Correct Number!';
    } else if (guess > secretNumber){
        document.querySelector('.message').textContent = '↗️ Number too high';
    } else if (guess < secretNumber){
        document.querySelector('.message').textContent = '↘️️ Number too low';
    }
});





































