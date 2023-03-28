const sliderValue = document.getElementById('grid-slider');
const createDiv = document.createElement('div');
const gridContainer = document.querySelector('#grid-container');
const labelText = document.querySelector('label');
const colorPicker = document. querySelector('#color-picker');
const gridColor = document.querySelector('.grid-item');
const btnClear = document.querySelector('button');


function generateDiv(){
  const value = parseInt(this.value);
  let containerLength = 0;

  // reset all the element in the container
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  
  // Generate Div in the container 
  for (let i = containerLength; i < value**2; i++){
      const div = document.createElement("div");
      div.classList.add("grid-item");
      gridContainer.appendChild(div);
  }
  
  gridContainer.style.cssText = `grid-template-columns: repeat(${value}, 1fr); grid-template-rows: repeat(${value}, 1fr);`;
  labelText.textContent = `${value} x ${value}`;
}

function byDefaultSliderValue(){
  const value = sliderValue.value;

  for (let i = 0; i < value**2; i++){
    const div = document.createElement("div");
    div.classList.add("grid-item");
    gridContainer.appendChild(div);
  }
  gridContainer.style.cssText = `grid-template-columns: repeat(${value}, 1fr); grid-template-rows: repeat(${value}, 1fr);`;
  labelText.textContent = `${value} x ${value}`;
  console.log(gridContainer.children.length);
}

function changeColor(e) {
  const colorValue = colorPicker.value;
  if (e.target.classList.contains('grid-item')){
    e.target.style.cssText = `background-color: ${colorValue};`
  }
}

function clearGrid() {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach((gridItem) => {gridItem.style.cssText = ''});
}

window.onload = byDefaultSliderValue();
sliderValue.addEventListener('input',generateDiv);

gridContainer.addEventListener('mouseenter', changeColor, true);
gridContainer.addEventListener('mouseleave', changeColor, true);
btnClear.addEventListener('click', clearGrid);