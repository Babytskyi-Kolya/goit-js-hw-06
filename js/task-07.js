const inputScrollValue = document.querySelector('#font-size-control');
const spanText = document.querySelector('#text');

inputScrollValue.addEventListener(`input`, (event) => {
    spanText.style.fontSize = `${event.currentTarget.value}px`;
})

