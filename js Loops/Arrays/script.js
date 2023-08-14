// const numbers = [4,5,6,7]
// // numbers.unshift(1,2,3)   //Adds the elements at the beginning of the array
// // numbers.push(8,9,10)    //Adds the element at the end of the array

// numbers.splice(2,2,1,2,3)
// console.log(numbers)

// const numbers = [1,2,3,4,5,6,2,5,1]

// console.log(numbers.includes(6,6))
// console.log(numbers.indexOf(1))
// console.log(numbers.lastIndexOf(1))
// console.log()

// Finding Objects in Array

// const persons = [
//     {name: 'Kshitij', age: 19},
//     {name: 'Ayush', age: 17}
// ]

// const result = persons.find(function(person){
//     return person.age < 20 && person.name === 'Ayush';
// })
// console.log(result)
// console.log(persons[0])

// const arr = [1,2,3,4,5]

// for (let i=0; i<arr.length; i++){
//     console.log(arr[i])

// }

// for (num of arr){
//     console.log(num)
// }

// arr.forEach(function(num,i){
//     console.log(i,num)
// })

// Arrays in Ascending Order
// const numbers = [2,5,2,58,3,57,9,1]
// numbers.sort((a,b) => a-b);
// console.log(numbers)

// Arrays in Descending Order
// const numbers = [2,5,2,58,3,57,9,1]
// numbers.sort((a,b) => b-a);
// console.log(numbers)

// Sorting an array of objects based on a specific property

// const persons = [
//     {name: 'Kshitij', age: 19},
//     {name: 'Ayush', age: 17},
//     {name: 'Ram', age: 20}
// ]

// persons.sort((p2,p3)=>p2.age-p3.age);
// console.log(persons)
// persons.sort((p1,p2)=>p1.name.localeCompare(p2.name));
// console.log(persons)

// const persons = [
//     {name: 'Kshitij', age: 10},
//     {name: 'Ayush', age: 17},
//     {name: 'Ram', age: 2},
// ]

// persons.sort(function(p1,p2){
//     if (p1.age > p2.age) return -1;
//     if (p1.age === p2.age) return 0;
//     if (p1.age < p2.age) return +1;
// });
// console.log(persons)

// Arrays Every and Some method
// const numbers = [1,2,-3,4,5,6,2,5,1]
// const data = numbers.some(function(num){
//     return num < 0;
// })
// console.log(data)

// Array concat and slicing
// const num1 = [1,2,3]
// const num2 = [4,5,6,7]
// const num3 = num1.concat(num2)
// console.log(num3)

// console.log(num3.slice(3,6))

// const num1 = [1,2,3]
// const num2 = [4,5,6]

// console.log(...num1,...num2)

// Joining Array
// const numbers = [1,2,-3,4,5,6,2,5,1]
// const newArray = numbers.join('=')
// console.log(newArray)

// Sum of Array Elements

// function sumArray(){
//     let arr = [1,2,3,4,5];
//     sum = 0;
//     for(let i=0; i<arr.length; i++){
//         sum += arr[i]
//     }
//     console.log(sum)
// }
// sumArray()

// Finding max and min number in an array
// function findMaxMin() {
//   let arr = [1, 2, 3, 4, 5];
//   let min = arr[0];
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]< min){
//         min = arr[i]
//     }
//     if (arr[i] > max){
//         max = arr[i]
//     }
//   }
//   const result = {max,min}
//   console.log(result)
// }
// findMaxMin();

// const person = {
//     name: "Kshitij",
//     greet: function() {
//       console.log(`Hello, my name is ${this.name}`);
//     }
//   };

//   person.greet();

// function myName(){
//     this.name = 'Kshitij';
// }
// var a = new myName
// console.log(`Hello, My name is ${a.name}`)


// var numbers = [23,45,56,35,67]
// var newArray = numbers.map(myFunction);

// function myFunction(num){
//     return num*10
// }
// console.log(newArray)


// Mapping an Array

// const number = [1,2,3,4,5]
// myNumber = []

// for (let num of number){
//     myNumber.push(num*2)
// }
// console.log(myNumber)

// const myNumber = number.map(function(num){
//     return num*2
// })
// console.log(myNumber);

// const persons = [
//     {name: 'Kshitij', age: 19},
//     {name: 'Ayush', age: 17},
//     {name: 'Ram', age: 20}
// ]

// const perName = persons.map((person) => person.age+1)
// console.log(perName);

// Error Handling

// function newFunction(a,b,c){
//     if (b===0){
//         throw new SyntaxError("Second parameter can't be zero");
//     }
// }

// try {
//     console.log(newFunction(1,0,4))
// }
// catch(e){
//     console.log(e)
//     console.log(e.name)
//     console.log(e.message)
// }
// finally{
//     console.log("It's work")
// }
// Error Handling

// function newFunction(a,b,c){
//     if (b===0){
//         throw new SyntaxError("Second parameter can't be zero");
//     }
// }

// try {
//     console.log(newFunction(1,0,4))
// }
// catch(e){
//     console.log(e)
//     console.log(e.name)
//     console.log(e.message)
// }
// finally{
//     console.log("It's work")
// }


// Regular Expression
// const regExn = /kshitij/i;
// console.log(regExn.test("Hi, My name is Kshitij"))

