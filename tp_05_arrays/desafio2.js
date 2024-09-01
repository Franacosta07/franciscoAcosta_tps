// Crear una estructura para almacenar un conjunto de películas
let peliculas = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick", "Elvis", "Thor: amor y trueno"];

// Asignar la película más vista utilizando corchetes []
let peliculaMasVista = peliculas[6]; // Accede al séptimo elemento

// Función para convertir una cadena a mayúsculas
function convertirAMayuscula(pelicula) {
    return pelicula.toUpperCase();
}

// Llamada a la función y obtención de la película en mayúsculas
let peliculaMayuscula = convertirAMayuscula(peliculaMasVista);

// Mover la película en mayúsculas al principio del array
peliculas.splice(6, 1); // Elimina 'Thor: amor y trueno' de su posición original
peliculas.unshift(peliculaMayuscula); // Agrega 'THOR: AMOR Y TRUENO' al principio del array

// Mostrar el array modificado
console.log(peliculas);

const proximosEstrenos= ["Counter-Strike", "NOP", "Vértigo", "Nick", "Avatar"];
//teniendo encuenta que cada elemento debe estar separado por una coma
const proximosEstrenosString = proximosEstrenos.join(', ');
console.log(proximosEstrenosString);

proximosEstrenos.splice(proximosEstrenos.indexOf("Counter-Strike"),1); // Elimina 'Counter-Strike' de la estructura
console.log(proximosEstrenos);

//Finalmente, el Tech Leader te solicita crear una función que reciba por parámetroambas estructuras creadas y debe devolver un nueva nueva estructura con todas laspelículas, para ello te recomendamos que investigues lo que hace el método.concat()
function concatenarPeliculas(peliculas, proximosEstrenos) {
    return peliculas.concat(proximosEstrenos);
    };
    // Llamada a la función y obtención de la estructura concatenada
    console.log(concatenarPeliculas(peliculas, proximosEstrenos));