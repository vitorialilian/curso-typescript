// => Exemplo 01 - Uso de Colchetes:

let frutas: string[] = ['Abacaxi', 'Laranja', 'Maçã', 'Melancia', 'Manga'];

console.log(frutas[4]);


// => Exemplo 02 - Array Object (Objeto Array):

let frutasAmarelas: Array<string> = ['Pêra', 'Banana', 'Maracujá', 'Melão', 'Manga'];

console.log(frutasAmarelas[2]);

// => Exemplo 03 - Adicionando mais strings com método 'push'

let idiomas: Array<string> = ['Português', 'Inglês', 'Espanhol', 'Francês', 'Japonês', 'Coreano', 'Italiano'];

console.log(idiomas);

idiomas.push('Mandarim');

console.log(idiomas);

idiomas.push('Havaiano');

console.log(idiomas);

// => Exemplo 04 - Identificar tamanho do array - método 'length'

let paises: Array<string> = ['Brasil', 'EUA', 'Espanha', 'França']

console.log(paises.length);


// => Exemplo 05 - Exemplo de Array com Spread Operator

let listaNumeros: Array<number> = [0, 1, 2, 3, 4, 5];
listaNumeros = [ ...listaNumeros, 6, 7, 8, 9, 10];

console.log(listaNumeros);


// => Exemplo 06 - Exemplo de Array com laço de iteração 

let linguagensArray:string[] = new Array('JavaScript', 'Python', 'Java', 'PHP', 'C#');

function funcaoLinguagens(linguagens:string[]) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);    
    }
}

funcaoLinguagens(linguagensArray);
