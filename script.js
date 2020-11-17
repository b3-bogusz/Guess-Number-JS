'use strict';


let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        /*document.querySelector('.message').textContent = '❌ No Number!';*/
      displayMessage('❌ No Number!');

    } else if (guess === secretNumber) {
        displayMessage('⚡ ️Correct Number!');
        document.querySelector('.number').textContent = guess;
        document.querySelector('body').style.backgroundColor = '#35a14e';
        document.querySelector('.number').style.width = '30rem';

          if (score > highScore){
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
          }


    } else if (guess !== secretNumber){
      if (score > 1){
        displayMessage(guess > secretNumber ? '↗️ Number too high' : "↘️ Number too low");
        score--;
        document.querySelector('.score').textContent = score;
      }else{
        displayMessage('🔥 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }
    }

});



document.querySelector('.again').addEventListener('click', function(){

  score = 20
  secretNumber = Math.floor(Math.random() * 10) + 1;
  document.querySelector('.score').textContent = score;

  document.querySelector('.guess').value = "";
  displayMessage('Start guessing..');
  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});


































