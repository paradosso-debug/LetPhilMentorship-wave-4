// ---------- STEP 1: Create the array ----------
// Create an empty array called guestList to store names

// ---------- STEP 2: Select the DOM elements ----------
// Use getElementById to select:
// - the input field (#guestInput)
// - the Add button (#addBtn)
// - the Remove Last button (#removeBtn)
// - the <ul> list (#guestList)
// - the <p> with the total count (#totalCount)

// ---------- STEP 3: Create a function called renderList() ----------
// Inside the function:
// 3.1 – Clear the existing <ul> content using innerHTML
// 3.2 – Use a for loop to go through guestList
// 3.3 – For each name:
//       - create a new <li> element
//       - set its innerText to the guest name
//       - append it to the <ul>
// 3.4 – Update the totalCount paragraph with guestList.length

// ---------- STEP 4: Create a function called handleAdd() ----------
// Inside the function:
// 4.1 – Get the value from the input box and trim it
// 4.2 – If the value is empty, alert the user and stop the function
// 4.3 – Otherwise, use push() to add the name to guestList
// 4.4 – Clear the input field
// 4.5 – Call renderList() to update the UI

// ---------- STEP 5: Create a function called handleRemoveLast() ----------
// Inside the function:
// 5.1 – If the array is empty, alert the user and stop
// 5.2 – Otherwise, use pop() to remove the last name
// 5.3 – Call renderList() to update the UI

// ---------- STEP 6: Add event listeners ----------
// Add a click event to the Add button that calls handleAdd()
// Add a click event to the Remove Last button that calls handleRemoveLast()

// ---------- STEP 7: Call renderList() at the end ----------
// This makes sure the list is empty and count is 0 when the page loads
