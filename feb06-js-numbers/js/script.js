var mySnek = 'Snek is a right, a snek & snake',
    myNumber = 2485,
    myBool = true,
    myFloat = 5.3,
    myArray = ['red', 8, false, true, 'chef boyardee'],
    myObject = {
      spaghetti: true,
      noodles: false,
      ramen: true,
      ravioli: 'show me the formioli',
      eight: 8
    };

// console.log(myBool);
// console.log(mySnek.indexOf('i', 3));
// console.log(myArray[4]);
// console.log(myObject.ravioli);

/*
    Number Object
*/
var numOne = 2;
var numTwo = new Number(5);

// console.log(numOne);
// console.log(numTwo);

var numThree = '3';
var numFour = '5.2';

console.log( parseInt(numThree) );
console.log( parseFloat(numFour) );

var numFive = 'Rigoberto';
// console.log( parseInt(numFive) );
// console.log( parseFloat(numFive) );

if( isNaN(numFive) ){
  // alert('its not a number');
}

// parseInt
// parseFloat
// isNaN


// alert('Wha?');
// var userLang  = confirm('Do you speak it?');
// console.log(userLang);

//var fourmoli = prompt('What is your favorite flavor of ravioli');
//console.log(fourmoli);

// var firstName = prompt('what is your first name?');
// var secondName = prompt('what is your middle name');
// var lastName = prompt('what is your last name');
// var completeName = ("My full name is ")+ firstName + (" ") + secondName + (" ") + lastName + (".") ;
// console.log(completeName);

// var userAge = prompt('what is your age')
// console.log( parseInt(userAge) );

// All 3 alerts (alerts, prompt, confirm)
// 4 objects. (string, number, boolean)
// Minimum of 10 variable saves
// Minimum of 5 confirms
// use 1 if statement

/* if( isNaN(numFive) ){
alert('its not a number');
}else{

}
*/
var userName = prompt("What is your name?")
var intro = "Hey you " + userName + " you’re finally awake. You were trying to cross the border right? Walked right into that Imperial ambush same as us and that thief over there.";
alert(intro);


var userResp = confirm('are you a boy');
if(userResp){
  alert('yay. youre a boy');
  var gender = boy;
}else{
  alert('youre a girl then.');
  var gender = "girl";
}
var userGender = 'welcome young' + gender;
alert(userGender);
