import products from './data/products.js';

/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */

{
  /*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p product__pridct>Цена: 1111 кредитов</p>
</article>
*/
}

/*
 * Пишем функцию для создания карточки продукта
 */

const productsContainerEl = document.querySelector('.js-products');
const makeProductCard = ({ name, description, price }) => {
  const articleEl = document.createElement('article');
  articleEl.classList.add('product');
  const headerEl = document.createElement('h2');
  headerEl.classList.add('product__name');
  headerEl.textContent = name;
  const desrEl = document.createElement('p');
  desrEl.classList.add('product__descr');
  desrEl.textContent = description;
  const priceEl = document.createElement('p');
  priceEl.classList.add('product__price');
  priceEl.textContent = `Цена: ${price} кредитов`;

  articleEl.append(headerEl, desrEl, priceEl);
  return articleEl;
};
const result = products.map(makeProductCard);
productsContainerEl.append(...result);

// const productsContainerEl = document.querySelector('.js-products');

// const makeProductCard = ({ name, description, price }) => {
//   const productEl = document.createElement('article');
//   productEl.classList.add('product');

//   const nameEl = document.createElement('h2');
//   nameEl.textContent = name;
//   nameEl.classList.add('product__name');

//   const descrEl = document.createElement('p');
//   descrEl.textContent = description;
//   descrEl.classList.add('product__descr');

//   const priceEl = document.createElement('p');
//   priceEl.textContent = `Цена: ${price} кредитов`;
//   priceEl.classList.add('product__price');

//   productEl.append(nameEl, descrEl, priceEl);

//   return productEl;
// };

// const elements = products.map(makeProductCard);

// console.log(elements);
// productsContainerEl.append(...elements);
