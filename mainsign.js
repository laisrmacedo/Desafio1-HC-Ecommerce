// CRIAR CONTA
let criarConta = document.querySelector(".button-conta");
let avisoConta = document.querySelector(".aviso-conta");
let loginConta = document.querySelector(".login-container")


criarConta.addEventListener('click', criar);

function criar(){
    let emailConta = document.querySelector(".conta-email").value;
    let cepConta = document.querySelector(".conta-cep").value;
    let senhaConta = document.querySelector(".conta-senha").value;
    let jumpConta = "jump";

    window.localStorage.setItem(jumpConta, JSON.stringify({
        jumpConta: jumpConta,
        email: emailConta,
        cep: cepConta,
        senha: senhaConta
    }))

    loginConta.innerHTML = " ";
    avisoConta.innerHTML="Sua conta foi criada com sucesso!";
}