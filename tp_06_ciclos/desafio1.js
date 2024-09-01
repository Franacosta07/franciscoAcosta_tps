
let operaciones = [
    { tipo: "deposito", monto: 10000 },
    { tipo: "retiro", monto: 500 },
    { tipo: "deposito", monto: 2000 },
    { tipo: "retiro", monto: 2500 },
    { tipo: "deposito", monto: 1500 },
];

// Función para calcular el saldo de depósitos, retiros y el saldo actual
function calcularSaldo(operaciones) {
    let saldoDepositos = 0;
    let saldoRetiros = 0;

    operaciones.forEach((operacion) => {
        if (operacion.tipo === "deposito") {
            saldoDepositos += operacion.monto; // Suma los depósitos
        } else if (operacion.tipo === "retiro") {
            saldoRetiros += operacion.monto; // Suma los retiros
        }
    });

    let saldoActual = saldoDepositos - saldoRetiros; // Calcula el saldo actual
    return { saldoDepositos, saldoRetiros, saldoActual };
};

// Ejecutar la función y mostrar los resultados
const resultados = calcularSaldo(operaciones);
console.log("Saldo de Depósitos:", resultados.saldoDepositos);
console.log("Saldo de Retiros:", resultados.saldoRetiros);
console.log("Saldo Actual:", resultados.saldoActual);

// Crear otra función que reciba como parámetros el nombre y el apellido del cliente asícomo el array que contiene las operaciones bancarias. Esta función tendrá laresponsabilidad de retornar el nombre y apellido del cliente y el saldo total dedepósitos, el saldo actual de retiros y el saldo actual
function obtenerResumenCliente(nombre, apellido, operaciones) {
    // Obtener los saldos calculados
    const { saldoDepositos, saldoRetiros, saldoActual } = calcularSaldo(operaciones)
    return {
        nombreCompleto: `${nombre}  ${apellido}`, saldoDepositos, saldoRetiros, saldoActual
    };
}
// Invocar la función con diferentes valores
const resumen1 = obtenerResumenCliente('Gloria', 'Medina', operaciones);
console.log(`Estimada ${resumen1.nombreCompleto}:`);
console.log(`El monto total de los depósitos es de: $${resumen1.saldoDepositos}.`);
console.log(`El monto total de los retiros es de: $${resumen1.saldoRetiros}.`);
console.log(`Por lo tanto, su saldo actual en la cuenta es de: $${resumen1.saldoActual}.`);

// Otro ejemplo de llamada a la función con diferentes datos
const resumen2 = obtenerResumenCliente('Juan', 'Pérez', operaciones);
console.log(`\nEstimado ${resumen2.nombreCompleto}:`);
console.log(`El monto total de los depósitos es de: $${resumen2.saldoDepositos}.`);
console.log(`El monto total de los retiros es de: $${resumen2.saldoRetiros}.`);
console.log(`Por lo tanto, su saldo actual en la cuenta es de: $${resumen2.saldoActual}.`);
