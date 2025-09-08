// 🧠 Step 1: Use document.getElementById to select elements from the HTML
// - Select the toggle button with id="toggleThemeBtn"
// - Select the icon element with id="themeIcon"
// - Select the <body> tag so we can apply the theme class

// 💾 Step 2: Load the saved theme (if any) from localStorage
// - Get the value for key "pageTheme" from localStorage
// - If the theme is "dark", add a class "dark" to the body
// - Also update the icon textContent to a moon emoji 🌙
// - If it's not dark, keep it as light and set the icon to sun emoji ☀️

// 🎯 Step 3: Add a click event listener to the toggle button
// - When clicked, toggle the "dark" class on the body
// - Save the new theme ("dark" or "light") to localStorage
// - Update the icon to reflect the current theme
