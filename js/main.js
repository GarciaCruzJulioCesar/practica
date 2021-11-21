
let btn = document.querySelector('#toggle');
let menu = document.querySelector('.navigation');

btn.addEventListener('click', function(e) {
  menu.classList.toggle('show');
});

window.addEventListener('click', function(e) {
  e.defaultPrevented();
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
});

let slider = $('#slider');
let siguiente = $('#btn__right')
let anterior = $('#btn__left')
// mover la ultima imagen al primer lugar
$('#slider section:last').insertBefore('#slider section:first');
//mostrar la primera imagen con margin left -100%
slider.css('margin-left', '-'+100+'%');

function moverD(){
  slider.animate({marginLeft:'-'+200+'%'}, 700, function(){
    $('#slider section:first').insertAfter('#slider section:last');
    slider.css('margin-left', '-'+100+'%');
  });
};

function moverI(){
  slider.animate({marginLeft:0}, 700, function(){
    $('#slider section:last').insertBefore('#slider section:first');
    slider.css('margin-left', '-'+100+'%');
  });
};
siguiente.on('click', function(){
  moverD();
});
anterior.on('click', function(){
  moverI();
});

function autoplay(){
  interval = setInterval(function(){
    moverD()
  }, 5000);
}
autoplay();

const btnswicht = document.querySelector('#swicht');

btnswicht.addEventListener('click', () =>{
  document.body.classList.toggle('dark');
  btnswicht.classList.toggle('activeLive');
  
  // guardamos el modo en localstorage
  if(document.body.classList.contains('dark')){
    localStorage.setItem('dark-mode', "true");
  }else {
    localStorage.setItem('dark-mode', 'false');
  }
  
});

// obtenemos el modo actual 
if(localStorage.getItem('dark-mode') === 'true'){
  document.body.classList.add('dark');
  btnswicht.classList.add('activeLive');
}else{
  document.body.classList.remove('dark');
  btnswicht.classList.remove('activeLive');
}