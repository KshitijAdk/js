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