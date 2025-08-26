// STEP 1: Check if a score is greater than 80 and log 'Great job!'
let score = 80;

if (score > 80) {
  console.log("Great Job!");
}

// STEP 2: Check if age is less than 18 and log 'You are a minor'
let age = 17;

if (age < 18) {
  console.log("You are a minor");
}

// STEP 3: Use if/else to check if isHungry is true
let isHungry = true;

if (isHungry) {
  console.log("true");
} else {
  console.log("false");
}

// STEP 4: Use if/else if/else to check grade level

let grade = 50;

if (grade >= 90) {
  console.log("You got an A");
} else if (grade >= 80) {
  console.log("You got a B");
} else {
  console.log("You got a C, D, or F");
}

// STEP 5: Use an if to check if isLoggedIn is false
let isLoggedIn = false;

if (isLoggedIn) {
  console.log("Logged in");
} else {
  console.log("Not logged in");
}

if (!isLoggedIn) {
  console.log("Not logged in");
}

// STEP 6: Use a conditional to check if temperature > 30
let temp = 15;

console.log(temp > 30 ? "True" : "False");
