const container = document.querySelector(".container");

function createNewGrid(size){
    for(let i = 0; i<Math.pow(size, 2); i++){
        const newDiv = document.createElement("div");
        container.appendChild(newDiv);
    }
}

createNewGrid(16);

function changeColour(e) {
    e.target.classList.add("red-square");
}

const containerDivs = document.querySelectorAll(".container div");
containerDivs.forEach((containerDiv) => {
    containerDiv.addEventListener("mouseenter", changeColour);
});

const selectionButton = document.querySelector("button.selection");
selectionButton.addEventListener("click", askForGridSize);

function askForGridSize(e){
    const size = prompt("What grid size do you want? Max 100.");
    createNewGrid(size);
}