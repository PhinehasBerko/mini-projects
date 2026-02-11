let count = 0;

const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("add");
const decrementBtn = document.getElementById("subtract");
const resetBtn = document.getElementById("reset");

function updateUI() {
  countDisplay.textContent = count;
  
  if(count > 0) countDisplay.style.color = 'hsl(120 90% 28%)';
  if(count < 0) countDisplay.style.color = 'hsl(0, 93%, 35%)';
  if(count === 0) countDisplay.style.color = 'hsl(0 0% 90%)';
}

incrementBtn.addEventListener("click", () => {
    count++;
    updateUI();
});

decrementBtn.addEventListener("click", () => {
    count--;
    updateUI();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateUI();
});