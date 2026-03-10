const currencyFirstEl = document.getElementById("currency-first");
const currencySecondEl = document.getElementById("currency-second");
const inputFirstEl = document.getElementById("input-first");
const inputSecondEl = document.getElementById("input-second");
const exRateEl = document.getElementById("ex-rate");


const currencyUpdate = ( ) => {
    fetch(`https://v6.exchangerate-api.com/v6/a7faf4ba9c0cbc66c0667167/latest/${currencyFirstEl.value}`).then(
        (res) => res.json()
    ).then((data) =>{
        // console.log(data)
        const rate = data.conversion_rates[currencySecondEl.value]
        console.log(rate)
        exRateEl.value = `1 ${currencyFirstEl.value} = ${rate}  ${currencySecondEl.value}`;
        inputSecondEl.value = (inputFirstEl.value * rate)
    });
}
currencyUpdate();
currencyFirstEl.addEventListener("change", () => {
    currencyUpdate();
});

currencySecondEl.addEventListener("change", () => {
    currencyUpdate();
})

inputFirstEl.addEventListener("input", () => {
    currencyUpdate();
})