/*SLIDES*/
var slides = document.querySelectorAll('.faixa-relampago .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

/*ENVIO DE EMAIL*/
let emailDigitado = document.querySelector(".button-email");
let emailCadastrado = document.querySelector(".aviso-email");
let avisoEmail = document.querySelector(".cadastrar-container");

emailDigitado.addEventListener('click', avisar);

function avisar(){
    let nomeInput = document.querySelector(".input-nome").value;
    let nomeEmail = document.querySelector(".input-email").value;

    window.localStorage.setItem(nomeEmail, JSON.stringify({
         nome: nomeInput,
         email: nomeEmail
    }))

    avisoEmail.innerHTML = " ";
    emailCadastrado.innerHTML="Seu email foi cadastrado!";
}

/*COMPRAR*/

function addCarrinho(event) {
    const idDoItemClicado = event.target.id;

    let botaoComprar = document.getElementById(idDoItemClicado);
    let numCompras = document.querySelector(".compras-carrinho");

    const idDaDiv= "div-" + idDoItemClicado;

    let clickComprar = document.getElementById(idDaDiv);

    botaoComprar.classList.add("apagar");
    clickComprar.classList.remove("apagar");
    clickComprar.innerHTML = "PRODUTO ADICIONADO AO CARRINHO";
    numCompras.classList.remove("apagar");
    numCompras.innerHTML = parseInt(numCompras.innerHTML || 0) + 1;
}




