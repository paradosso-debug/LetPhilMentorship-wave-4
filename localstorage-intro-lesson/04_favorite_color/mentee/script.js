// 🧠 STEP 1: SELECT ELEMENTS FROM THE PAGE
// Use document.getElementById() to select the elements you need:
// - An input where the user types their favorite color (id="colorInput")
// - A button the user clicks to save the color (id="saveColorBtn")
// - A display area where the color will be shown (id="colorDisplay")

const colorInput = document.getElementById("colorInput");
const saveColorBtn = document.getElementById("saveColorBtn");
const colorDisplay = document.getElementById("colorDisplay");

// 💾 STEP 2: LOAD SAVED COLOR FROM localStorage
// Use localStorage.getItem("favoriteColor") to check if a color was saved before.
// If a saved color exists:
// - Set the display text to that color
// - Optionally change the text color to match for visual feedback

const savedColor = localStorage.getItem("favoriteColor");
if (savedColor) {
  colorDisplay.textContent = savedColor;
  colorDisplay.style.color = savedColor;
}

// 🎯 STEP 3: SAVE COLOR WHEN BUTTON IS CLICKED
// Add a click event listener to the "Save Color" button.
// Inside the event listener:
// - Get the current value from the input field
// - Save it using localStorage.setItem("favoriteColor", value)
// - Update the display area with the color and style.

saveColorBtn.addEventListener("click", () => {
  const favColor = colorInput.value;
  localStorage.setItem("favoriteColor", favColor);
  colorDisplay.textContent = favColor;
  colorDisplay.style.color = favColor;
});
