"use strict";
console.log("meow meow");

if (localStorage.cats) {
  const catsFromLs = JSON.parse(localStorage.getItem("cats"));
  // console.log(catsFromLs);
  for (let i = 0; i < catsFromLs.length; i++) {
    let newCat = new Cat(catsFromLs[i].name);
    allCats.push(newCat);
  }
}

catForm.addEventListener("submit", handleCatSubmit);
