export { };

// Exemplo 01: Generic Classes

class Box<T> {
    private item: T;

    constructor(item: T) {
        this.item = item;
    }

    getItem() {
        return this.item;
    }

    setItem(item: T) {
        this.item = item;
    }
}

const boxString = new Box<string>('Neve Usagi');
const boxNumber = new Box<number>(2);

console.log(boxString.getItem()); // saída: Neve Usagi
console.log(boxNumber.getItem()); // saída: 2

// Exemplo 02 
class Estudante<T, U> {
    private id: T;
    private nome: U;

    setValor(id: T, nome: U): void { 
        this.id = id;
        this.nome = nome;
    }

    retornarValor(): void {
        console.log(`Identificação do Estudante: ${this.id}, Nome do Estudante: ${this.nome}`);
    }
}

const estudante = new Estudante<number, string>();
const estudanteSecundario = new Estudante<string, string>();

estudante.setValor(234, 'Vitória Lilian');
estudante.retornarValor();

estudanteSecundario.setValor('235', 'Jonas Alves');
estudanteSecundario.retornarValor();