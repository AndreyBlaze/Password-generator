"use strict"

document.addEventListener('DOMContentLoaded', () => {

    const copy = document.querySelector('.copy'),
          generate = document.querySelector('.generate'),
          input = document.querySelector('input'),
          info = document.querySelector('.info');
    
    let symbols = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()`;
    let num = 8;

    let password = '';

    generate.addEventListener('click', () => {
        for (let i = 0; i < num; i++) {
            password += symbols[Math.floor(Math.random() * symbols.length)]
        }
        input.value = password;
        password = '';
    });

    copy.addEventListener('click', () => {
        navigator.clipboard.writeText(input.value);
        info.style.opacity = '1';
        setTimeout(() => {
            info.style.opacity = '0';
        }, 1500);
    });

});