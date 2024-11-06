// nome
// criando texto pelo terminal ex: node ./indexedDB.js nome=emily
console.log(process.argv) //`process.argv` é um array que contém os argumentos passados para o script via linha de comando.


// exibindo apenas o argumento
// Aqui estamos pegando todos os argumentos passados na linha de comando, 
// mas ignorando os dois primeiros elementos (caminho do Node.js e do script).
// Então, estamos utilizando o método `slice(2)` para criar um novo array sem esses dois primeiros elementos.
const args = process.argv.slice(2)
console.log(args)


// `args[0]` irá pegar o primeiro argumento (que é 'nome=emily').
// Usamos o método `split('=')` para dividir a string no sinal de igual (=), 
// o que resultará em um array com dois elementos: ['nome', 'emily'].
// Pegamos o segundo elemento (`[1]`), que é o valor após o '=' (neste caso, 'emily').
const nome = args[0].split('=')[1]
console.log(nome)

const idade = args[1].split('=')[1]
console.log(idade)

// exibindo como string
console.log(`olá me chamo ${nome} e tenho ${idade} anos :)`)

