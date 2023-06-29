"use strict";
console.log("meow");

const catForm = document.getElementById("catForm");
console.log(catForm);
const catList = document.getElementById("catlist");

const allCats = [];

function Cat(name) {
  this.name = name;
  this.render = function () {
    const listItem = document.createElement("li");
    listItem.textContent = this.name;
    catList.appendChild(listItem);
  };
}
