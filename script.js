"use strict";

/* =====================================================================
   IMAGE URL CONFIGURATION  (edit ONLY this block to change images)
   ---------------------------------------------------------------------
   Replace each PASTE_..._HERE text with a public HTTPS image link.
   - Links must be publicly accessible (some hosts block hotlinking).
   - Missing or broken links show a neutral placeholder automatically.
   ===================================================================== */
const IMAGE_URLS = {
  rice: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9S-kevLMczxVNOt21Olhvbu8Zp_k13qdTK2KrgMhRB7EvlTNJLz4qM8&s=10",
  corn: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxlFf36OYqQ-Q9ksaHgYP2Vsrk4U8lBy5KIKHIi0tOl7Nb1BH3I2eivu4P&s=10PASTE_CORN_IMAGE_URL_HERE",
  sugarcane: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqKA2lG1crD23CL2jwAK_W871FASWo8cR2uIsPkmSmWA&s=10",
  coconut: "https://assets.delish.ph/wp-content/uploads/2026/09/Coconut-Milk-Square-3.webp",
  cassava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPBYOA634xpWe71A3s7-Y4-yG3HPqvevxgWGeYOyCAjz2Ungx44oQ2zkE&s=10",
  riceHusk: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSTx-X0KRvJa8pLbwHsjOTc07tuDHtlDeISTQwXNlbDu7reLN_2L_1tbF4&s=10",
  bagasse: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODgWSUinqMVJemN7OBZX4nXLRMpnskHvBuqRvs_qzwQ&s=10",
  coconutHusk: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxnKa-kZHr8uRgsT9lp-4tzWyIanywfbGQ0Uj_1-dY2a9dUGZ_6qbgBqWo&s=10",
  finishedProduct: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-1rKRgCXeD45ebd1qVnpDF7VPpNnemvdCc3MxoAVmA&s=10",
  hero: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3snFUwVhRuZgbQAXd8HeS0yTWyigJehplhs-tlPyqXw&s=10" // optional wide photo for the Overview banner
};

/* =====================================================================
   DEMO DATA  (simulated; not real inventory or logistics)
   ===================================================================== */
const DEFAULT_INVENTORY = [
  { id: "inv1", name: "Rice (palay)", category: "crop", farm: "Laguna Green Farm", qty: 12000, unit: "kg", lowAt: 3000, location: "Laguna", price: 22, harvest: "2026-10-05", quality: "Grade A", img: "rice", uses: "Rice products, flour", product: "Rice flour" },
  { id: "inv2", name: "Corn", category: "crop", farm: "Bukidnon Highlands Co-op", qty: 8000, unit: "kg", lowAt: 2500, location: "Bukidnon", price: 15, harvest: "2026-10-12", quality: "Grade A", img: "corn", uses: "Cornmeal, feed, starch", product: "Cornmeal" },
  { id: "inv3", name: "Sugarcane", category: "crop", farm: "Negros Cane Growers", qty: 2000, unit: "kg", lowAt: 2500, location: "Negros Occidental", price: 4, harvest: "2026-10-20", quality: "Grade B", img: "sugarcane", uses: "Sugar, biomass", product: "Raw sugar" },
  { id: "inv4", name: "Coconut", category: "crop", farm: "Quezon Coco Farms", qty: 6000, unit: "pcs", lowAt: 1500, location: "Quezon", price: 12, harvest: "2026-10-09", quality: "Grade A", img: "coconut", uses: "Oil, copra", product: "Coconut oil" },
  { id: "inv5", name: "Cassava", category: "crop", farm: "Batangas Root Growers", qty: 5000, unit: "kg", lowAt: 1500, location: "Batangas", price: 9, harvest: "2026-10-15", quality: "Grade A", img: "cassava", uses: "Starch, flour", product: "Cassava starch" },
  { id: "inv6", name: "Rice husks", category: "waste", farm: "Laguna Green Farm", qty: 4500, unit: "kg", lowAt: 1000, location: "Laguna", price: 2, harvest: "2026-10-06", quality: "Dry", img: "riceHusk", uses: "Biomass fuel, construction filler", product: "Biomass briquettes" },
  { id: "inv7", name: "Sugarcane bagasse", category: "waste", farm: "Negros Cane Growers", qty: 9000, unit: "kg", lowAt: 2000, location: "Negros Occidental", price: 1.5, harvest: "2026-10-21", quality: "Dry", img: "bagasse", uses: "Paper products, biomass", product: "Bagasse paper pulp" },
  { id: "inv8", name: "Coconut husks", category: "waste", farm: "Quezon Coco Farms", qty: 700, unit: "kg", lowAt: 1000, location: "Quezon", price: 1, harvest: "2026-10-10", quality: "Fibrous", img: "coconutHusk", uses: "Coir fiber, growing media", product: "Coir fiber" }
];

