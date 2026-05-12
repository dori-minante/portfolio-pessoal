// Menu responsivo
let botaoMenu = document.getElementById("botao-menu");
let menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function() {
    menu.classList.toggle("menu-aberto");
});


// Alteração de tema claro/escuro
// Alteração de tema escuro/claro
let botaoTema = document.getElementById("botao-tema");

botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("tema-claro");

    if (document.body.classList.contains("tema-claro")) {
        botaoTema.textContent = "🌙";
    } else {
        botaoTema.textContent = "☀️";
    }
});

// Animação das seções ao rolar a página
let elementosAnimados = document.querySelectorAll(".animar");

function mostrarAoRolar() {
    for (let i = 0; i < elementosAnimados.length; i++) {
        let elemento = elementosAnimados[i];
        let posicao = elemento.getBoundingClientRect().top;
        let alturaTela = window.innerHeight;

        if (posicao < alturaTela - 100) {
            elemento.classList.add("aparecer");
        }
    }
}

window.addEventListener("scroll", mostrarAoRolar);
window.addEventListener("load", mostrarAoRolar);


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