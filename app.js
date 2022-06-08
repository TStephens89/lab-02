'use strict'

let name = prompt("What is your name?");
console.log("Users name is " + name);
alert("Oh Hello " + name);

let myAge = prompt("Do you think I am 33?");
if (myAge === "yes" || myAge === "Yes" || myAge === "Y" || myAge === "y") {
    console.log("Wow, " + name + "you are correct!")
    alert("Wow, " + name + " you are correct!")
}
else {
    myAge === "no" || myAge === "No" || myAge === "N" || myAge === "n"
    console.log("Sorry " + name + " I actually am 33")
    alert("Sorry " + name + " I actually am 33")
};

let myLocation = prompt("Do you think I am in Seattle?");
if (myLocation === "yes" || myLocation === "Yes" || myLocation === "Y" || myLocation === "y") {
    console.log("Wow, " + name + "you are incorrect!")
    alert("Wow, " + name + " you are incorrect!")
}
else {
    myLocation === "no" || myLocation === "No" || myLocation === "N" || myLocation === "n"
    console.log(name + " How did you know where I am?")
    alert(name + " How did you know where I am?")
};

let myLanguage = prompt("Can you use JavaScript");
if (myLanguage === "yes" || myLanguage === "Yes" || myLanguage === "Y" || myLanguage === "y") {
    console.log("Wow, " + name + " I am just learning")
    alert("Wow, " + name + " I am just learning")
}
else {
    myLanguage === "no" || myLanguage === "No" || myLanguage === "N" || myLanguage === "n"
    console.log("Sorry " + name + " Well you could start today!")
    alert("Sorry " + name + " Well you could start today")
};

let myGame = prompt("Do you play Xbox?");
if (myGame === "yes" || myGame === "Yes" || myGame === "Y" || myGame === "y") {
    console.log("Wow, " + name + "I knew you were cool!")
    alert("Wow, " + name + " I knew you were cool!")
}
else {
    myGame === "no" || myGame === "No" || myGame === "N" || myGame === "n"
    console.log("Wow " + name + " that is kind of lame")
    alert("Wow  " + name + " that is kind of lame")
};

let myWork = prompt(name + " Did you finish your lab today?");
if (myWork === "yes" || myWork === "Yes" || myWork === "Y" || myWork === "y") {
    console.log("Wow, " + name + " I barely finished before 11:59")
    alert("Wow, " + name + " I barely finished before 11:59")
}
else {
    myWork === "no" || myWork === "No" || myWork === "N" || myWork === "n"
    console.log("Sorry " + name + " I guess that is 20 pts off")
    alert("Sorry " + name + " I guess that is 20 pts off")
};

