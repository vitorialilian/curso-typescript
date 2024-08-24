// Exemplo 01 - Generic Constraints

interface Pessoa {
    nome: string;
    idade: number;
}

function obterPessoaIdadeMaiorQue<T extends Pessoa>(pessoas: T[], idade: number): T[] {
    return pessoas.filter(pessoa => pessoa.idade > idade);
}

const pessoas: Pessoa[] = [
    { nome: 'Neve', idade: 2},
    { nome: 'Hikari', idade: 3},
    { nome: 'Pinguinho', idade: 4},
    { nome: 'Mike', idade: 7},
    { nome: 'Pimento', idade: 7},
];

const pessoasComIdadeMaiorQue4 = obterPessoaIdadeMaiorQue(pessoas, 4);

console.log(pessoasComIdadeMaiorQue4);

// Exemplo 02 - Generics Constraints

function juntarObjetos<U, V>(objeto1: U, objeto2: V) {
    return {
        ...objeto1,
        ...objeto2,
    }
}

const pessoa = juntarObjetos(
    { nome: 'Vitória', },
    { idade: 27, } 
);

console.log(pessoa);

const pessoa2 = juntarObjetos(
    { nome: 'Vitória', },
    27
);

console.log(pessoa2);

function juntarObjetos2<U extends object, V extends object>(objeto1: U, objeto2: V) {
    return {
        ...objeto1,
        ...objeto2,
    }
}

// const pessoa3 = juntarObjetos2(
//     { nome: 'Vitória', },
//     27
// );

const pessoa3 = juntarObjetos2(
    { nome: 'Vitória' },
    { idade: 27}
);

console.log(pessoa3);

// Exemplo 03 - Type parameter in generic constraints

// function prop<T, K>(objeto: T, chave: K) {
//     return objeto[chave];
// }

function prop2<T, K extends keyof T>(objeto: T, chave: K) {
    return objeto[chave];
}

const pessoa4 = prop2(
    { nome: 'Vitória' }, 'nome'
);

console.log(pessoa4);

// const pessoa5 = prop2(
//     { nome: 'Vitória' }, 'idade'
// );

// console.log(pessoa5);



