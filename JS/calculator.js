const buttonElement = document.querySelectorAll("button");
const displayValue = document.getElementById("output");

for(let i = 0; i < buttonElement.length; i++) {
    buttonElement[i].addEventListener("click", () => {
        const buttonValue = buttonElement[i].textContent;
        if (buttonValue === "C") {
            clearResult();
        } else if (buttonValue === "=") {
            calculateResult();
        } else if (buttonValue === "x") {
            deleteValue();
        } else if (buttonValue === "%") {
            percentValue ();
        }else {
            appendValue(buttonValue);
        }
    });
}

const clearResult = () => {
    displayValue.value = "";

}

const calculateResult = () => {
    displayValue.value = eval(displayValue.value);
}
const deleteValue = () => {
    displayValue.value = displayValue.value.slice(0, -1);
}

const appendValue = (buttonValue) => {
    displayValue.value += buttonValue
}

const percentValue = () => {
    displayValue.value /= 100;
}