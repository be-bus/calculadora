const {lectura,escritura}=require('./modulos/readWrite');
const suma=require('./modulos/suma');
const resta=require('./modulos/resta');
const multiplicacion=require('./modulos/multiplicacion');
const division=require('./modulos/division');
const {eleccion,tipoDeOperacion}= require('./modulos/eleccion');
const mensaje=require('./modulos/modoDeUso')

const historial=lectura(); //leo el contenido del jason ya parseado
let elegido=process.argv[2];
let elegidoV2=tipoDeOperacion(elegido);

if (elegidoV2!=null && elegidoV2.toLowerCase()!='historial'){
        const registro={
            operacion: elegido,
            resultado: eleccion(elegido,+process.argv[3],+process.argv[4]),
            operando1:+process.argv[3], //aguegue que se guarden los elementos que se operan
            operando2:+process.argv[4]
        };
    historial.push(registro) // cargo el registro al array 
    console.log(registro);// mustra el registro
    escritura(historial) // escribo en el json
}else if(elegidoV2=='historial'){
     historial.forEach(element=>console.log(element))
    }else console.log('Operacion invalida');
mensaje();//reparar el bug en caso de ejecutar app.js sin parametros argv[2] y argv[3] estan vacios.

