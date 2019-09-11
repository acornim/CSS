/* ref: https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb */

let grid;
let allItems;
function resizeGridItem(item) {
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
  item.style.gridRowEnd = 'span ' + rowSpan;
}

function resizeAllGridItems() {
  for (let x = 0; x < allItems.length; x++) {
    resizeGridItem(allItems[x]);
  }
}

function init() {
  grid = document.getElementById('grid');
  allItems = document.getElementsByClassName('grid-item');
  resizeAllGridItems();
}

window.onload = init;

window.addEventListener('resize', resizeAllGridItems);