const FINISHED_PRODUCTS = [
  { id: "fp1", name: "Rice Flour 1 kg", price: 68, stock: 400, desc: "Milled from Grade A rice.", img: "finishedProduct" },
  { id: "fp2", name: "Cornmeal 1 kg", price: 55, stock: 300, desc: "Stone-ground cornmeal.", img: "finishedProduct" },
  { id: "fp3", name: "Coir Growing Media 5 kg", price: 140, stock: 120, desc: "Coconut husk growing medium.", img: "finishedProduct" },
  { id: "fp4", name: "Biomass Briquettes 10 kg", price: 180, stock: 0, desc: "Rice husk fuel briquettes.", img: "finishedProduct" }
];

const PROD_STAGES = [
  "Planning", "Material sourcing", "Raw material inspection", "Production",
  "Quality inspection", "Packaging", "Ready for dispatch", "Completed / delivered"
];

const SHIP_STAGES = [
  "Awaiting dispatch", "Preparing shipment", "In transit", "Arriving at destination", "Delivered"
];

// Illustrative delivery options (no real courier integration).
const METHODS = {
  "Direct truck delivery": "Demo Trucking Co.",
  "Consolidated freight": "Demo Freight Partners",
  "Local delivery vehicle": "Demo Local Courier",
  "Third-party logistics": "Demo 3PL Services",
  "Scheduled bulk transport": "Demo Bulk Carriers"
};

const DESTINATIONS = [
  "Calabarzon · Laguna · Calamba City",
  "Calabarzon · Cavite · Dasmariñas",
  "Calabarzon · Batangas · Batangas City",
  "NCR · Metro Manila · Quezon City",
  "NCR · Metro Manila · Taguig",
  "Central Luzon · Bulacan · Malolos",
  "Central Visayas · Cebu · Cebu City",
  "Davao Region · Davao del Sur · Davao City"
];

const STAT_LABEL = { available: "Available", low: "Low stock", out: "Out of stock" };

/* =====================================================================
   HELPERS, STATE & LOCALSTORAGE
   ===================================================================== */
const STORAGE_KEY = "agriflow_demo_v1";
const $ = (selector, root = document) => root.querySelector(selector);

// Escape user text before inserting into HTML.
const esc = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));

const today = (addDays = 0) =>
  new Date(Date.now() + addDays * 864e5).toISOString().slice(0, 10);

const money = (n) => "₱" + Number(n).toLocaleString();
const uid = (prefix) => `${prefix}-${Math.floor(100000 + Math.random() * 900000)}`;

// Build the default state, including one linked demo order + shipment.
function seed() {
  const state = {
    inventory: structuredClone(DEFAULT_INVENTORY),
    products: structuredClone(FINISHED_PRODUCTS),
    orders: [],
    ships: [],
    cart: {},
    log: []
  };

  state.orders.push({
    id: "AF-M-1001", type: "mfr", product: "Biomass briquettes", qty: 1500, unit: "kg",
    date: today(-4), eta: today(6), stage: 3, update: "Production line started",
    company: "EcoBrick Manufacturing", dest: "Calabarzon · Laguna · Calamba City",
    method: "Direct truck delivery", ship: "SH-1001"
  });

  state.ships.push({
    id: "SH-1001", orderId: "AF-M-1001", product: "Biomass briquettes", qty: 1500, unit: "kg",
    packages: 30, pickup: "Laguna Green Farm, Laguna", dest: "Calabarzon · Laguna · Calamba City",
    method: "Direct truck delivery", provider: METHODS["Direct truck delivery"],
    dispatch: "—", eta: today(8), stage: 0
  });

  state.log.push({ t: Date.now(), m: "Demo data loaded (simulated)." });
  return state;
}

// Load saved state safely; fall back to defaults if missing or corrupt.
function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const valid = saved && ["inventory", "products", "orders", "ships", "log"].every((k) => Array.isArray(saved[k]));
    if (valid && saved.cart && typeof saved.cart === "object") return saved;
  } catch (err) {
    console.warn("Storage unreadable, using defaults:", err);
  }
  return seed();
}

let S = load();

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(S));
  } catch (err) {
    toast("Could not save (storage unavailable).", true);
  }
}

function log(message) {
  S.log.unshift({ t: Date.now(), m: message });
  S.log = S.log.slice(0, 12);
}

const itemStatus = (item) =>
  item.qty <= 0 ? "out" : item.qty < item.lowAt ? "low" : "available";

/* =====================================================================
   UI HELPERS: TOASTS, IMAGES
   ===================================================================== */
function toast(message, isError = false) {
  const el = document.createElement("div");
  el.className = "toast" + (isError ? " bad" : "");
  el.textContent = message;
  $("#toasts").append(el);
  setTimeout(() => el.remove(), 3200);
}

