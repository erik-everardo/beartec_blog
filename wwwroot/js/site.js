//variables de estado de pantallas
var estaAbiertoEditor = false;
var estaAbiertoMisArticulos = false;
var estaAbiertoPerfil = false;
var estaAbiertoAjustes = false;
var estaAbiertoGaleria = false;

//referencias a las 5 pantallas
var capa_editor_DOM = document.getElementById("capa_editor");
var capa_mis_articulos_DOM = document.getElementById("capa_mis_articulos");
var capa_ajustes_DOM = document.getElementById("capa_ajustes");
var capa_perfil = document.getElementById("capa_perfil");
var capa_galeria = document.getElementById("capa-galeria");

//referencia a barra principal
var barra = document.getElementById("barra-navegacion-dash");

//variable que guarda contraseña al intentar guardar cambios de info de perfil
var campoContraPerfilInfo = document.getElementById("pass_confirmacion_perfil_info");

//referencia al aviso que dice contraseña incorrecta al intentar modificar info
var alertaContraIncorrecta = document.getElementById("alerta_contra_incorrecta_perfil_info");

//variables de pantalla "editor"
//el input en pestaña publicar que permite cambiar el titulo antes de publicar
var encabezado_en_publicar = document.getElementById("encabezado");

//el encabezado del articulo siendo editado
var encabezado_DOM = document.getElementById("titulo_text");

//textarea del cuerpo del titulo
var cuerpo_textarea = document.getElementById("cuerpo_articulo");

//estas dos se usan en formulario de publicacion
var campo_oculto_cuerpo_DOM = document.getElementById("campo_oculto_cuerpo");
var campo_oculto_encabezado_DOM = document.getElementById("campo_oculto_encabezado");

//referencias a links de la barra principal (4)
var linkAbrirEditor = document.getElementById("link-abrir-editor");
var linkAbrirArticulos = document.getElementById("link-abrir-articulos");
var linkAbrirGaleria = document.getElementById("link-abrir-galeria");
var linkAbrirAyuda = document.getElementById("link-abrir-ayuda");

var pantallaPublicar = document.getElementById("publicar");

//variables de estado
var estaArticuloEnEdicion = false;
//publicar
$("#form_publicacion").submit(function () {

    var publicacion = $(this).serialize();
    $.post("/admin/publicar", publicacion);
    descartarArticuloEnEdicion();
    solicitarArticulosHechos();
    abrir_mis_articulos();
    desaparecerPantallaPublicar();
    reflejarCodigoEnVistaPrevia();

    return false;
});

//Solo pasar True o False
function trueOFalseABool(valor) {
    return valor === "True";
}



$("#form_editar").submit(function () {
    var paqueteAEnviar = $(this).serialize();
    $.post("/admin/editar", paqueteAEnviar, despuesDeEditar);


    return false;
});

function despuesDeEditar(respuesta) {
    if (respuesta === "correcto") {
        $("#modalEditar").modal('hide');
        solicitarArticulosHechos();

    }
}

//funciones para control de ajustes
/*
$('#modo_oscuro').on('change', function (ev) {
    if ($('#modo_oscuro').prop('checked')) {
        cambiarAModoOscuro();
        guardarCambiosDeModoOscuro(true);
        console.log("modo oscuro on");
    } else {
        cambiarAModoClaro();
        guardarCambiosDeModoOscuro(false);
        console.log("modo oscuro off");
    }

});
*/

//funciones para abrir y cerrar pantallas (editar,mis articulos, perfil y ajustes)
function abrir_editor() {
    if (estaAbiertoMisArticulos) cerrar_mis_articulos();
    if (estaAbiertoPerfil) cerrarPerfil();
    if (estaAbiertoAjustes) cerrarAjustes();
    if (estaAbiertoGaleria) cerrarGaleria();

    capa_editor_DOM.style.display = "block";
    ajustarDimensionesCuerpoEditor();
    activarLinkDeBarra(1);
    document.title = "Nuevo artículo - BearTec Editores";
    estaAbiertoEditor = true;
}

function cerrar_editor() {
    capa_editor_DOM.style.display = "none";
    estaAbiertoEditor = false
}

