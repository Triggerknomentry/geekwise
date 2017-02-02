/*
multiline comment
var externalJavascript = "wha da actual heck";
 ^          ^          ^          ^          ^
keyword   name     assignment   value       end
                    operater
*/

// single line comment

var camelCase;
var not_camel_case;
var camel_Case;
var $dollarCase;
var dollar$case;
var _underScore;

// var stVariable1; No-No. Bad. Go away.
var firstVar;

// var var;
var variable;

var UppercaseCamel; //Please don't. For Constructor Objects Only.
var SUPERUPPERCASE; // Definitely don't.


/*
JAVASCRIPT OBJECTS
    Number
    String
    Boolean
    Float
    Array
    Object
*/
//Number Object
var myNumberObject = 3;
var myNewNumberObject = myNumberObject.toString();

//console.log(myNumberObject);
//console.log(myNewNumberObject);


var myStringObject = "This is a string object";
var myOtherStringObject = 'This is also a string object';
//var myNonWorkingStringObject = 'This wont work";
//var myPoorGrammar = 'David';
var myCorrectPoorGrammer = "David's Basketball";
var myOtherCorrectPoorGrammer = "David\'s Basketball";

//console.log(myStringObject, myOtherStringObject);

// Boolean Object
var myBooleanTrue = false;
var myBooleanFalse = true;

// FLOAT Object
var myFloatObject = 3.1;

// Array Object (identified with square brackets)
var myArrayObject = ['red', 8, true, ['r', 'b', 'g']];
//console.log(myArrayObject[3])

//OBJECT Object
var myObjectObject = {
      make: 'toyata',
      model: 'tacoma',
      color: 'red',
      year: 2001,
      package: function(){
            alert(this.make);
      }
};
//console.log(myObjectObject);

//JAVASCRIPT MATH

var a = 5;
var b = 10;
var c = 15;

//console.log(c);

var c = a + b;
//console.log(c);

var d = a - b;
var e = a * b;
var f = a / b;
console.log(d, e, f);

var g = a % b;
console.log(g);
