// => Exemplo 01 - Uso de Colchetes:
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var frutas = ['Abacaxi', 'Laranja', 'Maçã', 'Melancia', 'Manga'];
console.log(frutas[4]);
// => Exemplo 02 - Array Object (Objeto Array):
var frutasAmarelas = ['Pêra', 'Banana', 'Maracujá', 'Melão', 'Manga'];
console.log(frutasAmarelas[2]);
// => Exemplo 03 - Adicionando mais strings com método 'push'
var idiomas = ['Português', 'Inglês', 'Espanhol', 'Francês', 'Japonês', 'Coreano', 'Italiano'];
console.log(idiomas);
idiomas.push('Mandarim');
console.log(idiomas);
idiomas.push('Havaiano');
console.log(idiomas);
// => Exemplo 04 - Identificar tamanho do array - método 'length'
var paises = ['Brasil', 'EUA', 'Espanha', 'França'];
console.log(paises.length);
// => Exemplo 05 - Exemplo de Array com Spread Operator
var listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = __spreadArray(__spreadArray([], listaNumeros, true), [6, 7, 8, 9, 10], false);
console.log(listaNumeros);
// => Exemplo 06 - Exemplo de Array com laço de iteração 
var linguagensArray = new Array('JavaScript', 'Python', 'Java', 'PHP', 'C#');
function funcaoLinguagens(linguagens) {
    for (var i = 0; i < linguagens.length; i++) {
        console.log(linguagensArray[i]);
    }
}
funcaoLinguagens(linguagensArray);
