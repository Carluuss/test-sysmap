//•	Crie uma função que receba o objeto e altere propriedade instituição 1 para um array de strings utilizando o separador virgula utilizando o valor da propriedade e adicione 2 Adicione 3 novas propriedade no objeto user endereço, nacionalidade e situação do curso. 
function modificarObjeto(usuario) {
    if (usuario.escolaridade && usuario.escolaridade.intinuicao1) {
        usuario.escolaridade.intinuicao1 = usuario.escolaridade.intinuicao1
            .split(",")
            .map(item => item.trim()); // Remove espaços desnecessários
    }

    usuario.endereco = "Rua Exemplo, 456";
    usuario.nacionalidade = "Brasileiro";
    usuario.situacaoCurso = "Concluído";

    return usuario;
}

const user = {
    name: "Roberto",
    idade: "33",
    formado: "Sim",
    escolaridade: {
        intinuicao1: "UNIVERSIDADE MG, UNIVERSIDADE SP, UNIVERSIDADE PR, UNIVERSIDADE RS",
        instinuicao2: "Preencher essa informação",
    },
};

const usuarioModificado = modificarObjeto(user);
console.log(usuarioModificado);
