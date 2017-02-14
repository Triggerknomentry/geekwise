// var a = function(){
//     var username = prompt('whats your name').trim();
//     // console.log(username);
//     // return username;
//     b(username);
// }();
//
// function b(user){
//   var cased = user.charAt(0).toUpperCase() + user.substr(1).toLowerCase();
//   c(cased);
// }
//
// function c(user){
//   alert(user);
// }

var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');

btn1.addEventListner('click', function(){
  userFirstName = prompt('whats your first name?');
  console.log( parseInt(userFirstName) );
  if( isNaN(userFirstName) ){
    console.log('its not a number');
  }else{
    alert('please type your name');
  }
  btn2.disabled = false;
  btn1.setAttribute('disabled', true);
});
btn2.addEventListner('click', function(){
  // console.log();
  var userLastName = prompt('whats your first name?');
  alert(userFirstName + userLastName);
  btn1.disabled = false;
  btn2.disabled = true;
});
