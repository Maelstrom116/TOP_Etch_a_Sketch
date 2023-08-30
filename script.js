const container = document.getElementById('container');
let size;
let numSize;

sizeSelected();
function sizeSelected () {
  buttons = document.querySelectorAll('button');
    buttons.forEach (button => {
      button.addEventListener ('click', () => {
        size = (button.id);
        numSize = parseInt(size);
        makeGrid();
        // console.log(numSize);
        // console.log(typeof(numSize));
        })
      })
  }


function makeGrid() {
  for(let i = 0; i < numSize; i++) {
    let row = document.createElement('grid-item');
    for(let j = 0; j < numSize; j++) {
      let cell = document.createElement('grid-item');
      cell.style.minWidth = "25px";
      cell.style.minHeight = "25px";
      cell.style.background = "yellow";
      cell.style.display = "inline-block";
      cell.innerText = (".");
      cell.style.border = ".5px solid #000000";
      row.appendChild(cell);
      hoverColor();
    }
    document.getElementById('container').appendChild(row);
  }
}

function hoverColor (){
  let items = document.querySelectorAll('grid-item');
  items.forEach (item => {
    item.addEventListener ('mouseover', () => {
      item.style.backgroundColor = 'black';
    })
  })
}