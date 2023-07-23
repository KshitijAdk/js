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

// persons.sort((p1,p2)=>p1.age-p2.age);
// console.log(persons)

// persons.sort((p1,p2)=>p1.name.localeCompare(p2.name));
// console.log(persons)

