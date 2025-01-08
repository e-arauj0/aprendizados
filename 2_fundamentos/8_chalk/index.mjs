// o CHALK permite colorir o texto no terminal. Isso ajuda a destacar as mensagens quando você está programando.

import chalk from "chalk";

const escolha = 2

if(escolha <= 1) {
    console.log(chalk.green("ela aceitou namorar contigo"))
} else {
    console.log(chalk.bgRed.white("ela não quer saber de voce!"))
}

// você deve usar a sintaxe import em vez de require. Por exemplo, altere require("chalk") para import chalk from "chalk";.

// Para usar import no Node.js, é necessário configurar o projeto para suportar módulos ES. Isso pode ser feito de duas formas:

// Adicionando "type": "module" no package.json.
// Renomeando os arquivos de .js para .mjs.