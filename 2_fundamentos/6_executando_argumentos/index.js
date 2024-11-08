// EXTERNO
const minimist = require("minimist")

// interno

const soma = require('./soma').soma
const args = minimist(process.argv.slice(2))

// Extraindo os valores de 'a' e 'b' passados pela linha de comando e convertendo-os para inteiros
const a = parseInt(args['a'])  // 'a' é convertido de string para inteiro
const b = parseInt(args['b'])  // 'b' é convertido de string para inteiro

soma(a, b)

// execução no terminal (node index.js --a=5 --b=3)