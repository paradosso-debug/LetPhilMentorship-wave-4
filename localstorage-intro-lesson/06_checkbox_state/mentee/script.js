// 🧠 STEP 1: SELECT THE CHECKBOX ELEMENT
// Use document.getElementById() to select the checkbox (id="subscribeCheckbox").

// 💾 STEP 2: LOAD CHECKED STATE FROM localStorage
// Use localStorage.getItem("isSubscribed") to see if it was saved as "true" or "false".
// If "true", set checkbox.checked = true.

// 🎯 STEP 3: SAVE CHECKED STATE WHEN USER TOGGLES THE BOX
// Add a "change" event listener to the checkbox.
// Inside the listener:
// - Get the current checkbox state (true or false)
// - Save it using localStorage.setItem("isSubscribed", value)
