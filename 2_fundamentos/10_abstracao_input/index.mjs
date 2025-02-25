import inquirer from 'inquirer';

/**
 * Função principal que solicita ao usuário duas notas e calcula a média.
 * O módulo `inquirer` é usado para interagir com o usuário no terminal.
 */
inquirer.prompt([  // Chama o método `prompt` do `inquirer` para fazer perguntas ao usuário
    {
        name: 'p1',  // Nome do primeiro campo de resposta
        message: 'primeira nota: ',  // Mensagem que será exibida ao usuário
    },
    {
        name: 'p2',  // Nome do segundo campo de resposta
        message: 'segunda nota: ',  // Mensagem que será exibida ao usuário
    },
])
.then((answers) => {  // Quando o usuário responder às perguntas, a função .then será chamada com as respostas
    console.log(answers);  // Exibe as respostas do usuário no console
    
    // Calcula a média das duas notas fornecidas, convertendo as respostas para inteiros
    const media = ((parseInt(answers.p1) + parseInt(answers.p2))) / 2;
    
    // Exibe a média calculada no console
    console.log(`A média é ${media}`);
})
.catch((err) => console.log(err));  // Se ocorrer um erro, ele será capturado e impresso no console


