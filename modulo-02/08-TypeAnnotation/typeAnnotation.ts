// => Variáveis [Type Annotations]

let nome: String = 'Vitória Lilian';

console.log(nome);

// => Arrays [Type Annotations]
let animais: String[] = ['Elefante', 'Cachorro', 'Gato', 'Panda', 'Girafa' ];
console.log(animais);

// => Objetos [Type Annotations]
let carro: {
    nome: String;
    ano: number;
    preco: number
}

carro = {
    nome: 'Fusca',
    ano: 2000,
    preco: 30000
}

console.log(carro);

// => Functions [type Annotation]

function subtrairNumeros (num1: number, num2: number) {
return num1 - num2;
}

console.log(subtrairNumeros(10, 6));


