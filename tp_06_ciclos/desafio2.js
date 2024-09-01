// Función para generar y mostrar la tabla de multiplicar de un número específico
function mostrarTablaMultiplicar(numero) {
    console.log('Tabla de multiplicar');
    console.log('--------------------');
    
    for (let i = 1; i <= 10; i++) { // Bucle para los multiplicadores del 1 al 10
        let resultado = numero * i;
        console.log(`${numero} * ${i} = ${resultado}`);
    }
};

mostrarTablaMultiplicar(1); // Cambia 1 por el número que quieras mostrar
