export { };

// Exemplo 01: Mapped Types

type Usuario = {
    nome: string;
    endereco: string;
    telefone: string;
    idade: number;
};

type UsuarioOpcional = {
    nome?: string;
    endereco?: string;
    telefone?: string;
    idade?: number;
}

type UsuarioSomenteLeitura = {
    readonly nome: string;
    readonly endereco: string;
    readonly telefone: string;
    readonly idade: number;
}

// { [P in K]: T }

type UsuarioMappedType = {
    [P in keyof Usuario]?: Usuario[P]; // for in
};

// 'nome' | 'endereco' | 'telefone' | 'idade'

const usuarioMapped: UsuarioMappedType = {
    nome: 'Vitória Lilian',
    endereco: 'Rua 01, 123',
};

console.log(usuarioMapped);

// Exemplo 02: Outros Tipos Avançados

interface Livro {
    titulo: string;
    autor: string | null;
    preco: number;
    numeroPaginas: number;
}

type Artigo = Omit<Livro, 'numeroPaginas'>;

type LivroModelo = Readonly<Livro>;

const livro: LivroModelo = {
    titulo: 'A Biblioteca da Meia-Noite',
    autor: 'Matt Haig',
    preco: 31.90,
    numeroPaginas: 363
};

// livro.autor = 'Lisa'; - erro pois é readonly