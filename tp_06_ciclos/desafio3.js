// Función para mostrar los 10 números siguientes a un valor dado
function mostrarNumerosSiguientes(valor) {
    for (let i = 1; i <= 10; i++) {
        console.log(valor + i);
    }
}

// Llamada a la función con un valor ejemplo
mostrarNumerosSiguientes(5);


// Función para imprimir números entre 1 y 57, saltando de tres en tres
function imprimirSaltandoDeTres() {
    for (let i = 1; i <= 57; i += 3) {
        console.log(i);
    }
}

// Llamada a la función
imprimirSaltandoDeTres();

// Función para calcular la sumatoria de números entre 0 y 100
function sumarNumeros() {
    let suma = 0
    for (let i = 0; i <= 100; i++) {
        suma += i;
    }
    console.log("sumatoria de todos los numeros entre 0 y 100:", suma);
}
// Llamada a la función
sumarNumeros();

// Función para mostrar cada letra de una cadena en mayúsculas
function mostrarEnMayusculas(texto) {
    for (let i = 0; i < texto.length; i++) {
        console.log(texto[i].toUpperCase());

    }
}
mostrarEnMayusculas("espero que esto funcione")

// Función para filtrar números pares de un array
function filtrarPares(array) {
    return array.filter(num => num % 2 === 0);
}
const numeros = [1, 2, 7, 3, 4, 5, 14, 57, 7, 4, 3,234,542, 24, 97, 45];
const pares =  filtrarPares(numeros);
console.log(pares);

