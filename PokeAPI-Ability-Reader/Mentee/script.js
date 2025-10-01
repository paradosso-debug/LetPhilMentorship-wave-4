// ===========================
// Pokémon List + Abilities
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
