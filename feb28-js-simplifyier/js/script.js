document.querySelector('button').addEventListener('click', function(){
  //console.log( add(7, 3) );
  addEx(3, 2, 5, 6, 3, 7, 2, 6, 7, 5643, 7)
});
var addEx =  function(){
  console.log(arguments);
  var total = 0;

  for(var i = 0; i < arguments.length; i++){
    if(typeof arguments[i] !== 'string'){
      total = arguments[i] + total;
    }
  }
  return total;
};

console.log(firstName() + ' ' + lastName());

function firstName(){
  return 'Rigoberto';
}
function lastName(){
  return 'Padilla';
}

document.querySelector('input[type="submit"1]').addEventListener('click', function(){
    getInfo();
});
var form = document.querySelector('form');

function getInfo(){
  console.log(
      'Welcome ' + getName() + 'to your site. Your email is' + getEmail()
  );
}
function getName(arr){

}

function getEmail(arr){
    var emails = '';
    for(var i = 0; i  < arr.elements.length; i++){
      emails = emails + arr.elements[i].value + ' ';
    }
  }
  return checks;
}
