const container = document.getElementById('container');
let size;
let numSize;

userInput = 100;

sizeSelected();
function sizeSelected () {
  buttons = document.querySelectorAll('button');
    buttons.forEach (button => {
      button.addEventListener ('click', () => {
        size = (button.id);
        numSize = parseInt(size);
        makeGrid();
        })
      })     
  }

function makeGrid() {
  for(let i = 0; i < numSize; i++) {
    let row = document.createElement('grid-row');
    for(let j = 0; j < numSize; j++) {
      let col = document.createElement('grid-col');
      col.style.minWidth = "10px";
      col.style.minHeight = "10px";
      col.style.display = "flex";
      col.style.border = ".5px solid #000000";
      row.appendChild(col);
    }
    document.getElementById('container').appendChild(row);
  }
  hoverColor();
  document.getElementById('16').disabled = true;
  document.getElementById('32').disabled = true;
  document.getElementById('64').disabled = true;
}

const clear = document.querySelector('#clear');
  clear.addEventListener('click', () => {
    document.getElementById('16').disabled = false;
    document.getElementById('32').disabled = false;
    document.getElementById('64').disabled = false;
    location.reload();
  })

function hoverColor (){
  let items = document.querySelectorAll('grid-row' && 'grid-col');
  items.forEach (item => {
    item.addEventListener ('mouseover', () => {
      item.style.backgroundColor = 'black';
    })
  })
}