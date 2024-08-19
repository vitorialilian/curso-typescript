export { };

// Exemplo 01 
class Funcionario {
    readonly dataNascimento: Date;

    constructor(dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    };
}

const funcionario = new Funcionario(new Date(1996, 9, 30));  // os meses são contados a partir do zero, setembro seria 8

// funcionario.dataNascimento = new Date(1998, 1, 3); // erro propriedade readonly

// Exemplo 02 

class Funcionario_02 {

    constructor(readonly dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    }
} 

// Exemplo 03 

class Funcionario_03 {
    nome: string;
    readonly codigoFuncionario: number;

    constructor(nome: string, codigo: number) {
        this.codigoFuncionario = codigo;
        this.nome = nome
    }
}

const funcionario_03 = new Funcionario_03('Vitória', 346185);
funcionario_03.nome = 'Vitória Lilian';
// funcionario_03.codigoFuncionario = 336655 // readonly property

console.log(funcionario_03);

// Exemplo 04  - Interface

interface Ifuncionario {
    codigoFuncionario: number;
    nomeFuncionario: string;
}

const ifuncionario_01: Readonly<Ifuncionario> = {
    codigoFuncionario: 653214,
    nomeFuncionario: 'Neve',
}

// ifuncionario_01.codigoFuncionario = 521462; // readonly property

// ifuncionario_01.nomeFuncionario = 'Neve Usagi';

const ifuncionario_02: Ifuncionario = {
    codigoFuncionario: 223145,
    nomeFuncionario: 'Hikari',
};

ifuncionario_02.codigoFuncionario = 522364;

ifuncionario_02.nomeFuncionario = 'Hikari Atag';