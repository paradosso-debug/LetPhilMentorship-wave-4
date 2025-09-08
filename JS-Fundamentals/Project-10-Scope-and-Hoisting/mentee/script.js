// =============================================================
// Project 10 – Scope & Hoisting (Mentee Version)
// Complete each step with your own code
// =============================================================

// ---------- STEP 1: Create a secret number ----------
// Use Math.floor(Math.random() * 10) + 1
// Store it in a variable called secret using const
// Log the secret number to the console for testing

const secret = Math.floor(Math.random() * 10) + 1;
console.log(secret);

// ---------- STEP 2: Select DOM elements ----------
// Use getElementById to grab:
// - the input field (id="guessInput")
// - the button (id="guessBtn")
// - the message paragraph (id="message")

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const message = document.getElementById("message");

// ---------- STEP 3: Add a click event listener to the button ----------
// Inside the function:
// - Get the user's guess using input.value
// - Convert it to a number
// - Compare it to the secret number
// - If it matches, update message.innerText to say "You win!"
// - If not, say "Try again."

guessBtn.addEventListener("click", function () {
  const userGuess = Number(guessInput.value);
  if (userGuess === secret) {
    message.innerText = "You win!";
  } else {
    message.innerText = "Try again.";
  }
});

// ---------- STEP 4: Try moving the secret number INSIDE the click event function ----------
// What changes? Does it reset every time?

// =============================================================
// BONUS 1: Scope Demo
// =============================================================

// A. Create a global variable and log it

let random = "random words";
console.log(random);

// B. Create a function with a local variable
// - Log the variable inside the function
// - Try logging it outside the function (it should cause an error)

function local() {
  let myName = "Dylan";
  console.log(myName);
}

local();
// =============================================================
// BONUS 2: Hoisting Demo
// =============================================================

// A. Call a function before it’s declared (this should work)
// - Define a simple function using function declaration syntax

hoisting();

function hoisting() {
  console.log("Hoisting this function");
}

// B. Try logging a var before it’s declared (should log undefined)

// C. Try logging a let before it's declared (should cause ReferenceError)
// - Uncomment the line to test the error

startGame();

function startGame() {
  showWelcome();
  setUpBoard();
}

function showWelcome() {
  console.log("welcome");
}

function setUpBoard() {
  console.log("setting up board");
}
