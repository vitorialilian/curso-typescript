"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa = {
    nome: 'Vitória',
    sobrenome: 'Santos',
    idade: 27,
    funcao: 'Fullstack Developer'
};
console.log(pessoa);
function onboarding01(funcionario) {
    return 'Seja bem-vinda ' + funcionario.nome;
}
console.log(onboarding01({ nome: 'Vitória Lilian' }));
function onboarding02(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.');
}
console.log(onboarding02({ nome: 'Vitória Lilian', funcao: 'Frontend Developer' }));
function onboarding03(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding03({ nome: 'Vitória Lilian', funcao: 'Frontend Developer', linguagem: 'TypeScript/JavaScript' }));
function onboarding04(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.');
}
console.log(onboarding04({ nome: 'Vitória Lilian', funcao: 'Frontend Developer', linguagem: 'TypeScript/JavaScript' }));
function onboarding05(pessoa) {
    return ('Seja bem-vinda ' +
        pessoa.nome +
        '!' +
        ' Sua função aqui na empresa será ' +
        pessoa.funcao +
        '.' +
        ' Você trabalhará com a linguagem ' +
        pessoa.linguagem +
        '.' +
        ' Seu e-mail será ' +
        pessoa.email);
}
console.log(onboarding05({ nome: 'Vitória Lilian', funcao: 'Frontend Developer', linguagem: 'TypeScript/JavaScript', email: 'vitorialilian@microsoft.com' }));
const filha = {
    nome: 'Vitória',
    sobrenome: 'Lilian',
    idade: 27
};
console.log(filha);
const usuario = {
    nome: 'Vitória Lilian',
    email: 'vl@gmail.com'
};
const admin = {
    nome: 'Vitória Lilian',
    email: 'vl@gmail.com',
    admin: true
};
function acessarSistema(usuario) {
    return usuario;
}
console.log(acessarSistema(usuario));
console.log(acessarSistema(admin));
