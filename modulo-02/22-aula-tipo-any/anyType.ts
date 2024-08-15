// Exemplo 01: Tipo Any

const a: any = 27;
const b: any = ['Vitoria'];

const result = a + b;

console.log(result);


// Exemplo 02: Quando o tipo 'any' é inferido implicitamente

let frase;

frase = 'Oi, pessoal! Tudo bem?';

console.log(frase);


// Exemplo 03: Quando devemos usar o tipo any?!

const formulario: { [campoFormulario: string]: any} = {
    nome: 'Vitória',
    sobrenome: 'Lilian',
    idade: 27
};

console.log(formulario);
