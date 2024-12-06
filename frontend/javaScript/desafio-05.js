//•	Crie uma que receba um array de objetos e retorne ordenado e ordem alfabética a partir da propriedade name do objeto  
function ordenar(array){
    return array.sort((a, b) => {
       return a.name.localeCompare(b.name)
    })
}

const user = [
    {
        name: 'Francisco'
    },
    {
        name: 'Carlos'
    },
    {
        name: 'Ana'
    }
]

const result = ordenar(user)
console.log(result)