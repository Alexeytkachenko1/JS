// // const counter = {
// //   value: 0,
// //   increment() {
// //     console.log('inkrement'), (this.value += 1);
// //   },
// //   decrement() {
// //     console.log('decrement'), (this.value -= 1);
// //   },
// // };

// // const decrementBtn = document.querySelector('.js-decrement');
// // const incrementBtn = document.querySelector('.js-increment');
// // const valueEl = document.querySelector('.js-value');

// // decrementBtn.addEventListener('click', function () {
// //   console.log('click on decrement');

// //   counter.decrement();
// //   console.log(counter);
// //   valueEl.textContent = counter.value;
// // });
// // incrementBtn.addEventListener('click', function () {
// //   counter.increment();
// //   console.log(counter);
// //   valueEl.textContent = counter.value;
// // });

// const counter = {
//   value: 0,
//   decrement() {
//     console.log('decrement');
//     this.value -= 1;
//   },
//   increment() {
//     console.log('increment');
//     this.value += 1;
//   },
// };
// const decrementBtn = document.querySelector('.js-decrement');
// const incrementBtn = document.querySelector('.js-increment');
// const valueEl = document.querySelector('.js-value');

// decrementBtn.addEventListener('click', function () {
//   console.log('click on decrement');
//   counter.decrement();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// });

// incrementBtn.addEventListener('click', function () {
//   console.log('click on increment');
//   counter.increment();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// });
// // console.log(window);
// //

// const each = function (array, callback) {
//   const newArr = [];
//   for (const element of array) {
//     newArr.push(callback(element));
//   }
//   return newArr;
// };
// let result = each([1, 2, 3, 4, 5], function (numbers) {
//   return numbers ** 2;
// });
// console.log(result);

// const each = function (arr, callback) {
//   const newArr = [];
//   for (const element of arr) {
//     newArr.push(callback(element));
//   }
//   return newArr;
// };
// let result = each([1, 2, 3, 4, 5], function (numbers) {
//   return numbers ** 3;
// });
// console.log(result);

// Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.
// const each = function (arr, callback) {
//   let elementer;
//   for (const element of arr) {
//     elementer = callback(element.split(''));
//   }
//   return elementer;
// };
// let result = [];
// result.push(
//   each(['строками', 'помощью'], function (characters) {
//     let reverse = [];
//     for (let index = characters.length - 1; index >= 0; index--) {
//       reverse.push(characters[index]);
//     }
//     const reverseWord = reverse.join('');
//     const newArr = [];
//     console.log(reverseWord);
//     // for (const element of reverseWord) {
//     //   newArr.push(element);
//     // }
//     // console.log(newArr);

//     return reverseWord;
//   }),
// );

//написать callback функцию для возведения числа в степень

// const degree = function (numbers, callback) {
//   const newArr = [];
//   for (const element of numbers) {
//     newArr.push(callback(element));
//   }
//   return newArr;
// };

// const functionInDegree = degree([1, 2, 3, 4, 5], function (number) {
//   return number ** 2;
// });
// console.log(functionInDegree);
// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];
// const sort = function (arr, callback) {
//   const newArr = [];
//   for (const el of arr) {
//     if (callback(el)) {
//       newArr.push(el);
//     }
//   }
//   return newArr;
// };

// let getFruitWithQuantity = sort(fruits, function (fruit) {
//   return fruit.quantity >= 120;
// });
// let getFruitsWithFresh = sort(fruits, fruit => fruit.isFresh);
// console.log(getFruitWithQuantity);
// console.log(getFruitsWithFresh);

// Number(number.toFixed())

// const round = function (places) {
//   return function (number) {
//     return Number(number.toFixed(places));
//   };
// };
// const rounder1 = round(3);
// console.dir(rounder1);
// console.log(rounder1(3.567));

// const myLibFactory = function () {
//   let value = 0;
//   const add = function (num) {
//     value += num;
//   };
//   const getValue = function () {
//     return value;
//   };
//   return {
//     add,
//     getValue,
//   };
// };
// const myLib = myLibFactory();
// console.log(myLib);
// myLib.add(10);
// console.log(myLib.getValue());

// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//   let salary = baseSalary;
//   return {
//     currentSalary() {
//       return `Current salary ${employeeName}- ${salary}`;
//     },
//     increaseSalary(amount) {
//       if (amount > 1000) {
//         return 'are you crazy?';
//       }
//       salary += amount;
//     },
//     decreaseSalary(amount) {
//       salary -= amount;
//     },
//   };
// };
// const salaryManager = salaryManagerFactory('Mango', 5000);
// console.dir(salaryManager.currentSalary());
// console.log(salaryManager.increaseSalary(100));
// console.dir(salaryManager.currentSalary());

// console.log(salaryManager.salary);

// const addArrow = (a, b, c) => a + b + c;
// const addArrow = (...args) => {
//   console.log(args);
//   // a + b + c;
// };

// console.log(addArrow(3, 6, 5));
// const objectArrow = () => ({
//   arr: 5,
// });

// console.log(objectArrow());

// const changeColor = function (color) {
//   console.log('changeColor=>this', this);
//   this.color = color;
// };
// const hat = {
//   color: 'green',
// };
// // changeColor.call(hat, 'black');
// // console.log(hat);

// const sweater = {
//   color: 'red',
// };
// // changeColor.call(sweater, 'blue');
// // console.log(sweater);

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);
// changeHatColor('yellow');
// console.log(hat);
// changeSweaterColor('white');

// console.log(sweater);
