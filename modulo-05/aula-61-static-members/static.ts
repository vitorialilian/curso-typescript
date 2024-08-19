export { };

// Exemplo 01: Propriedades Estáticas

class Funcionario { 
    static contratacoes = 0;
    
    constructor(
        private nome: string,
        private sobrenome: string,
        private titulo: string,
    ) {
        // nome classe + nome propriedade

        Funcionario.contratacoes++;
    }
}

const funcionario_01 = new Funcionario('Vitória', 'Lilian', 'FrontEnd Developer');
const funcionario_02 = new Funcionario('Jonas', 'Alves', 'Java Developer');
const funcionario_03 = new Funcionario('Pinguinho', 'Pinguin', 'Design');

console.log(Funcionario.contratacoes);

// Exemplo 02 - Métodos Estáticas
class Sobremesa {
    private static sobremesasDisponiveis = 0;

    constructor(
        private nome: string,
        private quantidade: number,
        private preco: number,
    ) {
        // nome classe + nome propriedade
    Sobremesa.sobremesasDisponiveis++;
    }

    public static retornarCardapio() {
        return Sobremesa.sobremesasDisponiveis;
    }
}

const sobremesa_01 = new Sobremesa('Pudim', 2, 25);
const sobremesa_02 = new Sobremesa('Bolo', 5, 20);

// nome da Classe + nome do método
console.log(Sobremesa.retornarCardapio());

// Exemplo 03 - Propriedades Estáticas

type Raca = 'Spitz Alemão' | 'Buldogue' | 'Pug' | 'Yorkshire' | 'Poodle';

class Cachorro {
    public nome: string;
    public idade: number;
    public racas: Raca[];
    public static quantidadeCachorros = 0;

    constructor(nome: string, idade: number, racas: Raca[]) {
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;

        Cachorro.quantidadeCachorros++;
        console.log(Cachorro.quantidadeCachorros);
    }

    public exibirInformacao(): void {
        console.log(`O Cachorro: ${this.nome} tem ${this.idade}.`);
        
    }
}

const cachorro_01 = new Cachorro('Baleia', 12, ['Buldogue']);
const cachorro_02 = new Cachorro('Toto', 3, ['Poodle']);

