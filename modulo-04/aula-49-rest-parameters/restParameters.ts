export { };

// Exemplo 01

function somarNumeros(...numeros: number[]) {
    let total = 0;
    numeros.forEach((numero) => (total += numero))

    return total;
}

console.log(somarNumeros(30, 50));
console.log(somarNumeros(70, 30, 50, 30, 20));

// Exemplo 02

function listarFrutas(frase: string, ...frutas: string[]) {
    return frase + ' ' + frutas.join(', ');
}

console.log(
    listarFrutas(
        'Vitória, você precisa comprar ...:', 'Coco',
        'Morango',
        'Banana',
        'Abacaxi' 
    ),
);

// Exemplo 03

class Produtos {
    public exibirProdutos(...produtos: string[]):void {
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}

const departamentoInformatica: Produtos = new Produtos();
console.log(
    'Todos os produtos do departamento de Informática disponíveis no estoque ...: ',
);

departamentoInformatica.exibirProdutos(
    'Mouse',
    'Notebook',
    'Cabo USB',
    'Monitor',
    'Teclado',
    'WebCam',
);
