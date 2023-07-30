/*
O IMC - Indice de massa corporal é um critério da Organização Mundial de Saúde para dar  uma indicação
sobre a condição de peso de uma pessoa adulta.

Fórmula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;
*/

let imc = 75 / Math.pow(1.7, 2);

if (imc < 18.5) {
    console.log('O IMC é de ' + imc.toFixed(2) + ' Abaixo do peso');
}
else if (imc >= 18.5 && imc.toFixed(2) <= 25) {
    console.log('O IMC é de ' + imc.toFixed(2) + ' Peso Normal');
}
else if (imc > 25 && imc <= 30) {
    console.log('O IMC é de ' + imc.toFixed(2) + ' Acima do peso');
}
else if (imc > 30 && imc <= 40) {
    console.log('O IMC é de ' + imc.toFixed(2) + ' Obeso');
}
else {
    console.log('O IMC é de ' + imc.toFixed(2) + ' Obesidade Grave');
}




