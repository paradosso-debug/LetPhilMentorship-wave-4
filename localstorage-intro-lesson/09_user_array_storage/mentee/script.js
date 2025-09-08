// 🧠 Step 1: Use document.getElementById to select all relevant elements
// - Select the inputs for name and email using their ids: "nameInput" and "emailInput"
// - Select the button with id="addUserBtn"
// - Select the <ul> element with id="userList" to display the users

// 💾 Step 2: Load users from localStorage
// - Check if there is a key "users" in localStorage
// - If yes, parse the string back into an array using JSON.parse
// - If not, start with an empty array
// Display the list immediately on load

// 🧑‍💻 Step 3: Add new user when button is clicked
// - Create a new object with name and email values from the inputs
// - Push the object to the users array
// - Save the updated array to localStorage using JSON.stringify()
// - Clear the input fields and update the list on screen

// 🖼️ Step 4: Display users on the screen
// - Clear the current list
// - Loop through the users array and create an <li> for each one
// - Add a remove ❌ button next to each user
// - When clicked, it removes the user from the array and updates localStorage
