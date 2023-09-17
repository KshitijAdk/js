// let person = {
//     name: 'Kshitij',
//     surname: 'Adhikari',
//     age: 20,
//     home: {
//         permanent: 'Surkhet',
//         temporary: {
//             first: 'Anamnagar',
//             last: 'Sukedhara',
//         },
//     },
//     friends: ['Shahash', 'Swarup']
// }

// console.log(person)
// console.log(person.home.temporary.last)

// console.log(person.friends[1])

// let name = prompt('Enter your name: ')

// switch(name){
//     case 'Kshitij':
//         console.log("Hello Kshitij, How are you?");
//         break;

//     case 'Adhikari':
//         console.log("Hello Adhikari, How are you?")
//         break;

//     case '':
//         console.log("Please enter a name")
// }

// let greaterValue;

// if (num1 > num2){
//     greaterValue = num1;
// }else{
//     greaterValue = num2;
// }console.log(greaterValue)

// Using Ternary Operator

// let num1 = 10;
// let num2 = 5;
// let num3 = 15;

// var greaterValue = (num1 >num2 && num1 > num3)?num1 : (num2>num1 && num2>num3)?num2 : num3;
// console.log(greaterValue)

// FizzBuzz GAME

// let num = prompt("Enter a number: ");
// if (num % 3 == 0 && num % 5 == 0){
//     console.log("FizzBuzz")
// }else if (num % 3 == 0){
//     console.log("Fizz")
// }else if(num % 5 == 0){
//     console.log("Buzz")
// }else {
//     console.log("Nothing")
// }

// FizzBuzz Game with Ternary Operator

// let num = prompt('Enter a number: ')
// var bothDiv = 'FizzBuzz'
// var div3 = 'Fizz'
// var div5 = 'Buzz'
// var other = 'Nothing'

// var divisible = (num % 3 == 0 && num % 5 == 0)?bothDiv : (num % 3 == 0)?div3 : (num % 5 == 0)?div5 : other;
// console.log(divisible)

// Asynchronous Programming

// console.log("Hey, Whats'up?")

// setTimeout(function(){
//     console.log("I am also fine.")
// },2000)

// console.log("Its me Kshitij Adhikari")

// fetchUser(100, function(user){
//     console.log(user)

//     sendEmail(user.email, function(response){
//         setTimeout(function(){
//             console.log(response.success)
//         },2000)
//     })
// });

// function sendEmail(userEmail, callback){

//     setTimeout(function(){
//         console.log("Message sending")
//         const response = {success:true}
//         callback(response)
//     },2000)
// }

// function fetchUser(userId, callback){
//     setTimeout(function(){
//         console.log("Hello, My name is Kshitij Adhikari");

//         const fetchedUser = {
//             id: userId,
//             name: "Kshitij",
//             age: 19,
//             email: "adhikarykshitiz123@gmail.com"
//         }
//         callback(fetchedUser);
//     },2000)
// }

// fetchUser(123, function (user) {
//   console.log(user);

//   sendEmail(user.email, function (response) {
//     setTimeout(function () {
//       console.log(response.success);
//     }, 2000);
//   });
// });

// function sendEmail(userEmail, callback) {
//   setTimeout(function () {
//     console.log("Message sending");
//     const response = { success: true };
//     callback(response);
//   }, 2000);
// }

// function fetchUser(userId, callback) {
//   setTimeout(function () {
//     console.log("Hello, My name is Kshitij Adhikari");

//     const fetchedUser = {
//       id: userId,
//       name: "Kshitij",
//       age: 19,
//       email: "adhikarykshitiz123@gmail.com",
//     };
//     callback(fetchedUser);
//   }, 2000);
// }

// Promises

const promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // resolve('Succesfully resolved');
    reject(new Error("There are some errors found."));
  }, 2000);
});
console.log(promise);

promise.then(function(result){
  console.log(result)
}).catch(function(err){
  console.log(err.message);
})


