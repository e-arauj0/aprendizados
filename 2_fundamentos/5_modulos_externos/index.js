const minimist = require("minimist")

const args = minimist(process.argv.slice(2))
console.log(args)

const nome = args["nome"]
const idade = args["idade"]
const curso = args["curso"]
console.log(nome, idade, curso)

console.log(`meu nome é ${nome} tenho ${idade} anos e estou cursando ${curso}`)

