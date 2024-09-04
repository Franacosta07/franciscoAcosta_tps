const leerBicicletas = require('./datosBici');

const dhBici = {
    bicicletas: leerBicicletas(),

    buscarBici: function(id) {
        return this.bicicletas.find(bici => bici.id === id) || null;
    },

    venderBici: function(id) {
        const bici = this.buscarBici(id);
        if (bici) {
            bici.vendida = "si";
            return bici;
        } else {
            return "Bicicleta no encontrada";
        }
    },

    biciParaLaVenta: function() {
        return this.bicicletas.filter(bici => bici.vendida === "no");
    },

    totalDeVentas: function() {
        return this.bicicletas
            .filter(bici => bici.vendida === "si")
            .reduce((total, bici) => total + bici.precio, 0);
    }
};

// Comprobación de la funcionalidad
console.log(dhBici.buscarBici(2));
console.log(dhBici.venderBici(1));
console.log(dhBici.biciParaLaVenta());
console.log(dhBici.totalDeVentas());
