/* Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel
por kilômetro rodado.
Crie um método que dado a quantidade de kilômetros e o preço do combustível 
nos dê o valor gasto em reais para realizar este percurso
*/



class Carros {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularGastoPercurso(distancia, preçoCombustivel) {
        return distancia * preçoCombustivel * this.gastoMedio;
    }
}

const fiesta = new Carros('Ford', 'branco', 1 / 10);
const city = new Carros('Honda', 'prata', 1 / 15);

console.log(fiesta.calcularGastoPercurso(100, 5));
console.log(city.calcularGastoPercurso(100, 5));