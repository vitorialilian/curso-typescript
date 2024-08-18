export { };

// Exemplo 01 Classes

class Pessoa {
    nome: string;
    sobrenome: string;

    constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`
    }
}

const pessoa = new Pessoa('Vitória', 'Lilian');

console.log(pessoa.nomeCompleto());

// Exemplo 02 - Classes (sem constructor)

class Estudante {
    codigoEstudante: number;
    nomeEstudante: string;
}

// criar um objeto ou a instancia

const estudante = new Estudante();

// inicializar o objeto:

estudante.codigoEstudante = 3492;
estudante.nomeEstudante = 'Neve Usagi';

// acessar os campos

console.log('Código do Estudante ...: ' + estudante.codigoEstudante);
console.log('Nome do Estudante ...: ' + estudante.nomeEstudante);

// Exemplo 03 - Classes (com constructor)

class Funcionario {
    codigoFuncionario: number;
    nomeFuncionario: string;

    // definir o construtor
    constructor(codigoFuncionario: number, nomeFuncionario: string) {
        this.codigoFuncionario = codigoFuncionario;
        this.nomeFuncionario =  nomeFuncionario;
    }

    // criar método

    listarFuncionarios():string {
        return `Código do Estudante ... : ${this.codigoFuncionario}, Nome do Estudante ... : ${this.nomeFuncionario}`;
    }
}

// acessar os campos

const funcionario = new Funcionario(3697, 'Hikari');

console.log(funcionario.listarFuncionarios());

