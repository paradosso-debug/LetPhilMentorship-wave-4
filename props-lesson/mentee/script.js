// =============================
// BASIC PROPS STYLE (Intro to props via objects and functions)
// =============================

// STEP 1: Create a function called displayUser(props)
// STEP 2: Inside the function, access props.name and props.age and log them
// STEP 3: Create a user object with name and age, and call displayUser(user)

// STEP 4: Create a function called showProduct(props)
// STEP 5: Access props.title and props.price and log them
// STEP 6: Create a item object and call showProduct(product)

function displayUser(props) {
  console.log(props.name, props.age);
}

const user = {
  name: "Dylan",
  age: "30",
};

displayUser(user);

function showProduct(props) {
  console.log(props.title, props.price);
}

const product = {
  price: "$500",
  title: "Playstation 7",
};

showProduct(product);

// =============================
//  VANILLA JS - REACT STYLE (props object used in document.body)
// =============================

// STEP 1: Create a 'props1' object with name and age
// STEP 2: Access props1.name and props1.age and use document.body.innerText to show them

let props1 = {
  name: "Diego",
  age: "24",
};

document.body.innerText = `hi ${props1.name}, my age is ${props1.age}. `;

// STEP 3: Create a 'item2' object with title and price
// STEP 4: Show item title and price in document.body.innerText

const item2 = {
  title: "Playstation 7",
  price: "$500",
};

document.body.innerText += `\nThe ${item2.title}, costs ${item2.price}! `;

// STEP 5: Create a 'weather' object with city and temp
// STEP 6: Show city and temp in document.body.innerText

const weather = {
  city: "Tokyo",
  temp: "68",
};

document.body.innerText += `\nThe temp in ${weather.city} is ${weather.temp} degrees farenheit `;

// STEP 7: Create a 'movie' object with name and rating
// STEP 8: Show movie rating in document.body.innerText

const movie = {
  name: "Example movie",
  rating: "PG",
};

document.body.innerText += `\n${movie.name} is rated ${movie.rating}. `;

// =============================
// FUNCTION PARAMS (props passed into functions)
// =============================

// STEP 9: Define a function logUser(props) and access props.name and props.age
// STEP 10: Define a function showCity(props) with city and country
// STEP 11: Define a function displayBook(props) with title and author
// STEP 12: Define a function productInfo(props) with title and price

function logUser(props) {
  console.log(props.name, props.age);
}

logUser({ name: "Jocelin", age: 32 });

function showCity(props) {
  console.log(props.city, props.country);
}

showCity({ city: "Miami", country: "United States" });

function displayBook(props) {
  console.log(props.title, props.author);
}

displayBook({ title: "Harry Potter", author: " J.K Rowling" });

// =============================
// OBJECT STYLE PRACTICE
// =============================

// STEP 13: Create a props object and log props.name and props.age

// STEP 14: Pass props into a function and use dot notation inside

// STEP 15: Create a product object and pass it into a displayProduct function

// STEP 16: Show a city object on the page using document.body.innerText
