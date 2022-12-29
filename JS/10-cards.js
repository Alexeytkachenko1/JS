/*
 * Работем с коллекцией карточек в trello
 * - Метод splice()
 * - Удалить
 * - Добавить
 * - Обновить
 */

// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
// ];

// console.table(cards);

/*
 * Удаление (по индексу), метод indexOf()
 */

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);

// console.table(cards);
// ****************************************

/*
 * Добавление (по индексу)
 */
// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);
// console.table(cards);
//*********************
// const cardToInsert = 'Карточка-4';
// const index = cardToInsert.length;
// console.log(cardToInsert.length);
// cards.splice(index, 1, cardToInsert);
// console.table(cards);
/*
 * Обновление (по индексу)
 */
// const cardToUpdate = 'Карточка-4';
// const index = cards.indexOf(cardToUpdate);

// console.log(index);

// cards.splice(index, 1, 'Обновленная карточка-4');

// console.table(cards);

// const cardToUpdate = 'Карточка-4';
// const index = cards.indexOf(cardToUpdate);

// console.log(index);

// cards.splice(index, 1, 'Обновленная карточка-4');
// console.table(cards);

// ++++++++++++++++++====ДОП++++++++++++++++++
const str = 'struktura dannih dlya hraneniya';
const words = str.split(' ');

for (let i = 0; i < words.length; i += 1) {
  const word = words[i];
  const newWord = word[0].toUpperCase() + word.slice(1);
  words[i] = newWord;
}
const newString = words.join(' ');
console.log(newString);
