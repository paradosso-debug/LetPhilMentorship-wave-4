// 🧠 STEP 1: Select the dropdown, button, and image container using document.getElementById
// - These elements let us know which breed the user picked, when to run the code, and where to display the dog image.

// 🧠 STEP 2: Add an event listener to the button
// - This function will run every time the user clicks the "Show Dog" button.

// 🧠 STEP 3: Get the selected breed from the dropdown
// - .value gets the breed that the user chose (like "pug" or "dalmatian")

// 🧠 STEP 4: Build the API URL using the selected breed
// - We insert the breed into the URL using a template literal - `https://dog.ceo/api/breed/${breed}/images/random`

// 🧠 STEP 5: Use fetch() with await to get a random dog image
// - The fetch call waits for the response to come back from the Dog API

// 🧠 STEP 6: Convert the response into a JavaScript object
// - The .json() method returns a Promise, so we use await again

// 🧠 STEP 7: Get the image URL from the response data
// - The image URL is inside the "message" property

// 🧠 STEP 8: Display the image by setting the innerHTML of the container
// - We use an <img> tag with the URL and style it to fit nicely

// 🧠 STEP 9: If something goes wrong (like no internet), show an error message

const breedSelect = document.getElementById("breedSelect");
const fetchBtn = document.getElementById("fetchBtn");
const imageContainer = document.getElementById("imageContainer");

fetchBtn.addEventListener("click", async () => {
  const breed = breedSelect.value;

  const url = `https://dog.ceo/api/breed/${breed}/images/random`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const imageUrl = data.message;
    imageContainer.innerHTML = `<img src="${imageUrl}" alt="${breed}" style= "width: 100%; border-radius 8px;"/>`;
  } catch (error) {
    imageContainer.innerHTML = `<p style="color:red"> Image not loaded</p>`;
  }
});
