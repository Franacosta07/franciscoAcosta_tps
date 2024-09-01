// app.js

// Importar el módulo de películas
const { isUtf8 } = require('buffer');
const peliculas = require('./peliculas');

// Mostrar el listado de películas
console.log('Listado de Películas Favoritas:');
peliculas.forEach(pelicula => {
    console.log(`ID: ${pelicula.id}`);
    console.log(`Rating: ${pelicula.rating}`);
    console.log(`Premios: ${pelicula.awards}`);
    console.log(`Duración: ${pelicula.length} minutos`);
    console.log(`Precio: $${pelicula.price}`);
    console.log(`Género: ${pelicula.genre}`);
    console.log('--------------------------');
});
//aca comienza desafio2
// app.js

const fs = require('fs'); // Importar el módulo 'fs' para manejar archivos
const path = './tp_07_objetos/proyecto/mensaje.txt'; // Ruta del archivo mensaje.txt

// Leer el contenido del archivo
fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    console.log(`Contenido del archivo: ${data}`);
});
