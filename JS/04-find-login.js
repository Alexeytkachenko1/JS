/*
 * Напиши скрипт поиска логина
 * - Если логина нет, вывести сообщение 'Пользователь [логин] не найден.'
 * - Если нашли логин, вывести сообщение 'Пользователь [логин] найден.'
 *
 * - Сначала через for
 * - Потом через for...of
 * - Логика break
 * - Метод includes() с тернарным оператором
 */

const logins = ['m4ngoDoge', 'k1widab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'm4ngoDoge';

// for (let i = 0; i < logins.length; i += 1) {
//   console.log(logins[i]);
//   if (logins[i] === loginToFind) {
//     console.log(
//       `Ura login ${loginToFind} nayden pod indexom ${logins.indexOf(
//         loginToFind,
//       )}`,
//     );
//     break;
//   }
// }

// for (const login of logins) {
//   if (login === loginToFind) {
//     console.log(
//       `Ura login ${loginToFind} nayden pod indexom ${logins.indexOf(
//         loginToFind,
//       )}`,
//     );
//     break;
//   } else {
//     console.log('polxovatel ne nayden');
//   }
// }
// let message = `Polzovatel ${loginToFind} ne nayden`;

// for (const login of logins) {
//   if (login === loginToFind) {
//     message = `Polzovanel ${loginToFind} nayden`;
//     break;
//   }
// }
// console.log(message);

// let message = `Пользователь ${loginToFind} не найден.`;

// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];

//   console.log('Login: ', login);
//   console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//   if (login === loginToFind) {
//     console.log('Ура, равны!!!');
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
// }

// console.log(message);

// for (const login of logins) {
//   console.log('Login: ', login);
//   console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//   if (login === loginToFind) {
//     console.log('Ура, равны!!!');
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//   }
// }

// console.log(message);

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден.`
//   : `Пользователь ${loginToFind} не найден.`;

// console.log(message);

const message = logins.includes(loginToFind)
  ? `login ${loginToFind} nayden`
  : `login ${loginToFind} ne nayden`;
console.log(message);
