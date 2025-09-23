// 🧠 STEP 1: Get references to the HTML elements by their ID
// - This lets us access the user's input, the button they click, and where we’ll display the result.
// The text input where the user types the Pokémon's name
// The button the user clicks to trigger the search
// The container (div) where we'll show the Pokémon info

// 🧠 STEP 2: Add a click event listener to the button
// - This means: "When the button is clicked, run this function."

// 🧠 STEP 3: Get what the user typed from the input field
// - .value gets the text the user entered
// - .toLowerCase() converts it to lowercase so the API matches (e.g., "Pikachu" → "pikachu")
// - .trim() removes any extra spaces before or after

// 🧠 STEP 4: Create the URL we’ll use to fetch from the PokéAPI
// - We insert the user’s input into the URL using backticks and ${} - `https://pokeapi.co/api/v2/pokemon/${name}`

// 🧠 STEP 5: Fetch data from the PokéAPI using await
// - We "pause" here until the response comes back
// - fetch() sends a request to the URL

// 🧠 STEP 6: Check if the response was successful
// - If not, throw an error message that we’ll catch later

// 🧠 STEP 6.5: Convert the response to JSON so we can use the data
// - .json() is another async method, so we use await again

// 🧠 STEP 7: Pull out the info we need from the API response
// - data.sprites.front_default is the image URL of the Pokémon
// - data.types is an array, so we get the first type using [0]

// 🧠 STEP 8: Update the HTML of the result div with the Pokémon's info
// - We use backticks (`) and ${} to insert values into HTML

// 🧠 STEP 9: If something goes wrong, show the error message to the user
// - This could happen if the Pokémon doesn’t exist or the API is down

const pokemonInput = document.getElementById("pokemonInput");
const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");

searchBtn.addEventListener("click", async () => {
  const pokemonName = pokemonInput.value.toLowerCase().trim();

  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("pokemon not found");

    const data = await response.json();

    const image = data.sprites.front_default;
    const type = data.types[0].type.name;

    result.innerHTML = `<img src="${image}" alt= "${pokemonName}">
    <h2>${data.name}</h2>
    <p>Type: ${type}</p>
    `;
  } catch (err) {
    // if (! response.ok) throw new Error ("Missingno...");
    result.innerHTML = `<p style="color:red"> ${err.message}</p>`;
  }
});
