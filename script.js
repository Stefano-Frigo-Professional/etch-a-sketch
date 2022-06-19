const container = document.querySelector(".container");

function createNewGrid(size){
    size = Number(size) + 1;

    deleteOldGrid();
    for(let i = 0; i<(Math.pow(size, 2)-size); i++){
        const newDiv = document.createElement("div");
        container.appendChild(newDiv);
    }

    const xth = document.querySelectorAll(`.container div:nth-child(${size}n + 1)`);
    xth.forEach((x) => {
        x.classList.add("xth");
    })

    addGridTrail();
}

function addGridTrail() {
    const containerDivs = document.querySelectorAll(".container div");
    containerDivs.forEach((containerDiv) => {
        containerDiv.addEventListener("mouseenter", changeColour);
    });
    
}

function deleteOldGrid() {
    container.innerHTML = "";
}

function createInitialGrid() {
    createNewGrid(16);
}

createInitialGrid();

function changeColour(e) {
    e.target.classList.add("red-square");
}

const selectionButton = document.querySelector("button.selection");
selectionButton.addEventListener("click", askForGridSize);

function askForGridSize(e){
    const size = prompt("What grid size do you want? Max 80.");
    if(size>80) return;
    createNewGrid(size);
}