"use strict";
console.log("You're pawsome!");

// Constructor Function, a "Factory" for creating object instances.
// instanciate the object name with a captalised first letter.

function Kitten(name, interests, isGoodWithKids, isGoodWithDogs, isGoodWithCats, imgFileName) {
  this.name = name;
  // this.age = 0;
  this.interests = interests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithCats = isGoodWithCats;
  this.imageUrl = "images/" + imgFileName;
  this.age = this.generateAge();
  this.render();
}

// const eric = new Kitten();
// const bob = new Kitten();
// console.log(eric);
// console.log(bob);

Kitten.prototype.generateAge = function () {
  return randomAge(3, 11) + " months";
};

Kitten.prototype.render = function () {
  // get the container for our kitten profile cards
  const containerElement = document.getElementById("kittenProfiles");

  // each Kitten profile is an article
  const article = document.createElement("article");
  containerElement.appendChild(article);

  // add the article heading
  const h3 = document.createElement("h3");
  h3.textContent = this.name;
  article.appendChild(h3);

  // add a bio with kitten age
  const p = document.createElement("p");
  p.textContent = `${this.name} is adorable and is ${this.age} old.`;
  article.appendChild(p);

  // add interests in an unordered list
  const ul = document.createElement("ul");
  article.appendChild(ul);
  for (let i = 0; i < this.interests.length; i++) {
    const li = document.createElement("li");
    li.textContent = this.interests[i];
    ul.appendChild(li);
  }

  // add a table to display what the kitten is good with
  const table = document.createElement("table");
  article.appendChild(table);

  // add the header row
  const headerRow = document.createElement("tr");
  table.appendChild(headerRow);

  // add the table header cells
  const kidsHeaderCell = document.createElement("th");
  kidsHeaderCell.textContent = "Kids";
  headerRow.appendChild(kidsHeaderCell);

  const dogsHeaderCell = document.createElement("th");
  dogsHeaderCell.textContent = "Dogs";
  headerRow.appendChild(dogsHeaderCell);

  const catsHeaderCell = document.createElement("th");
  catsHeaderCell.textContent = "Cats";
  headerRow.appendChild(catsHeaderCell);

  // add data row
  const dataRow = document.createElement("tr");
  table.appendChild(dataRow);

  // add data cell
  const kidsData = document.createElement("td");
  kidsData.textContent = this.isGoodWithKids;
  dataRow.appendChild(kidsData);

  const dogsData = document.createElement("td");
  dogsData.textContent = this.isGoodWithDogs;
  dataRow.appendChild(dogsData);

  const catsData = document.createElement("td");
  catsData.textContent = this.isGoodWithCats;
  dataRow.appendChild(catsData);

  // add the cats image
  const image = document.createElement("img");
  image.setAttribute("src", this.imageUrl);
  image.setAttribute("alt", `${this.name} profile shot.`);
  article.appendChild(image);
};

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const eric = new Kitten("eric", ["cuddling", "chasing string", "catnip"], true, false, true, "eric.jpg");
const anna = new Kitten("anna", ["hand gliding", "sipping milk", "fomula one"], true, false, true, "anna.jpg");
const val = new Kitten("val", ["sword fighting", "sushi bars", "extreme ironing"], true, true, false, "val.jpg");
const batcat = new Kitten("batcat", ["fighting crime", "caves", "being rich"], true, true, true, "batcat.jpg");

console.log(eric);
console.log(anna);
console.log(val);

// eric.render();
// anna.render();
// val.render();
