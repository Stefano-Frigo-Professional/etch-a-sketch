const container = document.querySelector(".container");

for(let i = 0; i<257; i++){
    const newDiv = document.createElement("div");
    container.appendChild(newDiv);
}

function changeColour(e) {
    e.target.style.borderColor = "red";
}

const containerDivs = document.querySelectorAll(".container div");
containerDivs.forEach((containerDiv) => {
    containerDiv.addEventListener("mouseenter", changeColour);
});