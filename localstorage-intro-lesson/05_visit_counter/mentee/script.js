// 🧠 STEP 1: LOAD SAVED VISIT COUNT FROM localStorage
// Use localStorage.getItem("visitCount") to get the saved value.
// If no value exists (null), default to 0 using a ternary operator.

let visitCount = localStorage.getItem("visitCount");
visitCount = visitCount ? parseInt(visitCount) : 0;

// 🔢 STEP 2: INCREMENT THE COUNT
// Add 1 to the count to track the current visit.

visitCount++;

// 💾 STEP 3: SAVE THE NEW COUNT BACK TO localStorage
// Use localStorage.setItem() to store the updated visit count.

localStorage.setItem("visitCount", visitCount);

// 🖥️ STEP 4: DISPLAY THE VISIT COUNT
// Use document.getElementById() to select the element that will show the count (id="visitDisplay").
// Update its textContent to tell the user how many times they’ve visited.

const visitCountDisplay = document.getElementById("visitDisplay");
visitCountDisplay.textContent = `You have visited this page ${visitCount} times.`;
