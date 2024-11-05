function soma(a, b) {
    console.log(a + b);
};

function menos(a, b) {
    console.log(a - b);
}

export default soma;   // exportação padrão de soma
export { menos };      // exportação nomeada de menos

// (observação: para realizar o uso deste código a importação no arquivo index deve estar escrita assim "import soma, { menos } from './MeuMod.mjs';" pois soma foi exportada como default e não como uma exportação nomeada, então você não pode importá-la usando a sintaxe de importação nomeada.)


// codigo gerado pelo chatgpt

// function soma(a, b) {
//     console.log(a + b);
// }

// function menos(a, b) {
//     console.log(a - b);
// }

// export { soma, menos }; // Exporta as funções soma e menos de forma nomeada