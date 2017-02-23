/*
var a = document.getElementById();
var b = document.getElementByClassName();
var c = document.getElementByTagName();
var d = document.querySelector();
var e = document.querySelectorAll();
*/

var form = document.querySelector('form');
var subBtn = document.querySelector('input[type="submit"]');

subBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  for(var i = 0; i < form.elements.length; i++){
    //console.log(form.elements[i].value);
    // if(form.elements[i].type === '' ||
  )
}
  if(form.elements[i].type !== 'checkbox'){
    userArr.push(form.elements[i].value);
  }
});
