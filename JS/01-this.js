/*
 * Функция это частный случай объекта -> ССЫЛОЧНЫЙ ТИП
 */

// console.log('[] === []: ', [] === []);
// console.log('{} === {}: ', {} === {});
// console.log(
//     'function() {} === function() {}: ',
//     function () {} === function () {},
// );

// const fnA = function () {
//     console.log('hello');
// };

// const fnB = fnA;
// console.log('fnB === fnA: ', fnB === fnA);

/*
 * Контекст (this)
 *    - Где и как была объявлена функция НЕ ИМЕЕТ НИКАКОГО ВЛИЯНИЯ на контекст.
 *    - Контекст определяется В МОМЕНТ ВЫЗОВА ФУНКЦИИ, если он не привязан явно.
 */

/*
 * Как метод объекта. В контексте объекта.
 */

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log('showTag -> this', this);
//     },
// };

// user.showTag();

/*
 * Вызов без контекста
 * - В строгом режиме = undefined
 * - Не в строгом режиме = window
 */

// const foo = function () {
//     console.log('foo -> this', this);
// };

// foo();

/*
 * Как метод объекта, но объявлена как внешняя функция.
 * В контексте объекта.
 */

// const showTag = function () {
//   console.log('showTag -> this', this);
//   console.log('showTag -> this.tag', this.tag);
// };

// // showTag();

// const user = {
//   tag: 'Mango',
// };

// user.showUserTag = showTag;
// console.log('user', user);

// user.showUserTag();

/*
 * Вызов без контекста, но объявлена как метод объекта.
 */

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

/*
 * Контекст в callback-функциях
 */

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };

// const invokeAction = function (action) {
//   console.log(action);

//   action();
// };

// invokeAction(user.showTag);

/*
 * Тренируемся 1
 */

// const fn = function () {
//   console.log('fn -> this', this);
// };

// fn(); // Какой this ???

/*
 * Тренируемся 2
 */

// const book = {
//   title: 'React for beginners',
//   showThis() {
//     console.log('showThis -> this', this);
//   },
//   showTitle() {
//     console.log('showTitle -> this.title', this.title);
//   },
// };

// book.showThis(); // Какой this ???

// const outerShowThis = book.showThis;
// outerShowThis(); // Какой this ???

// const outerShowTitle = book.showTitle;
// outerShowTitle(); // Какой this ???

/*
 * Тренируемся 3
 */

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         console.log('changeColor -> this', this);
//         // this.color = color;
//     };

//     // changeColor(); // Какой this ???

//     const sweater = {
//         color: 'teal',
//     };

//     sweater.updateColor = changeColor;

//     // sweater.updateColor('red'); // Какой this ???

//     return sweater.updateColor;
// };

// const swapColor = makeChangeColor();

// swapColor('blue'); // Какой this ???

/*
 * Тренируемся 4
 */

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor -> this', this);
//   };

//   return changeColor;
// };

// const updateColor = makeChangeColor();
// updateColor('yellow'); // Какой this ???

// const hat = {
//   color: 'blue',
//   updateColor: updateColor,
// };

// hat.updateColor('orange'); // Какой this ???
// console.log(hat);

/*
 * Тренируемся 5
 */

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log('decrement -> this', this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// console.log(counter);
// updateCounter(5, counter.decrement.bind(counter));
// console.log(counter);

//
'use strict';

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     const newArr = [];
//     for (const element of this.items) {
//       if (element !== itemName) {
//         newArr.push(element);
//       }
//     }
//     this.items = newArr;
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
// console.log(`Invoking action on ${itemName}`);
//   action.call(inventory, itemName);
// };

const inventory = {
  items: ['Knife', 'Gas mask'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);
    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);
    // this.items = this.items.filter(item => item !== itemName);
    const newArr = [];
    for (const element of this.items) {
      if (element !== itemName) {
        newArr.push(element);
      }
    }
    this.items = newArr;
  },
};
const invokeInventoryAction = function (itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action.call(this, itemName);
};
invokeInventoryAction.call(inventory, 'Medkit', inventory.add);
console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction.call(inventory, 'Gas mask', inventory.remove);
// invokeInventoryAction.call(inventory, 'Medkit', inventory.add);
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction.call(inventory, 'Gas mask', inventory.remove);
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']
