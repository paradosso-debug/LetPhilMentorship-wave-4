# PokéAPI — Browse Pokémon (with Pagination) and See Their Abilities

This mini-project teaches how to read **JSON** from an API and map it to UI:

- Left panel: a **paginated Pokémon list** using query parameters (`offset`, `limit`).
- Right panel: when you select a Pokémon (or search by name), you’ll see its **abilities**.
- Each ability is a **button**; clicking it loads the ability’s **English short effect**.

You get **two folders**:

- **Mentor/** → full working code **plus** the identical instructional steps as comments at the top.
- **Mentee/** → the **same instructional steps** (word‑for‑word) but with no implementation (comments only).

---

## 1 Quick JSON Refresher

- `{ }` → **Object** (collection of **key–value pairs** like `"name": "pikachu"`)
- `[ ]` → **Array** (ordered list of items)
- Values can be strings, numbers, booleans, `null`, objects, or arrays.

---

## 2 Endpoints We Use

### A Pokémon Index (for pagination)

```
GET https://pokeapi.co/api/v2/pokemon?offset=0&limit=20
```

- Returns an **object** with `count`, `next`, `previous`, and `results`.
- `results` is an **array** of Pokémon **objects** like `{ "name": "pikachu", "url": "..." }`.
- We use `next` and `previous` for the **Prev/Next** buttons.

**Query Parameters 101**

- `?` starts the query string.
- `key=value` pairs set options for the request.
- `&` separates multiple parameters.
- `offset` → where to start in the list (how many to skip).
- `limit` → how many items to return per page.
- Example pages:
  - Page 1: `?offset=0&limit=20` → items 1–20
  - Page 2: `?offset=20&limit=20` → items 21–40
  - Page 3: `?offset=40&limit=20` → items 41–60
- **Go to page N formula:** `offset = (page - 1) * limit`
  - If `page = 5` and `limit = 20`, then `offset = (5 - 1) * 20 = 80` → `?offset=80&limit=20`

We also include **“20 / 50 / 100 per page”** buttons by changing the `limit`.

### B Pokémon by Name/ID (abilities for a specific Pokémon)

```
GET https://pokeapi.co/api/v2/pokemon/{name-or-id}/
```

Example: `/pokemon/pikachu/`

Relevant field in the response:

```json
"abilities": [
  {
    "ability": { "name": "static", "url": "https://pokeapi.co/api/v2/ability/9/" },
    "is_hidden": false,
    "slot": 1
  },
  {
    "ability": { "name": "lightning-rod", "url": "https://pokeapi.co/api/v2/ability/31/" },
    "is_hidden": true,
    "slot": 3
  }
]
```

We render each ability as a button. Hidden abilities are labeled “(hidden)”.

### C Ability Detail (English description)

```
GET https://pokeapi.co/api/v2/ability/{id-or-name}/
```

From that JSON, we show the English `short_effect` from `effect_entries` (the item where `language.name === "en"`).

---

## 3 What Are API Endpoints?

An **API endpoint** is a specific URL where a certain **resource** lives. Think of it like a street address for data.

- The **base** tells you the API and version: `https://pokeapi.co/api/v2/`
- The **resource** tells you what kind of thing you want: `pokemon`, `ability`, etc.
- Optional **identifier** narrows it to a single item: an **ID** (number) or a **name** (string).
- Optional **query parameters** (after `?`) fine-tune what and how much you get.

**Pattern:**

```
https://pokeapi.co/api/v2/{resource}/{id-or-name}/?key=value&another=value2
```

---

## 4 How to Read These Ability Links

- `https://pokeapi.co/api/v2/ability/9/`
- `https://pokeapi.co/api/v2/ability/31/`

Breakdown:

- `https://` → scheme (use HTTPS)
- `pokeapi.co` → host (server)
- `/api/v2/` → API prefix + version
- `ability` → **resource type** (we’re asking for an ability)
- `9/` or `31/` → **identifier** (numeric ID for a specific ability)
- _(no query parameters here)_

Notes:

- You can **also** use the ability **name** instead of a number, e.g. `/ability/static/`.
- The **trailing slash `/`** is required by PokéAPI in many endpoints.
- The response is a single **ability object** that includes (among other things) `effect_entries` in multiple languages and a list of Pokémon that can have that ability.

---

## 5 Query Parameters & Pagination (Deeper Dive)

Query parameters start after `?`, are written as `key=value`, and separated by `&`.

For the Pokémon index:

- `offset` → how many items to **skip** before starting
- `limit` → how many items to **return**

**Go to page N formula:**

```
offset = (page - 1) * limit
```

**Why this works:**

- Page 1 should start at the very beginning → skip 0 items → `offset = (1 - 1) * limit = 0`
- Page 2 should skip the first page worth of items → `offset = (2 - 1) * limit = limit`
- Page 3 should skip two pages → `offset = 2 * limit`, and so on.

**Concrete example: page = 5, limit = 20**

1. Compute the offset: `(5 - 1) * 20 = 80`
2. Build the URL:

```
https://pokeapi.co/api/v2/pokemon?offset=80&limit=20
```

3. That returns items **81–100** (out of `count`) and includes `next` / `previous` URLs.

**Page label math shown in the app:**

- `currentPage = Math.floor(offset / limit) + 1`
- `totalPages = Math.ceil(count / limit)`
- Displayed as: **“Page X of Y (limit L)”**

---

## 6 `effect_entries` and `short_effect`

When you fetch an ability (e.g., `/ability/9/`), you’ll see an array called `effect_entries`.  
Each item describes the ability’s effect **in a specific language** and often includes:

```json
{
  "effect": "Longer, detailed description of the ability's behavior...",
  "short_effect": "Concise summary.",
  "language": { "name": "en" }
}
```

- **`effect_entries`**: a list of effect descriptions **across languages**. You typically **pick the item where `language.name === "en"`** for English.
- **`short_effect`**: a **brief, student‑friendly summary** of what the ability does. This is what we show in the UI.
- **`effect`**: a longer, more detailed explanation (sometimes with placeholders like brackets `%`, conditions, or mechanics).

## That’s why the Mentor code searches for the English entry and prefers `short_effect` when rendering.

## 7 Run It

- The **left panel** lists Pokémon with **Prev/Next**, **20/50/100 per page**, and **Go to page N** controls.
- The **label** shows **“Page X of Y (limit L)”**, computed from `offset`, `limit`, and `count`.
- Click a Pokémon (or search by name) to see its **abilities**.
- Click an **ability** to see its **English short effect**.
