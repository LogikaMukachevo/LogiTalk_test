const loginUsername = document.querySelector('#login-username');
const message = document.querySelector('#message');

loginUsername.addEventListener('input', function(){
    if (loginUsername.value.length < 5) {
        loginUsername.style.border = "2px solid red";
        loginUsername.style.boxShadow = "0 0 10px red";
        message.textContent = "Логін занадто короткий!";
    } else {
        loginUsername.style.border = "2px solid green";
        loginUsername.style.boxShadow = "0 0 10px green";
        message.textContent = "Логін прийнятний!";
    }
});

const loginPassword = document.querySelector('#login-password');

loginPassword.addEventListener('input', function() {
    message.textContent = `Символів у паролі: ${loginPassword.value.length}`;
});