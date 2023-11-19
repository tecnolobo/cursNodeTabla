const argv =require('yargs')
                .option('b',{
                  alias:'base',
                  type:'number',
                  description:'Es la base de la tabla de multiplicar',
                  demandOption:true
                })
                .option('h',{
                  alias:'hasta',
                  type:'number',
                  description:'Hasta que numero multiplica',
                  demandOption:true
                })
                .option('l',{
                  alias:'listar',
                  type:'boolean',
                  description:'Muestra la tabla de multiplicar',
                  default:false
                })
                .check((argv,option)=>{
                  if(isNaN(argv.base)){
                    throw 'la base debe ser numerico'
                  }
                  return true;
                }).argv;

module.exports = argv;