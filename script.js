const container = document.getElementById('container');

let r = prompt("How many rows?");
let c = prompt("How many columns?");

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols); 
    for (let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = ("pants");
        // (c + 1);
        container.appendChild(cell).className = "grid-item";
    };
};

makeRows(r, c);