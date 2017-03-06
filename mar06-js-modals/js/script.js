var modal = document.getElementById('modal'),

function createModal(modalType, modalMsg){
  var modalForm = document.createElement('form'),
      modalMessage = document.createElement('p'),
      modalInput = document.createElement('input'),
      modalConfirm = document.createElement('input'),
      modalCancel = document.createElement('input');

      modalMessage.textContent = modalMsg

  modalInput.type = 'text';
  modalInput.placeholder = 'Your Response';

  modalConfirm.type = 'submit';
  modalConfirm.value = 'Confirm';

  modalCancel.type = 'button';
  modalCancel.value = 'Cancel';

  if(modalType === 'alert'){
    modalForm.append(modalMessage);
    modalForm.append(modalConfirm);
  }else if(modalType === 'prompt'){
    modalForm.append(modalInput);
    modalForm.append(modalCancel);
    modalForm.append(modalConfirm);
  }else if(modalType === 'confirm'){
    modalForm.append(modalCancel);
    modalForm.append(modalConfirm);
  }

  modal.append(modalForm);
}

createModal('confirm', 'You can\'t click there dummy');
