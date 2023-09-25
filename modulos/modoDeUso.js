let mensaje=function(){
return console.log(`
Bienvenidos a la calculadora del grupo 9.
-Para realizar una operacion ejecute el archivo app.js de la siguiente manera:
 ·En la terminal ingrese los comandos; node app.js [operacion] [valor1] [valor2]
 ·valor1 y valor2 puden ser los numeros que usted quiera.
-Las operaciones validas son: 
 ·suma
 ·resta
 ·multiplicacion
 ·division
 ·historial(opcional), en caso de querer vel el historial de operaciones`
 );
}
module.exports=mensaje;