const container = document.querySelector(".container");

for(let i = 0; i<257; i++){
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
}

function changeColour(e) {
    e.target.classList.add("red-square");
}

const containerDivs = document.querySelectorAll(".container div");
containerDivs.forEach((containerDiv) => {
    containerDiv.addEventListener("mouseenter", changeColour);
});