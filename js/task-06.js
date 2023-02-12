const inputValue = document.querySelector('#validation-input');

inputValue.addEventListener('blur', onValidationCheck)

function onValidationCheck (){
    // inputValue.classList.remove('#validation-input');
   if(inputValue.value.length === Number(inputValue.dataset.length)){
    inputValue.classList.remove('invalid');
    return inputValue.classList.add('valid');
   } else{
    inputValue.classList.remove('valid');
    return inputValue.classList.add('invalid');
}  
}

