// ===========================
// Pokémon List + Abilities — Instructional Steps (IDENTICAL for Mentor & Mentee)
// ===========================
// STEP 1 — Select DOM elements
// - Use document.getElementById to select and store references to:
//   - (List panel) "pokemonList", "prevBtn", "nextBtn", "limit20Btn", "limit50Btn", "limit100Btn", "pageInput", "goPageBtn", "pageLabel"
//   - (Detail panel) "detailPanel"
//   - (Search) "pokeNameInput", "loadPokeBtn"
//
// STEP 2 — Define constants and state
// - Create POKEMON_LIST_BASE = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
// - Create state: currentListUrl (start as POKEMON_LIST_BASE), nextListUrl (null), prevListUrl (null), currentLimit (20), currentCount (null)
//
// STEP 3 — Helper: fetchJson(url)
// - Make an async function that:
//   - uses fetch(url)
//   - awaits response.json()
//   - wraps in try/catch and throws/prints a readable error if the request fails
//
// STEP 4 — Render the Pokémon list
// - Make function renderPokemonList(results) that:
//   - clears the list container
//   - loops results (array of {name, url})
//   - creates <li><button type="button" class="poke-btn" data-name="..." data-url="...">name</button></li>
//   - appends each <li> to pokemonList
//
// STEP 5 — Load a list page (pagination)
// - Make async function loadPokemonList(url) that:
//   - calls fetchJson(url) to get the JSON (object with count, next, previous, results)
//   - updates currentCount = data.count; nextListUrl = data.next; prevListUrl = data.previous
//   - calls renderPokemonList(data.results)
//   - enables/disables Prev/Next depending on whether those URLs exist
//   - updates currentListUrl to the url you just loaded
//   - (optional) parse currentLimit from the URL's ?limit=...
//   - **update the page label** by parsing offset & limit → page = Math.floor(offset/limit) + 1
//   - compute totalPages = Math.ceil(currentCount / currentLimit) and show: "Page X of Y (limit L)"
//
// STEP 6 — Render Pokémon abilities
// - Make function renderPokemonAbilities(pokemonJson) that:
//   - builds a heading with pokemonJson.name
//   - renders a list of ability buttons: <button class="ability-btn" data-url="...">name</button>
//   - shows " (hidden)" for abilities with is_hidden = true
//   - includes a placeholder element (e.g., #abilityDetail) where ability detail text will appear
//
// STEP 7 — Load Pokémon by name or from list
// - Make async function loadPokemonAbilities(nameOrUrl) that:
//   - if nameOrUrl looks like a URL, fetch it directly
//   - else normalize the string (trim/lower) and fetch /pokemon/{name}/
//   - on success, call renderPokemonAbilities(json); on error, show a helpful message
//
// STEP 8 — Show ability detail on click
// - Make async function showAbilityDetail(detailUrl) that:
//   - fetches ability JSON
//   - finds the English entry in effect_entries (language.name === "en")
//   - renders the ability name and English short_effect in the placeholder
//
// STEP 9 — Wire up events
// - pokemonList click → if target has class "poke-btn", read data attributes and call loadPokemonAbilities
// - prevBtn/nextBtn click → loadPokemonList(prevListUrl/nextListUrl) if available
// - limit20Btn/limit50Btn/limit100Btn → set currentLimit, rebuild currentListUrl with offset=0 and the selected limit; then loadPokemonList
// - loadPokeBtn click or Enter in pokeNameInput → call loadPokemonAbilities(pokeNameInput.value)
// - Go to page N → read pageInput (integer ≥ 1), compute offset = (page - 1) * currentLimit, build URL with offset & currentLimit, then load
//
// STEP 10 — (Optional) Initial load
// - On DOMContentLoaded, auto-call loadPokemonList(currentListUrl) so students see data right away


// ===========================
// Mentor Implementation
// ===========================

// STEP 1 — Select DOM elements
const pokemonList = document.getElementById("pokemonList");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const limit20Btn = document.getElementById("limit20Btn");
const limit50Btn = document.getElementById("limit50Btn");
const limit100Btn = document.getElementById("limit100Btn");
const pageInput = document.getElementById("pageInput");
const goPageBtn = document.getElementById("goPageBtn");
const pageLabel = document.getElementById("pageLabel");
const detailPanel = document.getElementById("detailPanel");
const pokeNameInput = document.getElementById("pokeNameInput");
const loadPokeBtn = document.getElementById("loadPokeBtn");

// STEP 2 — Define constants and state
const POKEMON_LIST_BASE = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
let currentListUrl = POKEMON_LIST_BASE;
let nextListUrl = null;
let prevListUrl = null;
let currentLimit = 20;
let currentCount = null;

// STEP 3 — Helper: fetchJson(url)
async function fetchJson(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error("Fetch failed:", err);
    throw err;
  }
}

function parseOffsetFromUrl(url) {
  try { const m = (url||"").match(/[?&]offset=(\d+)/i); return m ? parseInt(m[1], 10) : null; } catch { return null; }
}
function parseLimitFromUrl(url) {
  try { const m = (url||"").match(/[?&]limit=(\d+)/i); return m ? parseInt(m[1], 10) : null; } catch { return null; }
}

// STEP 4 — Render the Pokémon list
function renderPokemonList(results) {
  pokemonList.innerHTML = "";
  results.forEach((item) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "poke-btn";
    btn.dataset.name = item.name;
    btn.dataset.url = item.url;
    btn.textContent = item.name;
    li.appendChild(btn);
    pokemonList.appendChild(li);
  });
}

