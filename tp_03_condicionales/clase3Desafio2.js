let pagoMes = 15433;
let consumoKWH = 394;
let aumento = pagoMes * 0.2;

let pagoFinal = aumento + pagoMes;

let mensajeAumento = `Debido a que su hogar tuvo un consumo de ${consumoKWH}kwh, enbase al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $${pagoFinal}`

let mensajeSubsidio = `Debido a que su hogar tuvo un consumo de ${consumoKWH}kwh, esta dentro de la lista de hogares alcanzador por el subsidio por tanto no tendra aumento y su total a pagar será de ${pagoMes}`

let calculoAumento = consumoKWH > 300 ? mensajeAumento : mensajeSubsidio;
console.log(calculoAumento);
