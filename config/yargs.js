const argv = require('yargs')
    .option( 'b', {
        alias: 'base',
        type: 'number',
        description: 'Base de la cual hacer la tabla de multiplicar',
        demandOption: true
    })
    .option( 'l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        description: 'Si se incluye, imprime en consola la tabla a generar'
    })
    .option( 'h', {
        alias: 'hasta',
        type: 'number',
        description: 'Hasta que numero quieres generar la tabla'
    })
    .check(( argv, options ) => {
        if( isNaN( argv.b ) ){
            throw('La base debe ser un numero');
        }
        return true;
    })
    .argv;

module.exports = argv;