const fs = require('fs');

// Leer el contenido del archivo bicicletas.json
fs.readFile('./bicicletas.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
        return;
    }
    
    const bicicletas = JSON.parse(data); // Convertir el contenido a un objeto JavaScript
    console.log('Lista de bicicletas en stock:');
    bicicletas.forEach(bicicleta => {
        console.log(`Marca: ${bicicleta.marca}`);
        console.log(`Modelo: ${bicicleta.modelo}`);
        console.log(`Rodado: ${bicicleta.rodado}`);
        console.log(`Año: ${bicicleta.ano}`);
        console.log(`Color: ${bicicleta.color}`);
        console.log(`Peso: ${bicicleta.peso_kg} kg`);
        console.log(`Tipo: ${bicicleta.tipo}`);
        console.log(`Precio: $${bicicleta.precio}`);
        console.log(`Vendida: ${bicicleta.vendida}`);
        console.log('--------------------------');
    });
});
