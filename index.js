// === State ===
let numberBank = [];
let oddNumbers = [];
let evenNumbers = [];

// === Main Render Function ===
function render() {
  // Clear the page
  document.body.innerHTML = "";

  // Title
  const title = document.createElement("h1");
  title.textContent = "Odds and Events";

  // Form: Input + Button
  const form = document.createElement("form");
  const input = document.createElement("input");
  input.type = "number";
  input.placeholder = "Add a number to the bank";
  input.required = true;

  const addBtn = document.createElement("button");
  addBtn.textContent = "Add number";
  addBtn.type = "submit";

  form.append(input, addBtn);

  // Sort Buttons
  const sortOneBtn = document.createElement("button");
  sortOneBtn.textContent = "Sort 1";
  const sortAllBtn = document.createElement("button");
  sortAllBtn.textContent = "Sort All";

  // Sections: Bank, Odds, Evens
  const bankSection = createSection("Bank", numberBank);
  const oddSection = createSection("Odds", oddNumbers);
  const evenSection = createSection("Evens", evenNumbers);

  // Add everything to page
  document.body.append(
    title,
    form,
    sortOneBtn,
    sortAllBtn,
    bankSection,
    oddSection,
    evenSection
  );

  // === Event Listeners ===
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const num = Number(input.value);
    if (!isNaN(num)) {
      numberBank.push(num);
      input.value = "";
      render();
    }
  });

  sortOneBtn.addEventListener("click", () => {
    sortOne();
    render();
  });

  sortAllBtn.addEventListener("click", () => {
    sortAll();
    render();
  });
}

// === Helper Functions ===
function createSection(label, items) {
  const container = document.createElement("div");
  const title = document.createElement("h2");
  title.textContent = label;

  const box = document.createElement("div");
  box.style.border = "1px solid black";
  box.style.padding = "10px";
  box.style.marginBottom = "20px";
  box.textContent = items.join(" ");

  container.append(title, box);
  return container;
}

function sortOne() {
  const num = numberBank.shift();
  if (num !== undefined) {
    if (num % 2 === 0) {
      evenNumbers.push(num);
    } else {
      oddNumbers.push(num);
    }
  }
}

function sortAll() {
  while (numberBank.length > 0) {
    sortOne();
  }
}

// === Start the app ===
render();
