alert('Sejam bem vindos ao jogo de adivinhar o número secreto!');

let numeroMaximo = 1000;

let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(`Ei, o número secreto é ${numeroSecreto} ;)`)
let chute = prompt('Escolha um número entre 1 e ' + numeroMaximo);
let tentativas = 1;

while(chute != numeroSecreto) {    

    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }

    chute = prompt('Escolha um número entre 1 e ' + numeroMaximo);
    tentativas++;
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert(`Você descobriu o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}`);

// let n = prompt('Digite um número de 0 a 10');
// let nInicio = n;

// while(n < 10) {
//     alert(n++);
// }
// while(n >= nInicio) {
//     alert(n--);
// }

// alert('FIM :)')