// Colour pairs for the generated placeholder tiles (used when no image link is set).
const PALETTE = {
  rice: ["#efe2b0", "#c9a227"], corn: ["#f8dc7a", "#e0a100"], sugarcane: ["#b5e07a", "#56ab2f"],
  coconut: ["#dccbab", "#8b6b3e"], cassava: ["#ecdcc0", "#b08a5a"], riceHusk: ["#e8d8ab", "#a98a4b"],
  bagasse: ["#dde8b8", "#7b9a3a"], coconutHusk: ["#d3bc96", "#7a5a35"], finishedProduct: ["#d3eadb", "#1f7a54"]
};

// Builds a clean gradient tile with a leaf icon and the item name.
function placeholder(key, label) {
  const [c1, c2] = PALETTE[key] || ["#dbe7dc", "#1f7a54"];
  const text = String(label).replace(/[<>&"']/g, "").slice(0, 26);
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">' +
    `<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>` +
    '<rect width="400" height="300" fill="url(#g)"/>' +
    '<circle cx="330" cy="60" r="90" fill="#fff" opacity=".14"/><circle cx="60" cy="300" r="110" fill="#fff" opacity=".1"/>' +
    '<path d="M150 190c0-50 28-85 110-92-2 66-38 96-98 96z" fill="#fff" opacity=".55"/>' +
    '<path d="M150 190c30-38 62-62 100-80" stroke="#14392b" stroke-opacity=".35" stroke-width="5" fill="none" stroke-linecap="round"/>' +
    `<text x="22" y="272" font-family="sans-serif" font-size="22" font-weight="700" fill="#14392b" fill-opacity=".8">${text}</text></svg>`;
  return "data:image/svg+xml," + encodeURIComponent(svg);
}

// Real HTTPS links are used first; if one is missing or fails, the tile is shown.
function img(key, alt) {
  const url = IMAGE_URLS[key] || "";
  const fallback = placeholder(key, alt);
  const src = /^https:\/\//.test(url) ? esc(url) : fallback;
  return `<img src="${src}" data-fb="${fallback}" alt="${esc(alt)}" loading="lazy" onerror="this.onerror=null;this.src=this.dataset.fb">`;
}

/* =====================================================================
   NAVIGATION
   ===================================================================== */
function go(view) {
  document.querySelectorAll(".view").forEach((el) => el.classList.toggle("active", el.id === "view-" + view));
  document.querySelectorAll(".nav").forEach((el) => el.classList.toggle("active", el.dataset.view === view));
  window.scrollTo(0, 0);
  renderAll();
}

/* =====================================================================
   MODAL + FORM ENGINE (validation is centralised here)
   field = { name, label, type, required, options, value, full, list, min, readonly }
   ===================================================================== */
function openForm(title, fields, onSubmit, submitLabel = "Submit") {
  const fieldHtml = fields.map((f) => {
    const id = "f_" + f.name;
    const value = esc(f.value ?? "");
    let control;

    if (f.type === "select") {
      const options = f.options
        .map((o) => `<option ${o === f.value ? "selected" : ""}>${esc(o)}</option>`)
        .join("");
      control = `<select id="${id}" name="${f.name}">${options}</select>`;
    } else if (f.type === "textarea") {
      control = `<textarea id="${id}" name="${f.name}" rows="2">${value}</textarea>`;
    } else {
      control = `<input id="${id}" name="${f.name}" type="${f.type || "text"}" value="${value}"` +
        `${f.list ? ' list="dl_dest"' : ""}${f.min !== undefined ? ` min="${f.min}"` : ""}${f.readonly ? " readonly" : ""}>`;
    }

    return `<label class="${f.full ? "full" : ""}">${esc(f.label)}${f.required ? " *" : ""}` +
      `${control}<span class="err" id="e_${f.name}"></span></label>`;
  }).join("");

  $("#sheet").innerHTML = `
    <h2 id="mTitle">${esc(title)}</h2>
    <form id="f" novalidate>
      <div class="fgrid">${fieldHtml}</div>
      <datalist id="dl_dest">${DESTINATIONS.map((d) => `<option value="${esc(d)}">`).join("")}</datalist>
      <div class="fact">
        <button type="button" class="btn ghost" data-act="close">Cancel</button>
        <button class="btn" id="subBtn">${esc(submitLabel)}</button>
      </div>
    </form>`;
  $("#modal").classList.add("open");

  $("#f").addEventListener("submit", (event) => {
    event.preventDefault();
    const data = {};
    let allValid = true;

    fields.forEach((f) => {
      const el = $("#f_" + f.name);
      const val = el.value.trim();
      let message = "";
      data[f.name] = val;

      if (f.required && !val) {
        message = "This field is required.";
      } else if (val && f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        message = "Enter a valid email address.";
      } else if (val && f.type === "tel" && !/^\+?[\d\s-]{7,15}$/.test(val)) {
        message = "Enter a valid phone number (7–15 digits).";
      } else if (val && f.type === "number" && !(Number(val) > 0)) {
        message = "Enter a number greater than 0.";
      }

      $("#e_" + f.name).textContent = message;
      el.classList.toggle("invalid", Boolean(message));
      if (message) allValid = false;
    });

    if (!allValid) return toast("Please fix the highlighted fields.", true);

    // Brief "processing" feedback, then run the handler.
    const button = $("#subBtn");
    button.disabled = true;
    button.textContent = "Processing…";
    setTimeout(() => {
      const result = onSubmit(data);
      if (result === false) {
        button.disabled = false;
        button.textContent = submitLabel;
      } else {
        closeModal();
      }
    }, 500);
  });
}

function closeModal() {
  $("#modal").classList.remove("open");
}

function showInfo(html, extraButtons = "") {
  $("#sheet").innerHTML = `${html}<div class="fact">${extraButtons}<button class="btn" data-act="close">Close</button></div>`;
  $("#modal").classList.add("open");
}

/* =====================================================================
   1. FARM INVENTORY
   ===================================================================== */
function renderInventory() {
  // Rebuild the location filter from current data, keeping the selection.
  const locSelect = $("#floc");
  const previous = locSelect.value || "all";
  const locations = ["all", ...new Set(S.inventory.map((i) => i.location))];
  locSelect.innerHTML = locations
    .map((l) => `<option value="${esc(l)}">${l === "all" ? "All locations" : esc(l)}</option>`)
    .join("");
  locSelect.value = locations.includes(previous) ? previous : "all";

  const query = $("#fq").value.toLowerCase();
  const category = $("#fcat").value;
  const availability = $("#fav").value;

  const list = S.inventory
    .filter((i) =>
      i.name.toLowerCase().includes(query) &&
      (category === "all" || i.category === category) &&
      (locSelect.value === "all" || i.location === locSelect.value) &&
      (availability === "all" || itemStatus(i) === availability))
    .sort($("#fsort").value === "qty"
      ? (a, b) => b.qty - a.qty
      : (a, b) => a.name.localeCompare(b.name));

  $("#invGrid").innerHTML = list.length
    ? list.map((i, n) => `
      <article class="item" style="--i:${n}">
        ${img(i.img, i.name)}
        <div class="body">
          <div>
            <span class="tag ${itemStatus(i)}">${STAT_LABEL[itemStatus(i)]}</span>
            <span class="tag ${i.category === "waste" ? "waste" : ""}">${i.category === "waste" ? "By-product" : "Crop"}</span>
          </div>
          <h4>${esc(i.name)}</h4>
          <span class="muted">${esc(i.farm)} · ${esc(i.location)}</span>
          <b>${i.qty.toLocaleString()} ${esc(i.unit)}</b>
          <span class="muted">${money(i.price)}/${esc(i.unit)} · ${esc(i.quality)} · ${esc(i.harvest)}</span>
        </div>
        <div class="acts">
          <button class="btn sm ghost" data-act="detail" data-id="${i.id}">Details</button>
          <button class="btn sm ghost" data-act="editItem" data-id="${i.id}">Edit</button>
          <button class="btn sm" data-act="order" data-id="${i.id}" ${i.qty <= 0 ? "disabled" : ""}>Order</button>
        </div>
      </article>`).join("")
    : `<div class="empty">No inventory matches your filters.</div>`;
}

// Add a new record, or edit an existing one when an id is passed.
function itemForm(id) {
  const existing = id ? S.inventory.find((x) => x.id === id) : null;
  const v = existing || {};

  openForm(existing ? "Edit inventory record" : "Add inventory record", [
    { name: "name", label: "Item name", required: true, value: v.name },
    { name: "category", label: "Type", type: "select", options: ["crop", "waste"], value: v.category || "crop" },
    { name: "farm", label: "Farm / supplier", required: true, value: v.farm },
    { name: "location", label: "Location (province)", required: true, value: v.location },
    { name: "qty", label: "Quantity", type: "number", required: true, min: 1, value: v.qty },
    { name: "unit", label: "Unit", type: "select", options: ["kg", "pcs", "tons"], value: v.unit || "kg" },
    { name: "price", label: "Price per unit (₱)", type: "number", required: true, min: 0.1, value: v.price },
    { name: "uses", label: "Possible uses", full: true, value: v.uses }
  ], (d) => {
    if (existing) {
      Object.assign(existing, {
        name: d.name, category: d.category, farm: d.farm, location: d.location,
        qty: +d.qty, unit: d.unit, price: +d.price, uses: d.uses || "—"
      });
      log("Inventory updated: " + d.name);
      toast("Inventory item updated.");
    } else {
      S.inventory.unshift({
        id: uid("inv"), name: d.name, category: d.category, farm: d.farm, qty: +d.qty,
        unit: d.unit, lowAt: Math.round(d.qty * 0.25), location: d.location, price: +d.price,
        harvest: today(), quality: "Unverified", img: "", uses: d.uses || "—", product: d.name + " products"
      });
      log("Inventory added: " + d.name);
      toast("Inventory item added.");
    }
    save();
    renderAll();
  }, existing ? "Save changes" : "Add item");
}

function itemDetail(id) {
  const i = S.inventory.find((x) => x.id === id);
  if (!i) return;

  const rows = [
    ["Supplier", i.farm],
    ["Location", i.location],
    ["Quantity", `${i.qty.toLocaleString()} ${i.unit}`],
    ["Price", `${money(i.price)}/${i.unit}`],
    ["Harvest / available", i.harvest],
    ["Condition", i.quality],
    ["Possible uses", i.uses],
    ["Status", STAT_LABEL[itemStatus(i)]]
  ].map((r) => `<div class="row"><span>${r[0]}</span><b>${esc(r[1])}</b></div>`).join("");

  showInfo(`<h2 id="mTitle">${esc(i.name)}</h2><div class="item" style="margin:1rem 0">${img(i.img, i.name)}</div>${rows}`);
}

/* =====================================================================
   2. MANUFACTURING: OPPORTUNITIES, ORDERS, PRODUCTION TRACKING
   ===================================================================== */
function renderOpps() {
  $("#oppGrid").innerHTML = S.inventory.map((i, n) => `
    <article class="item" style="--i:${n}">
      ${img(i.img, i.name)}
      <div class="body">
        <h4>${esc(i.name)} → ${esc(i.product)}</h4>
        <span class="muted">Available: ${i.qty.toLocaleString()} ${esc(i.unit)} · Est. processing 3–10 days (illustrative)</span>
        <span class="muted">Facility: Demo Processing Plant</span>
        <span class="tag ${itemStatus(i)}">${STAT_LABEL[itemStatus(i)]}</span>
      </div>
      <div class="acts">
        <button class="btn sm" data-act="order" data-id="${i.id}" ${i.qty <= 0 ? "disabled" : ""}>Request materials</button>
      </div>
    </article>`).join("");
}

function orderForm(id) {
  const item = S.inventory.find((x) => x.id === id);
  if (!item) return;

  openForm("Request: " + item.name, [
    { name: "company", label: "Company name", required: true },
    { name: "contact", label: "Contact person", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel", required: true },
    { name: "facility", label: "Manufacturing facility", required: true },
    { name: "material", label: "Source material", value: item.name, readonly: true },
    { name: "qty", label: `Quantity (max ${item.qty.toLocaleString()})`, type: "number", required: true, min: 1 },
    { name: "unit", label: "Unit", value: item.unit, readonly: true },
    { name: "date", label: "Preferred delivery date", type: "date", required: true, value: today(10) },
    { name: "method", label: "Delivery method", type: "select", options: Object.keys(METHODS) },
    { name: "dest", label: "Destination (region · province · city)", required: true, list: true, full: true },
    { name: "address", label: "Delivery address", required: true, full: true },
    { name: "use", label: "Intended manufacturing use", required: true, full: true },
    { name: "notes", label: "Additional instructions", type: "textarea", full: true }
  ], (d) => {
    if (+d.qty > item.qty) {
      $("#e_qty").textContent = "Exceeds available stock.";
      toast("Quantity exceeds stock.", true);
      return false;
    }
    if (d.date < today()) {
      $("#e_date").textContent = "Date cannot be in the past.";
      return false;
    }
    item.qty -= +d.qty;
    const ref = createOrder({
      type: "mfr", product: item.name, finished: item.product, qty: +d.qty, unit: item.unit,
      company: d.company, dest: `${d.dest} · ${d.address}`, method: d.method,
      pickup: `${item.farm}, ${item.location}`, eta: d.date
    });
    save();
    renderAll();
    toast(`Order ${ref} created.`);
  }, "Submit request");
}

// Creates a production order AND its linked shipment so references stay consistent.
function createOrder(o) {
  const orderId = uid("AF-M");
  const shipId = uid("SH");
  const productName = o.finished || o.product;

  S.orders.unshift({
    id: orderId, type: o.type, product: productName, qty: o.qty, unit: o.unit,
    date: today(), eta: o.eta, stage: 0, update: "Order received — planning",
    company: o.company, dest: o.dest, method: o.method, ship: shipId
  });

  S.ships.unshift({
    id: shipId, orderId, product: productName, qty: o.qty, unit: o.unit,
    packages: Math.max(1, Math.ceil(o.qty / 50)), pickup: o.pickup || "AgriFlow Demo Plant",
    dest: o.dest, method: o.method, provider: METHODS[o.method], dispatch: "—", eta: o.eta, stage: 0
  });

  log(`Order ${orderId}: ${o.qty} ${o.unit} ${o.product}`);
  return orderId;
}

const progressPct = (o) => Math.round((o.stage / (PROD_STAGES.length - 1)) * 100);

function stepsHtml(stages, current) {
  const steps = stages
    .map((s, n) => `<div class="step ${n < current ? "done" : n === current ? "cur" : ""}">${esc(s)}</div>`)
    .join("");
  return `<div class="steps">${steps}</div>`;
}

function orderCard(o, withActions) {
  const next = o.stage < 7 ? PROD_STAGES[o.stage + 1] : "—";
  return `
    <div class="track">
      <div class="thead">
        <b>${o.id}</b>
        <span class="tag">${o.stage === 7 ? "Completed" : PROD_STAGES[o.stage]}</span>
      </div>
      <div class="meta">${esc(o.product)} · ${o.qty.toLocaleString()} ${esc(o.unit)} · Ordered ${o.date} · Est. completion ${o.eta} · ${esc(o.company || "")}</div>
      <div class="bar"><i style="width:${progressPct(o)}%"></i></div>
      <div class="meta">${progressPct(o)}% · Latest: ${esc(o.update)} · Next: ${next}</div>
      ${stepsHtml(PROD_STAGES, o.stage)}
      ${withActions ? `<div class="tact"><button class="btn sm" data-act="advOrder" data-id="${o.id}" ${o.stage >= 7 ? "disabled" : ""}>Advance stage (demo)</button></div>` : ""}
    </div>`;
}

function renderOrders() {
  $("#orders").innerHTML = S.orders.length
    ? S.orders.map((o) => orderCard(o, true)).join("")
    : `<div class="empty">No production orders yet. Request materials above.</div>`;
}

function advanceOrder(id) {
  const order = S.orders.find((x) => x.id === id);
  if (!order || order.stage >= 7) return;

  const ship = S.ships.find((s) => s.id === order.ship);
  if (order.stage === 6 && ship && ship.stage < 4) {
    return toast("Deliver the shipment first (Distribution tab).", true);
  }

  order.stage++;
  order.update = `${PROD_STAGES[order.stage]} — ${new Date().toLocaleTimeString()}`;
  log(`${order.id} → ${PROD_STAGES[order.stage]}`);
  save();
  renderAll();
  toast(`${order.id}: ${PROD_STAGES[order.stage]}`);
}

/* =====================================================================
   3. DISTRIBUTION & LOGISTICS
   ===================================================================== */
function renderShips() {
  const statusSelect = $("#sst");
  const methodSelect = $("#smt");

  // Populate filters once.
  if (!statusSelect.options.length) {
    statusSelect.innerHTML = `<option value="all">All statuses</option>` +
      SHIP_STAGES.map((s, n) => `<option value="${n}">${s}</option>`).join("");
    methodSelect.innerHTML = `<option value="all">All methods</option>` +
      Object.keys(METHODS).map((m) => `<option>${m}</option>`).join("");
  }

  const query = $("#sq").value.toLowerCase();
  const list = S.ships.filter((s) =>
    (statusSelect.value === "all" || s.stage === +statusSelect.value) &&
    (methodSelect.value === "all" || s.method === methodSelect.value) &&
    [s.id, s.orderId, s.product, s.dest].join(" ").toLowerCase().includes(query));

  $("#ships").innerHTML = list.length
    ? list.map((s) => `
      <div class="track">
        <div class="thead"><b>${s.id}</b><span class="tag">${SHIP_STAGES[s.stage]}</span></div>
        <div class="meta">
          Order ${s.orderId} · ${esc(s.product)} · ${s.qty.toLocaleString()} ${esc(s.unit)} (${s.packages} packages)<br>
          From ${esc(s.pickup)} → ${esc(s.dest)}<br>
          ${esc(s.method)} · ${esc(s.provider)} · Dispatch ${s.dispatch} · ETA ${s.eta} <i>(simulated)</i>
        </div>
        ${stepsHtml(SHIP_STAGES, s.stage)}
        <div class="tact">
          <button class="btn sm" data-act="advShip" data-id="${s.id}" ${s.stage >= 4 ? "disabled" : ""}>Advance status (demo)</button>
          <select data-ship="${s.id}" aria-label="Delivery method">
            ${Object.keys(METHODS).map((m) => `<option ${m === s.method ? "selected" : ""}>${m}</option>`).join("")}
          </select>
        </div>
      </div>`).join("")
    : `<div class="empty">No shipments match your filters.</div>`;
}

function advanceShip(id) {
  const ship = S.ships.find((x) => x.id === id);
  if (!ship || ship.stage >= 4) return;
  const order = S.orders.find((x) => x.id === ship.orderId);

  if (ship.stage === 0 && order && order.stage < 6) {
    return toast("Production must reach 'Ready for dispatch' first.", true);
  }

  ship.stage++;
  if (ship.stage === 2) {
    ship.dispatch = today();
    toast(`${ship.id} dispatched.`);
  } else if (ship.stage === 4) {
    toast(`${ship.id} delivered.`);
    if (order) {
      order.stage = 7;
      order.update = "Delivered to destination";
    }
  } else {
    toast(`${ship.id}: ${SHIP_STAGES[ship.stage]}`);
  }

  log(`${ship.id} → ${SHIP_STAGES[ship.stage]}`);
  save();
  renderAll();
}

/* =====================================================================
   4. CUSTOMER ORDERING (cart, checkout, order status)
   ===================================================================== */
const cartCount = () => Object.values(S.cart).reduce((a, b) => a + b, 0);

function renderProducts() {
  $("#prodGrid").innerHTML = S.products.map((p, n) => `
    <article class="item" style="--i:${n}">
      ${img(p.img, p.name)}
      <div class="body">
        <h4>${esc(p.name)}</h4>
        <span class="muted">${esc(p.desc)}</span>
        <b>${money(p.price)}</b>
        <span class="tag ${p.stock > 0 ? "" : "out"}">${p.stock > 0 ? p.stock + " in stock" : "Made to order"}</span>
      </div>
      <div class="acts"><button class="btn sm" data-act="addCart" data-id="${p.id}">Add to cart</button></div>
    </article>`).join("");
}

function renderCart() {
  const ids = Object.keys(S.cart).filter((id) => S.products.some((p) => p.id === id));
  let total = 0;

  $("#cart").innerHTML = ids.length
    ? ids.map((id) => {
      const p = S.products.find((x) => x.id === id);
      const q = S.cart[id];
      total += p.price * q;
      return `
        <div class="row">
          <span>${esc(p.name)}</span>
          <span>
            <button class="btn sm ghost" data-act="qty" data-id="${id}" data-d="-1" aria-label="Decrease">−</button>
            ${q}
            <button class="btn sm ghost" data-act="qty" data-id="${id}" data-d="1" aria-label="Increase">+</button>
          </span>
        </div>`;
    }).join("") +
    `<div class="row"><b>Total</b><b>${money(total)}</b></div>
     <button class="btn" style="width:100%;margin-top:.6rem" data-act="checkout">Checkout</button>`
    : `<p class="muted">Your cart is empty.</p>`;

  const badge = $("#cartBadge");
  badge.hidden = !cartCount();
  badge.textContent = cartCount();
}

function checkout() {
  openForm("Review & place order", [
    { name: "name", label: "Customer name", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel", required: true },
    { name: "method", label: "Delivery method", type: "select", options: Object.keys(METHODS) },
    { name: "date", label: "Preferred delivery date", type: "date", required: true, value: today(7) },
    { name: "dest", label: "Destination (region · province · city)", required: true, list: true },
    { name: "address", label: "Delivery address", required: true, full: true },
    { name: "notes", label: "Notes", type: "textarea", full: true }
  ], (d) => {
    if (d.date < today()) {
      $("#e_date").textContent = "Date cannot be in the past.";
      return false;
    }

    const refs = [];
    Object.keys(S.cart).forEach((id) => {
      const p = S.products.find((x) => x.id === id);
      if (!p) return;
      refs.push(createOrder({
        type: "cust", product: p.name, qty: S.cart[id], unit: "pcs", company: d.name,
        dest: `${d.dest} · ${d.address}`, method: d.method, eta: d.date
      }));
      p.stock = Math.max(0, p.stock - S.cart[id]);
    });

    S.cart = {};
    save();
    renderAll();
    showInfo(`
      <h2 id="mTitle">Order confirmed ✓</h2>
      <p>Reference(s): <b>${refs.join(", ")}</b></p>
      <p class="muted">Track progress below, in Manufacturing and in Distribution. Demo only: no payment was taken.</p>`);
    return false; // keep the confirmation open (handler already replaced the modal)
  }, "Place order");
}

function renderCustOrders() {
  const list = S.orders.filter((o) => o.type === "cust");
  $("#custOrders").innerHTML = list.length
    ? list.map((o) => orderCard(o, false)).join("")
    : `<div class="empty">No customer orders yet. Add a product to your cart.</div>`;
}

/* =====================================================================
   OVERVIEW (all figures derived from the demo data)
   ===================================================================== */
function renderOverview() {
  const crops = S.inventory.filter((i) => i.category === "crop");
  const waste = S.inventory.filter((i) => i.category === "waste");

  const stats = [
    [crops.length, "Crop types"],
    [crops.reduce((a, i) => a + i.qty, 0).toLocaleString(), "Crop stock (mixed units)"],
    [waste.length, "By-product types"],
    [S.inventory.filter((i) => itemStatus(i) !== "available").length, "Low / out of stock"],
    [S.orders.filter((o) => o.stage < 7).length, "Active production orders"],
    [S.ships.filter((s) => s.stage < 4).length, "Open shipments"]
  ];
  $("#stats").innerHTML = stats.map((s) => `<div class="stat"><b>${s[0]}</b><span>${s[1]}</span></div>`).join("");

  $("#activity").innerHTML = S.log.slice(0, 7)
    .map((l) => `<li>${esc(l.m)}<small>${new Date(l.t).toLocaleString()}</small></li>`)
    .join("");

  const avg = S.orders.length ? Math.round(S.orders.reduce((a, o) => a + progressPct(o), 0) / S.orders.length) : 0;
  const chain = [
    ["Inventory items", S.inventory.length],
    ["Production avg. progress", avg + "%"],
    ["Shipments in transit", S.ships.filter((s) => s.stage >= 2 && s.stage < 4).length],
    ["Delivered", S.ships.filter((s) => s.stage === 4).length],
    ["Customer orders", S.orders.filter((o) => o.type === "cust").length]
  ];
  $("#chain").innerHTML = chain.map((r) => `<div class="row"><span>${r[0]}</span><b>${r[1]}</b></div>`).join("");
}

function renderAll() {
  renderOverview();
  renderInventory();
  renderOpps();
  renderOrders();
  renderShips();
  renderProducts();
  renderCart();
  renderCustOrders();
}

/* =====================================================================
   EVENT WIRING (single delegated click handler)
   ===================================================================== */
document.addEventListener("click", (event) => {
  const navTarget = event.target.closest("[data-view],[data-go]");
  if (navTarget) return go(navTarget.dataset.view || navTarget.dataset.go);

  if (event.target.id === "modal") return closeModal();

  const target = event.target.closest("[data-act]");
  if (!target) return;
  const id = target.dataset.id;

  switch (target.dataset.act) {
    case "close":
      closeModal();
      break;
    case "addItem":
      itemForm();
      break;
    case "editItem":
      itemForm(id);
      break;
    case "detail":
      itemDetail(id);
      break;
    case "order":
      orderForm(id);
      break;
    case "advOrder":
      advanceOrder(id);
      break;
    case "advShip":
      advanceShip(id);
      break;
    case "addCart": {
      S.cart[id] = (S.cart[id] || 0) + 1;
      save();
      renderCart();
      const badge = $("#cartBadge");
      badge.classList.add("pulse");
      setTimeout(() => badge.classList.remove("pulse"), 400);
      toast("Added to cart.");
      break;
    }
    case "qty":
      S.cart[id] = (S.cart[id] || 0) + Number(target.dataset.d);
      if (S.cart[id] <= 0) delete S.cart[id];
      save();
      renderCart();
      break;
    case "checkout":
      checkout();
      break;
    case "reset":
      showInfo(
        `<h2 id="mTitle">Reset demo data?</h2><p>This clears all orders, shipments, cart and inventory edits in this browser.</p>`,
        `<button class="btn danger" data-act="doReset">Yes, reset</button>`
      );
      break;
    case "doReset":
      S = seed();
      save();
      closeModal();
      renderAll();
      toast("Demo data reset.");
      break;
  }
});

// Live search / filter / sort controls.
["fq", "fcat", "floc", "fav", "fsort"].forEach((id) => $("#" + id).addEventListener("input", renderInventory));
["sq", "sst", "smt"].forEach((id) => $("#" + id).addEventListener("input", renderShips));

// Change a shipment's delivery method.
$("#ships").addEventListener("change", (event) => {
  const shipId = event.target.dataset.ship;
  if (!shipId) return;
  const ship = S.ships.find((x) => x.id === shipId);
  ship.method = event.target.value;
  ship.provider = METHODS[ship.method];
  save();
  renderShips();
  toast("Delivery method updated.");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeModal();
});

// Optional hero photo from the IMAGE_URLS block.
if (/^https:\/\//.test(IMAGE_URLS.hero || "")) {
  const hero = $(".hero");
  hero.style.backgroundImage = `linear-gradient(120deg, rgba(20,57,43,.88), rgba(31,122,84,.7)), url("${encodeURI(IMAGE_URLS.hero)}")`;
  hero.style.backgroundSize = "cover";
  hero.style.backgroundPosition = "center";
}

renderAll();