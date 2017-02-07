var students = ['matthew', 'david', 'haley', 'marisa', 'micaela', 'osvaldo', 'rosamaria', 'alfredo', 'leonardo', 'gustavo', 'eric', 'kevin', 'montgomery', 'cobi', 'joshua', 'rigoberto'];

// function randomStudent(){
//     var numStudents = students.length;
//     var randStudent = Math.ceil( Math.random() * numStudents ) - 1;
//     alert( students[randStudent] );
// }
// randomStudent();

var fruits = ['apple', 'avocado', 'cherry', 'mango', 'kiwi', 'dragonfruit']
// console.log(fruits);


// Push - adds to the end of an array
fruits.push('strawberry');
// console.log(fruits);

// Pop - removes from the end of an array
var lastFruit = fruits.pop();
// console.log(fruits);
// console.log(lastFruit);

// Unshift - adds to the front of an array
fruits.unshift('blueberry');
// console.log(fruits);

// Shift - removes from the front of an array
// var firstFruit = fruits.shift();
// console.log(fruits);
// console.log(firstFruit);

// Indexof - finds the index of an item in an array
var posFruit = fruits.indexOf('avocado');
// console.log(posFruit);

// Splice - remove an item by index number
var remFruit = fruits.splice('0, 3');
// console.log(remFruit);
// console.log(fruits);

// Slice - copies an array
// var copyFruit = fruits.slice(1, 3);
// console.log(copyFruit);
// console.log(fruits);

var subject = ['history']
console.log(subject);

subject.unshift('math', 'science')
console.log(subject);

subject.push('english', 'drama')
console.log(subject);

subject.sort();
subject.reverse();
var slicedSubject = subject.splice(4, 5)
console.log(slicedSubject);
console.log(subject);
