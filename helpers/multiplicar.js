const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base=1, listar=false, hasta=10 ) => {

    try {
        let salida = '';
        let consola = '';
        for( let i=1; i <= hasta; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.blue} ${i} ${'='.blue} ${base*i}\n`;
        }
        if( listar ){
            console.log("=====================".green);
            console.log(`    tabla del ${base}`);
            console.log("=====================".green);
            console.log(consola);
        }

        //console.log(salida);

        fs.writeFileSync( `files/tabla_${base}.txt`, salida );
        return `tabla_${base}.txt`;
    }
    catch ( err ) {
        throw err;
    }
};

module.exports = {
    crearArchivo
}