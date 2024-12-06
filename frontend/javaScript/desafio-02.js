//•	Crie uma função que receba um array de objetos JSON e verifique caso o objeto possua a propriedade cidade e o valor seja Belo Horizonte acrescente a propriedade estado com valor MG e retorne o array. 
function addState(array) {
    return array.map(object => {
        if (object.cidade === "Belo Horizonte") {
            object.estado = "MG"
        }
        return object
    })
}

const cities = [
    {
        cidade: 'Belo Horizonte'
    },
    {
        cidade: 'São Paulo'
    },
    {
        cidade: 'Fortaleza'
    },
    {
        cidade: 'Belo Horizonte'
    }

]

const result = addState(user)
console.log(result)