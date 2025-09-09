// 🧠 STEP 1: SELECT THE BUTTON AND BODY
// Use document.getElementById() to select the button with id="toggleThemeBtn"
// We also select the <body> element so we can add/remove a CSS class for dark mode

const toggleThemeBtn = document.getElementById("toggleThemeBtn");
console.log(toggleThemeBtn);
const body = document.body;

// 💾 STEP 2: LOAD SAVED THEME ON PAGE LOAD
// Check localStorage for the key "theme"
// If the value is "dark", we add a class of "dark" to the body to enable dark mode

const mode = localStorage.getItem("theme");
if (mode === "dark") {
  body.classList.add("dark");
}

// 🎯 STEP 3: TOGGLE THE THEME WHEN THE BUTTON IS CLICKED
// When the user clicks the button:
// - toggle the "dark" class on the body
// - save the current theme in localStorage as "dark" or "light"

toggleThemeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDarkTheme = body.classList.contains("dark");
  if (isDarkTheme) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
