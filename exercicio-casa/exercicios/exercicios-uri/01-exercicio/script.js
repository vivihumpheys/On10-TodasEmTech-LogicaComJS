// [Exercício 01](https://www.urionlinejudge.com.br/judge/pt/problems/view/1038) 

const codigoProduto = Number(prompt('digite o codigo do produto 1-5'));
const quantidadeProduto = Number(prompt('quantas unidades do produto voce comprou?'));

function valorConta(a,b) {
    let valorFinal =  parseFloat(a*b);
    return alert(`Total: R$ ${valorFinal}`)
};

valorconta(codigoProduto, quantidadeProduto);