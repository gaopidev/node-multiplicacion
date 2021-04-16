const fs = require('fs');

const crearArchivo = async( base=1) => {

    try {
        console.log("=====================");
        console.log(`    tabla del ${base}`);
        console.log("=====================");
        let salida = '';
        for( let i=1; i <= 10; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        console.log(salida);

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