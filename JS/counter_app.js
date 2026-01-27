let count = 0;

const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("add");
const decrementBtn = document.getElementById("subtract");
const resetBtn = document.getElementById("reset");

function updateUI() {
  countDisplay.textContent = count;
}

incrementBtn.addEventListener("click", () => {
    count++;
    updateUI();
});

decrementBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateUI();
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateUI();
});