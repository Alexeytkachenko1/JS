/*
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 */

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => {acc + number, 0);
// const total = numbers.reduce((acc, number) => {
//   console.log(`number`, number);
//   console.log(`acc`, acc);
//   return acc + number;
// }, 0);
// console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

/*
 * Считаем общую зарплату
 */

const salary = {
  mango: 100,
  poly: 50,
  ajax: 150,
};

// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0,
// );
const totalSalary = Object.values(salary).reduce(
  (total, value) => total + value,
  0,
);
// console.log(totalSalary);

/*
 * Считаем общее количество часов
 */

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,
//   0,
// );
const totalTimePlayed = players.reduce(
  (totalTime, player) => totalTime + player.timePlayed,
  0,
);
// console.log(totalTimePlayed);

/*
 * Считаем общую сумму товаров корзины
 */
// const cart = [
//   { label: 'Apples', price: 100, quantity: 2 },
//   { label: 'Bananas', price: 120, quantity: 3 },
//   { label: 'Lemons', price: 70, quantity: 4 },
// ];

// const totalAmount = cart.reduce(
//   (total, { price, quantity }) => total + price * quantity,
//   0,
// );
// const totalAmount = cart.reduce(
//   (total, { price, quantity }) => total + price * quantity,
//   0,
// );
// console.log(totalAmount);s

/*
 * Собираем все теги из твитов
 */
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// const allTags = tweets.reduce((acc, tweet) => {
//   acc.push(...tweet.tags);
//   return acc;
// }, []);

// console.log(allTags);

// acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
// return  [...['js', 'nodejs'], ...['html', 'css']]
//  ['js', 'nodejs', 'html', 'css']

/*
 * Ведём статистику тегов
 */
// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {});
const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
// console.log(allTags);
// const tagsStats = allTags.reduce((acc, tag) => {
//   if (acc[tag]) {
//     acc[tag] += 1;
//     return acc;
//   }
//   acc[tag] = 1;
//   return acc;
// }, {});
// const tagsStats = allTags.reduce((acc, tag) => {
//   // console.log(acc);
//   if (acc[tag]) {
//     acc[tag] += 1;
//     return acc;
//   }
//   acc[tag] = 1;
//   return acc;
// }, {});
// const tagsStats = allTags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   };
// }, {});
const tagsStats = allTags.reduce((acc, tag) => {
  return {
    ...acc,
    [tag]: acc[tag] ? (acc[tag] += 1) : 1,
  };
});
// console.log(tagsStats);

// если свойство с ключом tag есть. увеличить его значение на 1
// если свойствоства нет с таким ключом что в tag, сделать и записать 1

//=========unique value===========
const numbersUn = [1, 1, 1, 1, 2, 2, 2, 3, 4, 5, 5];
const uniqueNumbers = numbersUn.filter(
  (value, index, array) => array.indexOf(value) === index,
);

// console.log(uniqueNumbers);

//Geri

// ========== map ==========
// const numbers = [1, 2, 3];

// const doubledNumbers = numbers.map((num) => num * 2);
// console.log(numbers);
// console.log(doubledNumbers); // [2, 4, 6]

const urls = ['www.google.com', 'www.facebook.com'];
// <a href="www.google.com">www.google.com</a>

// const links = urls.map((value) => `<a href="${value}">${value}</a>`);
const links = urls.map(value => `<a href="${value}">${value}</a>`);
// console.log(links);

// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];

// console.log(
//   users.map(({ name, isActive }) => ({
//     text: `${name} - ${isActive ? 'Active' : 'Not Active'}`,
//     name,
//     isActive,
//   })),
// );

// ========== filter ==========
// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];

// const activeUsers = users.filter((user) => user.isActive);
// const notActiveUsers = users.filter(function (user) {
//   return !user.isActive;
// });
// console.log(activeUsers);
// console.log(notActiveUsers);

// ========== filter/delete ==========
// let users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true }, // delete
// ];
// users = users.filter(user => user.name !== 'Ajax');
// users = users.filter((user) => user.name !== 'Ajax');
// console.log(users);
//               0        3     5        8  9
// const numbers = [1, 1, 1, 2, 2, 3, 3, 3, 4, 5, 5];
// const uniqueValues = numbers.filter(
//   (value, idx, arr) => arr.indexOf(value) === idx,
// );
// const uniqueValues = numbers.filter(
//   (value, index, array) => array.indexOf(value) === index,
// );
// console.log(uniqueValuess);
//=========flat =========
const arrayToFlat = [1, 2, [3, 5, [5, 9]]];
const num = arrayToFlat
  .flat(2)
  .filter((value, index, array) => array.indexOf(value) === index);
