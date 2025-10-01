# React Props (Explained with Vanilla JS Using Object Examples)

## 📦 What Are Props in React?

Props — short for **properties** — are how you pass data from one component to another in React.

- Think of props like a **JavaScript object** full of key-value pairs.
- The parent component _sends_ the data, and the child component _receives_ it as `props`.

```jsx
function Greeting(props) {
  return <p>Hello {props.name}</p>;
}
```

This is like giving someone a box (`props`) that contains specific values (`name`, `age`, etc.).

---

## ✅ Why Use Props?

1. **Data Sharing Across Components**  
   Props allow one component to pass data to another — essential in modular, reusable React apps.

2. **Component Reusability**  
   You can use the same component with different data by changing the props.

3. **Declarative Design**  
   React uses a one-way data flow. Props help enforce this clean, top-down structure.

4. **Organized UI Logic**  
   Props help break complex UIs into smaller, understandable pieces.

---

## 🌐 What Type of Websites Use Props?

Props are used in **any React-based website or app**, including:

- ✅ E-commerce sites (passing product data to product cards)
- ✅ Dashboards (passing user data to profile components)
- ✅ Media apps (passing song, video, or article metadata)
- ✅ Forms (passing config/settings into custom input components)
- ✅ Portfolio websites (passing project data into display components)

---

## 🧠 Bonus: Props Are Just Objects!

When you pass data via props, you’re really just sending a **JavaScript object**.

That means you can practice with plain objects in vanilla JS:

```js
const props = {
  name: "Joe",
  age: 32,
};

console.log(props.name);
```

---

## 🧪 Practice Examples

- Using dot notation to access object values
- Passing object into a function and accessing values (just like props)
- Displaying object values using `document.body.innerText`
