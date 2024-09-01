// Definición del array con productos de electrodomésticos
let productos = ['refrigerador', 'lavadora', 'microondas', 'licuadora', 'aspiradora', 'televisor'];
//acceder de manera arbitraria a distintos productos 

console.log(productos[0]); //refrigerador
console.log(productos[1]); //lavadora
console.log(productos[2]); //microondas

let primerElemento = productos.shift(); //extrae el primer elemento
productos.push(primerElemento); //asigna el primer elemento al final del array
console.log(productos);// muestra por consola el array modificado

productos.push("secadora", "cocina")//agrega 2 nuevos productos al final del array
console.log("cantidad de productos en el array" + " " + productos.length); //muestra la cantidad de productos en el array

let productoBuscado = 'microondas';
let existe = productos.includes(productoBuscado); //busca el producto dentro del array
if (existe) {
    console.log("Producto encontrado");
} else {
    console.log("El producto buscado no existe");
};

let texto = productos.join(" ");
console.log(texto); // muestra por consola el texto unificado

let cantidadElementos = texto.split(" ").length;
console.log(cantidadElementos); // muestra la cantidad de elementos en la cadena de texto


let textoModificado = texto.replace("microondas", "horno");
console.log("cadena de productos modificada:" + " " + textoModificado); // muestra por consola el texto modificado


let nuevoTextoConComas = textoModificado.split(" ").join(","); //genera un nuevo array con cada una de las palabras
let nuevoArray = textoModificado.split(" ")
console.log(nuevoArray); // muestra por consola el nuevo array
