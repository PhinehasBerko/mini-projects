const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
     "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    let hexCode = '#';
    for ( let itr = 0; itr < 6; itr++ ) {
        
        const getNumber = hex[getRandomNumber()];
        hexCode += getNumber;
    }
    console.log(hexCode)
    document.body.style.backgroundColor = `${hexCode}`;
    color.textContent = `${hexCode}`;
    

})
const getRandomNumber = () => Math.floor(Math.random() * hex.length);