// console.log(num);
// console.log(arrayToFlat.flat(2));

// ========== find ==========
// const users = [
//   { name: 'Mango', isActive: false },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true }, // delete
// ];
// const activeUser = users.find(user => user.isActive);
// const activeUser = users.find((user) => user.isActive);
// console.log(activeUser);

// console.log([1, 2, 3, 4, 5, 6].find((value) => value > 4));
// console.log([1, 2, 3, 4, 5].find(value => value > 4));
// ========== flatMap ==========
// const arr = [1, 2, [3, 4]];
// console.log(arr.flat(3));

// const arr1 = ["it's Sunny in", '', 'California'];
// const arr2 = arr1.flatMap((x) => x.split(' '));
// console.log(arr2);

// ========== every ==========
// const numbers = [0, 2, 4, 6];
// const allEven = numbers.every((value) => value % 2 === 0);

// console.log(allEven);

// const users = [
//   { name: 'Mango', isActive: false },
//   { name: 'Poly', isActive: true },
//   { name: 'Ajax', isActive: false },
// ];

// const isAllActive = users.every((user) => user.isActive);
// console.log(isAllActive);

// const isSomeActive = users.some((user) => user.isActive);
// console.log(isSomeActive);

// ========== some ==========
// const numbers = [0, 1, 3, 5];
// const someEven = numbers.some((value) => value % 2 === 0);

// console.log(someEven);

// ========== reduce ==========
// const numbers = [1, 1, 1, 10, 20];
// // // let sum = 0; // sum += value

// const sum = numbers.reduce((acc, value) => {
//   return (acc += value);
// }, 0);

// console.log(sum);

const cart = [
  { name: 'printer', price: 100 },
  { name: 'phone', price: 300 },
  { name: 'notebook', price: 200 },
];
// const sum = cart.reduce((acc, obj) => acc + obj.price, 0);
// const sum = cart.reduce((acc, obj) => acc + obj.price, 0);
// console.log(sum);

// ========== sort ==========
// const names = ['Peter', 'abby', 'Bobby', 'Abby'];
// names.sort();

// console.log(names);

const numbers = [2, 1, 4, 3, 7, 6, 5, 10, -10, 0];
// numbers.sort();
// console.log(numbers); // [-10, 0, 1, 10, 2, 3, 4, 5, 6, 7]
numbers.sort((a, b) => a - b);
// console.losg(numbers);
// ========== Свой порядок сортировки ==========
// numbers.sort((a, b) => a - b);
// console.log(numbers); // [-10, 0, 1, 2, 3, 4, 5, 6, 7, 10]
// const names = ['Peter', 'abby', 'Bobby', 'Abby'];

// console.log(names);

// names.sort((a, b) => {
//   const v1 = a.toLowerCase();
//   const v2 = b.toLowerCase();

//   if (v1 < v2) return -1;
//   if (v1 > v2) return 1;

//   return 0;
// });
// console.log(names);

// ========== super custom sort ==========
// const numbers = [3, 1, 2];

// for (let i = 0; i < numbers.length; i++) {
//   let a = numbers[i];

//   for (let j = 0; j < numbers.length; j++) {
//     let b = numbers[j];

//     if (a < b) {
//       // swap
//       const temp = numbers[i];
//       numbers[i] = numbers[j];
//       numbers[j] = temp;

//       // swap 2
//       // [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
//     }
//   }
// }

// console.log(numbers);

// ========== Цепочки методов массива ==========
// const text = 'abc'; // cba
// const reversedText = text.split('').reverse().join('');

// console.log(text);
// console.log(reversedText);

// const cart = [
//   { name: 'printer', price: 100 },
//   { name: 'phone', price: 300 },
//   { name: 'notebook', price: 100 },
// ];

// const names = cart.filter(({ price }) => price === 100).map(({ name }) => name);
// console.log(names);

// ===== example for flat  =====
const arr = ['hello', [12, 34, ['some value', [777, ['finish']]]]];

// function getFlat(arr) {
//   const newArray = [];

//   for (let el of arr) {
//     if (!Array.isArray(el)) {
//       newArray.push(el);
//     } else {
//       return [...newArray, ...getFlat(el)];
//     }
//   }

//   return newArray;
// }
function getFlat(arr) {
  const newArr = [];
  for (let el of arr) {
    if (!Array.isArray(el)) {
      newArr.push(el);
    } else {
      return [...newArr, ...getFlat(el)];
    }
  }
  return newArr;
}

console.log(getFlat(arr));
// console.log(arr.flat(4));
