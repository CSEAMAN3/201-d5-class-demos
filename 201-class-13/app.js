"use strict";
console.log("I am your father");

let darkMode = false;

// add event listeners to the buttons
document.getElementById("darkButton").addEventListener("click", enterDarkMode);

document.getElementById("lightButton").addEventListener("click", enterLightMode);

//  create a dark mode function
function enterDarkMode() {
  let body = document.body;
  let welcome = document.getElementById("welcome");
  let button = document.getElementById("darkButton");
  body.classList.remove("light");
  welcome.classList.remove("light");
  body.classList.add("dark");
  welcome.classList.add("dark");
  button.setAttribute("checked", "checked");
  // local storage
  darkMode = true;
  // console.log(darkMode);
  saveMode();
}

function enterLightMode() {
  let body = document.body;
  let welcome = document.getElementById("welcome");
  let button = document.getElementById("lightButton");
  body.classList.remove("dark");
  welcome.classList.remove("dark");
  body.classList.add("light");
  welcome.classList.add("light");
  button.setAttribute("checked", "checked");
  //local storage
  darkMode = false;
  // console.log(darkMode);
  saveMode();
}

function saveMode() {
  let mode = JSON.stringify(darkMode);
  localStorage.setItem("darkMode", mode);
}

function pageLoad() {
  let storedMode = JSON.parse(localStorage.getItem("darkMode"));
  // console.log(storedMode);
  if (storedMode === null) {
    console.log("null");
    return;
  }
  if (storedMode === false) {
    console.log("light");
    enterLightMode();
  } else if (storedMode) {
    console.log("dark");
    enterDarkMode();
  }
}
pageLoad();
// localStorage.clear();
