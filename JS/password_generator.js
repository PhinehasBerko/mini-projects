const inputElement = document.getElementById("input");

const btnElement = document.querySelector(".btn");
const copyBtn = document.querySelector(".fa-copy")
const alertContainer = document.querySelector(".alert-container");

btnElement.addEventListener("click", ()=>{
    createPassword();
})

copyBtn.addEventListener("click", ()=>{
    if (inputElement.value) {
        coppyPassword();
        alertContainer.classList.remove("active");
        setTimeout( ()=>{
        alertContainer.classList.add("active");
        }, 3000);
    }
})

const createPassword = () => {
    const characters = `0123456789!@#$^&*_ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`
    const passwordLength = 12;
    let password="";
    for (let index = 0; index < passwordLength; index++) {
        let randomNumber = Math.floor(Math.random() * characters.length);

        password += characters.substring(randomNumber, randomNumber+1);
        console.log(randomNumber, password)
    }
    inputElement.value = password
    alertContainer.innerText = password + "  copied!"
}

const coppyPassword = () => {
    inputElement.select();
    inputElement.setSelectionRange(0, 9999); // for mobile select support

    // copy to clipboard
    navigator.clipboard.writeText(inputElement.value);

    //display copied password
    

}