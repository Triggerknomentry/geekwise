var login = document.getElementById('login');
var loginForm =
'<form>'
        '<h1>Please Login</h1>'+
        '<label>'+
          '<span>username</span>'+
          '<input type="text" placeholder="username">'+
        '</label>'+
        '<label>'+
          '<span>password</span>'+
          '<input type="password" placeholder="password">'+
        '</label>'+
        '<label>'+
          '<span></span>'+
          '<input type="submit" value="go">'+
        '</label>'+
'</form>';
login.innerHTML = loginForm;

document.querySelector('input[type="submit"]').addEventListener('click', function(e){
  e.preventDefault();
  getFormVals();
})
var form = document.querySelector('#login form');




function getFormVals(){
  console.log(form.elements);
  for (var i = 0; i < form.length - 1; i++) {
      var formInputs.push(form[i])
  }
  console.log(dropCapInputs(formInputs) );
}
function dropCapInputs(arr){
  arr.forEach(function(e, i){
    arr[i] = arr[i].toLowerCase();
  });
  return arr;
}
