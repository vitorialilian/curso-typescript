export { };

// Exemplo 01 - Type Assertion (as / <>)

function exibirPrecoFinal(preco: number, desconto: number, formato: boolean): number | string {
    const precoComDesconto = preco * (1 - desconto);

    return formato ? `R$ ${precoComDesconto}` : precoComDesconto;
}

//const descontoFinal = exibirPrecoFinal(635, 0.15, true) as string;
const descontoFinal = <number>exibirPrecoFinal(635, 0.15, false);

console.log(descontoFinal);

/* Exemplo 02 - Type Assertion

type Humano = {
    nome: string;
    idade: number;
    idioma: string;
};

const humano = {
    idade: 36,
    idioma: 'Português',
};

const humano_02 = humano as Humano;

console.log(humano_02.nome.toUpperCase()); */

type Humano = {
    nome: string;
    idade: number;
    idioma: string;
};

const humano = {
    idade: 36,
    idioma: 'Português'
};

// const humano_02: Humano = humano;

// console.log(humano_02.nome.toUpperCase());

