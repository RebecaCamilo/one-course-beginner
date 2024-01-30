let quantidadeDeValoresPossiveis = 100;
let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

exibirMensagemInicial();

let tentativas = 1;

function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto) {
        let palavraTetativa = tentativas == 1 ? 'tentativa': 'tentativas';

        exibirTextoNaTela('h1', 'Acertou!!');
        exibirTextoNaTela('p', `Você descobriu o número secreto em ${ tentativas } ${ palavraTetativa }`);
        document.querySelector('input').setAttribute('disabled', 'true')
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        compararChuteComNumeroSecreto(chute, numeroSecreto);
        tentativas++;
        limparCampo();
    }
}

function compararChuteComNumeroSecreto(chute, numeroSecreto) {
    if(chute > numeroSecreto) {
        exibirTextoNaTela('p', `O número secreto é menor que ${ chute }`);
    } else {
        exibirTextoNaTela('p', `O número secreto é maior que ${ chute }`);
    }
}

function exibirTextoNaTela(tag, texto) {
    document.querySelector(tag).innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * quantidadeDeValoresPossiveis + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == quantidadeDeValoresPossiveis) {
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    document.querySelector('input').value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    console.log(numeroSecreto);
    limparCampo();
    tentativas = 1;
    document.querySelector('input').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    exibirMensagemInicial();
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo de Adivinhar o Número Secreto');
    exibirTextoNaTela('p', `Escolha um número de 1 a ${quantidadeDeValoresPossiveis}`);
}
