/* Faça um algoritimo que dado 3 notas tiradas por um aluno
em um semestre da faculdade calcule e imprima a sua média e a 
sua classificação conforme  tabela abaixo.

Média = (nota1 + nota2 + nota3) / 3;

Classificação:
- Média menor que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, aprovado;
*/



let nota1 = 7.1;
let nota2 = 7;
let nota3 = 7;
let media = 0;

media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('O aluno tirou a nota ' + media.toFixed(2) + ' Reprovado!');
}
else if (media > 7) {
    console.log('O aluno tirou a nota ' + media.toFixed(2) + ' Aprovado!')
}
else {
    console.log('O aluno tirou a nota ' + media.toFixed(2) + ' Recuperação!')
}
