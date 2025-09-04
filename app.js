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
    ingredients: ["Bread", "Avocado", "Salt", "Pepper", "Chili flakes", "Lemon juice"],
    steps: ["Toast bread.", "Mash avocado with lemon, salt & pepper.", "Spread and top with chili flakes."]
  },
  {
    id: 3,
    name: "Grilled Chicken Salad",
    category: "Lunch",
    minutes: 25,
    description: "Light, protein-packed salad with zesty dressing.",
    image: "https://plus.unsplash.com/premium_photo-1692309186600-03bb12fd3adb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGlnaHQlMkMlMjBwcm90ZWluJTIwcGFja2VkJTIwc2FsYWQlMjB3aXRoJTIwemVzdHklMjBkcmVzc2luZy58ZW58MHx8MHx8fDA%3D",
    ingredients: ["Chicken breast", "Lettuce", "Cherry tomatoes", "Cucumber", "Olive oil", "Lemon"],
    steps: ["Season & grill chicken.", "Chop veggies.", "Toss with dressing; slice chicken on top."]
  },
  {
    id: 4,
    name: "Veggie Pasta Primavera",
    category: "Lunch",
    minutes: 35,
    description: "Colorful pasta with seasonal vegetables.",
    image: 
    "https://images.unsplash.com/photo-1609582848349-215e8bf397d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29sb3JmdWwlMjBwYXN0YSUyMHdpdGglMjBzZWFzb25hbCUyMHZlZ2V0YWJsZXN8ZW58MHx8MHx8fDA%3D",
    ingredients: ["Pasta", "Bell peppers", "Zucchini", "Peas", "Garlic", "Parmesan"],
    steps: ["Boil pasta.", "Sauté veggies & garlic.", "Combine with pasta and cheese."]
  },
  {
    id: 5,
    name: "One-Pan Lemon Fish",
    category: "Dinner",
    minutes: 22,
    description: "Fast, flaky white fish baked with lemon & herbs.",
    image: "https://plus.unsplash.com/premium_photo-1674498271055-3f7e00d92854?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEZhc3QlMkMlMjBmbGFreSUyMHdoaXRlJTIwZmlzaCUyMGJha2VkJTIwd2l0aCUyMGxlbW9uJTIwJTI2JTIwaGVyYnN8ZW58MHx8MHx8fDA%3D",
    ingredients: ["White fish fillets", "Lemon", "Parsley", "Olive oil", "Salt", "Pepper"],
    steps: ["Preheat oven 200°C.", "Season fish; add lemon & oil.", "Bake 12–15 min until flaky."]
  },
  {
    id: 6,
    name: "Stir-Fry Beef & Broccoli",
    category: "Dinner",
    minutes: 18,
    description: "Savory quick stir-fry with tender beef.",
    image: "https://images.unsplash.com/photo-1622052073730-04bbc497be48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFNhdm9yeSUyMHF1aWNrJTIwc3RpciUyMGZyeSUyMHdpdGglMjB0ZW5kZXIlMjBiZWVmfGVufDB8fDB8fHww",
    ingredients: ["Beef strips", "Broccoli", "Soy sauce", "Garlic", "Cornstarch", "Ginger"],
    steps: ["Marinate beef 10 min.", "Stir-fry broccoli; set aside.", "Sear beef; combine with sauce & broccoli."]
  },
  {
    id: 7,
    name: "Blueberry Overnight Oats",
    category: "Breakfast",
    minutes: 5,
    description: "No-cook oats ready for busy mornings.",
    image: "https://plus.unsplash.com/premium_photo-1661340928826-8098bdc886ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE5vJTIwY29vayUyMG9hdHMlMjByZWFkeSUyMGZvciUyMGJ1c3klMjBtb3JuaW5nc3xlbnwwfHwwfHx8MA%3D%3D",
    ingredients: ["Rolled oats", "Milk or yogurt", "Blueberries", "Honey", "Chia seeds"],
    steps: ["Mix all in jar.", "Refrigerate overnight.", "Top with extra berries to serve."]
  },
  {
    id: 8,
    name: "Tomato Basil Soup",
    category: "Lunch",
    minutes: 20,
    description: "Comforting soup with fresh basil aroma.",
    image: "https://images.unsplash.com/photo-1716959669858-11d415bdead6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: ["Tomatoes", "Onion", "Garlic", "Vegetable stock", "Basil", "Cream (optional)"],
    steps: ["Sauté onion & garlic.", "Add tomatoes & stock; simmer.", "Blend smooth; stir in basil."]
  },
  {
    id: 9,
    name: "Spicy Pilau Rice",
    category: "Dinner",
    minutes: 40,
    description: "Fragrant rice with warm spices.",
    image: "https://images.unsplash.com/photo-1723691802798-fa6efc67b2c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEZyYWdyYW50JTIwcmljZSUyMHdpdGglMjB3YXJtJTIwc3BpY2VzfGVufDB8fDB8fHww",
    ingredients: ["Rice", "Onion", "Pilau masala", "Stock", "Cumin", "Bay leaf"],
    steps: ["Toast spices & onion.", "Add rice & stock.", "Simmer covered until fluffy."]
  }
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
