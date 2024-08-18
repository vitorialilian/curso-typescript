export { };

// => Exemplo 01 - Uso simples de Tuplas em TyperScript

let pessoa: [string, string, number];

pessoa = ['Vitória Lilian', 'FullStack Developer', 27];
// pessoa = [27, 'Vitória Lilian', 'FullStack Developer']; - precisa colocar na ordem fixa dos dados primitivos na array

console.log(pessoa);


// => Exemplo 02 - Acessando o valor da Tupla

let pessoa1: [string, string, number];

pessoa1 = ['Vitória Lilian', 'FullStack Developer', 27];

console.log(pessoa1[1]);


// => Exemplo 03 - Outra forma de usar Tuplas em TyperScript (com labels)

let pessoa2: [nome: string, posicao: string, idade: number] = ['Vitória Lilian', 'FullStack Developer', 27];

console.log(pessoa2);


// => Exemplo 04 - Usando Tuplas com Spread Operator 

let listaFrutas: [string, ...string[]] = ['Abacaxi', 'Laranja', 'Maçã', 'Melancia', 'Manga'];

console.log(...listaFrutas);

// => Exemplo 05 - Lista Heterogênea de Tupla:

let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];  

console.log(listaFrutas2);

// => Exemplo 06 - Uso de função com Tuplas

function listarPessoas(nomes:string[], idades: number[]) {
    return [...nomes, ...idades]
}

let resultado = listarPessoas(['Vitória', 'Geni'], [27, 45])

console.log(resultado);

// => Exemplo 07 - Labeled Tuples com Spread Operator numa função 

type Nome = 
| [primeiroNome: string, sobrenome: string]
| [primeiroNome: string, nomeMeio: string, sobrenome: string]

function criarPessoa( ...nome: Nome) {
    return [ ...nome];
}

console.log(criarPessoa('Vitória', 'Lilian', 'dos Santos'));

