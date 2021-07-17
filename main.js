
var slides = document.querySelectorAll('.faixa-relampago .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

let emailDigitado = document.querySelector(".button-email")
let emailCadastrado = document.querySelector(".aviso-email")
let avisoEmail = document.querySelector(".cadastrar-container")

emailDigitado.addEventListener('click', avisar)

function avisar(){
    avisoEmail.innerHTML = " "
    emailCadastrado.innerHTML="Seu email foi cadastrado!"
}