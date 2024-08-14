"use strict";
let frutas = ['Abacaxi', 'Laranja', 'Maçã', 'Melancia', 'Manga'];
console.log(frutas[4]);
let frutasAmarelas = ['Pêra', 'Banana', 'Maracujá', 'Melão', 'Manga'];
console.log(frutasAmarelas[2]);
let idiomas = ['Português', 'Inglês', 'Espanhol', 'Francês', 'Japonês', 'Coreano', 'Italiano'];
console.log(idiomas);
idiomas.push('Mandarim');
console.log(idiomas);
idiomas.push('Havaiano');
console.log(idiomas);
let paises = ['Brasil', 'EUA', 'Espanha', 'França'];
console.log(paises.length);
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
let linguagensArray = new Array('JavaScript', 'Python', 'Java', 'PHP', 'C#');
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLinguagens(linguagensArray);
