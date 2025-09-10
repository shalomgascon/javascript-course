'use strict';

// DOM Elements Selection
const messageEl = document.querySelector(".message");
// console.log (messageEl);

// messageEl.textContent = "Hello from Javascript";

const scoreEl = document.querySelector(".score");
// console.log(scoreEl);

// scoreEl.textContent = 15;

const numberEl = document.querySelector(".number");
// numberEl.textContent = 10; 

const highscoreEl = document.querySelector(".highscore");
// highscoreEl.textContent = 18; 

const guessInputEl = document.querySelector(".guess");
// guessInputEl.value = 6;

///////////////////////
// Game state variables
let secretNumber = Math.trunc(Math.random() * 20) +  1;
console.log('Your Secret number is: ', secretNumber);

let score = 20;
let highscore = 0;

document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;


///////////////////////
// Basic Game Logic
document.querySelector('.check').addEventListener('click', function() {
    // Code Block
    console.log('Check button clicked');
    const guess = Number(document.querySelector('.guess').value);
    console.log("Players guessed: ", guess);

    if (guess === secretNumber) {
        console.log('Correct Guess!!!!!!!');
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('.guess').disabled = true;
        document.querySelector('.check').disabled = true;
        document.querySelector('.message').textContent = "You Won!!!!!!!";
    } else if (guess > secretNumber) {
        console.log("Too Highhhh");
        document.querySelector('.message').textContent = "Too Highhhhhh!!!!";
        score --;
        document.querySelector('.score').textContent = score;
        if (score < 1) {
            document.querySelector('message').textContent = "Saddddd, You lost!!!!";
            document.querySelector('.number').textContent = secretNumber; 
            document.querySelector('.guess').disabled = true;
            document.querySelector('.check').disabled = true;
        }
    } else if (guess < secretNumber) {
        console.log("Too Lowwww");
        document.querySelector('.message').textContent = "Too Lowwwww!!!!!";
        score --;
        document.querySelector('.score').textContent = score;
        if (score < 1) {
            document.querySelector('.message').textContent = "Saddddd, You lost!!!!";
            document.querySelector('.number').textContent = secretNumber; 
            document.querySelector('.guess').disabled = true;
            document.querySelector('.check').disabled = true;
        }
    }
});

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) +  1;
    document.querySelector('.message').textContent = 'Start Guessinggggggg';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = ' ';

    document.querySelector('.guess').disabled = false;
    document.querySelector('.check').disabled = false;
});



