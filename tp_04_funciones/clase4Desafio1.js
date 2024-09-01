let tipoVehiculo = "compacto";
let diasAlquiler = 20;
let sillaParaBebe = "fals"; //cambiar a false si no necesita
let costoSilla = 1200
function calcularAlquiler(tipoVehiculo, diasAlquiler, sillaParaBebe) {
    let costoPorDia;
    switch (tipoVehiculo.toLowerCase()) {
        case "compacto":
            costoPorDia = 14000;
            break;
        case "mediano":
            costoPorDia = 17000;
            break;
        case "camioneta":
            costoPorDia = 28000;
            break;
        default:
            return "elija un tipo de vehiculo de la nómina";
    }
    let costoTotal = costoPorDia * diasAlquiler;
    if (sillaParaBebe) {
        costoTotal += costoSilla * diasAlquiler; // Suma el costo de la silla por cada día
    }

    let mensaje;

    switch (sillaParaBebe) {
        case true:
            mensaje = `Estimado cliente: en base al tipo de vehiculo ${tipoVehiculo} alquilado, considerando los ${diasAlquiler} dias de alquier, el monto total a pagar es de $${costoTotal}. Se incluyó una silla para bebé, con un costo adicional de ${costoSilla} por cada dia.`;
            break;
        case false:
            mensaje = `Estimado cliente: en base al tipo de vehiculo ${tipoVehiculo} alquilado, considerando los ${diasAlquiler} días utilizados, el monto total a pagar es de $${costoTotal}.`;
            break;
            default: 
            mensaje = "ERROR en la carga de datos,  por favor verificar los datos ingresados.";

    }

    return mensaje;
}
console.log(calcularAlquiler(tipoVehiculo, diasAlquiler, sillaParaBebe));