export { };

// Exemplo 01: Interface Simples

interface Pessoa { 
    nome: string;
    sobrenome: string;
    idade: number;
}

function exibirNome(pessoa: Pessoa) {
    return `
    Nome: ${pessoa.nome}
    Sobrenome: ${pessoa.sobrenome}
    Idade: ${pessoa.idade}
    `;
}

const vitoria = {
    nome: 'Vitória',
    sobrenome: 'Lilian',
    idade: 27,
}

console.log(exibirNome(vitoria));

// Exemplo 02: Interface com propriedades opcionais

interface Livro {
    titulo: string;
    autor: string;
    paginas?: number; // propriedade opcional
}

const livro: Livro = {
    titulo: 'Poesia Fria',
    autor: 'Neve Usagi',
};

console.log(livro);

// Exemplo 03: Interface com propriedades de soemnte leitura e opcionais

interface Carro {
    readonly modelo: string;
    ano: number;
    valor?: number;
}

const carro: Carro = {
    modelo: 'Fusca',
    ano: 1969,
}

// carro.modelo = 'Fusca 2.0'; - propriedade readonly

console.log(carro);

// Exemplo 04: Interface com implements Class

interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;
}

class Gato implements IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    constructor(nome: string, idade: number, estaVivo: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }

    comer(tipoComida: string) {
        console.log(`O gato ${this.nome} está comendo ${tipoComida}`);
    }
};

const gato = new Gato('Mimi', 5, true);
console.log(gato);
gato.comer('Ração');


// Exemplo 05: Interfaces vs Alias Type  Type 

interface Pessoa_02 {
    nome: string;
    sobrenome: string;
    idade: number;
}

type Pessoa_03 = {
    nome: string;
    sobrenome: string;
    idade: number;
}