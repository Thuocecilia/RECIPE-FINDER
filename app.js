/* ---------- Sample Data ---------- */
const recipes = [
  {
    id: 1,
    name: "Chai Spice Pancakes",
    category: "Breakfast",
    minutes: 20,
    description: "Fluffy pancakes with warm chai spices.",
    image: 
    "https://images.unsplash.com/photo-1678684277430-60cd5d17694b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Rmx1ZmZ5JTIwcGFuY2FrZXMlMjB3aXRoJTIwd2FybSUyMGNoYWklMjBzcGljZXN8ZW58MHx8MHx8fDA%3D",
    ingredients: ["Flour", "Milk", "Eggs", "Chai spice mix", "Sugar", "Baking powder"],
    steps: [
      "Whisk dry ingredients together.",
      "Add eggs and milk; whisk until smooth.",
      "Cook on medium pan 2–3 min each side."
    ]
  },
  {
    id: 2,
    name: "Avocado Toast Deluxe",
    category: "Breakfast",
    minutes: 10,
    description: "Crunchy toast topped with creamy avocado & chili flakes.",
    image: 
    "https://images.unsplash.com/photo-1755177523467-bc1974524fc2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENydW5jaHklMjB0b2FzdCUyMHRvcHBlZCUyMHdpdGglMjBjcmVhbXklMjBhdm9jYWRvJTIwJTI2JTIwY2hpbGklMjBmbGFrZXN8ZW58MHx8MHx8fDA%3D",
     ingredients: [
    "2 slices sourdough or multigrain bread",
    "1 ripe avocado",
    "1 tsp lemon or lime juice",
    "1 tbsp cream cheese (optional)",
    "Salt & black pepper (to taste)",
    "Red chili flakes or smoked paprika",
    "Olive oil (for drizzling)",
    "Optional: cherry tomatoes, radishes, poached egg, feta, microgreens"],
  steps: [
    "Toast the bread until golden and crisp on both sides. Optionally drizzle with olive oil before toasting.",
    "Cut the avocado in half, remove the pit, and scoop the flesh into a bowl.",
    "Mash the avocado with a fork, keeping it slightly chunky. Mix in lemon juice, salt, and black pepper.",
    "Spread the mashed avocado generously over the toasted bread.",
    "Sprinkle with chili flakes or smoked paprika, and drizzle a little olive oil.",
    "Add deluxe toppings if desired: cherry tomatoes, radishes, a poached egg, crumbled feta, or microgreens.",
    "Serve immediately while warm and enjoy!"  ]
  },
  {
    id: 3,
    name: "Grilled Chicken Salad",
    category: "Lunch",
    minutes: 25,
    description: "Light, protein-packed salad with zesty dressing.",
    image: "https://plus.unsplash.com/premium_photo-1692309186600-03bb12fd3adb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGlnaHQlMkMlMjBwcm90ZWluJTIwcGFja2VkJTIwc2FsYWQlMjB3aXRoJTIwemVzdHklMjBkcmVzc2luZy58ZW58MHx8MHx8fDA%3D",
     ingredients: [
    "2 boneless skinless chicken breasts",
    "1 tbsp olive oil (for chicken)",
    "1 tsp garlic powder",
    "1 tsp paprika",
    "Salt & black pepper (to taste)",
    "4 cups mixed salad greens (lettuce, spinach, arugula)",
    "1/2 cucumber, sliced",
    "1/2 red bell pepper, sliced",
    "1/4 red onion, thinly sliced",
    "1/2 cup cherry tomatoes, halved",
    "1/4 cup feta cheese or goat cheese (optional)",
    "1/4 cup croutons (optional)",
    "For the dressing: 3 tbsp olive oil, 1 tbsp lemon juice, 1 tsp Dijon mustard, 1 tsp honey, salt & pepper"
  ],
  steps: [
    "Preheat a grill pan or outdoor grill over medium-high heat.",
    "Pound chicken breasts lightly so they cook evenly. Rub with olive oil, garlic powder, paprika, salt, and pepper.",
    "Grill chicken for 5–6 minutes per side, or until fully cooked (internal temp 165°F / 75°C). Remove and let rest 5 minutes before slicing.",
    "Meanwhile, prepare the salad base: arrange mixed greens, cucumber, bell pepper, onion, and cherry tomatoes in a large bowl or plate.",
    "In a small bowl or jar, whisk together olive oil, lemon juice, Dijon mustard, honey, salt, and pepper until smooth and emulsified.",
    "Slice the rested chicken into strips and place on top of the salad.",
    "Sprinkle with feta cheese and croutons if desired.",
    "Drizzle dressing over the salad just before serving and toss gently.",
    "Serve immediately and enjoy a light, protein-packed meal!" ]
  },
  {
    id: 4,
    name: "Veggie Pasta Primavera",
    category: "Lunch",
    minutes: 35,
    description: "Colorful pasta with seasonal vegetables.",
    image: 
    "https://images.unsplash.com/photo-1609582848349-215e8bf397d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29sb3JmdWwlMjBwYXN0YSUyMHdpdGglMjBzZWFzb25hbCUyMHZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D",
    ingredients: [
    "300g (10 oz) pasta (penne, spaghetti, or fusilli)",
    "2 tbsp olive oil",
    "2 cloves garlic, minced",
    "1 small zucchini, sliced into half-moons",
    "1 small yellow squash, sliced",
    "1 red bell pepper, thinly sliced",
    "1 cup broccoli florets",
    "1 small carrot, thinly sliced",
    "1/2 cup cherry tomatoes, halved",
    "1/4 cup grated Parmesan cheese (optional)",
    "Fresh basil or parsley for garnish",
    "Salt & black pepper to taste",
    "Pinch of red pepper flakes (optional)"
  ],
  steps: [
    "Bring a large pot of salted water to a boil. Cook pasta according to package instructions until al dente. Reserve 1/2 cup of pasta water, then drain.",
    "While pasta cooks, heat olive oil in a large skillet over medium heat. Add garlic and sauté for 30 seconds until fragrant.",
    "Add zucchini, yellow squash, bell pepper, carrot, and broccoli. Sauté for 6–8 minutes until vegetables are tender but still crisp.",
    "Add cherry tomatoes and cook 1–2 minutes more until they soften slightly.",
    "Season with salt, black pepper, and a pinch of red pepper flakes if using.",
    "Add the cooked pasta to the skillet with vegetables. Toss everything together, adding a splash of reserved pasta water if the dish seems dry.",
    "Remove from heat and sprinkle with grated Parmesan cheese if desired.",
    "Garnish with fresh basil or parsley.",
    "Serve warm and enjoy a light yet satisfying veggie-packed dinner!"
  ]
},
  {
    id: 5,
    name: "One-Pan Lemon Fish",
    category: "Dinner",
    minutes: 22,
    description: "Fast, flaky white fish baked with lemon & herbs.",
    image: "https://plus.unsplash.com/premium_photo-1674498271055-3f7e00d92854?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEZhc3QlMkMlMjBmbGFreSUyMHdoaXRlJTIwZmlzaCUyMGJha2VkJTIwd2l0aCUyMGxlbW9uJTIwJTI2JTIwaGVyYnN8ZW58MHx8MHx8fDA%3D",
      ingredients: [
    "2 white fish fillets (cod, tilapia, or halibut)",
    "2 tbsp olive oil",
    "2 tbsp butter, melted",
    "2 cloves garlic, minced",
    "1 lemon (juice + zest, plus extra slices for garnish)",
    "1/2 tsp paprika",
    "Salt & black pepper to taste",
    "Fresh parsley, chopped (for garnish)",
    "Optional sides: asparagus, cherry tomatoes, or green beans (to cook in the same pan)"
  ],
  steps: [
    "Preheat the oven to 400°F (200°C). Lightly grease a baking dish or sheet pan.",
    "Pat the fish fillets dry with a paper towel and place them on the prepared pan.",
    "In a small bowl, whisk together olive oil, melted butter, minced garlic, lemon juice, lemon zest, paprika, salt, and black pepper.",
    "Pour the lemon-garlic mixture evenly over the fish fillets.",
    "Arrange lemon slices on top of each fillet for extra flavor and presentation.",
    "If adding veggies like asparagus or cherry tomatoes, toss them lightly with olive oil, salt, and pepper, and arrange them around the fish in the same pan.",
    "Bake for 12–15 minutes, or until the fish flakes easily with a fork (internal temp: 145°F / 63°C).",
    "Remove from the oven and garnish with freshly chopped parsley.",
    "Serve immediately with rice, potatoes, or a light salad for a complete meal."
  ]
},
  {
    id: 6,
    name: "Stir-Fry Beef & Broccoli",
    category: "Dinner",
    minutes: 18,
    description: "Savory quick stir-fry with tender beef.",
    image: "https://images.unsplash.com/photo-1622052073730-04bbc497be48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFNhdm9yeSUyMHF1aWNrJTIwc3RpciUyMGZyeSUyMHdpdGglMjB0ZW5kZXIlMjBiZWVmfGVufDB8fDB8fHww",
    ingredients: [
    "1 lb (450g) flank steak or sirloin, thinly sliced against the grain",
    "2 cups broccoli florets",
    "2 tbsp vegetable oil (divided)",
    "3 cloves garlic, minced",
    "1-inch piece fresh ginger, grated",
    "1/4 cup low-sodium soy sauce",
    "2 tbsp oyster sauce",
    "1 tbsp hoisin sauce (optional, for sweetness)",
    "1 tbsp cornstarch",
    "1/4 cup beef or chicken broth (or water)",
    "1 tsp sesame oil",
    "1/2 tsp crushed red pepper flakes (optional, for heat)",
    "Sesame seeds & green onions for garnish",
    "Cooked rice or noodles, for serving"
  ],
  steps: [
    "In a small bowl, whisk together soy sauce, oyster sauce, hoisin sauce (if using), cornstarch, and broth. Set aside — this is your stir-fry sauce.",
    "Heat 1 tbsp of vegetable oil in a large skillet or wok over medium-high heat.",
    "Add the sliced beef in a single layer and sear for 2–3 minutes until browned but not fully cooked. Remove beef from the pan and set aside.",
    "Add the remaining 1 tbsp oil to the same pan. Toss in garlic and ginger, cooking for about 30 seconds until fragrant.",
    "Add broccoli florets and stir-fry for 2–3 minutes, adding a splash of water if needed to help them steam and soften.",
    "Return the beef to the pan, pour in the prepared stir-fry sauce, and toss everything together.",
    "Cook for another 2–3 minutes until the sauce thickens slightly and coats the beef and broccoli, and the beef is fully cooked through.",
    "Drizzle sesame oil over the stir-fry, stir once more, then remove from heat.",
    "Garnish with sesame seeds and sliced green onions.",
    "Serve hot over steamed rice or noodles for a complete meal."
  ]
},
  
  {
    id: 7,
    name: "Blueberry Overnight Oats",
    category: "Breakfast",
    minutes: 5,
    description: "No-cook oats ready for busy mornings.",
    image: "https://plus.unsplash.com/premium_photo-1661340928826-8098bdc886ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE5vJTIwY29vayUyMG9hdHMlMjByZWFkeSUyMGZvciUyMGJ1c3klMjBtb3JuaW5nc3xlbnwwfHwwfHx8MA%3D%3D",
   ingredients: [
    "1/2 cup old-fashioned rolled oats",
    "1/2 cup milk (dairy or plant-based)",
    "1/4 cup Greek yogurt",
    "1 tbsp chia seeds (optional, for thickness and fiber)",
    "1 tbsp honey or maple syrup",
    "1/2 tsp vanilla extract",
    "1/4 tsp ground cinnamon",
    "1/2 cup fresh or frozen blueberries",
    "Toppings: extra blueberries, sliced almonds, shredded coconut, or granola"
  ],
  steps: [
    "In a mason jar or airtight container, add rolled oats, milk, Greek yogurt, chia seeds, honey, vanilla extract, and cinnamon.",
    "Stir well until everything is evenly mixed and no dry oats remain.",
    "Fold in the blueberries gently so they are distributed throughout the mixture.",
    "Cover the jar/container with a lid and refrigerate for at least 4 hours, preferably overnight.",
    "In the morning, give the oats a good stir. If it’s too thick, add a splash of milk to loosen it.",
    "Top with extra blueberries, almonds, coconut, or granola before serving.",
    "Enjoy chilled as a quick grab-and-go breakfast!"
  ]
},
   
  {
    id: 8,
    name: "Tomato Basil Soup",
    category: "Lunch",
    minutes: 20,
    description: "Comforting soup with fresh basil aroma.",
    image: "https://images.unsplash.com/photo-1716959669858-11d415bdead6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     ingredients: [
    "2 tbsp olive oil or butter",
    "1 medium onion, chopped",
    "3 garlic cloves, minced",
    "2 cans (14 oz each) crushed tomatoes (or fresh ripe tomatoes, peeled & chopped)",
    "2 cups vegetable broth (or chicken broth)",
    "1 tbsp tomato paste (optional, for richness)",
    "1 tsp sugar (balances acidity)",
    "1/2 tsp salt (to taste)",
    "1/4 tsp black pepper",
    "1/4 tsp red pepper flakes (optional, for a little heat)",
    "1/2 cup fresh basil leaves (loosely packed)",
    "1/2 cup heavy cream or half-and-half (optional, for creamy version)",
    "Parmesan cheese, croutons, or fresh basil for garnish"
  ],
  steps: [
    "Heat olive oil or butter in a large pot over medium heat.",
    "Add chopped onion and cook until soft and translucent (5–6 minutes).",
    "Stir in minced garlic and cook for 1 minute, until fragrant.",
    "Add crushed tomatoes, broth, tomato paste, sugar, salt, black pepper, and red pepper flakes.",
    "Stir well, then bring to a boil. Reduce heat and let it simmer uncovered for 20–25 minutes, allowing flavors to meld.",
    "Remove from heat and stir in fresh basil leaves.",
    "Use an immersion blender (or transfer to a blender in batches) to puree the soup until smooth. Leave some chunks if you prefer rustic texture.",
    "Return soup to low heat. Stir in heavy cream if making a creamy version, and adjust seasoning with more salt/pepper if needed.",
    "Serve hot, garnished with Parmesan cheese, croutons, or extra basil leaves.",
    "Pairs perfectly with a grilled cheese sandwich or crusty bread."
  ]
},
  
  {
    id: 9,
    name: "Spicy Pilau Rice",
    category: "Dinner",
    minutes: 40,
    description: "Fragrant rice with warm spices.",
    image: "https://images.unsplash.com/photo-1723691802798-fa6efc67b2c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEZyYWdyYW50JTIwcmljZSUyMHdpdGglMjB3YXJtJTIwc3BpY2VzfGVufDB8fDB8fHww",
    ingredients: [
    "2 cups basmati rice (washed & soaked 20 min)",
    "4 cups water or broth",
    "2 tbsp vegetable oil or ghee",
    "2 medium onions, thinly sliced",
    "2 garlic cloves, minced",
    "1 tbsp fresh ginger, minced",
    "2 medium tomatoes, chopped (or 1/2 cup tomato puree)",
    "1–2 green chilies, slit (adjust heat to taste)",
    "1 tsp ground cumin",
    "1 tsp ground coriander",
    "1 tsp turmeric powder",
    "1 tsp garam masala",
    "1 tsp ground cardamom",
    "2–3 whole cloves",
    "1 cinnamon stick",
    "2 bay leaves",
    "1/2 tsp black pepper",
    "Salt to taste",
    "Optional: 1 lb beef/chicken/lamb (cubed & browned)",
    "Optional garnish: fresh cilantro, fried onions, lemon wedges"
  ],
  steps: [
    "Rinse and soak the basmati rice for about 20 minutes, then drain.",
    "In a large heavy pot, heat oil or ghee over medium heat.",
    "Add sliced onions and cook slowly until deep golden brown and caramelized (about 10–12 minutes).",
    "Add garlic, ginger, and green chilies. Cook for 1–2 minutes until fragrant.",
    "Stir in tomatoes and cook until softened and saucy (5 minutes).",
    "Mix in the spices: cumin, coriander, turmeric, garam masala, cardamom, cloves, cinnamon stick, bay leaves, black pepper, and salt.",
    "If using meat, add browned beef/chicken/lamb now. Stir to coat with the spices.",
    "Add drained rice and gently stir to coat every grain with the spiced mixture.",
    "Pour in water or broth. Bring to a boil, then reduce heat to low. Cover tightly with a lid.",
    "Simmer for 18–20 minutes (do not stir). Remove from heat and let rest 5–10 minutes.",
    "Fluff rice gently with a fork. Remove whole spices if desired.",
    "Serve hot, garnished with cilantro, fried onions, or lemon wedges."]
  },
];

