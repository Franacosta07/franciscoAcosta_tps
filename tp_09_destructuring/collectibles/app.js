//MICRODESAFIO 1 DESTRUCTURING & SPREAD OPERATOR
const { Importar } = require('./coleccionables');

// Ejemplo de uso de la función importar
const hotToysFigures = Importar('Hot Toys');
console.log('Figuras de Hot Toys:', hotToysFigures);

const bandaiFigures = Importar('Bandai');
console.log('Figuras de Bandai:', bandaiFigures);

const starWarsFigures = Importar('Star Wars');
console.log('Figuras de Star Wars:', starWarsFigures);
