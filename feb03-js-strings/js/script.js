var origString = "The original";
var firstString = "A literal string";
var secondString = new String("A string object");

var concatString = firstString + ", " + secondString;

console.log( concatString );

//+
// concatenation
// concatenator

//var firstName = "Rigoberto";
//var lastName = "Padilla";

//var concatName = firstName + " So Demanding " + lastName;
//console.log(concatName);


//var getIndex = firstString.match("it");
//console.log(getIndex);

var firstName = "Rigoberto";
var lastName = "Padilla";
var birthDay = "1999"
var newAge = 2020 - 1999;
var sentenceAge = "My name is " + firstName + " " + lastName + "." + " I was born on October 2" + " " + birthDay + " and in 2020, I will be " + newAge + ".";
console.log(sentenceAge);
