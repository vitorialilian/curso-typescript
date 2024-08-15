// Exemplo 01: Never - Throw Exception

function error(message: string): never {
    throw new Error(message);
}

console.log(error('Erro de Mensagem - 01'));

// Exemplo 02: Never inferido automaticamente

function rejectMessage() {
    return error('Erro de Mensagem - 02');
}

console.log(rejectMessage());

// Exemplo 03: Função que contém loop infinito retorna o tipo 'never'
// Não executar ou ir travar o vscode
 
/**const loopInfinito = function loop() {
    //eslint-disable-next-line no-constant-condition
    while (true) { 
        console.log('Oi, Developers!');
    }
}**/

//console.log(loopInfinito());


// Exemplo 04: Diferença entre os tipos: 'never' x 'void'
// não executar ou ira travar o vscode

//const algumaCoisaVoid: void = null;

//const algumaCoisaNever: never = null;

//console.log(algumaCoisaVoid);

//console.log(algumaCoisaNever);



