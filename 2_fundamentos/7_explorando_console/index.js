// outros comandos do console

// Definindo mais de uma variável
const x =  10;       // Uma variável numérica
const y = 'emily';   // Uma variável string
const z = [1, 2];    // Uma variável que é um array com dois números

console.log(x, y, z) // Exibe os valores das variáveis 'x', 'y' e 'z' no console

// contagem de impressões (execução)
console.count(`o valor de x é: ${x}, contagem`)
console.count(`o valor de x é: ${x}, contagem`)
console.count(`o valor de x é: ${x}, contagem`)
console.count(`o valor de x é: ${x}, contagem`)

// variável entre string
console.log('o nome dela é %s, e ele é programador', y) //%s: Usado como um marcador de substituição em uma string. Ele será substituído pelo valor da variável que é passada como argumento depois da string.

// limpando o console
setTimeout(() => {
    console.clear() // Limpa o console após 2 segundos
}, 2000)

// console.log(): Usado para imprimir variáveis e valores no console.
// console.count(): Conta quantas vezes um determinado rótulo foi exibido no console.
// %s: Substitui uma parte da string com o valor de uma variável.
// console.clear(): Limpa o console depois de um determinado tempo (2 segundos, no exemplo).