// Asynchronoys Programming

// console.log("Started fetching data");

// setTimeout(function () {
//   console.log("Fetched successfully");
// }, 2000);

// console.log("Fetching data in progress.....");

// fetchUser(123, function (user) {
//   console.log(user);

//   sendMail(user.email, function (response) {
//     console.log(response.success);
//   });
// });

// function sendMail(userEmail, callback) {
//   setTimeout(function () {
//     const response = {
//       success: "Message sent",
//     };
//     callback(response);
//   }, 3000);
//   console.log("Message sending....");
// }

// function fetchUser(userId, callback) {
//   setTimeout(function () {
//     console.log("Hi I am Kshitij Adhikari.");
//     const userData = {
//       id: userId,
//       name: "Kshitij",
//       email: "adhikarykshitiz123@gmail.com",
//     };
//     callback(userData);
//   }, 2000);
// }

// function myFunction(callback){
//     console.log("Performing operation");

//     setTimeout(function(){
//         callback('Operation complete')
//     },2000)
// }

// function callbackFunc(result){
//     console.log(result);
// }

// myFunction(callbackFunc)

// Callback Hell

// function task1(callback) {
//   setTimeout(() => {
//     console.log("Task1 completed");
//     callback();
//   }, 1000);
// }
// function task2(callback) {
//   setTimeout(() => {
//     console.log("Task2 completed");
//     callback();
//   }, 1500);
// }
// function task3(callback) {
//   setTimeout(() => {
//     console.log("Task3 completed");
//     callback();
//   }, 1000);
// }
// function task4(callback) {
//   setTimeout(() => {
//     console.log("Task4 completed");
//     callback();
//   }, 1500);
// }

// function display(){
//     task1(() => {
//         task2(()=>{
//             task3(()=>{
//                 task4(()=>{
//                     console.log("All tasks completed.")
//                 })
//             })
//         })
//     })
// }
// display()

// const promise = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         // resolve('Its work')
//         reject(new Error("There are some errors"))
//     },2000);
// })

// console.log(promise)

// promise.then(function(result){
//     console.log(result)
// }).catch(function(err){
//     console.log(err.message);
// })

// function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let walkedDog = true
//         if (walkedDog){
//             resolve("You walk the dog 🐕");
//         }else{
//             reject("You didnt walk the dog.")
//         }
//     }, 1500);
//   });
// }

// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let cleaned = true
//         if (cleaned){
//             resolve("You cleaned the kitchen🧹");
//         }else{
//             reject("You didn't cleaned the kitchen")
//         }
//     }, 1500);
//   });
// }

// function takeOutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let takeOut = false;
//         if (takeOut){
//             resolve("You take out the trash 🚮");
//         }else{
//             reject("You didn't take out the trash")
//         }
//     }, 1500);
//   });
// }

// walkDog()
//   .then((value) => {
//     console.log(value);
//     return cleanKitchen();
//   })
//   .then((value) => {
//     console.log(value);
//     return takeOutTrash();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("You have completed all your work!");
//   }).catch(error => {
//     console.error(error)
//   })

// FETCH WEB API

// const url = "https://dummyjson.com/products/1";
// const gitAPI = fetch(url);

// gitAPI
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Could not fetch resources");
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// PROJECT

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resources");
    }

    const data = await response.json();
    // console.log(data);
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  } catch (error) {
    console.error(error);
  }
}

fetchData();