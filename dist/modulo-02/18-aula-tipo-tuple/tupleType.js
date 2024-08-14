"use strict";
let pessoa;
pessoa = ['Vitória Lilian', 'FullStack Developer', 27];
console.log(pessoa);
let pessoa1;
pessoa1 = ['Vitória Lilian', 'FullStack Developer', 27];
console.log(pessoa1[1]);
let pessoa2 = ['Vitória Lilian', 'FullStack Developer', 27];
console.log(pessoa2);
let listaFrutas = ['Abacaxi', 'Laranja', 'Maçã', 'Melancia', 'Manga'];
console.log(...listaFrutas);
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Vitória', 'Geni'], [27, 45]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Vitória', 'Lilian', 'dos Santos'));
