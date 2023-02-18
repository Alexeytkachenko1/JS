import transactionHistory from './data/transactions.js';

{
  /* <tr>
<th>ID транзакции</th>
<th>Сумма</th>
<th>Дата</th>
<th>Кто</th>
<th>Тип транзации</th>
<th>Имя счёта</th>
<th>Номер счёта</th>
</tr> */
}
const containerEl = document.querySelector('.js-transaction-table');

const createTransactionTableRow = transactions => {
  const { id, amount, date, business, name, type, account } = transactions;
  return `  <tr>
  <th>${id} </th>
  <th>${amount}</th>
  <th>${date}</th>
  <th>${business}</th>
  <th>${type} </th>
  <th>${name} </th>
  <th>${account} </th>
</tr>;`;
};
const transactionTableRow = transactionHistory
  .map(createTransactionTableRow)
  .join('');
containerEl.insertAdjacentHTML('beforeend', transactionTableRow);

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
// const makeTransactionTableRowMarkup = transaction => {
//   const { id, amount, date, business, name, type, account } = transaction;
//   return `
//   <tr>
//   <td>${id}</td>
//   <td>${amount}</td>
//   <td>${date}</td>
//   <td>${business}</td>
//   <td>${type} </td>
//   <td>${name} </td>
//   <td>${account}</td>
// </tr>`;
// };
// console.log(transactionHistory);

// const tableEl = document.querySelector('.js-transaction-table');

// const transactionTableRowsMarkup = transactionHistory
//   .map(makeTransactionTableRowMarkup)
//   .join('');
// tableEl.insertAdjacentHTML('beforeend', transactionTableRowsMarkup);
