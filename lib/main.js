'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Bulma!');
});

//mobile menu
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('is-active')
});

document.querySelector('.nl1').addEventListener('click', () => {
  navbarMenu.classList.remove('is-active')
});

document.querySelector('.nl2').addEventListener('click', () => {
  navbarMenu.classList.remove('is-active')
});
