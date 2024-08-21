export { };

// Exemplo 01 - Type Casting: 'as'

const nome: unknown = 'Vitória Lilian';

console.log((nome as string).toLowerCase());
console.log((nome as string).toUpperCase());

// Exemplo 02 - Type Casting: '<>'

const carro = 'Corolla';

const tamanhoString: number = (<string>carro).length;

console.log('O tamanho da string é:', tamanhoString);


