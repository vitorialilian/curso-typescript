export { };

// Exemplo 01: Get

class Retangulo {
    private _largura = 6;
    private _altura = 12;

    get calcularAreaRetangulo() {
        return this._altura * this._largura;
    }
}

console.log(new Retangulo().calcularAreaRetangulo);

// Exemplo 02: Set

class Pessoa {
    nome: string;

    retornarNomePessoa(setNomePessoa: string) {
        this.nome = setNomePessoa;
    }
}

const pessoa = new Pessoa();
pessoa.retornarNomePessoa('Pinguinho');
console.log('Meu nome é ... :', pessoa.nome);

// Exemplo 03: Get [explicação mais densa]

class Estudante {
    private _nome = 'Mike';
    private _semestre: number;
    private _curso: string;

    public get nomeEstudante() {
        return this._nome;
    }
}

const estudante = new Estudante();
const resultado = estudante.nomeEstudante;
console.log(resultado);

// Exemplo 04: Set/Get [explicação mais densa

class Aluno {
    nome: string;
    semestre: number;
    curso: string;

    constructor(nomeAluno: string, semestreAluno: number, cursoAluno: string) {
        this.nome = nomeAluno;
        this.semestre = semestreAluno;
        this.curso = cursoAluno;
    }

    public get cursos() {
        return this.curso;
    }

}

const aluno_01 = new Aluno('Neve', 2, 'ADS');
console.log(aluno_01);

// Setter call
aluno_01.curso = 'Design Gráfico';

// Getter call
console.log('Curso atualizado ... :', aluno_01.cursos);

