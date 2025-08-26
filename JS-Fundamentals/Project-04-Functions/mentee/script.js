// STEP 1: Create a function named sayHello that logs 'Hello!'
function sayHello() {
  console.log("Hello!");
}
sayHello();
// STEP 2: Create a function addNumbers that adds 2 numbers and logs the result

function addNumbers(a, b) {
  return a + b;
  //   console.log(a + b);
}

// addNumbers(3, 5);

let result = addNumbers(3, 5);
console.log(result);

// STEP 3: Create a function greetUser that takes a name and says hello
function greetUser(name) {
  console.log("hello " + name);
}

greetUser("Alex");

// STEP 4: Create a function that multiplies two numbers and logs it
function multiply(num1, num2) {
  return num1 * num2;
}

let product = multiply(2, 2);
console.log(product);

// STEP 5: Create a function that logs your favorite quote
function favoriteQuote() {
  console.log("sample quote");
}

favoriteQuote();

// STEP 6: Arrow function that subtracts two numbers
const subtract = (a, b) => {
  console.log(a - b);
};

subtract(10, 5);

// STEP 7: Arrow function that divides two numbers
const divide = (a, b) => {
  console.log(a / b);
};

divide(10, 5);

// STEP 8: Arrow function that checks if a number is even

const evenNumber = (num) => {
  if (num % 2 === 0) {
    console.log("True");
  } else {
    console.log("False");
  }
};

const isEven = (num) => (num % 2 === 0 ? "True" : "False");

// ternary operator

evenNumber(7);

// STEP 9: Arrow function that returns a greeting with a name
const greet = (name) => {
  //   console.log("hi " + name);
  console.log(`hi ${name}`);
};

greet("Diego");

// STEP 10: Arrow function that squares a number

const square = (num) => {
  console.log(num ** 2);
};

square(5);

// STEP 11: Arrow function that logs today’s date

const todaysDate = () => {
  //   console.log("8/25/2025");
  console.log(new Date().toDateString());
};

todaysDate();
