let currentValue = "0";
let previousValue = null;
let operator = null;

const display = document.querySelector(".output");
const buttons = document.querySelectorAll("button");

// update UI
function updateDisplay() {
  display.textContent = currentValue;
}

// Button handling
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (!isNaN(value)) {
      handleNumber(value);
    } else if (value === "C") {
      clearAll();
    } else if (value === "=") {
      calculate();
    } else if (value === ".") {
      if (!currentValue.includes(".")) {
        currentValue += ".";
        updateDisplay();
      }
    } else {
          handleOperator(value);
        }
  });
});

// Number handling
function handleNumber(num) {
  currentValue = currentValue === "0" ? num : currentValue + num;
  updateDisplay();
}


// Operator handling
function handleOperator(op) {
  if (operator && previousValue !== null) {
    calculate();
  }

  previousValue = currentValue;
  currentValue = "0";
  operator = op;
}

// Calculate Logic
function calculate() {
  if (!operator || previousValue === null) return;

  const a = Number(previousValue);
  const b = Number(currentValue);

  switch (operator) {
    case "+":
      currentValue = String(a + b);
      break;
    case "-":
      currentValue = String(a - b);
      break;
    case "X":
      currentValue = String(a * b);
      break;
    case "%":
      currentValue = String(a * (b / 100));
      break;
    case "/":
      currentValue = b === 0 ? "Error" : String(a / b);
      break;
  }

  operator = null;
  previousValue = null;
  updateDisplay();
}

// Clear Logic
function clearAll() {
  currentValue = "0";
  previousValue = null;
  operator = null;
  updateDisplay();
}
