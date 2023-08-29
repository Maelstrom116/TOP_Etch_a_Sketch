const container = document.getElementById('container');

function makeGrid() {
  for(let i = 0; i < 16; i++) {
    let row = document.createElement('grid-item');
    for(let j = 0; j < 16; j++) {
      let cell = document.createElement('grid-item');
      cell.style.width = "25px";
      cell.style.height = "25px";
      cell.style.background = "yellow";
      cell.style.display = "inline-block";
      cell.innerText = (".");
      // cell.style.border = ".5px solid #000000";
      row.appendChild(cell);
      hoverColor();
    }
    document.getElementById('container').appendChild(row);
  }
}

function theGrid () {
  grid-template-column = 
}

makeGrid();

function hoverColor (){
  let items = document.querySelectorAll('grid-item');
  items.forEach (item => {
    item.addEventListener ('mouseover', () => {
      item.style.backgroundColor = 'black';
    })
  })
}

sizeSelected();


function sizeSelected () {
  buttons = document.querySelectorAll('button');
  let size;
    buttons.forEach (button => {
      button.addEventListener ('click', () => {
        if (small) {
          size = 16;
        } else if (medium) {
          size = 32;
        } else if (large) {
          size = 64;
          
        }
        console.log(size);
      })
    })

//   let sizeSmall = documentSelector('small');
//   sizeSmall.addEventListener ('click', () => {
//     let size = 16;
//   })
}