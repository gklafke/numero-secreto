alert('Vamos jogar pessoal legal!!!!!!');
let numeroMaximo = 5000;
let numerosecreto = parseInt(Math.random()*numeroMaximo+1);
console.log(numerosecreto);
let chute;
let tentativas = 1;
//enquanto chute não for igual ao n.s.
while(chute!= numerosecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //se chute igual ao número secreto
if (numerosecreto == chute) {
    break;
   
} else {
    if (chute > numerosecreto) {
        alert(`O número secreto é menor que ${chute}`);
    } else {
        alert(`O número secreto é maior que ${chute}`);
    }
    //tentativas = tentativas + 1;
    tentativas++;
}
}

let palavraTentativa = tentativas >1? 'tentativas' : 'tentativa'
alert(`Você descobriu o número secreto ${numerosecreto} com ${tentativas} ${palavraTentativa}`);


//if (tentativas >1) {
//    alert(`Você descobriu o número secreto ${numerosecreto} com ${tentativas} tentativas.`);
//} else { 
//alert(`Você descobriu o número secreto ${numerosecreto} com ${tentativas} tentativa.` );
//}