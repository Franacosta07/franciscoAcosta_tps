const fs = require('fs');
const path = require('path');

function Importar(marca) {
    const archivos = ['figuras1.json', 'figuras2.json', 'figuras3.json'];
    let figuras = [];
    archivos.forEach((archivo) => {
        const filePath = path.join('./datos', archivo);
        const contenido = fs.readFileSync(filePath, null, 'utf8');
        const figurasJSON = JSON.parse(contenido);
        // Filtramos las figuras según la marca solicitada
        figuras = figuras.concat(
            figurasJSON
                .filter(figura => figura.marca === marca)
                .map(({ marca, ...resto }) => resto)
        );
    });
    return figuras;
}
module.exports = { Importar }
