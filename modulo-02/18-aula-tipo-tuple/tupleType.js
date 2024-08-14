// => Exemplo 01 - Uso simples de Tuplas em TyperScript
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var pessoa;
pessoa = ['Vitória Lilian', 'FullStack Developer', 27];
// pessoa = [27, 'Vitória Lilian', 'FullStack Developer']; - precisa colocar na ordem fixa dos dados primitivos na array
console.log(pessoa);
// => Exemplo 02 - Acessando o valor da Tupla
var pessoa1;
pessoa1 = ['Vitória Lilian', 'FullStack Developer', 27];
console.log(pessoa1[1]);
// => Exemplo 03 - Outra forma de usar Tuplas em TyperScript (com labels)
var pessoa2 = ['Vitória Lilian', 'FullStack Developer', 27];
console.log(pessoa2);
// => Exemplo 04 - Usando Tuplas com Spread Operator 
var listaFrutas = ['Abacaxi', 'Laranja', 'Maçã', 'Melancia', 'Manga'];
console.log.apply(console, listaFrutas);
// => Exemplo 05 - Lista Heterogênea de Tupla:
var listaFrutas2 = __spreadArray([5, true], listaFrutas, true);
console.log(listaFrutas2);
// => Exemplo 06 - Uso de função com Tuplas
function listarPessoas(nomes, idades) {
    return __spreadArray(__spreadArray([], nomes, true), idades, true);
}
var resultado = listarPessoas(['Vitória', 'Geni'], [27, 45]);
console.log(resultado);
function criarPessoa() {
    var nome = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nome[_i] = arguments[_i];
    }
    return __spreadArray([], nome, true);
}
console.log(criarPessoa('Vitória', 'Lilian', 'dos Santos'));