function abrir_mis_articulos() {
    if(estaArticuloEnEdicion){
        if(confirm("¿Estás seguro? Perderás todos los cambios")){
            descartarArticuloEnEdicion();
            document.getElementById("botones_articulo_modificar").classList.add("oculto");
            document.getElementById("boton_flotante_publicar").classList.remove("oculto");
            document.getElementById("boton_publicar").classList.remove("oculto");
            document.getElementById("mensajeDeGuardado").innerText = "";
            reflejarCodigoEnVistaPrevia();
            estaArticuloEnEdicion = false;
        }
    }
    if (estaAbiertoEditor) cerrar_editor();
    if (estaAbiertoPerfil) cerrarPerfil();
    if (estaAbiertoAjustes) cerrarAjustes();
    if (estaAbiertoGaleria) cerrarGaleria();
    capa_mis_articulos_DOM.style.display = "block";
    setTimeout(function () {
        solicitarArticulosHechos();
    },2000)
    
    activarLinkDeBarra(2);
    document.title = "Mis artículos - BearTec Editores";
    estaAbiertoMisArticulos = true;
}

function cerrar_mis_articulos() {
    capa_mis_articulos_DOM.style.display = "none";
}

function abrir_perfil(){
    capa_perfil.style.display = "block";
    estaAbiertoPerfil = true;
    if (estaAbiertoEditor) cerrar_editor();
    if (estaAbiertoMisArticulos) cerrar_mis_articulos();
    if (estaAbiertoAjustes) cerrarAjustes();
    if (estaAbiertoGaleria) cerrarGaleria();
    document.title = "Perfil - BearTec Editores";
}

function cerrarPerfil() {
    capa_perfil.style.display = "none";
}

function abrir_ajustes(){
    estaAbiertoAjustes = true;
    if (estaAbiertoPerfil) cerrarPerfil();
    if (estaAbiertoMisArticulos) cerrar_mis_articulos();
    if (estaAbiertoEditor) cerrar_editor();
    if (estaAbiertoGaleria) cerrarGaleria();
    capa_ajustes_DOM.style.display = "block";
    if (modoOscuro) $('#modo_oscuro').prop('checked', true);
    else $('#modo_oscuro').prop('checked', false);
    document.title = "Ajustes - BearTec Editores";
}

function cerrarAjustes() {
    capa_ajustes_DOM.style.display = "none";
}

function abrirGaleria() {
    estaAbiertoGaleria = true;
    if (estaAbiertoEditor) cerrar_editor();
    if (estaAbiertoPerfil) cerrarPerfil();
    if (estaAbiertoAjustes) cerrarAjustes();
    if (estaAbiertoMisArticulos) cerrar_mis_articulos();
    capa_galeria.style.display = "block";
    activarLinkDeBarra(3);
    definirAlturaListaDeImagenes();
    document.title = "Galería - BearTec Editores";
    setUpImagesSpace();
    listImages();
}

function cerrarGaleria() {
    capa_galeria.style.display = "none";
}

function tabPublicacion() {
    encabezado_en_publicar.value = encabezado_DOM.value;
    //toma los valores del los dos inputs en editar y los guarda
    //en campos ocultos para enviar al servidor en formulario
    //en publicar
    campo_oculto_cuerpo_DOM.value = cuerpo_textarea.value;
    campo_oculto_encabezado_DOM.value = encabezado_DOM.value;
}

function mandarAEditar() {
    $("#redactar-tab").tab('show');
    $("#no_texto_modal").modal('hide');

}

function descartarArticuloEnEdicion() {
    encabezado_en_publicar.value = "";
    cuerpo_textarea.value = "";
    encabezado_DOM.value = "";
    campo_oculto_cuerpo_DOM.value = "";
    campo_oculto_encabezado_DOM.value = "";
    //elementos del DOM

    //desmarca todas las categorias
    try {
        var categoriasCheckboxes = document.getElementsByClassName("categoria");
        for (var i = 0; i < categoriasCheckboxes.length; i++) categorias_checkboxes[i].checked = false;
    } catch(e) {}
}

function solicitarArticulosHechos() {
    var id_de_usuario = {
        ID_Usuario: idUsuario,
        __RequestVerificationToken: tokenDeVerificacion
    };
    $.post("/admin/SolicitarArticulos", id_de_usuario, insertar_articulos_DOM);
}

function insertar_articulos_DOM(respuesta) {
    var mis_articulos_DOM = document.getElementById("mis_articulos");
    mis_articulos_DOM.innerHTML = respuesta;
}

function EliminarArticulo(id) {
    // console.log("Eliminando articulo con id: " + id);

    var paquete_con_id = {
        id_articulo: id,
        __RequestVerificationToken: tokenDeVerificacion
    }
    $.post("/admin/borrar", paquete_con_id, HacerDespuesDeEliminar);

    return false;
}

