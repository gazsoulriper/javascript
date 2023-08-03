/* Faça um programa que calcule e imprima o salário a ser tranferido para um funcionário.
Para realizar o cálculo receba o valor bruto do salário e o adicional dos benefícios
O salário a ser tranferido é calculado da seguinte maneira:

valor bruto do salário - percentual de imposto mediante faixa salarial + adicional dos benefícios

Para calcular o percentual de imposto segue as aliquotas:
De R$ 0.00 até R$ 1100.00 = 5.00%
De R$ 1100.01 até R$2500.00 = 10%
Maior que R$ 2500.00 = 15%

Entrada:
2000
250

Saída:
2050
*/

const { gets, print } = require('./funcoes-auxiliares-imposto-salarial.js');

function calcularImposto(salario) {
    let aliquota;
    if (salario >= 0 && salario <= 1100) {
        aliquota = 0.05;
    }
    else if (salario >= 1100.01 && salario <= 2500) {
        aliquota = 0.10;
    }
    else if (salario > 2500) {
        aliquota = 0.15;
    }
    return aliquota * salario;
}
const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

const valorImposto = calcularImposto(valorSalario);

const saida = valorSalario - valorImposto + valorBeneficios;
print('Salario Bruto: R$ ' + valorSalario.toFixed(2));
print('Valor do imposto à pagar: R$ ' + calcularImposto(valorSalario).toFixed(2));
print('Valor do benefício: R$ ' + valorBeneficios.toFixed(2));
print('Salario liquido ja descontado os impostos e acrescentado o benefício: R$ ' + saida.toFixed(2));
