// console.log("This file contain of Api Api stand for application Programming interface ..");

// async function getUsers() {
//   const response = await fetch(
//     "https://jsonplaceholder.typicode.com/users"
//   );

//   const users = await response.json();

//   console.log(users);
// }

// getUsers();

fetch("https://jsonplaceholder.typicode.com/users/10")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
