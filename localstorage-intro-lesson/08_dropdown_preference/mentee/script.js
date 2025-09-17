// Dropdown Language Preference - Mentee Version (JavaScript)
// GOAL: Save the selected language to localStorage and show a message in that language.
// IMPORTANT: Only write your code where instructed. Read every step carefully.

// 🧠 STEP 1: SELECT HTML ELEMENTS YOU WILL CONTROL
// INSTRUCTION:
// - Use document.getElementById to get the dropdown and the paragraph.
//   - Save them in variables named: languageSelect and message.

const languageSelect = document.getElementById("languageSelect");
const message = document.getElementById("message");

// 🗣️ STEP 2: CREATE A MESSAGES OBJECT (DICTIONARY)
// INSTRUCTION:
// - Make an object called messages with keys for each language code and a sentence for each.
// - EXACT keys: en, es, fr, de, ja  (must match the option values in HTML).
// - Example content (use these exact sentences to match the mentor version):
//     en: "Welcome! Your language is saved.",
//     es: "¡Bienvenida! Tu idioma se ha guardado.",
//     fr: "Bienvenue ! Votre langue a été enregistrée.",
//     de: "Willkommen! Ihre Sprache wurde gespeichert.",
//     ja: "ようこそ！言語が保存されました。"
// WHY: We’ll look up messages[chosenLanguage] when we update the UI.

const messages = {
  en: "Welcome! Your language is saved.",
  es: "¡Bienvenida! Tu idioma se ha guardado.",
  fr: "Bienvenue ! Votre langue a été enregistrée.",
  de: "Willkommen! Ihre Sprache wurde gespeichert.",
  ja: "ようこそ！言語が保存されました。",
};

// 🔧 STEP 3: WRITE A HELPER FUNCTION TO APPLY A LANGUAGE
// Name it: applyLang
// INSTRUCTION:
// - It should accept one parameter: lang (a string like "en").
// - Inside the function, do THREE things:
//   1) Set the <html> tag’s lang attribute: document.documentElement.setAttribute("lang", lang)
//      WHY: Helps accessibility and spell-checkers know the page language.
//   2) Update the dropdown’s selected value so the UI matches the current language.
//      HINT: languageSelect.value = lang
//   3) Update the paragraph’s text with messages[lang]. If missing, use messages.en as a fallback.
//      HINT: message.textContent = messages[lang] || messages.en

function applyLang(lang) {
  document.documentElement.setAttribute("lang", lang);
  languageSelect.value = lang;
  message.textContent = messages[lang] || messages.en;
}

// 💾 STEP 4: READ ANY PREVIOUSLY SAVED LANGUAGE FROM localStorage
// INSTRUCTION:
// - Use localStorage.getItem("language") to read the saved value (returns a STRING or null).
// - Save it in a variable named savedLang.
// WHY: localStorage always stores strings, e.g., "en", "es", etc.

const savedLang = localStorage.getItem("language");

// ✅ STEP 5: CHECK THAT THE SAVED VALUE IS A VALID OPTION
// INSTRUCTION:
// - We only trust savedLang if an <option> with that value exists in the dropdown.
// - Use querySelector on languageSelect to test it:
//     const optionExists = !!languageSelect.querySelector(`option[value="${savedLang}"]`);
// - This avoids applying a language that isn’t in the UI.
// Save the boolean result in a variable named optionExists.

const optionExists = !!languageSelect.querySelector(
  `option[value="${savedLang}"]`
);

// 🌐 STEP 6: DECIDE THE INITIAL LANGUAGE
// INSTRUCTION:
// - If optionExists is true, use savedLang; otherwise use "en".
// - Save the result in a variable named initialLang.

const initialLang = optionExists ? savedLang : "en";

// ▶️ STEP 7: APPLY THE INITIAL LANGUAGE ON PAGE LOAD
// INSTRUCTION:
// - Call your applyLang function with initialLang so the page shows the correct language immediately.

applyLang(initialLang);

// 💿 STEP 8: SAVE NEW CHOICES WHEN THE USER CHANGES THE DROPDOWN
// INSTRUCTION:
// - Add an event listener on languageSelect for the "change" event.
// - Inside the handler:
//     1) Read the newly selected value from languageSelect.value (store it in chosen).
//     2) Save it to localStorage under the key "language" using localStorage.setItem("language", chosen").
//        (Remember: localStorage stores strings; value is already a string.)
//     3) Call applyLang(chosen) to update the UI (html[lang], dropdown, paragraph).

languageSelect.addEventListener("change", () => {
  const chosen = languageSelect.value;
  localStorage.setItem("language", chosen);
  applyLang(chosen);
});

// 🧪 OPTIONAL DEBUGGING (helpful while learning)
// INSTRUCTION: After each step, add console.log checks (and then remove later):
// - console.log("savedLang:", savedLang);
// - console.log("optionExists:", optionExists);
// - console.log("initialLang:", initialLang);
// - console.log("current message:", message.textContent);

// ✅ YOU’RE DONE!
// RECAP:
// 1) You selected elements.
// 2) You created a messages dictionary.
// 3) You wrote applyLang(lang) to update html[lang], the dropdown, and the paragraph.
// 4) You read from localStorage and validated the saved value.
// 5) You chose a safe initial language and applied it.
// 6) You saved changes to localStorage and updated the UI immediately.
