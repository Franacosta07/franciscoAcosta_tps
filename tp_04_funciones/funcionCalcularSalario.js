
function calcularSalarioDiario (salarioMensual, diasTrabajados, horasTrabajadas){
const totalHorasTrabajadas = diasTrabajados * horasTrabajadas;
const valorHora = salarioMensual /  totalHorasTrabajadas;
return valorHora;
};
console.log(calcularSalarioDiario(12500,20,9));