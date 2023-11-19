const { option } = require('yargs');
const {crearArchivo} = require('./herlpers/multiplicar');
const argv =require('./config/yargs');

console.log(process.argv);
console.log(argv);  

let base = 4;

 crearArchivo(argv.b,argv.h,argv.l)
  .then(resul=>console.log(resul))
  .catch(err=>console.log(err));
