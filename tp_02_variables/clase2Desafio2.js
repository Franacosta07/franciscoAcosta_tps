/*En el archivo se desarrolla un código para calcular el nuevo sueldo a un trabajador, paraello debes declarar las siguientes variables y almacenar en ellas los siguientes datos deltrabajador: nombre , apellido, sueldoActual, porcentajeAumento3. Almacenar en una variable el “calculoAumento”. Esta contendrá el resultado de laoperación del aumento del trabajador (sueldoActual * porcentajeAumento)/ 100). 4. Enotra variable “nuevoSueldo”, almacena el resultado del cálculo del nuevo sueldo.4. Usando el console.log() y concatenando string, muestra en la consola de Visual StudioCode los contenidos de cada una de las variables:*/

let nombre = "Juan";
let apellido = "Pérez";
let sueldoActual = 100000;
let porcentajeAumento = 10;
let calculoAumento = (sueldoActual * porcentajeAumento) / 100
let nuevoSueldo = sueldoActual + calculoAumento;
let resultado = `Hola, estimad@ ${nombre} ${apellido}
En base a su sueldo actual:
$${sueldoActual}
Ha recibido un aumento del ${porcentajeAumento}%:
$${calculoAumento}
y su nuevo sueldo es de: $${nuevoSueldo}`
console.log(resultado);