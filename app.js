// selecting various thingy majigs
const livesRemaining = document.querySelector('.lives-remaining');
const hintBox = document.querySelector('.hint');
const playerAnswer = document.querySelector('.player-answer');
const characters = document.querySelectorAll('.chars button');
const enterAnswer = document.querySelector('.enter-answer');
const backspace = document.querySelector('.backspace');
const clearButton = document.querySelector('.clear-all');
const nextQuestion = document.querySelector('.next-question');
const restartGame = document.querySelector('.restart-game');
const results = document.querySelector('.results');

// El hints and answers

const answersAndHints = {
    ayaka: 'In Genshin Impact, who is the current head of the Kamisato Clan?',
    paris: 'What is the capital of France?',
    e: 'What is the most commonly used letter in the English language?',
    gawrgura: 'Who has the most subscribers in Hololive?',
    tokinosora: 'Who is the first member of Hololive?'
}

const generateNumber = () => Math.floor(Math.random() * Object.keys(answersAndHints).length);


// event listeners

characters.forEach(char => char.addEventListener('click', () => {
    playerAnswer.innerText += char.innerText;
    results.innerText = '';
}))

enterAnswer.addEventListener('click', () => checkAnswer(playerAnswer.innerText, correctAnswer))

let correctAnswer;
let lives = 10;
livesRemaining.innerText = 'Lives Remaining: ' + lives.toString();

function checkAnswer(playerAns, properAns) {
    if (playerAns == properAns.toUpperCase()) {
        results.innerText = 'Correct!';
        console.log(lives)
    } else if (lives <= 1) {
        lives = 0;
        console.log(lives)
        results.innerText = 'You Lose!'
    } else {
        lives -= 1;
        console.log(lives)
        results.innerText = 'Wrong!';
    }
    livesRemaining.innerText = 'Lives Remaining: ' + lives.toString();

}

backspace.addEventListener('click', () => {
    playerAnswer.innerText = playerAnswer.innerText.slice(0, playerAnswer.innerText.length - 1)
})

clearButton.addEventListener('click', () => playerAnswer.innerText = '')

nextQuestion.addEventListener('click', () => newQuestion(generateNumber(), answersAndHints))

function newQuestion(index, obj) {
    console.log(index + ' newQuestion')
    hintBox.innerText = Object.values(obj)[index];
    correctAnswer = Object.keys(obj)[index];
}

restartGame.addEventListener('click', () => {
    lives = 10;
    livesRemaining.innerText = 'Lives Remaining: ' + lives.toString();
    hintBox.innerText = '';
    results.innerText = '';
    playerAnswer.innerText = '';
    console.log(lives + ' restartGame')
})

// I completed this on July 29 2022. I started learning JavaScript on Mar 30 2022, Midnight.