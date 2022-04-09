// crear tabla de multiplicar del numero 5


const fs = require('fs');
const colors = require('colors');
const { argv } = require('process');



const operacion = async( numero, listar, hasta=10 ) =>{

    try{
        
        
        let salida = '';

        for(let i = 1; i <= hasta; i++ ){
            salida += `${numero} X ${i} = ${numero * i}\n`;
        }

        if(listar == true){

            console.log('===================='.rainbow.bold)
            console.log(`   Tabla del: ${numero}`.rainbow.bold)
            console.log('===================='.rainbow.bold)
            
            console.log(salida);
        
        }else{}

        
        fs.writeFileSync( `./salida/tabla-${numero}.txt`, salida, (err)=>{
        if(err) throw err;

        console.log(`Tabla-${numero}.txt creado`);
        } )

    }catch (err){
        throw err;
    }
    
}


module.exports = {
    operacion
}