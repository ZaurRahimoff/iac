(() => {
  'use strict'

  var menu = document.querySelector('.offcanvas-collapse');
  var mobNav = document.querySelector('.mob-nav');
  var menuToggle = document.querySelector('#navbarSideCollapse');
  var hamburger = document.querySelector('.hamburger-lines');
  var submenu = document.querySelector('.submenu');
  var openSubBtn = document.querySelector('.open-submenu');
  var closeSubBtn = document.querySelector('.close-submenu');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
    hamburger.classList.toggle('active');
  });

  openSubBtn.addEventListener('click', () => {
    submenu.classList.add('open');
    mobNav.classList.add('submenu-open');
  });

  closeSubBtn.addEventListener('click', () => {
    submenu.classList.remove('open');
    mobNav.classList.remove('submenu-open');
  });

  hamburger.addEventListener('click', () => {
    submenu.classList.remove('open');
    mobNav.classList.remove('submenu-open');
  });


})();

