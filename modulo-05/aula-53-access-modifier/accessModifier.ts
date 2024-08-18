export { };

// Exemplo 01 - Modificador public

class Escritor {
    nomeEscritor: string;
    obraPrincipal: string;
}

const escritor = new Escritor();

escritor.nomeEscritor = 'Hikari Atag';
escritor.obraPrincipal = 'Amassando Pãozinho';

console.log(escritor.nomeEscritor);
console.log(escritor.obraPrincipal);



// Exemplo 02 - Modificador private

class Atriz {
    nomeAtriz: string;
    principalFilme: string;
    private anosCarreira: number;

    constructor(nomeAtriz: string, principalFilme: string,anosCarreira: number) {
        this.nomeAtriz = nomeAtriz;
        this.principalFilme = principalFilme;
        this.anosCarreira = anosCarreira;
    }

    retornarDadosAtriz() {
        return `
        Nome Atriz ... : ${this.nomeAtriz},
        Principal Filme ... : ${this.principalFilme},
        Anos de Carreira ... : ${this.anosCarreira}`
    }
}

const atriz = new Atriz('Neve Usagi', 'Maneki Neko', 2);

// console.log(atriz.anosCarreira);
console.log(atriz.retornarDadosAtriz());


// Exemplo 03 - Modificador protected

class Musica {
    nomeMusica: string;
    interpretes: string;
    protected anoLancamento: number;

    constructor(nomeMusica: string, interpretes: string, anoLancamento: number) {
        this.nomeMusica = nomeMusica;
        this.interpretes = interpretes;
        this.anoLancamento = anoLancamento;
    }
}

class Gravadora extends Musica {
    private album: string;

    constructor(nomeMusica: string, interpretes: string, anoLancamento: number, album: string) {
        super(nomeMusica, interpretes, anoLancamento);
        this.album = album;
    }

    retornarDadosMusica() {
        return `
        Nome da Música: ${this.nomeMusica},
        Interpretes: ${this.interpretes},
        Ano Lançamento: ${this.anoLancamento},
        Album: ${this.album},
        `;
    }
}

const musica = new Gravadora('Pimento', 'Piguinho & Mike', 2024, 'Irmãos')

console.log(musica.retornarDadosMusica());
