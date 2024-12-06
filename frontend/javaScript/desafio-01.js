//•	Crie uma função que receba um objeto JSON e imprima no console o nome de todas as propriedades do objeto. 
function imprimirPropriedade(objeto) {
    Object.keys(objeto).forEach(propriedade => {
        console.log(propriedade);
    });
}

const user = {
    name: "Roberto",
    idade: "33",
    formado: "Sim",
    escolaridade: {
        intinuicao1: "UNIVERSIDADE MG, UNIVERSIDADE SP, UNIVERSIDADE PR, UNIVERSIDADE RS",
        instinuicao2: "Preencher essa informação",
    },
}

imprimirPropriedade(user);