// 🧠 STEP 1: SELECT ELEMENTS
// - Select the checkbox element using document.getElementById("subscribeCheckbox")
// - Select the status paragraph element with id="statusText"
// - Select the reset button with id="resetBtn"
// Write your code here

const checkbox = document.getElementById("subscribeCheckBox");
const statusText = document.getElementById("statusText");
const resetBtn = document.getElementById("resetBtn");

// 💾 STEP 2: LOAD SAVED STATE FROM localStorage
// - Use localStorage.getItem("isSubscribed") to check if there’s a saved value
// - Compare it to the string "true" to decide if it should be checked
// - Set checkbox.checked based on the result
// - Update the statusText to show "Subscribed ✅" or "Not subscribed ❌"
// Write your code here

// 🎯 STEP 3: UPDATE STATE WHEN CHECKBOX CHANGES
// - Add a "change" event listener to the checkbox
// Inside the listener:
//   - Save the new state using localStorage.setItem("isSubscribed", checkbox.checked)
//   - Update the status paragraph text accordingly
//   - Update aria-pressed for accessibility ("true" or "false")
// Write your code here

// 🔄 STEP 4: RESET FUNCTIONALITY
// - Add a "click" event listener to the reset button
// Inside the listener:
//   - Use localStorage.removeItem("isSubscribed") to clear saved state
//   - Uncheck the checkbox
//   - Reset the statusText to "Not subscribed ❌"
//   - Reset aria-pressed to "false"
// Write your code here
