const fs = require('fs');

let base = 3;
let salida ='';

for (let index = 1; index <= 10; index++) {
  //  console.log(`${base}X${index}=${index*base}`);

  salida +=`${base} X ${index} = ${index*base}\n`;

}
/* error atrapado en callback
fs.writeFile(`taba-${base}.txt`,salida,(err)=>{
  if (err) throw err;
  console.log(`Tabla del ${base} Creado`);
});
*/
//Los errores se atrapan en un try catch
fs.writeFileSync(`taba-${base}.txt`,salida);

console.log(salida);
