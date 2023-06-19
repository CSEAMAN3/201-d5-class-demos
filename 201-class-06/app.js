"use strict";
console.log("You're one cool kitty");

// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats

const cat = {
  name: "Bob",
  age: 0,
  interests: ["cuddling", "chasing string", "catnip"],
  isGoodWithKids: true,
  isGoddWithDogs: false,
  isGoddWithCats: true,
  getAge: function () {
    // console.log(this.age);
    this.age = randomAge(3, 11) + " months";
    // console.log(this.age);
  },
};

// console.log(cat);

// console.log(cat.name);
// console.log(cat["isGoodWithKids"]);

// update the key value pairs of the object
// cat.age = 3;
cat["name"] = "eric";
// console.log(cat);

// add new key value pairs to the object
cat.hasClaws = true;
cat["breed"] = "Siamese";
// console.log(cat);

function randomAge(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// invoke / call the method inside the function
cat.getAge();
// console.log(cat);

// Notes on how the return value is calculated. Taken from stack overflow
// Say we want a random number from 5-15 (including both 5 and 15 as possible results). Well, we're going to have to work with Math.random(), which only produces values from 0 through approximately 0.99999999999999, so we need to do two tricks to be able to work with this.

// The first trick is recognizing that Math.random()'s lowest possible return value is 0, and 0 times anything is 0, so we need to start our range at 0 and adjust to account for this at the end. Instead of calculating 5-15 from the beginning, we recognize that there are 11 values in 5-15 (5, 6, 7, 8, 9, 10, 11, 12, 13, 14, and 15) and count up that many from 0 (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10) to use 0-10 as our range instead. This is what the myMax - myMin part of the formula does. It defines our new max as 10. Then, at the end of the calculations, we'll just add 5 back to whatever result we get to make the possible result range change from 0-10 to 5-15. This is what the + myMin part of the formula does.

// The second trick is recognizing that multiplying Math.random() by our new max range of 10 can only give us a result as high as about 9.999999999999 because Math.random() only goes as high as about 0.99999999999 (never actually 1). When we Math.floor() that later to make it an integer, it brings the result down to 9, so we need to add 1 there to make the maximum possible value 10 instead of 9. That's what the + 1 part of the formula does.

// DOM Manipulation

// Get an element by its id and store it in a variable named parentElement
const parentElement = document.getElementById("kittenProfiles");
console.log(parentElement);

const article = document.createElement("article");
parentElement.appendChild(article);

const h3 = document.createElement("h3");
h3.textContent = cat.name;
article.appendChild(h3);

const p = document.createElement("p");
// p.textContent = cat.name + " is adorable, and is " + cat.age + " old.";
p.textContent = `${cat.name} is adorable, and is ${cat.age} old.`;
article.appendChild(p);

const ul = document.createElement("ul");
article.appendChild(ul);

for (let i = 0; i < cat.interests.length; i++) {
  const li = document.createElement("li");
  li.textContent = cat.interests[i];
  ul.appendChild(li);
}

const img = document.createElement("img");
img.setAttribute("src", "images/" + cat.name + ".jpg");
img.setAttribute("alt", cat.name + "looking great!");
article.appendChild(img);
