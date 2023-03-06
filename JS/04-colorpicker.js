const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#e91e63', rgb: '233,30,99' },
  { hex: '#9c27b0', rgb: '156,39,176' },
  { hex: '#673ab7', rgb: '103,58,183' },
  { hex: '#3f51b5', rgb: '63,81,181' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#00bcd4', rgb: '0,188,212' },
  { hex: '#009688', rgb: '0,150,136' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
  { hex: '#ff9800', rgb: '255,152,0' },
  { hex: '#795548', rgb: '121,85,72' },
  { hex: '#607d8b', rgb: '96,125,139' },
];

const paletteContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardsMarkup(colors);
console.log(cardsMarkup);
paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);
function createColorCardsMarkup(colors) {
  return colors
    .map(({ hex, rgb }) => {
      return ` 
      <div class="color-card">
    <div>
    <div>
    <div>
<div class="color-swatch" data-hex="${hex}"
data-rgb="rgba:${rgb}"
 style="background-color:rgb(${rgb})"></div>
    </div>
  </div>
  </div>
  <div class="color-meta">
    <p>HEX: ${hex}</p>
    <p>RGB:${rgb}</p>
  </div> 
  </div>
    `;
    })
    .join('');
}
paletteContainer.addEventListener('click', onPaletteContainerClick);

function onPaletteContainerClick(event) {
  const isColorSwatchEl = event.target.classList.contains('color-swatch');
  if (!isColorSwatchEl) {
    return;
  }
  console.log(event.target.dataset.rgb);
  document.body.style.backgroundColor = event.target.dataset.hex;
  const parentColorCard = event.target.closest('.color-card');
  const isActiveCard = document.querySelector('.color-card.is-active');
  if (isActiveCard) {
    isActiveCard.classList.remove('is-active');
  }

  parentColorCard.classList.add('is-active');
  console.log(event.target);
}
// function onPaletteContainerClick(event) {
//   const isColorSwatchEl = event.target.classList.contains('color-swatch');
//   if (!isColorSwatchEl) {
//     return;
//   }

//   const swatchEl = event.target;

//   const parentColorCard = swatchEl.closest('.color-card');
//   console.log(event.target.dataset.hex);

//   setBodyBgColor(event.target.dataset.hex);
//   removeActiveCardClass();

//   addActiveCardClass(parentColorCard);
// }
// function setBodyBgColor(color) {
//   document.body.style.backgroundColor = color;
// }
// function addActiveCardClass(card) {
//   if (card.classList.contains('is-active')) {
//     return;
//   }
//   card.classList.add('is-active');
// }
// function removeActiveCardClass() {
//   const activeColorCard = document.querySelector('.color-card.is-active');
//   if (activeColorCard) {
//     activeColorCard.classList.remove('is-active');
//   }
// }
