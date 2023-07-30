/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal
de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida
e efetuar o cálculo adequado.

Código Condição de pagamento:
1- à vista débito, recebe 10% de desconto;
2- à vista no dinheiro ou pix, recebe 15% de desconto;
3- em 2x, preço normal de etiqueta sem juros;
4- acima de 2x, preço normal da etiqueta mais juros de 10%;
*/

let valorProduto = 100;
let tipoPagamento = 'credito 1x';

switch (tipoPagamento) {
    case 'debito':
        valorTotal = valorProduto - (valorProduto * 0.1);
        console.log('Valor total a pagar com 10% de desconto R$: ' + valorTotal);
        break;
    case 'dinheiro':
    case 'pix':
        valorTotal = valorProduto - (valorProduto * 0.15);
        console.log('Valor total a pagar com 15% de desconto R$: ' + valorTotal);
        break;
    case 'credito 1x':
    case 'credito 2x':
        valorTotal = valorProduto;
        console.log('Valor total a pagar sem desconto R$: ' + valorTotal);
        break;
    default:
        valorTotal = valorProduto + (valorProduto * 0.1);
        console.log('Valor total a pagar acrescido de 10% de juros R$: ' + valorTotal);
        break;
}



