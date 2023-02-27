/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const form = document.querySelector('.js-register-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//   event.preventDefault();
//   const formElement = event.currentTarget.elements;
//   const mail = formElement.email.value;
//   const password = formElement.password.value;

//   console.log(mail, password);
// const formData = new FormData(event.currentTarget);

// console.log(formData);

// formData.forEach((value, name) => {
//   console.log('onFormSubmit -> name', name);
//   console.log('onFormSubmit -> value', value);
// });
// }
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();

  // const formElement = event.currentTarget.elements;
  // const mail = formElement.email.value;
  // const password = formElement.password.value;

  const formData = new FormData(event.currentTarget);
  formData.forEach((value, name) => {
    console.log(`name:${name}`);

    console.log(`value:${value}`);
  });
}
