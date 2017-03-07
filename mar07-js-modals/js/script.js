var content = document.getElementById('content');

var h1 = document.createElement('h1'),
    p = document.createElement('p'),
    a = document.createElement('a');

h1.textContent = 'This is some text';
p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipsicing elit.';

a.textContent = 'click';

//content.append(h1, p, text, 'here is a text node', a)

content.appendChild(h1);

var modal = document.getElementById('modal'),

// function createModal(modalType, modalMsg){
//   var modalForm = document.createElement('form'),
//       modalMessage = document.createElement('p'),
//       modalInput = document.createElement('input'),
//       modalConfirm = document.createElement('input'),
//       modalCancel = document.createElement('input');
//
//       modalMessage.textContent = modalMsg
//
//   modalInput.type = 'text';
//   modalInput.placeholder = 'Your Response';
//
//   modalConfirm.type = 'submit';
//   modalConfirm.value = 'Confirm';
//
//   modalCancel.type = 'button';
//   modalCancel.value = 'Cancel';
//
//   if(modalType === 'alert'){
//     modalForm.append(modalMessage);
//     modalForm.append(modalConfirm);
//   }else if(modalType === 'prompt'){
//     modalForm.append(modalInput);
//     modalForm.append(modalCancel);
//     modalForm.append(modalConfirm);
//   }else if(modalType === 'confirm'){
//     modalForm.append(modalCancel);
//     modalForm.append(modalConfirm);
//   }
//
//   modal.append(modalForm);
// }

var form = document.querySelector('form');
// form.forEach(function(e, i){
//   console.log(e);
// });

console.log(form);

for(var i = 0, i < form.children.length i++){
  console.log(form.children[i]);
}
