/* Faça um programa que receba N (quantidade de números) e seus respectivos valores
Imprima o maior número par e o menor número ímpar.
*/

const { gets, print } = require('./funcoes-auxiliares-maior-menor-par-impar.js');

const n = gets();
let maiorValorPar = null;
let menorValorImpar = null;

for (let i = 0; i < n; i++) {
    const numero = gets();
    if (numero % 2 === 0) {
        if(maiorValorPar === null || numero > maiorValorPar) {
            maiorValorPar = numero;
        }
    }
    else {
        if(menorValorImpar === null || numero < menorValorImpar){
        menorValorImpar = numero;
        }
    } 
}

print('Maior número par: ' + maiorValorPar);
print('Menor número impar: ' + menorValorImpar);