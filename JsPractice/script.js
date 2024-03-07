// function addElement(arr, value){
//     arr.unshift(value)
//     return arr
// }

// let myArray = [1,2,3,4]
// // let value = 5

// console.log(addElement(myArray, 10));

// function sumOfArray(arr){
//     let sum = 0;
//     for (let i =0; i<arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }
// myArr = [1,2,3,4]
// console.log(sumOfArray(myArr));

// function stringArr(arr) {
//   arr = ["kshitij", "safal", "swarup"];
//   newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i].length);
//   }
//   return newArr;
// }
// console.log(stringArr());

// Write a function that takes an array of numbers and returns a new array with only the even numbers.

// function evenArr(arr){
//     arr = [1,2,3,4,5,6,7,8,9];
//     newArr = [];

//     for (let i=0; i<arr.length; i++){

//         newArr.push(arr[i])
//     }
//     return newArr
// }
// console.log(evenArr());

// Write a function that takes an array of numbers and a target number,
// and returns true if the target number is present in the array, otherwise returns false.

// function numCheck(arr, target){
//     for (let i=0; i<arr.length; i++){
//         if (arr[i] === target){
//             return true
//         }
//     }
//     return false
// }

// myArr = [1,2,3,4,5,6]
// targetNum = 6
// console.log(numCheck(myArr, targetNum));

// function stringArr(arr, target){
//     newArr = []
//     for (let i=0; i<arr.length; i++){
//         if (arr[i] === target){
//             newArr.push(target)
//         }
//     }
//     return newArr
// }

// myArr = ['kshitij', 'safal', 'swarup', 'surkhet']
// target = 'kshitij'
// console.log(stringArr(myArr, target));

// function sortArray(){
//     arr = [1,6,8,2,3,9,4]
//     sortArr = []

//     sortArr.push(arr.sort())
//     return sortArr
// }
// console.log(sortArray());

// Write a function that takes an array of numbers and returns a
// new array containing only the numbers greater than 10.

// function greaterArr(arr){
//     newArr = []
//     for (let i=0; i<arr.length; i++){
//         if (arr[i] > 10){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// myArr = [1,2,3,4,12,13,14,15]
// console.log(greaterArr(myArr));

// Write a function that takes a number as an argument and throws an error if the number is negative.

// function checkNegative(num){
//     if (num < 0){
//         throw new Error("Number cannot be negative")
//     }
//     return num *2
// }

// try {
//     console.log(checkNegative(2));
// } catch (error) {
//     console.log(error.message);
// }finally{
//     console.log("Its work");
// }

// Constructor Functions

function User(name, age) {
  this.name = name;
  this.age = age;
  this.walk = function () {
    console.log("Kshitij is walking");
  };
}

const user1 = new User("Kshitij", 20);
console.log(user1);

const user2 = new User("Safal", 20);
console.log(user2);
