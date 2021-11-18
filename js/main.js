
let btn = document.querySelector('#toggle');
let menu = document.querySelector('.navigation');

btn.addEventListener('click', function(e) {
  menu.classList.toggle('show');
});

window.addEventListener('click', function(e) {
  if (menu.classList.contains('show') && e.target != menu && e.target != btn) {
    menu.classList.toggle('show');
  }
});

let abrir = document.querySelector('.cta');
let contModal = document.querySelector('.content__modal');
let cerrar = document.querySelector('#close');

abrir.addEventListener('click', function() {
  contModal.style.display = 'flex';
})
cerrar.addEventListener('click', function() {
  contModal.style.display = 'none';
})
window.addEventListener('click', function(e) {
  if (e.target == contModal) {
    contModal.style.display = 'none';
  }
})