/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 váriáveis. Sendo elas:
1- Preço do Etanol;
2- Preço da gasolina
3- Otipo de combustível que está no carro
4- Gasto médio de combustível do carro por KM;
3- Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar essa viagem.
*/

const precoEtanol = 5.50
const precoGasolina = 7.20
let tipoCombustivel = 'etanol';
let valorViagem = 0;
const kmPorLitro = 10;
let distancia = 100;

if (tipoCombustivel === 'gasolina') {
    valorViagem = (distancia / kmPorLitro) * precoGasolina;
    console.log(valorViagem.toFixed(2));
} else {
    valorViagem = (distancia / kmPorLitro) * precoEtanol;
    console.log(valorViagem.toFixed(2));
}
