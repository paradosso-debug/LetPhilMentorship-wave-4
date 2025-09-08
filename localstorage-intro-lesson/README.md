# 🧠 What is localStorage?

`localStorage` is a built-in feature in modern web browsers that allows websites to **store data directly in the user's browser**. This means your website can remember important information like names, preferences, or settings — even after the user **closes the tab** or **refreshes the page**. 🔄💾

🧠 Analogy: localStorage is Like a Personal Locker at the Gym 🏋️‍♀️
Imagine you walk into a gym and the front desk gives you a locker with a number on it.

You can put your stuff inside (like your water bottle, shoes, or phone)
You have the key — only you can open it while you're there
Even if you leave the gym and come back the next day, your locker still has your things inside (unless you manually clear it out)

---

## 🔑 Key Characteristics

- Stores data as **key-value pairs** (both keys and values must be strings)
- Stored data **does not expire**
- Accessible only from the domain that stored it
- If you want to save an object or array, you must use:
  `JSON.stringify()` to save it
  `JSON.parse()` to load it back

---

## 🛠 Common localStorage Methods

| Method                                 | Purpose                |
| -------------------------------------- | ---------------------- |
| `localStorage.setItem("key", "value")` | Save data              |
| `localStorage.getItem("key")`          | Retrieve data          |
| `localStorage.removeItem("key")`       | Delete a specific key  |
| `localStorage.clear()`                 | Delete all stored data |

---

## 📚 Why is localStorage Useful?

It allows you to:

- Save user preferences (like theme or language)
- Store usernames or login states
- Persist todo lists or form data
- Count visits or interactions
- Create simple games with saved progress

---

## 🧪 Example Usage

```js
// Save a name
localStorage.setItem("username", "Favio");

// Get the name
const name = localStorage.getItem("username");
console.log(name); // "Favio"

// Remove the name
localStorage.removeItem("username");

// Clear all storage
localStorage.clear();
```

---

## Reminder

Everything stored in localStorage is a string.

To store and retrieve arrays or objects, use JSON.stringify() and JSON.parse() like this:

```js
const user = { name: "Ofelia", age: 32 };

// Save it as a string
localStorage.setItem("user", JSON.stringify(user));

// Retrieve and convert it back to an object
const savedUser = JSON.parse(localStorage.getItem("user"));
console.log(savedUser.name); // "Ofelia"
```
