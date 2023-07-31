function maiorDeIdade(idade) {
    if (idade >= 18) {
        console.log('Você é maior de idade!');
    }
    else {
        maiorIdade = 18 - idade;
        console.log('Ainda faltam ' + maiorIdade + ' anos para você ser maior de idade! ')
    }
}

maiorDeIdade(19);
maiorDeIdade(15);