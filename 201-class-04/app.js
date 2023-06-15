// Function
// Function declaration - how we declare a function
// Function call / invoke - what we do to make a function run
// Scope:
//   - Variables declared inside a function are only available inside the //   /function
//      - They are known as locally scoped of local variables
//   - Functions declared outside the function are known to be globally scoped
//      - global variables are accessable anywhere
//   - Parameters allow us to specify input into a variable
//   - arguments are how we provide input to the function when we call it

"use strict";

console.log("boooooooya");

// what is a function
// function declaration

function sayHello() {
  console.log("Hello Wrld");
}

// invoke or call a function
sayHello();

// when you declare a function you have pramaters that give names to the functions inputs

function sayGoodBye(name) {
  console.log("good bye " + name);
}

// the data we pass into a function is called an argument
sayGoodBye("neo");

// if we want to pass information back to the program we can use a return statment

getFullName("winnie", "pooh");

function getFullName(firstName, secondName) {
  return firstName + " " + secondName;
}

let ada = getFullName("ada", "lovelace");
console.log("ada " + ada);

getFullName("sooty", "sweep");

console.log(getFullName("Jez", "Johns"));

function yesOrNoPrompt(promptInfo) {
  let userInput = prompt(promptInfo);
  if (userInput === "yess") {
    console.log("hurray");
  } else if (userInput === "no") {
    console.log("nope");
  } else if (userInput === "mabe") {
    console.log("make up your mind");
  } else {
    console.log("ERROR: incorrect useage");
  }
}

yesOrNoPrompt("well yess or no");
yesOrNoPrompt("how bout yess or no");

// myName("bungle");

const myName = function (name) {
  console.log(name);
};

myName("Anna");

const myArr = ["bananas", "ham", "eggs"];

console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