function HacerDespuesDeEliminar(respuesta) {
    solicitarArticulosHechos();
}

//funciones para modificar info de cuenta
//se usa para habilitar campos en pantalla editar info de perfil
$('#boton_editar_info_perfil').on('click', function (e) {
    $('#perfil_nombre').prop('disabled', false);
    $('#perfil_correo').prop('disabled', false);
    $('#boton_perfil_info_guardar_cambios').prop('disabled', false);
    $('#parrafo-descripcion').prop('disabled', false);
});
//ve si la contraseña es correcta
$('#boton_continuar_confirmacion').on('click', function (e) {
    if (campoContraPerfilInfo.value != passwordActual)
        alertaContraIncorrecta.style.display = "block";
    else {
        alertaContraIncorrecta.style.display = "none";
        var enviar = $('#perfil_info_modificar').serialize();
        $.post("/admin/ModificarInfoPerfil", enviar, despuesDeModificarInfoPerfil);
    }
});

function despuesDeModificarInfoPerfil(respuesta) {
    $('#confirmarContra_perfil').modal('hide');
}

$("#formulario-cambio-password").submit(function () {
    if ($('#nuevaPassword').val !== $('#confirmacionPassword').val) {
        alert("Las contraseñas no coinciden");
    } else {
        var paqueteAEnviar = $(this).serialize();
        $.post("/admin/CambiarPassword", paqueteAEnviar, despuesDeCambiarPassword);

        return false;
    }

});

function despuesDeCambiarPassword(respuesta) {
    if (respuesta === "hecho") {
        alert("Contraseña actualizada!");
        console.log("contraseña actualizada");
    } else if (respuesta === "error") {
        alert("Asegurarse de que la contraseña actual es correcta!");
        console.log("error");
    }
}

//pantalla 1: Redactar
//pantalla 2: Mis artículos
//pantalla 3: Galería de imagenes
//pantalla 4: Ayuda
function activarLinkDeBarra(pantalla) {
    switch (pantalla) {
        case 1:
            if (!linkAbrirEditor.classList.contains("active")) linkAbrirEditor.classList.add("active");
            if (linkAbrirArticulos.classList.contains("active")) linkAbrirArticulos.classList.remove("active");
            if (linkAbrirGaleria.classList.contains("active")) linkAbrirGaleria.classList.remove("active");
            if (linkAbrirAyuda.classList.contains("active")) linkAbrirAyuda.classList.remove("active");
            break;
        case 2:
            if (!linkAbrirArticulos.classList.contains("active")) linkAbrirArticulos.classList.add("active");
            if (linkAbrirEditor.classList.contains("active")) linkAbrirEditor.classList.remove("active");
            if (linkAbrirGaleria.classList.contains("active")) linkAbrirGaleria.classList.remove("active");
            if (linkAbrirAyuda.classList.contains("active")) linkAbrirAyuda.classList.remove("active");
            break;
        case 3:
            if (!linkAbrirGaleria.classList.contains("active")) linkAbrirGaleria.classList.add("active");
            if (linkAbrirArticulos.classList.contains("active")) linkAbrirArticulos.classList.remove("active");
            if (linkAbrirEditor.classList.contains("active")) linkAbrirEditor.classList.remove("active");
            if (linkAbrirAyuda.classList.contains("active")) linkAbrirAyuda.classList.remove("active");
            break;
        case 4:
            if (!linkAbrirAyuda.classList.contains("active")) linkAbrirAyuda.classList.add("active");
            if (linkAbrirArticulos.classList.contains("active")) linkAbrirArticulos.classList.remove("active");
            if (linkAbrirGaleria.classList.contains("active")) linkAbrirGaleria.classList.remove("active");
            if (linkAbrirEditor.classList.contains("active")) linkAbrirEditor.classList.remove("active");
            break;
    }
}

function aparecerPantallaPublicar() {
    pantallaPublicar.style.display = "block";
    tabPublicacion();
}
function desaparecerPantallaPublicar() {
    pantallaPublicar.style.display = "none";
}
function solicitarVistaPrevia(){
    var titulo = document.getElementById("titulo_text").value;
    document.getElementById("idUsuarioFormVP").value = idUsuario;
    document.getElementById("tituloFormVP").value = titulo;
    document.getElementById("encabezadoFormVP").value = titulo;
    document.getElementById("cuerpoFormVP").value = document.getElementById("cuerpo_articulo").value;
    $('#formularioVistaPrevia').submit();
}
abrir_mis_articulos();
