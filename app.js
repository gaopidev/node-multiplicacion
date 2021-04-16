const { crearArchivo } = require('./helpers/multiplicar');
console.clear();

// Obtener argumentos de la consola
const [ ,,arg3='base=1' ] = process.argv;
const [ , base=1 ] = arg3.split('=');
console.log(arg3);
console.log(base);

crearArchivo( base )
    .then( nombreArchivo => console.log( nombreArchivo, 'creado' ) )
    .catch( err => console.log( err ) );