exports = { };

// Exemplo 01 - Interfaces com extends

interface Animal {
    nome: string;
    idade: number;
    porte: string;
}

interface Cachorro extends Animal {
    raca: string;
};

const cachorro: Cachorro = {
    nome: 'Jack',
    idade: 3,
    porte: 'Pequeno',
    raca: 'Chiwawa',
};

console.log(cachorro);

// Exemplo 02 - Extensão de Múltiplas Interfaces

interface Galinha {
    nome: string;
}

interface Gato {
    nome: string;
}

interface Ovelha {
    nome: string;
}

interface AnimaisDomesticos extends Galinha, Gato, Ovelha {
    idade: number;
};

const animaldomestico: AnimaisDomesticos = {
    nome: 'Mel',
    idade: 3,
}

console.log(animaldomestico);

// Exemplo 03 - Uso do Omit


// Exemplo sem o Omit 
// interface Profissional {
//     id: number | string;
//     nome: string;
//     salario: number | string;
// }

// interface Desenvolvedor extends Profissional {
//     id: string;
//     salario: string;
//     funcao: string;
// }

interface Profissional {
    id: number;
    nome: string;
    salario: number;
}

interface Desenvolvedor extends Omit<Profissional, 'id' | 'salario'> {
    id: string;
    salario: string;
    funcao: string;
}

const desenvolvedor: Desenvolvedor = {
    id: 'dev-001',
    nome: 'Hikari Atag',
    salario: '10.000',
    funcao: 'desenvolver',
}

console.log(desenvolvedor);

