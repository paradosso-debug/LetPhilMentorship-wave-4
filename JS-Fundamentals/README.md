# JavaScript Fundamentals:

Welcome to your JavaScript journey! 🎉  
These projects introduce you to the **core programming concepts** used in every JavaScript app. Each one includes 6 beginner-friendly exercises.

## ✅ Project 1: Variables

### 🔑 What You Will Learn

Variables let you **store information** for later use.

### 🧠 Key Concepts

- `const` = a variable that cannot change
- `let` = a variable that can change
- Use variables to store text, numbers, etc.

### Why Do We Need Variables?

Without variables, your code wouldn’t “remember” anything.
Variables allow you to:

Store data (like names, scores, or user input)
Reuse values without repeating yourself
Update values when things change (like scores in a game!)
Make code readable and organized

---

## ✅ Project 2: Data Types

### 🔑 What You Will Learn

JavaScript uses different **data types** to represent information.

### 🧠 Key Concepts

| Type          | Example               | Description                   |
| ------------- | --------------------- | ----------------------------- |
| **String**    | `"Hello"`             | Text, always in quotes        |
| **Number**    | `42`, `3.14`          | Any number (whole or decimal) |
| **Boolean**   | `true`, `false`       | Yes/no, on/off, true/false    |
| **Undefined** | `undefined`           | No value was assigned yet     |
| **Null**      | `null`                | Empty on purpose              |
| **Object**    | `{ name: "Jocelin" }` | Stores key-value pairs        |
| **Array**     | `["apple", "banana"]` | List of values                |

<!-- const person = {
  name: "Jocelin",
  age: 32,
  hobby: "coding"
} -->
<!--
const fruits = ["apple", "grapes", "kiwi"];

fruits.forEachfruit => console.log(fruit) -->

### 🧾 Why Do Data Types Matter?

They help the computer understand how to handle the data.

For example:

Numbers can be added.
Text can be combined.
Booleans are used in decisions (true/false).

### 📌 Examples:

- Create variables with each data type and log their types using `typeof`.

---

## ✅ Project 3: Operators

### 🔑 What You Will Learn

Operators are used to **calculate values** and **compare data**.

### 🧠 Key Concepts

- Math: `+`, `-`, `*`, `/`, `%`
- Comparison: `>`, `<`, `===`, `==` `!==`

### 📌 Examples:

- Perform math (add, multiply, subtract, divide)
- Compare values using `>` `==` and `===`

6 == "6" true
6 === "6" false

0 == undefined = false
0 == null = false

## null == undefined = true

## ✅ Project 4: Functions

### 🔑 What You Will Learn

Functions let you **group code together** to reuse it.

### 🧠 Key Concepts

- Use the `function` keyword to define a block of code
- A **parameter** is a placeholder inside the function that lets you receive values
- An **argument** is the actual value you pass when you call the function
- Call functions using `functionName()` or `functionName(argument)`

### 📦 Functions = Little Machines

Think of a function like a machine:

- **Parameters** = the input slots
- **Arguments** = the real things you put in
- Inside the machine, some logic happens
- The function may output something based on that logic

```js
function sayHi(name) {
  console.log("Hi!" + name);
}

sayHi("John"); // Output: Hi John!
```

| Part       | Purpose                                      |
| ---------- | -------------------------------------------- |
| `function` | Keyword to define a function                 |
| `sayHi`    | Function name                                |
| `()`       | Accepts inputs (parameters) if needed        |
| `{}`       | Block of code to execute when function runs  |
| `sayHi()`  | Calling the function with optional arguments |

## ✅ Why Do We Use Functions?

---

Functions help us:

1. ♻️ **Reuse code** — no need to repeat yourself!
2. 🧼 **Organize** logic into chunks that make sense
3. 📦 **Accept input** (like ingredients to a recipe)
4. 🎁 **Return output** (like the finished product)

### 📌 Examples:

### Basic Function Example

```js
function greet() {
  console.log("Hello, world!");
}

greet(); // Output: Hello, world!
```

### Function with Parameters (Input)

