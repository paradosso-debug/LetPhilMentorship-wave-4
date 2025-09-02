// ---------- STEP 1: Create a profile object ----------
// Create an object called profile with these properties:
// - name
// - age
// - job
// - email

let profile = {
  name: "Alice",
  age: 30,
  job: "Web Developer",
  email: "alicethedev@example.com",
};

// ---------- STEP 2: Add a method called .toString() ----------
// This method should return a string like:
// "Alice, 30 years old, works as a Web Developer. Contact: alice@example.com"

profile.toString = function () {
  return `${this.name}, ${this.age} years old, works as a ${this.job}. contact: ${this.email}`;
};
console.log(profile);

// ---------- STEP 3: Create a function called renderProfile() ----------
// This function should:
// 3.1 – Select all <span> elements with a data-key attribute
// 3.2 – Loop through each span using forEach
// 3.3 – Use dataset.key to get the property name
// 3.4 – Update span.innerText with profile[key]

function renderProfile() {
  const spanTags = document.querySelectorAll("span[data-key]");
  spanTags.forEach((span) => {
    const key = span.dataset.key;
    span.innerText = profile[key];
  });
}

// ---------- STEP 4: Create a function called updateEmail() ----------
// This function should:
// 4.1 – Use prompt() to ask the user for a new email
// 4.2 – If the user enters something, update profile.email
// 4.3 – Select the span with data-key="email" and update its text

function updateEmail() {
  const newEmail = prompt("Enter a new email");
  if (newEmail) {
    profile.email = newEmail;
    const emailSpan = document.querySelector("span[data-key='email']");
    emailSpan.innerText = profile.email;
    console.log("Updated email:", profile.email);
  }
}

// ---------- STEP 5: Log the profile summary when the page loads ----------
// Use console.log() and call profile.toString()

console.log(profile.toString());

// ---------- STEP 6: Add an event listener for the update button ----------
// 6.1 – Use getElementById to select the button
// 6.2 – Add a "click" listener that calls updateEmail()

const updateBtn = document.getElementById("updateBtn");
updateBtn.addEventListener("click", updateEmail);

// ---------- STEP 7: Call renderProfile() when the page first loads ----------
// This shows the initial profile values in the HTML

renderProfile();