/* ---------- DOM ---------- */
const grid = document.getElementById("recipesGrid");
const emptyState = document.getElementById("emptyState");

const searchName = document.getElementById("searchName");
const searchIng = document.getElementById("searchIng");
const categorySelect = document.getElementById("categorySelect");
const timeFilter = document.getElementById("timeFilter");
const sortBy = document.getElementById("sortBy");

const randomBtn = document.getElementById("randomBtn");
const favoritesBtn = document.getElementById("favoritesBtn");
const shoppingBtn = document.getElementById("shoppingBtn");
const toggleTheme = document.getElementById("toggleTheme");

const modal = document.getElementById("recipeModal");
const modalTitle = document.getElementById("modalTitle");
const modalMeta = document.getElementById("modalMeta");
const modalHero = document.getElementById("modalHero");
const ingredientsList = document.getElementById("ingredientsList");
const stepsList = document.getElementById("stepsList");
const favBtn = document.getElementById("favBtn");
const addSelectedToList = document.getElementById("addSelectedToList");
const startTimerBtn = document.getElementById("startTimerBtn");
const stopTimerBtn = document.getElementById("stopTimerBtn");
const timerBox = document.getElementById("timerBox");
const timerDisplay = document.getElementById("timerDisplay");

const shoppingDrawer = document.getElementById("shoppingDrawer");
const shoppingItems = document.getElementById("shoppingItems");
const closeDrawer = document.getElementById("closeDrawer");
const clearPurchased = document.getElementById("clearPurchased");
const clearAll = document.getElementById("clearAll");