// STEP 5 — Load a list page (pagination)
async function loadPokemonList(url) {
  try {
    const data = await fetchJson(url);
    currentCount = data.count;
    nextListUrl = data.next;
    prevListUrl = data.previous;
    renderPokemonList(data.results);
    prevBtn.disabled = !prevListUrl;
    nextBtn.disabled = !nextListUrl;
    currentListUrl = url;

    // keep currentLimit in sync with the URL we just loaded
    const maybeLimit = parseLimitFromUrl(url) || parseLimitFromUrl(nextListUrl) || parseLimitFromUrl(prevListUrl);
    if (maybeLimit) currentLimit = maybeLimit;

    // update current page label from offset & limit and total count
    let offset = parseOffsetFromUrl(url);
    if (offset == null && prevListUrl) offset = parseOffsetFromUrl(prevListUrl);
    if (offset == null && nextListUrl) offset = parseOffsetFromUrl(nextListUrl) - currentLimit; // rough fallback
    if (offset == null) offset = 0;
    const pageNum = Math.floor(offset / currentLimit) + 1;
    const totalPages = currentCount ? Math.ceil(currentCount / currentLimit) : "?";
    if (pageLabel) pageLabel.textContent = `Page ${pageNum} of ${totalPages} (limit ${currentLimit})`;
  } catch {
    pokemonList.innerHTML = `<li>Failed to load Pokémon list. Please try again.</li>`;
  }
}

// STEP 6 — Render Pokémon abilities
function renderPokemonAbilities(pokemonJson) {
  const name = pokemonJson.name;
  const abilities = pokemonJson.abilities || [];
  const items = abilities.map(a => {
    const abilityName = a.ability?.name || "(unknown)";
    const abilityUrl = a.ability?.url || "#";
    const hidden = a.is_hidden ? " (hidden)" : "";
    return `<li><button type="button" class="ability-btn" data-url="${abilityUrl}">${abilityName}${hidden}</button></li>`;
  }).join("");

  detailPanel.innerHTML = `
    <h3 style="margin:.2rem 0 0">${name}</h3>
    <p style="margin:.4rem 0"><strong>Abilities (click for detail):</strong></p>
    <ul>${items || "<li>(none found)</li>"}</ul>
    <div id="abilityDetail" style="margin-top:.8rem;"></div>
  `;
}

// STEP 7 — Load Pokémon by name or from list
async function loadPokemonAbilities(nameOrUrl) {
  let url;
  if (/^https?:/i.test(nameOrUrl)) {
    url = nameOrUrl;
  } else {
    const n = (nameOrUrl || "").trim().toLowerCase();
    if (!n) {
      detailPanel.innerHTML = "<em>Please enter a Pokémon name.</em>";
      return;
    }
    url = `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(n)}/`;
  }

  try {
    const data = await fetchJson(url);
    renderPokemonAbilities(data);
  } catch {
    detailPanel.innerHTML = "<em>Pokémon not found. Try names like pikachu, bulbasaur, eevee…</em>";
  }
}

// STEP 8 — Show ability detail on click
async function showAbilityDetail(detailUrl) {
  try {
    const data = await fetchJson(detailUrl);
    const name = data.name;
    const entryEn = (data.effect_entries || []).find(e => e.language?.name === "en") || null;
    const shortText = entryEn?.short_effect || "(No English summary provided.)";

    const slot = document.getElementById("abilityDetail");
    if (slot) {
      slot.innerHTML = `
        <h4 style="margin:.6rem 0 0">${name}</h4>
        <p style="margin:.3rem 0 0">${shortText}</p>
      `;
    }
  } catch {
    const slot = document.getElementById("abilityDetail");
    if (slot) slot.innerHTML = "<em>Failed to load ability details.</em>";
  }
}

// STEP 9 — Wire up events
pokemonList.addEventListener("click", (evt) => {
  const btn = evt.target.closest(".poke-btn");
  if (!btn) return;
  const nameOrUrl = btn.dataset.url || btn.dataset.name;
  loadPokemonAbilities(nameOrUrl);
});

prevBtn.addEventListener("click", () => {
  if (prevListUrl) loadPokemonList(prevListUrl);
});
nextBtn.addEventListener("click", () => {
  if (nextListUrl) loadPokemonList(nextListUrl);
});

function buildListUrl(offset, limit) {
  const l = Number(limit) || 20;
  const o = Math.max(0, Number(offset) || 0);
  return `https://pokeapi.co/api/v2/pokemon?offset=${o}&limit=${l}`;
}
limit20Btn.addEventListener("click", () => {
  currentLimit = 20;
  loadPokemonList(buildListUrl(0, currentLimit));
});
limit50Btn.addEventListener("click", () => {
  currentLimit = 50;
  loadPokemonList(buildListUrl(0, currentLimit));
});
limit100Btn.addEventListener("click", () => {
  currentLimit = 100;
  loadPokemonList(buildListUrl(0, currentLimit));
});

goPageBtn.addEventListener("click", () => {
  const page = parseInt(pageInput.value, 10);
  if (!page || page < 1) {
    pageInput.value = "";
    pageInput.placeholder = "Enter page ≥ 1";
    return;
  }
  const offset = (page - 1) * currentLimit;
  loadPokemonList(buildListUrl(offset, currentLimit));
});
pageInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") goPageBtn.click();
});

loadPokeBtn.addEventListener("click", () => loadPokemonAbilities(pokeNameInput.value));
pokeNameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") loadPokemonAbilities(pokeNameInput.value);
});

detailPanel.addEventListener("click", (evt) => {
  const btn = evt.target.closest(".ability-btn");
  if (!btn) return;
  const url = btn.dataset.url;
  if (url) showAbilityDetail(url);
});

// STEP 10 — (Optional) Initial load
document.addEventListener("DOMContentLoaded", () => {
  loadPokemonList(currentListUrl);
});
