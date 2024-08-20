export { };

abstract class Funcionario {
    constructor(private nome: string, private sobrenome: string) { }

    abstract retornarSalario(): number; 
    get retornarNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }

    emitirContraCheque(): string {
        return `${this.retornarNomeCompleto} - Salário: ${this.retornarSalario()}`;
    }
}

class FuncionarioCLT extends Funcionario {
    constructor(nome: string, sobrenome: string, private salario: number) {
        super(nome, sobrenome);
    }

    retornarSalario(): number {
        return this.salario;
    }
}

class FuncionarioPJ extends Funcionario {
    constructor(nome: string, sobrenome: string, private valorHora: number, private horasTrabalhadas: number) {
        super(nome, sobrenome);
    }

    retornarSalario(): number {
        return this.valorHora * this.horasTrabalhadas;
    }
}

const vitoria = new FuncionarioCLT('Vitória', 'Lilian', 18000);
const jonas = new FuncionarioPJ('Jonas', 'Alves', 150, 160);

console.log(vitoria.emitirContraCheque());
console.log(jonas.emitirContraCheque());

// const funcionario = new Funcionario('Vitória', 'Lilian');