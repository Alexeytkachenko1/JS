/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// targetBtn.addEventListener('click', onTargetBtnClick);
// function handleTargetBtnClick() {
//   console.log('Click');
// }
// function targetBtnClickHandler() {
//   console.log('Click');
// }

// function onTargetBtnClick() {
//   console.log('Click');
// }
//
//
//
addListenerBtn.addEventListener('click', event => {
  console.log(event);
  console.log('Вешаю слушателя события на целевую кнопку');
  targetBtn.addEventListener('click', onTargetBtnClick);
});
removeListenerBtn.addEventListener('click', event => {
  console.log(event);
  console.log('Снимаю слушателя события с целевой кнопки');
  targetBtn.removeEventListener('click', onTargetBtnClick);
});
function onTargetBtnClick(event) {
  console.log(event);
  console.log('Клик по целевой кнопке');
}

//
//
//

// addListenerBtn.addEventListener('click', event => {
//   console.log(event);
//   console.log('Вешаю слушателя события на целевую кнопку');

//   targetBtn.addEventListener('click', onTargetBtnClick);
// });

// removeListenerBtn.addEventListener('click', event => {
//   console.log(event);
//   console.log('Снимаю слушателя события с целевой кнопки');

//   targetBtn.removeEventListener('click', onTargetBtnClick);
// });

// function onTargetBtnClick(event) {
//   console.log(event);
//   console.log('Клик по целевой кнопке');
// }
