/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */
// =============== один из многих================
const tagsContainer = document.querySelector('.js-tags');
tagsContainer.addEventListener('click', onTagsContainerClick);
function onTagsContainerClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const currentActiveBtn = document.querySelector('.tags__btn--active');
  if (currentActiveBtn) {
    currentActiveBtn.classList.remove('tags__btn--active');
  }
  const nextActiveBtn = event.target;
  if (currentActiveBtn) {
    return;
  }

  nextActiveBtn.classList.add('tags__btn--active');
  const selectedTags = nextActiveBtn.dataset.value;
  console.log(selectedTags);
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;

// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   const currentActiveBtn = document.querySelector('.tags__btn--active');

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active');
//   }

//   const nextActiveBtn = evt.target;
//   nextActiveBtn.classList.add('tags__btn--active');
//   selectedTag = nextActiveBtn.dataset.value;
//   console.log(selectedTag);
// }

// =============== несколько из многих и Set================

// const tagsContainer = document.querySelector('.js-tags');
// tagsContainer.addEventListener('click', onTagsContainerClick);
// const selectedTags = new Set();
// function onTagsContainerClick(event) {
//   if (event.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   const btn = event.target;
//   const isActive = btn.classList.contains('tags__btn--active');
//   const tag = btn.dataset.value;
//   if (isActive) {
//     selectedTags.delete(tag);
//   } else {
//     selectedTags.add(tag);
//   }

//   btn.classList.toggle('tags__btn--active');
//   console.log(selectedTags);
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// const tagsContainer = document.querySelector('.js-tags');

// const selectedTags = new Set();
// tagsContainer.addEventListener('click', onTagsContainerClick);

// function onTagsContainerClick(evt) {
//   if (evt.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   const btn = evt.target;
//   const isActive = btn.classList.contains('tags__btn--active');
//   const tag = btn.dataset.value;
//   if (isActive) {
//     selectedTags.delete(tag);
//   } else {
//     selectedTags.add(tag);
//   }
//   btn.classList.toggle('tags__btn--active');

//   console.log(selectedTags);
// }
