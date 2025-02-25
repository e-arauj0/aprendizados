import inquirer from 'inquirer';

/**
 * Função principal que solicita ao usuário as cores e verifica as respostas.
 */
function perguntar() {
    // Usa o inquirer para fazer duas perguntas sobre as cores
    inquirer.prompt([
        {
            name: 'p1',   // Nome do primeiro campo
            message: 'sua primeira cor: ',   // Mensagem exibida para o usuário
        },
        {
            name: 'p2',   // Nome do segundo campo
            message: 'segunda cor: ',   // Mensagem exibida para o usuário
        },
    ])
    .then((answers) => {   // Quando o usuário responder, a função "then" será chamada com as respostas
        // Verifica se a primeira nota é "verde"
        if (answers.p1 == "verde") {
            console.log("escolhe outra, verde é de boiola");   // Exibe mensagem de erro
            perguntar();  // Chama a função novamente para que o usuário insira novas respostas
        } 
        // Verifica se a segunda nota é "verde"
        else if (answers.p2 == "verde") {
            console.log("escolhe outra, verde é de boiola");   // Exibe mensagem de erro
            perguntar();  // Chama a função novamente para que o usuário insira novas respostas
        } 
        // Se as respostas forem válidas, exibe as respostas
        else {
            console.log("ótima escolha", answers);   // Exibe as respostas válidas
        }
    })
    .catch((err) => console.log(err));   // Se ocorrer algum erro, ele será capturado e exibido
}

// Inicia o processo chamando a função "perguntar"
perguntar();