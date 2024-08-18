export { };

// Exemplo 01 - Default Parameters

function descontoCompra(preco: number, desconto = 0.08) {
    return preco * (1 - desconto);
}

console.log(descontoCompra(100)); //92

// Exemplo 02 

function exibirMensagem(mensagem: string, saudar = 'Fala, pessoal!') {
    return saudar + ' ' + mensagem + '!';
}

console.log(exibirMensagem('JavaScript Developers'));

// Exemplo 03

function exibirNome(nome: string, sobrenome =  'Lilian') {
    return nome + ' ' + sobrenome;
}

const resultado_01 = exibirNome('Vitória');
const resultado_02 = exibirNome('Vitória', undefined);
// const resultado_03 = exibirNome('Vitória', ' dos Santos', 'Araújo');
const resultado_04 = exibirNome('Vitória', 'dos Santos Araújo');

console.log(resultado_01);
console.log(resultado_02);
//console.log(resultado_03);
console.log(resultado_04);
