const fs = require('fs');
const colores = require('colors');
const crearArchivo = (base,hasta,listar)=>{  
  const Promesa = new Promise((resolv,reject)=>{
    let consola ='';
    let salida ='';
    let archivo =`taba-${base}.txt`;
    let forlder ='./salida/'

    consola +='/******************************************/\n';
    consola +=`/***********Tabla del ${base}*******************/\n`.red;
    consola +='/******************************************/\n';      

    for (let index = 1; index <= hasta; index++) {
      consola +=`${colores.red(base)} X ${index} = ${colores.yellow(index*base)}\n`.blue;
      salida +=`${base} X ${index} = ${index*base}\n`;
    }
    //Los errores se atrapan en un try catch    
    archivo = forlder+archivo;
    fs.writeFileSync(archivo,salida);
    
    if (!listar){
      consola='';
    }
    consola = consola+`El archivo ${archivo} fue creardo`;
    resolv(consola);
  });
  return Promesa;  
};


//Asi se exportan modulos en node.js
module.exports={
  crearArchivo:crearArchivo
}


