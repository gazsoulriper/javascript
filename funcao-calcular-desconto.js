/* Utilizando o exercício da calculadora de descontos, quebre o código em pequenas funções para retornar os valores. 

Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal
de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida
e efetuar o cálculo adequado.

Código Condição de pagamento:
1- à vista débito, recebe 10% de desconto;
2- à vista no dinheiro ou pix, recebe 15% de desconto;
3- em 2x, preço normal de etiqueta sem juros;
4- acima de 2x, preço normal da etiqueta mais juros de 10%;
*/

function aplicarDesconto(valorProduto, desconto) {
   return (valorProduto - (valorProduto * (desconto / 100)));
}

function aplicarJuros(valorProduto, juros) {
    return (valorProduto + (valorProduto * (juros / 100)));
 }
 
let valorProduto = 100;
let tipoPagamento = 'debito';

switch (tipoPagamento) {
    case 'debito':
        console.log('Valor total a pagar com 10% de desconto R$: ' + aplicarDesconto(valorProduto, 10));
        break;
    case 'dinheiro':
    case 'pix':
        console.log('Valor total a pagar com 15% de desconto R$: ' + aplicarDesconto(valorProduto, 10));
        break;
    case 'credito 1x':
    case 'credito 2x':
        console.log('Valor total a pagar sem desconto R$: ' + valorProduto);
        break;
    default:
        console.log('Valor total a pagar acrescido de 10% de juros R$: ' + aplicarJuros(valorProduto, 10));
        break;
}