const toastArea = document.getElementById("toastArea");
const badgesBar = document.getElementById("badgesBar");
const streakCountEl = document.getElementById("streakCount");

/* ---------- State ---------- */
const LS_KEYS = {
  favorites: "rf_favorites",
  shopping: "rf_shopping",
  stats: "rf_stats",
  theme: "rf_theme"
};

let favorites = loadLS(LS_KEYS.favorites, []);          // array of recipe ids
let shopping = loadLS(LS_KEYS.shopping, []);            // array of {name, purchased}
let stats = loadLS(LS_KEYS.stats, {                     // usage stats for gamification
  openedIds: [],                                        // set-like array
  openedCount: 0,
  categoryCounts: { Breakfast: 0, Lunch: 0, Dinner: 0 },
  lastOpenDate: null,
  streak: 0,
  popularity: {}                                        // {id: count}
});
let theme = loadLS(LS_KEYS.theme, "dark");

let currentRecipe = null;
let timerInterval = null;

const state = {
  showFavoritesOnly: false,
  filters: {
    name: "",
    ing: "",
    category: "All",
    time: "any",
    sort: "az"
  }
};

/* ---------- Utils ---------- */
function loadLS(key, fallback){ try{ return JSON.parse(localStorage.getItem(key)) ?? fallback } catch { return fallback } }
function saveLS(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
function norm(s){ return s.toLowerCase().trim(); }
function minutesInRange(mins, tag){
  if(tag === "any") return true;
  if(tag === "<30") return mins < 30;
  if(tag === "30-60") return mins >= 30 && mins <= 60;
  if(tag === ">60") return mins > 60;
  return true;
}
function toast(msg){
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  toastArea.appendChild(t);
  setTimeout(()=> t.remove(), 2400);
}
function floatHeart(x, y, parent = document.body){
  const span = document.createElement("span");
  span.className = "heart";
  span.textContent = "❤️";
  span.style.left = x + "px";
  span.style.top = y + "px";
  parent.appendChild(span);
  setTimeout(()=> span.remove(), 900);
}

/* ---------- Theme ---------- */
function applyTheme(){
  document.body.classList.toggle("light", theme === "light");
}
applyTheme();
toggleTheme.textContent = theme === "light" ? "🌙" : "☀️";
toggleTheme.addEventListener("click", ()=>{
  theme = theme === "light" ? "dark" : "light";
  saveLS(LS_KEYS.theme, theme);
  applyTheme();
  toggleTheme.textContent = theme === "light" ? "🌙" : "☀️";
});

/* ---------- Render ---------- */
function filterAndSort(){
  const qn = norm(state.filters.name);
  const qi = norm(state.filters.ing);
  let list = recipes.filter(r => {
    const matchFav = !state.showFavoritesOnly || favorites.includes(r.id);
    const matchName = r.name.toLowerCase().includes(qn);
    const matchIng = qi === "" || r.ingredients.some(i => i.toLowerCase().includes(qi));
    const matchCat = state.filters.category === "All" || r.category === state.filters.category;
    const matchTime = minutesInRange(r.minutes, state.filters.time);
    return matchFav && matchName && matchIng && matchCat && matchTime;
  });

  if(state.filters.sort === "az"){
    list.sort((a,b)=> a.name.localeCompare(b.name));
  }else if(state.filters.sort === "pop"){
    const pop = stats.popularity || {};
    list.sort((a,b)=> (pop[b.id]||0) - (pop[a.id]||0) || a.name.localeCompare(b.name));
  }
  return list;
}

function cardTemplate(r){
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <div class="card-hero" 
    style="background-image:url('${r.image}');
           background-size: contain;
           background-repeat: no-repeat;
           background-position: center;
           background-color: var(--bg-2);">
      <div class="overlay">
        <span class="badge">${r.category}</span>
        <span class="badge" title="Estimated time">${r.minutes} min</span>
      </div>
    </div>
    <div class="card-body">
      <h3 class="card-title">${r.name}</h3>
      <p class="card-desc">${r.description}</p>
      <div class="card-actions">
        <button class="btn view">View</button>
        <button class="fav-toggle ${favorites.includes(r.id) ? "active" : ""}" title="Toggle favorite">❤</button>
      </div>
    </div>
  `;
  // View
  card.querySelector(".view").addEventListener("click", () => openModal(r));
  // Favorite
  const favToggle = card.querySelector(".fav-toggle");
  favToggle.addEventListener("click", (e)=>{
    e.stopPropagation();
    toggleFavorite(r.id);
    favToggle.classList.toggle("active");
    const rect = favToggle.getBoundingClientRect();
    floatHeart(rect.left + rect.width/2, rect.top);
  });
  return card;
}

function render(){
  const list = filterAndSort();
  grid.innerHTML = "";
  if(list.length === 0){
    emptyState.classList.remove("hidden");
    return;
  }
  emptyState.classList.add("hidden");
  const frag = document.createDocumentFragment();
  list.forEach(r => frag.appendChild(cardTemplate(r)));
  grid.appendChild(frag);
}
render();

/* ---------- Favorites & Popularity ---------- */
function toggleFavorite(id){
  const idx = favorites.indexOf(id);
  if(idx === -1){
    favorites.push(id);
    stats.popularity[id] = (stats.popularity[id] || 0) + 1; // increase popularity when favorited
    toast("Added to favorites");
  }else{
    favorites.splice(idx,1);
    toast("Removed from favorites");
  }
  saveLS(LS_KEYS.favorites, favorites);
  saveLS(LS_KEYS.stats, stats);
}

/* ---------- Modal ---------- */
function openModal(r){
  currentRecipe = r;
  // Gamification: update streak and counts
  updateUsageStats(r);

  modalTitle.textContent = r.name;
  modalMeta.textContent = `${r.category} • ${r.minutes} min`;
  modalHero.style.backgroundImage = 
  `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${r.image}')`;
modalHero.style.backgroundSize = "cover";
modalHero.style.backgroundPosition = "center";


  // Ingredients with checkboxes
  ingredientsList.innerHTML = r.ingredients.map((name, i) =>
    `<li><label><input type="checkbox" data-ing="${name}"> ${name}</label></li>`
  ).join("");

  stepsList.innerHTML = r.steps.map(s => `<li>${s}</li>`).join("");

  favBtn.textContent = favorites.includes(r.id) ? "✅ In Favorites" : "❤️ Favorite";
  favBtn.onclick = () => {
    toggleFavorite(r.id);
    favBtn.textContent = favorites.includes(r.id) ? "✅ In Favorites" : "❤️ Favorite";
  };

  // Timer reset
  clearInterval(timerInterval);
  timerBox.classList.add("hidden");
  timerDisplay.textContent = formatTime(r.minutes * 60);

  startTimerBtn.onclick = () => startTimer(r.minutes * 60);
  stopTimerBtn.onclick = stopTimer;

  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
}
function closeModal(){
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
}
modal.addEventListener("click", (e) => {
  if (e.target.matches("[data-close]")) closeModal();
  if (e.target.classList.contains("modal-backdrop")) closeModal();
});
document.addEventListener("keydown", (e)=>{
  if(e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

/* ---------- Timer ---------- */
function formatTime(s){ const m = Math.floor(s/60).toString().padStart(2,"0"); const ss=(s%60).toString().padStart(2,"0"); return `${m}:${ss}`; }
function startTimer(totalSeconds){
  let remaining = totalSeconds;
  timerDisplay.textContent = formatTime(remaining);
  timerBox.classList.remove("hidden");
  clearInterval(timerInterval);
  timerInterval = setInterval(()=>{
    remaining--;
    timerDisplay.textContent = formatTime(Math.max(remaining,0));
    if(remaining <= 0){
      clearInterval(timerInterval);
      toast("⏱️ Time's up! Bon appétit.");
      beep();
    }
  }, 1000);
}
function stopTimer(){
  clearInterval(timerInterval);
  timerBox.classList.add("hidden");
}
function beep(){
  // Tiny beep using Web Audio API
  try{
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    o.type = "sine"; o.frequency.setValueAtTime(880, ctx.currentTime);
    g.gain.setValueAtTime(0.001, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.2, ctx.currentTime + 0.01);
    o.start();
    setTimeout(()=>{ g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.2); o.stop(ctx.currentTime + 0.22); }, 220);
  }catch{}
}

/* ---------- Shopping List ---------- */
function openDrawer(){ shoppingDrawer.classList.remove("hidden"); shoppingDrawer.setAttribute("aria-hidden","false"); renderShopping(); }
function closeDrawerFn(){ shoppingDrawer.classList.add("hidden"); shoppingDrawer.setAttribute("aria-hidden","true"); }
shoppingBtn.addEventListener("click", openDrawer);
closeDrawer.addEventListener("click", closeDrawerFn);
shoppingDrawer.addEventListener("click", (e)=>{ if(e.target.dataset.close === "drawer") closeDrawerFn(); });

addSelectedToList.addEventListener("click", ()=>{
  const checked = [...ingredientsList.querySelectorAll("input[type='checkbox']:checked")];
  if(checked.length === 0){ toast("Select at least one ingredient"); return; }
  checked.forEach(ch => {
    const name = ch.dataset.ing;
    if(!shopping.some(it => it.name.toLowerCase() === name.toLowerCase())){
      shopping.push({ name, purchased: false });
    }
  });
  saveLS(LS_KEYS.shopping, shopping);
  toast("Added to shopping list");
  openDrawer();
});

function renderShopping(){
  shoppingItems.innerHTML = "";
  if(shopping.length === 0){
    shoppingItems.innerHTML = `<li style="color:var(--muted)">List is empty</li>`;
    return;
  }
  shopping.forEach((item, idx)=>{
    const li = document.createElement("li");
    li.innerHTML = `
      <label class="name"><input type="checkbox" ${item.purchased ? "checked":""} /> ${item.name}</label>
      <button class="btn-ghost remove">✖</button>
    `;
    const cb = li.querySelector("input");
    cb.addEventListener("change", ()=>{
      item.purchased = cb.checked;
      saveLS(LS_KEYS.shopping, shopping);
    });
    li.querySelector(".remove").addEventListener("click", ()=>{
      shopping.splice(idx,1);
      saveLS(LS_KEYS.shopping, shopping);
      renderShopping();
    });
    shoppingItems.appendChild(li);
  });
}
clearPurchased.addEventListener("click", ()=>{
  shopping = shopping.filter(i => !i.purchased);
  saveLS(LS_KEYS.shopping, shopping);
  renderShopping();
});
clearAll.addEventListener("click", ()=>{
  shopping = [];
  saveLS(LS_KEYS.shopping, shopping);
  renderShopping();
});

/* ---------- Gamification: Badges & Streak ---------- */
const BADGES = [
  { id:"first", label:"First Recipe Tried 🥇", rule: s => s.openedCount >= 1 },
  { id:"chef1", label:"Chef Apprentice 👨‍🍳 (10 recipes)", rule: s => s.openedCount >= 10 },
  { id:"breakfast3", label:"Breakfast Lover 🍳 (3)", rule: s => s.categoryCounts.Breakfast >= 3 },
  { id:"lunch3", label:"Lunch Fan 🥗 (3)", rule: s => s.categoryCounts.Lunch >= 3 },
  { id:"dinner3", label:"Dinner Devotee 🍝 (3)", rule: s => s.categoryCounts.Dinner >= 3 },
  { id:"streak3", label:"On a Roll 🔥 (3-day streak)", rule: s => s.streak >= 3 }
];

function updateUsageStats(r){
  // opened once per modal open
  if(!stats.openedIds.includes(r.id)){
    stats.openedIds.push(r.id);
  }
  stats.openedCount++;
  stats.categoryCounts[r.category] = (stats.categoryCounts[r.category] || 0) + 1;

  // streak (day-by-day)
  const today = new Date(); today.setHours(0,0,0,0);
  const last = stats.lastOpenDate ? new Date(stats.lastOpenDate) : null;
  if(!last){ stats.streak = 1; }
  else{
    const diffDays = Math.round((today - last) / (1000*60*60*24));
    if(diffDays === 1) stats.streak += 1;
    else if(diffDays > 1) stats.streak = 1; // reset if gap
  }
  stats.lastOpenDate = today.toISOString();

  // badges
  const newlyUnlocked = [];
  BADGES.forEach(b=>{
    if(!stats[b.id] && b.rule(stats)){
      stats[b.id] = true;
      newlyUnlocked.push(b.label);
    }
  });

  saveLS(LS_KEYS.stats, stats);
  renderBadges();
  streakCountEl.textContent = stats.streak.toString();

  // pop toasts
  newlyUnlocked.forEach(label => toast("🏅 Unlocked: " + label));
}
function renderBadges(){
  badgesBar.innerHTML = "";
  BADGES.forEach(b=>{
    if(stats[b.id]){
      const pill = document.createElement("span");
      pill.className = "badge-pill";
      pill.textContent = b.label;
      badgesBar.appendChild(pill);
    }
  });
}
renderBadges();
streakCountEl.textContent = stats.streak.toString();

/* ---------- Controls ---------- */
searchName.addEventListener("input", (e)=>{ state.filters.name = e.target.value; render(); });
searchIng.addEventListener("input", (e)=>{ state.filters.ing = e.target.value; render(); });
categorySelect.addEventListener("change", (e)=>{ state.filters.category = e.target.value; render(); });
timeFilter.addEventListener("change", (e)=>{ state.filters.time = e.target.value; render(); });
sortBy.addEventListener("change", (e)=>{ state.filters.sort = e.target.value; render(); });

randomBtn.addEventListener("click", ()=>{
  const list = filterAndSort();
  if(list.length === 0) return;
  const r = list[Math.floor(Math.random() * list.length)];
  openModal(r);
});

favoritesBtn.addEventListener("click", ()=>{
  state.showFavoritesOnly = !state.showFavoritesOnly;
  favoritesBtn.dataset.mode = state.showFavoritesOnly ? "fav" : "all";
  favoritesBtn.textContent = state.showFavoritesOnly ? "💖 Showing Favorites" : "❤️ Favorites";
  render();
});

/* ---------- Initial Mode ---------- */
if(theme === "light"){ document.body.classList.add("light"); }
else{ document.body.classList.remove("light"); }
