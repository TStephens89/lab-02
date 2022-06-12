'use strict';
let rightAnswers = 0;
let name = prompt('What is your name?');

alert('Oh Hello ' + name + ' please answer in lowercase');

let questionArray = ['Do you think I am 33?', 'Do you think I am in San Diego?', 'Do you think I can use JavaScript', 'Do I play Xbox?', 'Did I finish my lab today?'];
let correctAnswerArray = ['yes', 'yes', 'yes', 'yes', 'yes'];
let incorrectAnswerArray = ['no', 'no', 'no', 'no', 'no'];

function QandA() {
  for (let i = 0; i < questionArray.length; i++) {
    let question = prompt(questionArray[i]);
    if (question === correctAnswerArray[i]) {

      alert('Wow, ' + name + ' you are correct!');
      if (question === correctAnswerArray[i]) {
        rightAnswers++;

      }
    }
    else {
      question === incorrectAnswerArray[i];

      alert('Sorry ' + name + ' that is incorrect');
    }
  }
}

QandA();

function guessNumber() {
  let correctAnswer = 3;
  for (let i = 0; i <= 3; i++) {
  
    let guessedNumber = prompt('I am thinking of a number 1-10');
    if (guessedNumber == correctAnswer) {
      alert('You are correct!');
      if (guessedNumber == correctAnswer) { rightAnswers++; }
      break;
    }
    if (guessedNumber < correctAnswer) { alert('Your answer is too low'); }
    if (guessedNumber > correctAnswer) { alert('Your number is too high!'); }
    if (i == 3) { alert('done'); }
  }
}

guessNumber();

function guessGames() {
  let games = ['halo', 'apex', 'pokemon', 'destiny'];
  let attempts = 6;

  while (attempts > 0) {
    attempts--;
  
    let correctAnswer = false;

    let guessedGame = prompt('what is one of my favorite games?');
    for (let i = 0; i <= games.length; i++) {
      
      if (guessedGame == games[i]) {
        alert('You are correct!');
        correctAnswer = true;
        attempts = 0;
        if (guessedGame == games[i]) {
          rightAnswers++;
        }
        break;
      }
    }
    if (!correctAnswer) { alert('please try again'); }
    alert(name + ' you got ' + rightAnswers + ' right answers');
    
  }
}

guessGames();

