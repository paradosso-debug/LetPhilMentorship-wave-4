// 🧠 STEP 1: Select dropdown, button, and result display element
// - These elements let us interact with what the user selects and where to show the data
// User selects the crypto coin
// Button the user clicks to check price
// Where we show the result

// 🧠 STEP 2: Add a click event listener to the button
// - When the user clicks the button, we start the async function

// 🧠 STEP 3: Get the selected crypto symbol from the dropdown
// - .value gets the current choice, e.g. "bitcoin"

// 🧠 STEP 4: Build the API URL using a template string
// - The CoinGecko API needs the coin name in the URL - `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`

// 🧠 STEP 5: Use axios.get to fetch the price data
// - await pauses until the data is returned

// 🧠 STEP 6: Extract the USD price from the returned data
// - response.data[crypto].usd gives the price of the selected coin

// 🧠 STEP 7: Show the result on the page using innerHTML
// - We use backticks and ${} to insert dynamic values

// 🧠 STEP 8: Show an error message if the fetch fails

const cryptoSelect = document.getElementById("cryptoSelect");
const checkBtn = document.getElementById("checkBtn");
const priceDisplay = document.getElementById("priceDisplay");

checkBtn.addEventListener("click", async () => {
  const crypto = cryptoSelect.value;

  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`;

  try {
    const response = await axios.get(url);
    const price = response.data[crypto].usd;
    priceDisplay.innerHTML = `<h2>${crypto.toUpperCase()}</h2> <p>Current price: ${price}</p>`;
  } catch (error) {
    priceDisplay.innerHTML = `<p style='color:red; font:bold'>Failed to look up crypto</p>`;
  }
});

