// function SaveToDB(data, success, failure) {
//   let InternetSpeed = Math.floor(Math.random() * 10) + 1;

//   if (InternetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

// SaveToDB(
//   "Apna College",
//   () => {
//     console.log("Your data was saved, success ");
//   },

//   () => {
//     console.log("your data was not save, failure");
//   },
// );

// Promics
// function SaveDB(data) {
//   return new Promise((resolve, reject) => {
//     let InternetSpeed = Math.floor(Math.random() * 10) + 1;

//     if (InternetSpeed > 4) {
//       resolve("SUCEESS");
//     } else {
//       reject("FAILURE");
//     }
//   });
// }

// SaveDB("Yash")
//   .then(() => {
//     console.log("data 1 was saved");
//     SaveDB("Hello World").then(() => {
//       console.log("Data 2 was saved");
//     });
//   })

//   .catch(() => {
//     console.log("data was not saved");
//   });

// Promics async function

async function greet() {
  console.log("Yash");
}
