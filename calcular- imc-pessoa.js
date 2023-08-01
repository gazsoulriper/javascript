/* Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC
(IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70 kg de peso e 1.75 de altura
e peça ao José para dizer o valor do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return (this.peso / Math.pow(this.altura, 2)).toFixed(1);
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return 'O IMC é de ' + imc + ' Abaixo do peso';
        }
        else if (imc >= 18.5 && imc <= 25) {
            return 'O IMC é de ' + imc + ' Peso Normal';
        }
        else if (imc > 25 && imc <= 30) {
            return 'O IMC é de ' + imc + ' Acima do peso';
        }
        else if (imc > 30 && imc <= 40) {
            return 'O IMC é de ' + imc + ' Obeso';
        }
        else {
            return 'O IMC é de ' + imc + ' Obesidade Grave';
        }
    }
}

const jose = new Pessoa('José', 120, 1.75);

console.log(jose.calcularImc());
console.log(jose.classificarImc());
