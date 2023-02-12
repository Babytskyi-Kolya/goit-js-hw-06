const formContainer = document.querySelector('.login-form');

formContainer.addEventListener('submit', loginFormSubmit);

function loginFormSubmit (event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    const formData = {
        email,
        password,
    }

    if(email === "" || password === ""){
        alert("Заповніть всі поля форми!")
    } else{
        console.log(formData);
    }
    event.currentTarget.reset()
}