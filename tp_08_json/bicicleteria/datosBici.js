const fs = require('fs');

function leerBicicletas() {
    const data = fs.readFileSync('bicicletas.json', 'utf-8');
    return JSON.parse(data);
}

module.exports = leerBicicletas;