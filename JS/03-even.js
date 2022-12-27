/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел в массиве.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
//Peremennaya
let totalEven = 0;
let totalOdd = 0;

// Perebrat massiv
// for (let i = 0; i < numbers.length; i += 1) {
//   // console.log(numbers[i]);
//   if (numbers[i] % 2 === 0) {
//     totalEven += numbers[i];
//   } else {
//     totalOdd += numbers[i];
//   }
// }
// console.log(totalEven);
// console.log(totalOdd);

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     totalEven += number;
//   } else {
//     totalOdd += number;
//   }
// }
// console.log(totalEven);
// console.log(totalOdd);

for (const number of numbers) {
  if (number % 2 !== 0) {
    console.log(`Etu operaciyu mojno propustit ${number}`);
    continue;
  }
  console.log(`${number}-chetnoe`);
  totalEven += number;
}
console.log(totalEven);
// OPredelit na chetnost

// Zapisat v summu

// 1 переменная тотал

// 2 перебрать массив
// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];
//   console.log(number);

//   // 3 на каждой итерации проверить элемент на чётность
// if (number % 2 === 0) {
//   console.log('Четное!!!!');

//   // 4 если четный плюсуем к тотал
//   total += number;
// }
// }

// for (const number of numbers) {
//   // console.log(number);

//   if (number % 2 === 0) {
//     console.log(`${number} - четное!!!!`);
//     total += number;
//   }
// }

// for (const number of numbers) {
//   if (number % 2 !== 0) {
//     console.log('Эту итерацию нужно пропустить', number);
//     continue;
//   }

//   console.log(`${number} - четное!!!!`);
//   total += number;
// }

// console.log('Total: ', total);
