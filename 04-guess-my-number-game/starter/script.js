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
let secretNumber = Math.trunc(Math.random() * 20 +  1);
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
        document.querySelector('.message').textContent = "Correct Number";
        document.querySelector('.number').textContent = secretNumber;
    } else if (guess > secretNumber) {
        console.log("Too Highhhh");
        document.querySelector('.message').textContent = "Too Highhhhhh!!!!";

    } else if (guess < secretNumber) {
        console.log("Too Lowwww");
        document.querySelector('.message').textContent = "Too Lowwwww!!!!!";
    }
});



