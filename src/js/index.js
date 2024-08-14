// passo 1 - pegar o elemento html dos botoes 
const botoesCarroesel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");
//passo 2 - verificar o clixk do usuario no botão
botoesCarroesel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();
        // passo 4 - marcar o botão clicando como se tivesse selecionado
        marcarBotaoSelecionado(botao);
        // passo 5 - esconder a imagem anteriormente selecionada
        esconderImagemAtiva();
        // passo 6 - fazer apaecer a imagem correspondente ao botão clicado
        mostrarImagemDeFundo(indice);
        // Passo 7 - esonder a informação do dragão anteriormente selecionado
        esconderInformacoesAtivas();
        // Passo 8 - Mostrar a informação do dragao referente ao botão clicado
        mostrarInformacoes(indice);
    });

})

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
