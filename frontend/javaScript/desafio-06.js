//•	Crie uma função que receba um array e retorne um novo array somente com números pares contidos nele. 
function numerosPares(array) {
    return array.filter((num) => {
        return num % 2 == 0;
    })
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const result = numerosPares(numeros)

console.log(result)