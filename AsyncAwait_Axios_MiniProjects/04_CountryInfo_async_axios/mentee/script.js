// 🧠 STEP 1: Select the input, button, and display container using document.getElementById
// - We're grabbing references to HTML elements so we can interact with them in JavaScript.
// - `getElementById("id")` lets us target elements using their `id` attribute from the HTML.
// The text input where the user types the country name (e.g., "Mexico")
// The button the user clicks to trigger the API call
// The div where we’ll show the country info (flag, name, capital, etc.)

// 🧠 STEP 2: Add an event listener that waits for the button to be clicked
// - `addEventListener("click", ...)` runs a function every time the button is clicked
// - We mark the function as `async` so we can use `await` inside it (to pause until the API responds)

// 🧠 STEP 3: Get the country name that the user typed
// - `.value` gets the current text inside the input box
// - `.trim()` removes any extra spaces before or after (e.g., " Mexico " → "Mexico")

// 🧠 STEP 4: Build the API URL
// - We insert the country name into the REST Countries API URL using a template literal (`...`)
// - Example result: https://restcountries.com/v3.1/name/mexico

// 🧠 STEP 5: Use axios to fetch data from the API
// - `axios.get(url)` sends a GET request to the API and returns a Promise
// - `await` tells JavaScript to "pause here" until the API sends back the data

// 🧠 STEP 6: Extract useful data from the API response
// - `response.data` is an array of country objects; we use the first one with [0]
// - `data.name.common` gives us the country's name (e.g., "Mexico")
// - `data.capital[0]` gives us the first capital city (e.g., "Mexico City")
// - `data.population` gives us the number of people in the country
// - `.toLocaleString()` adds commas (e.g., 128932753 → 128,932,753)
// - `data.flags.svg` is the URL of the flag image

// 🧠 STEP 7: Show the country info on the web page using innerHTML
// - innerHTML lets us insert HTML elements as a string
// - We use backticks `` and ${} to insert variables inside the HTML string

// 🧠 STEP 8: If something goes wrong (e.g., country not found), show an error message
// - The error might be because the country doesn't exist or the API is down
