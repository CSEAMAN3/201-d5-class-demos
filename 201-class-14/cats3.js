"use strict";
console.log("meow meow moew");

const catButton = document.getElementById("catButton");

const handleCatButtonClick = function () {
  const catsFromLs = JSON.parse(localStorage.getItem("cats"));
  for (let i = 0; i < catsFromLs.length; i++) {
    const newCat = new Cat(catsFromLs[i].name);
    allCats.push(newCat);
    newCat.render();
  }
};

catButton.addEventListener("click", handleCatButtonClick);
