let gridContainer = document.querySelector('#gridContainer');
//Grid Width
let gridSize = 16;
//Number of grid nodes
let numOfDivs = gridSize * gridSize;
//Button Events
let clearBtn = document.querySelector('#clearBtn');
let sizeBtn = document.querySelector('#sizeBtn');
let colourBtn = document.querySelector('#colourBtn');

//Clear Button Event Listener
clearBtn.addEventListener("click", function() {
    clearGrid();
});

//Size Button Event Listener
sizeBtn.addEventListener("click", function() {
    setGridSize();
});

//Resize grid function
function setGridSize() {
    let size = prompt("Please select a number up to 100")
    if (size > 100) {
        return setGridSize();
    }
    gridSize = size;

    //Destroy all grid divs
    let gridChildren = gridContainer.children;
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    populateGrid(gridSize * gridSize);
}

//Changes grid node to black when called
function draw() {
    //Draw black
    this.style.backgroundColor = 'black';
}

//Creates divs
function populateGrid(numOfDivs) {
    let nodeSize = gridSize;
    let templateString = '';

    //Creates CSS string
    for (let i = 0; i < nodeSize; i++) {
        templateString += "auto ";
    }

    //Appends CSS string to DOM
    gridContainer.style.gridTemplateColumns = templateString;
    gridContainer.style.gridTemplateRows = templateString;

    //Appends and styles grid divs
    for (let i = 0; i < numOfDivs; i++) {
        let gridNode = document.createElement('div');
        gridNode.className = 'gridItem';
        gridNode.addEventListener('mouseover', draw);
        gridContainer.appendChild(gridNode);
    }
}

//Clear grid function
function clearGrid() {
    //Stores all children of grid container to HTML list
    let gridChildren = gridContainer.children;

    //Loops through child list and changes background colour back to white
    for (let i = 0; i < gridChildren.length; i++) {
        gridChildren[i].style.backgroundColor = 'white';
    }
}

//Initial grid population call
populateGrid(numOfDivs);