```js
function greetUser(name) {
  console.log("Hello, " + name + "!");
}

greetUser("John"); // Output: Hello, John!
greetUser("Kevin"); // Output: Hello, Kevin!
```

- name is a parameter (placeholder for input)
- "John" and "Kevin" are arguments (real input values)

---

### Function with Return Value (Output)

```js
function add(a, b) {
  return a + b;
}

let result = add(3, 4);
console.log(result); // Output: 7
```

- return gives back a value that you can store or use later

### Arrow Function Syntax

```js
const greet = (name) => {
  console.log("Hi, " + name);
};

greet("Ana"); // Output: Hi, Ana
```

---

### Summary

| Concept          | Example                  | Purpose                               |
| ---------------- | ------------------------ | ------------------------------------- |
| Function (basic) | `function greet() {}`    | Block of code to reuse                |
| Parameters       | `function greet(name)`   | Placeholder for inputs                |
| Arguments        | `greet("Jocelin")`       | Real input values                     |
| Return           | `return a + b;`          | Send a value back                     |
| Arrow Function   | `const greet = () => {}` | Shorter syntax for defining functions |

## ✅ Project 5: Conditionals

### 🔑 What You Will Learn

Conditionals let your program **make decisions** based on values.

### 🧠 Key Concepts

- `if`, `else if`, and `else` are used for decision-making
- Inside the parentheses of an `if()` statement, you write a **condition**
- A condition is any **expression that returns true or false** (a boolean)

- 🧠 Think of it like this:
  "If it's raining, I’ll bring an umbrella. Else, I won’t."
  Your code checks a condition — if it's true, it runs one thing. If it's false, it can run something else.

### 📌 Examples:

- Check age and score
- Show different messages depending on a user's input or a condition

### ✅ if Statement – One Way Decision

```js
let age = 18;

if (age >= 18) {
  console.log("You can vote!");
}
```

If the condition age >= 18 is true, the code inside {} runs.
If it’s false, nothing happens.

### 🔄 if...else – Two Way Decision

```js
let age = 16;

if (age >= 18) {
  console.log("You can vote!");
} else {
  console.log("Sorry, you're too young.");
}
```

If the condition is true → run the first block.
If it's false → run the second block (else).

### 🔄 if...else if...else – Multi-Path Decision

```js
let score = 85;

if (score >= 90) {
  console.log("A grade");
} else if (score >= 80) {
  console.log("B grade");
} else if (score >= 70) {
  console.log("C grade");
} else {
  console.log("You need to study more.");
}
```

JavaScript checks each condition in order.
It runs the first true condition and ignores the rest.

---

### Summary

| Statement             | What It Does                                              |
| --------------------- | --------------------------------------------------------- |
| `if`                  | Runs a block only if condition is **true**                |
| `if...else`           | Runs one block if **true**, another if **false**          |
| `if...else if...else` | **Checks multiple conditions**, runs the first `true` one |

## ✅ Project 6: Loops

### 🔑 What You Will Learn

Loops let you **repeat tasks** efficiently.

### 🧠 Key Concepts

- `for` loops = run code multiple times
- Use arrays and `.length` to loop through lists

---

### 🔁 What Is a for Loop?

A for loop lets you repeat a block of code multiple times — automatically!

- 🧠 Think of it like a robot on a factory line that repeats the same task again and again until told to stop.

---

### ✅ Why Do We Use for Loops?

They’re useful when:

You want to do something a set number of times
You want to go through (loop over) items in an array or list
You want to save time and avoid repeating code manually

### 🔬 How a `for` loop works under the hood

A `for` loop has **three parts**:

```js
for (start; condition; step) {
  // do something
}

for (let i = 0; i < 5; i++) {
  console.log("Hello!");
}
```

- 🧠 This will print “Hello!” five times.

| Part        | Meaning                                             |
| ----------- | --------------------------------------------------- |
| `let i = 0` | Start at 0 (initialization)                         |
| `i < 5`     | Keep going **while** `i` is less than 5 (condition) |
| `i++`       | Add 1 to `i` after each loop (increment)            |
| `{ ... }`   | The code block that runs each time through the loop |

