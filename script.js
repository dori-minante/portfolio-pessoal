// Menu responsivo
let botaoMenu = document.getElementById("botao-menu");
let menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function() {
    menu.classList.toggle("menu-aberto");
});


// Alteração de tema claro/escuro
let botaoTema = document.getElementById("botao-tema");

botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("tema-escuro");

    if (document.body.classList.contains("tema-escuro")) {
        botaoTema.textContent = "☀️";
    } else {
        botaoTema.textContent = "🌙";
    }
});


// Validação do formulário de contato
let formulario = document.getElementById("formulario-contato");
let mensagemRetorno = document.getElementById("mensagem-retorno");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    if (nome === "") {
        mensagemRetorno.textContent = "Por favor, preencha o nome.";
        mensagemRetorno.style.color = "red";
        return;
    }

    if (email === "") {
        mensagemRetorno.textContent = "Por favor, preencha o e-mail.";
        mensagemRetorno.style.color = "red";
        return;
    }

    if (mensagem === "") {
        mensagemRetorno.textContent = "Por favor, escreva uma mensagem.";
        mensagemRetorno.style.color = "red";
        return;
    }

    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        mensagemRetorno.textContent = "Digite um e-mail válido.";
        mensagemRetorno.style.color = "red";
        return;
    }

    mensagemRetorno.textContent = "Mensagem enviada com sucesso!";
    mensagemRetorno.style.color = "green";

    formulario.reset();
});