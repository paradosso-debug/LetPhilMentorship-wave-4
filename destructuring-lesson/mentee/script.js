// =============================
//  OBJECT DESTRUCTURING
// =============================
// STEP 1: Create an object called 'user' with name, age, and country
// STEP 2: Destructure name and age, then log them

// STEP 3: Create a 'settings' object with darkMode and notifications
// STEP 4: Destructure darkMode and log it

// STEP 5: Create a 'car' object and destructure make and model

// STEP 6: Create a 'book' object and destructure title and pages

const user = { name: "Gina", age: 33, country: "Mexico" };
const { name, age } = user;

console.log(name);
console.log(age);

const settings = { darkMode: true, notifications: true };
const { darkMode } = settings;

console.log(darkMode);

const car = { make: "toyota", model: "camry", color: "black" };
const { make, model } = car;

console.log(make);
console.log(model);

const book = {
  title: "Ghost in the Wires",
  pages: "282",
  author: "Kevin Mitnick",
};
const { title, pages } = book;

console.log(title);
console.log(pages);
// =============================
//  ARRAY DESTRUCTURING
// =============================
// STEP 7: Create a 'fruits' array and destructure the first two fruits

// STEP 8: Create a 'numbers' array and destructure the first two values

// STEP 9: Create a 'colors' array and destructure the third item

// STEP 10: Create a 'tasks' array and destructure all three items

const fruits = ["kiwi", "mango", "dragon fruit"];
const [firstfruit] = fruits;
console.log(firstfruit);

const numbers = [0, 5, 10, 15, 20, 25];
const [firstNum, secondNum] = numbers;
console.log(firstNum);
console.log(secondNum);

const colors = ["purple", "green", "blue"];
const [, , thirdnum] = colors;
console.log(thirdnum);

const tasks = ["coding", "swimming", "driving backwards"];
const [firstTask, secondTask, thirdTask] = tasks;
console.log(firstTask);
console.log(secondTask);
console.log(thirdTask);

// =============================
//  FUNCTION PARAMS DESTRUCTURING
// =============================
// STEP 16: Create function printUser({ name, age }) and log values

function printUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
printUser({ name: "Tom", age: 89 });

// STEP 17: Create showProduct({ title, stock }) and log values

function showProduct({ title, stock }) {
  console.log(`Title: ${title}, Stock:${stock}`);
}
showProduct({ title: "Ghost in the Wires", stock: 282 });

// STEP 18: Create renderCity({ name, population }) and log values

function renderCity({ name, population }) {
  console.log(`Name: ${name}, Population: ${population}`);
}
renderCity({ name: "Shell City", population: 3000 });

// STEP 19: Create logBook({ title, pages }) and log values

function logBook({ title, pages }) {
  console.log(`${title} has ${pages} pages`);
}

logBook({ title: "The Helper", pages: 500, year: 1985 });

// =============================
//  VANILLA JS - REACT STYLE
// =============================
// STEP 11: Create a 'props1' object with name and age
// STEP 12: Destructure and use document.body.innerText to display them

const props1 = { name: "Ian", age: 29 };
const { name: x1, age: x2 } = props1;
document.body.innerText = `Hello ${x1}, youre ${x2} today!`;

// STEP 13: Do the same with a 'product' object (item, price)

// const product = { item: "birthday cake", price: 35 };
// const { item: i1, price: i2 } = product;
// document.body.innerText = `Your ${i1} has a price of ${i2}! Expensive!`;

const product = { item: "birthday cake", price: 35 };
const { item, price } = product;
document.body.innerText += `\nYour ${item} has a price of ${price}! Expensive!`;

// STEP 14: Do the same with a 'weather' object (city, temp)

const weather = { city: "Tokyo", temp: 22 };
const { city, temp } = weather;
document.body.innerText += `\nWeather in ${city} is ${temp}`;

// STEP 15: Do the same with a 'movie' object (name, rating)

const movie = { title2: "Shogun", rating: "R" };
const { title2, rating } = movie;
document.body.innerText += `\nThe movie ${title2} is rated ${rating}!`;