### 📌 Examples:

- Count up and down
- Print items from an array or characters from a string

---

### 📚 JavaScript Fundamentals – **Projects 7 → 10**

Welcome, new coder!  
These four mini-projects will gently walk you from **“I’ve never touched JavaScript”** to **“I can make a page react, store data, and debug weird errors.”**  
Each project adds one new skill-set while re-using the previous ones, so by the end you’ll have a **basic but solid “developer toolbox.”**

---

## ✅ **Project 7 – Events & the DOM**

### 1. Project Overview

Create a small web page with **three buttons** and two paragraphs. When you click different buttons, the page text changes, colors update, and console messages appear.

### 2. Why You Need This

Every modern website—from Amazon’s “Add to Cart” to Google’s search bar—**listens** for user actions (events) and then updates the page (DOM manipulation). Knowing how to do this is “Web Dev 101.”

### 3. Core Concepts (with micro-examples)

| Concept                         | Beginner Definition                                   | Tiny Code Demo                                              | Everyday Analogy                                                              |
| ------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **DOM (Document Object Model)** | JavaScript’s _in-memory_ representation of your HTML. | `document.title = "New tab name"`                           | A LEGO model of your house: move a brick here, the real house (page) changes. |
| `document.getElementById()`     | Grabs _one_ element by its unique **id**.             | `const title = document.getElementById("title");`           | Looking up a friend’s phone number by their unique ID card.                   |
| `document.querySelector()`      | Grabs the **first** element matching a CSS selector.  | `const firstBtn = document.querySelector("button");`        | Asking, “Fetch me the first red apple from the basket.”                       |
| `document.querySelectorAll()`   | Returns **all** matches as a _static_ NodeList.       | `const allBtns = document.querySelectorAll(".action-btn");` | Getting _photos_ of all apples right now (the list won’t auto-update).        |
| `addEventListener("click", cb)` | Runs `cb` every time the element is clicked.          | `firstBtn.addEventListener("click", sayHi);`                | Wiring a doorbell: every press rings a sound.                                 |
| `.innerText`                    | Reads or changes the _visible_ text inside a tag.     | `message.innerText = "Hello world";`                        | Swapping out a sticky note’s message.                                         |
| `.classList.add("highlight")`   | Adds a CSS class (for styling) via JavaScript.        | `title.classList.add("highlight");`                         | Putting a fluorescent sticker on a box so it stands out.                      |

### 4. What You’ll Build (Step List)

1. Create `index.html` with an `<h1>` and **three** `<button>` elements.
2. Link `script.js` **below** the HTML so the DOM exists before JS runs.
3. In `script.js`:
   1. Grab each button using a _different_ selector method.
   2. Write `showPrimaryMessage()`, `showSecondaryMessage()`, and `dangerAlert()`.
   3. Add event listeners so each button triggers its matching function.
   4. Use `.innerText` and `.classList` to visibly change the page.
   5. Log messages to prove each function fired.
4. Open your browser’s **Console** (F12 → “Console” tab) and watch the logs as you click.

### 5. Checkpoint Questions

1. What’s the difference between `querySelector` and `querySelectorAll`?
2. Why must the `<script>` tag go **after** the HTML body for this simple project?
3. If `getElementsByClassName` returns a _live_ collection, how would adding a new `<p class="info">` in the click handler affect its `.length`?

---

## ✅ **Project 8 – Arrays**

### 1. Project Overview

Build a “guest list” manager. Users can add names, remove the last name, and see the total guest count update in real time.

### 2. Why You Need This

Games store high scores 🏆, shops track cart items 🛒—**any time you have a list**, you’ll use an array.

### 3. Core Concepts

| Concept                                | Definition                                   | Mini Demo                       | Analogy                                       |
| -------------------------------------- | -------------------------------------------- | ------------------------------- | --------------------------------------------- |
| Array `[]`                             | Ordered list of values, starting at index 0. | `let guests = ["Ana", "Luis"];` | An egg carton—12 slots in order.              |
| `.push(item)`                          | Adds item to **end**.                        | `guests.push("Marco");`         | Placing a new egg in the last slot.           |
| `.pop()`                               | Removes & returns last item.                 | `const leaving = guests.pop();` | Taking the last egg out.                      |
| `.length`                              | Number of items.                             | `console.log(guests.length);`   | Counting eggs in the carton.                  |
| `for (let i = 0; i < arr.length; i++)` | Classic loop through each element.           | —                               | Reading each student name off the roll sheet. |

