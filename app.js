const { type } = require('os');
const { operacion } = require('./helpers/multiplicacion.js');
const argv = require('./config/yargs.js');

console.clear();

// console.log( process.argv );


// const [ , , arg3 = 'numero=5'] = process.argv;
// const [ , numero = 5 ] = arg3.split('=');


operacion( argv.n, argv.l, argv.h )
.then(console.log('archivo creado exitosamente'))
.catch(err => console.log(err));


