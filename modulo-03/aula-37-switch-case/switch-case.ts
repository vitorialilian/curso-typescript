/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */

export { }

// Exemplo 01 - Uso do switch ... case

let flor = 'Girassol';

switch (flor) {
    case 'Tulipa':
        console.log('Tulipas são brancas.');
        break;

    case 'Girassol':
        console.log('Girassois são amarelos.');
        break

    case 'Violeta':
        console.log('Violetas são violetas.');
        break

    default:
        console.log('Por favor, selecione uma outra flor!');
        break;
}

// Exemplo 02 - Uso do switch ... case

function printWeekDay(day: number): string {
    switch (day) {
        case 0:
            return 'Domingo';
        case 1:
            return 'Segunda';
        case 2:
            return 'Terça';
        case 3:
            return 'Quarta';
        case 4:
            return 'Quinta';
        case 5:
            return 'Sexta';
        case 6:
            return 'Sábado';
        default:
            return 'Não é um dia válido.';
    }
}

console.log(printWeekDay(0));

