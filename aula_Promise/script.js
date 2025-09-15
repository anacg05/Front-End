
const promessa = new Promise((resolve, reject) => {
    console.log("Verificando viabilidade do pedido...");
    const estado = true;
    setTimeout(() => {
        if (estado){
            resolve("Pedido sendo preparado!");
        }else{
            reject("Estamos sem queijo");
        }
    }, 5000)
});

promessa
    .then(msg => console.log("Sucesso: ", msg))
    .catch(erro => console.log("Erro: ", erro))
    .finally(() => console.log("Operação finalizada!"))





















/* 
function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        console.log(`Buscando usuário com ID ${id}...`);

        setTimeout(() => {

            const bancosDeDados = {
                1: {id: 1, nome: "João"},
                2: {id: 2, nome: "Maria"}
            };

            const usuario = bancosDeDados[id];

            if (usuario) {
                resolve(`Usuário encontrado: ${usuario. nome}`);
            }else{
                reject("Usuário não encontrado no banco de dados.");
            }
        }, 2000);
    });
}

buscarUsuario(3)
        .then(msg => console.log("Sucesso: ", msg))
        .catch(erro => console.log("Erro: ", erro))
        .finally(() => console.log("A operação acabou!"));
*/

