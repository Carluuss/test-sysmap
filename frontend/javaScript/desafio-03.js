//•	Crie uma função que receba um array de objetos JSON e verifique caso o objeto possua a propriedade cidade e o valor seja São Paulo imprima o objeto no console, remova o objeto e retorne o array. 
function removeSp(array){
    array.map(object => {
        if(object.cidade === 'São Paulo'){
            console.log("Array removido:", object)
        }
    })

    return array.filter(object => object.cidade !== "São Paulo")
}

const user = [
    {
        nome: "João",
        cidade: "São Paulo"
    },
    {
        nome: "Felipe",
        cidade: "Fortaleza"
    },
    {
        nome: "Ana",
        cidade: "Bahia"
    },
    {
        nome: "Fernanda",
        cidade: "São Paulo"
    },
]

const result = removeSp(user)
console.log("\n Array atualizado:", result)