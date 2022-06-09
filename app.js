'use strict'
let rightAnswers = 0
let name = prompt("What is your name?");
console.log("Users name is " + name);
alert("Oh Hello " + name);

let questionArray = ['Do you think I am 33?', 'Do you think I am in San Diego?', 'Do you think I can use JavaScript', 'Do I play Xbox?', 'Did I finish my lab today?']
let correctAnswerArray = ['yes', 'yes', 'yes', 'yes', 'yes']
let incorrectAnswerArray = ['no', 'no', 'no', 'no', 'no']


function QandA(){
    for(let i = 0; i < questionArray.length; i++){
    let question = prompt(questionArray[i]);
    if (question === correctAnswerArray[i]) {
        console.log("Wow, " + name + " you are correct!")
        alert("Wow, " + name + " you are correct!")
        if (question === correctAnswerArray[i]) {
            rightAnswers++
            console.log(rightAnswers)
        }
    }
    else {
        question === incorrectAnswerArray[i];
        console.log("Sorry " + name + " that is incorrect")
        alert("Sorry " + name + " that is incorrect")
    };
}
}

//QandA();

function guessNumber(){
    let correctAnswer = 3;
for (let i = 0; i <= 3; i++) {
    console.log(i)
    let guessedNumber = prompt("I am thinking of a number 1-10")
    if (guessedNumber == correctAnswer) {
        alert("You are correct!");
        if (guessedNumber == correctAnswer) { rightAnswers++ };
        break;
    }
    if (guessedNumber < correctAnswer) { alert("Your answer is too low") }
    if (guessedNumber > correctAnswer) { alert("Your number is too high!") }
    if (i == 3) { alert("done") }
}
}

guessNumber()

function guessGames(){
    let games = ["Halo", "Apex", "Pokemon", "Destiny"];
let attempts = 6;
console.log(games)
while (attempts > 0) {
    attempts--;
    console.log("attempts left ", attempts);
    let correctAnswer = false

    let guessedGame = prompt("what is one of my favorite games?")
    for (let i = 0; i <= games.length; i++) {
        console.log(i);
        if (guessedGame == games[i]) {
            alert("You are correct!");
            correctAnswer = true
            attempts = 0
            if (guessedGame == games[i]) {
                rightAnswers++
            }
            break;
        }
    }
    if (!correctAnswer) { alert("please try again") }

}
}

guessGames()

/*let myLocation = prompt("Do you think I am in San Diego?");
if (myLocation === "yes" || myLocation === "Yes" || myLocation === "Y" || myLocation === "y") {
    console.log("Wow, " + name + "you are correct!")
    alert("Wow, " + name + " you are correct!")
    if (myLocation === "yes" || myLocation === "Yes" || myLocation === "Y" || myLocation === "y") {
        rightAnswers++
    }

}
else {
    myLocation === "no" || myLocation === "No" || myLocation === "N" || myLocation === "n"
    console.log(name + " You are incorrect")
    alert(name + " You are incorrect")
};

let myLanguage = prompt("Do you think I can use JavaScript");
if (myLanguage === "yes" || myLanguage === "Yes" || myLanguage === "Y" || myLanguage === "y") {
    console.log("Wow, " + name + " I am just learning")
    alert("Wow, " + name + " I am just learning")
    if (myLanguage === "yes" || myLanguage === "Yes" || myLanguage === "Y" || myLanguage === "y") {
        rightAnswers++
    }
}
else {
    myLanguage === "no" || myLanguage === "No" || myLanguage === "N" || myLanguage === "n"
    console.log("Sorry " + name + " Well you could start today!")
    alert("Sorry " + name + " Well you could start today")
};

let myGame = prompt("Do I play Xbox?");
if (myGame === "yes" || myGame === "Yes" || myGame === "Y" || myGame === "y") {
    console.log("Wow, " + name + "I do play Xbox")
    alert("Wow, " + name + " I do play Xbox!")
    if (myGame === "yes" || myGame === "Yes" || myGame === "Y" || myGame === "y") {
        rightAnswers++
    }
}
else {
    myGame === "no" || myGame === "No" || myGame === "N" || myGame === "n"
    console.log("Wow " + name + " Of course I do!!")
    alert("Wow  " + name + " Of course I do")
};

let myWork = prompt(name + " Did I finish my lab today?");
if (myWork === "yes" || myWork === "Yes" || myWork === "Y" || myWork === "y") {
    console.log("Wow, " + name + " I barely finished before 11:59")
    alert("Wow, " + name + " I barely finished before 11:59")
    if (myWork === "yes" || myWork === "Yes" || myWork === "Y" || myWork === "y") {
        rightAnswers++
    }
}
else {
    myWork === "no" || myWork === "No" || myWork === "N" || myWork === "n"
    console.log("Sorry " + name + " I guess that is 20 pts off")
    alert("Sorry " + name + " I guess that is 20 pts off")
};
let correctAnswer = 3;
for (let i = 0; i <= 3; i++) {
    console.log(i)
    let guessedNumber = prompt("I am thinking of a number 1-10")
    if (guessedNumber == correctAnswer) {
        alert("You are correct!");
        if (guessedNumber == correctAnswer) { rightAnswers++ };
        break;
    }
    if (guessedNumber < correctAnswer) { alert("Your answer is too low") }
    if (guessedNumber > correctAnswer) { alert("Your number is too high!") }
    if (i == 3) { alert("done") }
}
let games = ["Halo", "Apex", "Pokemon", "Destiny"];
let attempts = 6;
console.log(games)
while (attempts > 0) {
    attempts--;
    console.log("attempts left ", attempts);
    let correctAnswer = false

    let guessedGame = prompt("what is one of my favorite games?")
    for (let i = 0; i <= games.length; i++) {
        console.log(i);
        if (guessedGame == games[i]) {
            alert("You are correct!");
            correctAnswer = true
            attempts = 0
            if (guessedGame == games[i]) {
                rightAnswers++
            }
            break;
        }
    }
    if (!correctAnswer) { alert("please try again") }

}
alert("you got " + rightAnswers + " right answers")*/