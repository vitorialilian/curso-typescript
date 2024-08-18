/* eslint-disable prefer-const */

export { };

// Exemplo 01 - Optional Parameter

function informarDadosPessoa(idPessoa: number, nome: string, email?: string) {
    console.log('Id Funcionário ... : ', idPessoa, 'Nome ... : ', nome);
    
    if(email != undefined) console.log('Email ... :  ', email);
}

informarDadosPessoa(213658, 'Vitória Lilian');
informarDadosPessoa(963147, 'Jonas Alves', 'ja@example.com');

// Exemplo 02

function mensagemLog(mensagem: string, usuarioId?: number) {
    const horaLog = new Date().toLocaleTimeString();

    console.log(horaLog, mensagem, usuarioId || 'Usuário(a) não conectado(a)');
}

mensagemLog('Atualizar Página');
mensagemLog('Usuário(a) logado(a) com sucesso', 225566);

// Exemplo 03

type Pessoa = {
    idFuncionario: number;
    nome: string;
    idade?: number;
    email?: string;
};

let pessoa: Pessoa;

pessoa = {
    idFuncionario: 664455,
    nome: 'Vitória Lilian'
};

console.log(pessoa);
