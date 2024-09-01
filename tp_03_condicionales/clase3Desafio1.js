/*Si se le asigna un espacio en blanco a la variable perfil, debe mostrar elmensaje: “Debe especificar el perfil del usuario”.● Si es un perfil “administrador - ADMINISTRADOR - Administrador”, laconsola debe mostrar este mensaje: “Usted tiene todos los privilegios deuso del sistema”.● Si es un perfil “asistente - ASISTENTE - Asistente”, la consola debe mostrareste mensaje: “Usted sólo tiene permisos de registrar, modificar yconsultar datos”.● Si es un perfil “invitado - INVITADO - Invitado”, la consola debe mostrar estemensaje: “Usted sólo tiene permisos de consultar datos”.● Si se especifica un valor diferente a la variable perfil entonces se debe mostrareste mensaje: “Debe especificar un perfil válido”*/

let perfil = "administrador";
let perfilesMinuscula = perfil.toLocaleLowerCase();
if (perfilesMinuscula == "administrador") {
    console.log("Usted tiene todos los privilegios deuso del sistema")
} else if (perfilesMinuscula == "asistente") {
    console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
}
else if (perfilesMinuscula == "invitado") {
    console.log("Usted sólo tiene permisos de consultar datos");
} else {
    console.log("Debe especificar un perfil válido");
};
