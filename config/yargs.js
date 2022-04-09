

const argv = require('yargs')
.option('n', {
    alias: 'numero',
    type: 'number',
    demandOption: true,
    describe: 'indica el numero base de la operacion'
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'permite imprimir en consola la tabla'
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'indica el numero limite de la operacion'
})
.check((argv, options) =>{
    if( isNaN( argv.n ) ){
        throw 'el numero debe ser un numero XD'
    }
    return true;
})
.argv;


module.exports = argv;