// 🧠 STEP 1: SELECT ELEMENTS FROM THE PAGE
// Select the input where users type their todo (id="todoInput")
// Select the button to add the todo (id="addBtn")
// Select the unordered list where todos will appear (id="todoList")

const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// 💾 STEP 2: LOAD TODOS FROM LOCALSTORAGE
// Try to get the key "todos" from localStorage
// If it exists, parse the JSON string into an array
// If it doesn’t exist, start with an empty array
// Display any saved todos

const todoItems = JSON.parse(localStorage.getItem("todos")) || [];
renderTodos();

// 🎯 STEP 3: ADD A TODO
// When the user types something and clicks the button:
// - create a new todo string
// - add it to the todos array
// - save the updated array to localStorage
// - update the page and clear the input

addBtn.addEventListener("click", () => {
  const toDoString = todoInput.value.trim();
  todoItems.push(toDoString);
  localStorage.setItem("todos", JSON.stringify(todoItems));
  renderTodos();
  todoInput.value = "";
});

// 🔄 STEP 4: RENDER TODOS
// - Clear the list
// - Loop through todos and create a <li> for each
// - Add a ❌ button to delete the todo

function renderTodos() {
  todoList.innerHTML = "";
  todoItems.forEach((item, index) => {
    const newListItem = document.createElement("li");
    newListItem.textContent = item;

    const removeItemBtn = document.createElement("button");
    removeItemBtn.textContent = "❌";
    removeItemBtn.addEventListener("click", () => {
      todoItems.splice(index, 1);
      localStorage.setItem("item", JSON.stringify(item));
      renderTodos();
    });
    newListItem.appendChild(removeItemBtn);
    todoList.appendChild(newListItem);
  });
}
