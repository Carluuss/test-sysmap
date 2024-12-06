//•	Crie uma função que remova o quinto elementos do array caso ele seja um número primo e imprima o total da soma do array no console, se o quinto elemento não for um número primo gere um novo array randômico de 20 posições e com números primos e imprima no console o array e assoma dos números dele. 
function processarArray(array) {
    function isPrimo(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    function somaArray(arr) {
        return arr.reduce((acc, num) => acc + num, 0);
    }

    if (isPrimo(array[4])) {
        array.splice(4, 1);
        console.log("Soma do array após remoção:", somaArray(array));
    } else {
        const novoArray = [];
        while (novoArray.length < 20) {
            const numero = Math.floor(Math.random() * 100) + 1; 
            if (isPrimo(numero)) novoArray.push(numero);
        }
        console.log("Novo array de números primos:", novoArray);
        console.log("Soma dos números do novo array:", somaArray(novoArray));
    }
}

const arrayOriginal = [10, 15, 20, 25, 7, 30, 35, 40, 45, 50];
processarArray(arrayOriginal);
