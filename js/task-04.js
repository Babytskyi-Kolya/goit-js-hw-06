const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector('#value');

btnDecrement.addEventListener('click', onClickDecrementBtn);
btnIncrement.addEventListener('click', onClickIncrementBtn)
let initialValueCounter = 0;

function onClickDecrementBtn () {
    initialValueCounter -= 1;  
    return addMarkupValue(initialValueCounter);
 }

 function onClickIncrementBtn () {
    initialValueCounter += 1; 
    return addMarkupValue(initialValueCounter);
 }

 const addMarkupValue = (value) => {
    return counterValue.innerHTML = `${value}`;
 }






