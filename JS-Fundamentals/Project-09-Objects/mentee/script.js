// STEP 1: Create an object to store a person's name and age
// STEP 2: Log the person's name using dot notation
// STEP 3: Add a new property 'country' to the object
// STEP 4: Update the age property to a new number
// STEP 5: Loop through the object keys using for...in
// STEP 6: Create a method inside the object and call it

// ---------- STEP 1: Create a profile object ----------
// Create an object called profile with these properties:
// - name
// - age
// - job
// - email

// ---------- STEP 2: Add a method called .toString() ----------
// This method should return a string like:
// "Alice, 30 years old, works as a Web Developer. Contact: alice@example.com"

// ---------- STEP 3: Create a function called renderProfile() ----------
// This function should:
// 3.1 – Select all <span> elements with a data-key attribute
// 3.2 – Loop through each span using forEach
// 3.3 – Use dataset.key to get the property name
// 3.4 – Update span.innerText with profile[key]

// ---------- STEP 4: Create a function called updateEmail() ----------
// This function should:
// 4.1 – Use prompt() to ask the user for a new email
// 4.2 – If the user enters something, update profile.email
// 4.3 – Select the span with data-key="email" and update its text

// ---------- STEP 5: Log the profile summary when the page loads ----------
// Use console.log() and call profile.toString()

// ---------- STEP 6: Add an event listener for the update button ----------
// 6.1 – Use getElementById to select the button
// 6.2 – Add a "click" listener that calls updateEmail()

// ---------- STEP 7: Call renderProfile() when the page first loads ----------
// This shows the initial profile values in the HTML
