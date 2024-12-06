//•	Crie uma função que receba um array e retorne um novo array somente com números primos contidos nele  
function filtrarNumerosPrimos(array) {
    return array.filter(isPrimo);
}

function isPrimo(num) {
    if (num < 2) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17];
const primos = filtrarNumerosPrimos(numeros);
console.log(primos);
