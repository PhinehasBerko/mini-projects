
const textContainerEl = document.querySelector(".container")

const careers = [
    "Software Developer",
    "Data Scientist", 
    "AI Engineer",
    "Freelancer"
];

let careerIndex = 0;
let characterIndex = 0;

updateCareer();

function updateCareer() {
    characterIndex++;
    textContainerEl.innerHTML = `
<h1>I am ${careers[careerIndex].slice(0,1)=== "A" ? "an": "a"} ${careers[careerIndex].slice(0,characterIndex)}</h1>
`;

if(characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
}

if(careerIndex === careers.length){
    careerIndex = 0;
}
setTimeout(updateCareer,150);

}