### 4. What You’ll Build

1. HTML: text input, **Add** button, **Remove Last** button, `<ul>` for list, `<p>` for total count.
2. JS:
   - Declare `let guestList = []`.
   - On **Add**, `.push()` the name, re-render `<li>` items, update count.
   - On **Remove Last**, `.pop()` then re-render.
   - Edge-case: if input is empty, alert the user.

---

## ✅ **Project 9 – Objects**

### 1. Project Overview

Make a “digital business card.” Store a person’s details in an object and render them on the page; allow editing a field to see live updates.

### 2. Why You Need This

APIs (Twitter, Spotify, Pokémon) send data as **objects**. Understanding objects lets you unlock real-world APIs later.

### 3. Core Concepts

| Concept          | Definition                        | Mini Demo                                        | Analogy                            |
| ---------------- | --------------------------------- | ------------------------------------------------ | ---------------------------------- |
| Object `{}`      | Collection of `key: value` pairs. | `const person = { name: "Rosa", city: "CDMX" };` | A labeled toolbox drawer.          |
| Dot notation     | Access by literal key.            | `person.name`                                    | Pulling the drawer labeled “name.” |
| Bracket notation | Access by variable key.           | `person[field]`                                  | Using a dynamic label.             |
| Method           | Function stored as a value.       | `person.sayHi = () => alert("Hi!");`             | A Swiss-army knife in the toolbox. |
| `for...in`       | Loop over keys.                   | `for (let key in person) { ... }`                | Reading each label in turn.        |

### 4. What You’ll Build

1. Declare `let profile = { name, age, job, email }` in JS.
2. On page load, fill placeholders (`<span data-key="name">___</span>`) with object values.
3. Create an **Update Email** button that prompts the user, updates `profile.email`, then re-renders only that field.
4. Add `profile.toString()` method returning a single summary string; log it when the page loads.

---

## ✅ **Project 10 – Scope & Hoisting**

### 1. Project Overview

Interactive “guess-the-number” game. You’ll explore how variable scope affects game state and use `var`, `let`, and `const` to see hoisting in action.

### 2. Why You Need This

Bugs like _“x is not defined”_ or _“unexpected undefined”_ usually boil down to **scope** or **hoisting** misunderstandings.

### 3. Core Concepts

| Concept                    | Definition                                                                                       | Gotcha Demo                                      | Analogy                                                        |
| -------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------ | -------------------------------------------------------------- |
| **Global Scope**           | Variable lives everywhere.                                                                       | `var x = 1;`                                     | House keys left on the living-room table.                      |
| **Function / Block Scope** | Lives only inside `{}`.                                                                          | `{ let y = 2; }`                                 | Keys locked in one bedroom.                                    |
| **Hoisting**               | JS moves _declarations_ to the top before code runs.                                             | `console.log(a); var a = 5; // prints undefined` | Reading the grocery list at 8 am even if it’s written at 8 pm. |
| `let` vs `var`             | `let` is block-scoped and not hoisted the same way.                                              | —                                                | `var` is an old, leaky bucket; `let` is a sealed container.    |
| Temporal Dead Zone (TDZ)   | Time between entering scope and `let`/`const` declaration where variable exists but is unusable. | `console.log(b); let b = 3; // ReferenceError`   | Grabbing a fridge handle before the fridge is delivered.       |

### 4. What You’ll Build

1. On load, pick a random number 1–10 (`const secret`).
2. User guesses via an `<input>` field + **Guess!** button.
3. If guess is correct, display “You win!” else “Try again.”
4. **Scope Experiment:** Place `secret` _outside_ vs _inside_ the click handler and observe.
5. **Hoisting Experiment:** Intentionally log a `var` before it’s declared; compare with `let`.
