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

