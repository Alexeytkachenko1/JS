import shortId from 'shortid';
// const fetchAllUsers = () => {
//   console.log('fetchAllUsers');
// };

// const fetchUserById = id => {
//   console.log('fetchUserById');
// };
// const updateUserById = id => {
//   console.log('message');
// };
// export default { fetchAllUsers, fetchUserById, updateUserById };
//=================*************//=================*************

export const fetchAllUsers = () => {
  console.log('fetchAllUsers');
};

export const fetchUserById = id => {
  console.log('fetchUserById');
};
export const updateUserById = id => {
  console.log('message');
};
// export const x = 5;
// export const y = 'ddsds';
export const addUser = name => {
  const user = {
    id: shortId.generate(),
    name,
  };
  console.log(user);
};
//=================*************//=================*************
