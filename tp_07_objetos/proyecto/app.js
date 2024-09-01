// app.js

// Importar el módulo de películas
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
