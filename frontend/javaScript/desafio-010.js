//•	Crie uma função que receba um array de números e converta para todos para números inteiros arredondado para baixo e imprima no console. 
function arredondarParaBaixo(array) {
    const inteirosArredondados = array.map(num => Math.floor(num));

    console.log(inteirosArredondados);
}

const numeros = [1.2, 3.8, 4.5, 7.9, 10.1];
arredondarParaBaixo(numeros);