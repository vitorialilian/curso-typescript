export { };

// Exemplo 01 - Functions (Named Function)

function somarNumeros(num1: number, num2: number): number {
    return num1 + num2;
}

const resultado = somarNumeros(952, 32);

console.log(resultado);


// Exemplo 02 - Função Anônima (Function Expression)

const saudar = function (mensagem: string) {
    return mensagem;
}

console.log(saudar('Olá, Developers!'));


// Exemplo 03 - (Arrow Function Expression)

const saudar_03 = (mensagem: string) => {
    return mensagem;
};

console.log(saudar_03('Fala, Pessoal!'));


// Exemplo 04 - (Function constructor)

const saudar_04 = new Function('mensagem', 'return "Fala " + mensagem');

console.log(saudar_04('Galera!'));
