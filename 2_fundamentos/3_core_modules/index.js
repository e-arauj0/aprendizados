// importando o core module path (neste caso esta respondendo qual a extensao do arquivo)

const path = require('path')

const extension = path.extname('arquivo.php')
// extname(nome da extensão)

console.log(extension)