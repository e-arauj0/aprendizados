// Importa o módulo 'readline' que permite interagir com o terminal para ler e escrever informações
const readline = require('readline').createInterface({
    input: process.stdin,  // Define que a entrada será feita pelo terminal (process.stdin)
    output: process.stdout, // Define que a saída será exibida no terminal (process.stdout)
});

// Função para perguntar ao usuário sobre a cor favorita
function perguntar() {
    // A função readline.question() exibe a pergunta e captura a resposta do usuário
    readline.question("Qual sua cor favorita? ", (language) => {
        // Verifica se a resposta do usuário é "vermelho"
        if (language == "vermelho") {
            // Se for "vermelho", exibe uma mensagem informando para escolher outra cor
            console.log("Essa não, escolhe outra");
            // Chama a função novamente para perguntar ao usuário
            perguntar();
        } else {
            // Se a resposta for diferente de "vermelho", exibe uma mensagem positiva com a cor escolhida
            console.log(`${language} é uma ótima cor`);
            // Fecha a interface de leitura, encerrando a interação com o usuário
            readline.close();
        }
    });
}

// Chama a função perguntar() para iniciar o processo de interagir com o usuário
perguntar();

// Objetivo do código: O código faz uma pergunta sobre a cor favorita do usuário. Se a resposta for "vermelho", o programa pede novamente até que o usuário escolha uma cor diferente. Quando o usuário fornece uma resposta válida, o programa imprime uma mensagem e finaliza a interação.