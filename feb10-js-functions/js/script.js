//var str = "MaTthEw";
//var modStr = str.substr(1, 4);
//var userName = prompt('whats your name?').trim();

//console.log(userName);

// console.log(str, modStr);

// .toLowerCase() - lowercase string
// .toUpperCase() - uppercase string
// .substr() - get characters from starting index upto & including ending index
// .trim() - removes excess spaces before & after
// .length
// .charAt() - get character at specified index

// 1. Create a function that asks for the users first name. Remove all excess spaces and RETURN value. (Function Declaration - NO PARAMETERS)
// 2. Create a seperate function that will guarantee a capitalization of the First letter, & lowercase all remaining. Pass value as argument into step 3. (Function Expression)
// 3. Create another function that will ALERT username. (Function Decleration)

function getUserName(){
    var user = prompt('whats your name?')
    return user.trim();
};
var modUserName = function(){
    var user = getUserName();
    var firstLetter = user.charAt(0).toUpperCase();
    var remainingLetters = user.substr(1, user.length - 1)
};

function a();
// function a(){
//   return 'Rigo';
// }
// //var b = function b(){
//     var myName = a();
// //  var myName = 'Rigo';
//     console.log(myName);
// }
// b()
// var str = "Rigoberto Padilla"
// var modStr = str.substr(1, 4);
// var userName = prompt('whats your name').trim();
// // console.log(userName);
// // var res = str.toLowerCase();
// // console.log(str.substr());
// // var res = str.toUpperCase();
// // console.log(str.toUpperCase());
//
// function declaration(){
//     var firstName = prompt('whats your name').trim();
// }
// function expression(declaration) {
//     return declaration.charAt(0).toUpperCase() + declaration.slice(1);
// }
// function getUser(){
// console.log(svdog(expresion));
// }

function changeColor()
