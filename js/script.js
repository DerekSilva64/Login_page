const box = document.querySelector('.box');
const login = document.querySelector('.link-login');
const register = document.querySelector('.link-register');
const popup = document.querySelector('.btn-login-popup');
const iconClose = document.querySelector('.fa-x');

register.addEventListener('click', ()=>{
    box.classList.add('active')
});

login.addEventListener('click', ()=>{
    box.classList.remove('active')
});

popup.addEventListener('click', ()=>{
    box.classList.add('active-popup')
});

iconClose.addEventListener('click', ()=>{
    box.classList.remove('active-popup')
});
