const inputValue = document.querySelector('#name-input');
const spanNameValue = document.querySelector('#name-output');
const tagBody = document.querySelector('body');
// tagBody.addEventListener('click', clickOnBody)

// function clickOnBody (){
//     inputValue.removeEventListener('input', onInputName);
// }

inputValue.addEventListener('input', onInputName)

function onInputName (event) {

    if(inputValue.value !== ""){
       return spanNameValue.textContent = event.currentTarget.value;
    } else{
        spanNameValue.textContent ="Anonymous";
    }
    
}


