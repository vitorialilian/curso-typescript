"use strict";
function error(message) {
    throw new Error(message);
}
console.log(error('Erro de Mensagem - 01'));
function rejectMessage() {
    return error('Erro de Mensagem - 02');
}
console.log(rejectMessage());
