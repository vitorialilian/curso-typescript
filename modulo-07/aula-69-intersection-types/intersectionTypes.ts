export = { };

// Exemplo - Intersection Types:

interface DadosBancarios {
    conta: number;
    agencia: number;
    banco: string;
}

interface Cliente {
    nome: string;
    email: string;
}

interface DadosPessoaFisica {
    cpf: number;
}

type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisica;

const dadosCliente: DadosCliente = {
    conta: 123456789,
    agencia: 123,
    banco: 'Banco Neve',
    nome: 'Vitória',
    email: 'vitoria@email.com',
    cpf: 123456789101,
}

console.log(dadosCliente);

