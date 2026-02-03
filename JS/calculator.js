
// 1. Define the calculator state
const state = {
  currentValue :"0",
  previousValue :null,
  operator: null,
  resetNext: false
}
// 2. One function controls ALL changes (reducer-style)
function dispatch(action) {
  switch (action.type) {
    case "NUMBER":
      handleNumber(action.payload);
      break;
    case "OPERATOR":
      handleOperator(action.payload);
      break;
    case "EQUALS":
      calculate();
      break;
    case "CLEAR":
      clearAll();
      break;
    case "DECIMAL":
      handleDecimal();
      break;
    case "PERCENTAGE":
      handlePercentage();
      break;
  }
  updateDisplay();
}
// 3. Button handling becomes clean and scalable
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (!isNaN(value)) {
      dispatch({type: "NUMBER", payload: value})
    } else if (value === '.') {
      dispatch({type: "DECIMAL"});
    } else if (value === "C") {
      dispatch({ type: "CLEAR" });
    } else if (value === "=") {
      dispatch({ type: "EQUALS" });
    }else {
      dispatch({ type: "OPERATOR", payload: value });
    }
  })
})

// 4. Fix number input (correct behavior after =)
const handleNumber = num => {
  if (state.resetNext) {
    state.currentValue = num;
    state.resetNext = false;
    return
  }
  state.currentValue = state.currentValue === "0" ? num : currentValue + num;
}
// 5. Decimal handling (no duplicates)

const handleDecimal = () => {
  if (state.resetNext) {
    state.currentValue = "0.";
    state.resetNext = false;
    return;
  }

  if(!state.currentValue.includes(".")) {
    state.currentValue += ".";   
  }
}
// 6. Operator logic with chaining
const handleOperator = op => {
  if (state.operator && state.previousValue !== null) {
    calculate();
  }

  state.previousValue = state.currentValue;
  state.operator = op;
  state.resetNext = true;
}

// 7. Calculation logic (pure and predictable)
const calculate = () => {
  if (!state.operator || state.previousValue === null) return;

  const a = Number(state.previousValue);
  const b = Number(state.currentValue);

  let result;

  switch (state.operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "X":
      result = a * b;
      break;
    case "/":
      result = b === 0 ? "Error" : a / b;
      break;
    case "%":
      result = a * (b / 100);
      break;
  }

  state.currentValue = String(result);
  state.previousValue = null;
  state.operator = null;
  state.resetNext = true;
}

// 8. UI update
const updateDisplay =() => {
  display.textContent = state.currentValue;
}
//  9. Clear = full reset
const clearAll = () => {
  state.currentValue = "0";
  state.previousValue = null;
  state.operator = null;
  state.resetNext = false;
}

const display = document.querySelector(".output");
const buttons = document.querySelectorAll("button");

