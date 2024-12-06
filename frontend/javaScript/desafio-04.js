//•	Crie uma variável que possa ser usada somente no escopo em que foi criada e uma que possa ser usada fora do escopo que foi criada.  
function soma() {
    let numero1 = 1;
    let numero2 = 2;

    return numero1 + numero2
}

function subtracao() {
    var numero1 = 2;
    var numero2 = 2;

    return numero1 - numero2
}

console.log(soma());
console.log(subtracao());