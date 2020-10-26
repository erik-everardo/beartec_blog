/*Logica para pagina editor*/
//referencias de elementos de editor
var titulo = document.getElementById("titulo_text");
var cuerpo_textarea = document.getElementById("cuerpo_articulo");
var stringhtml = "";
var vista_p = "";
var vista_previa_tiempo_real = document.getElementById("vista_previa_tiempo_real");

//referencia row barra
var barraNavegacion = document.getElementById("barra-navegacion");
var grupoBotonesFormato = document.getElementById("botones_formato_editor");

function ajustarDimensionesCuerpoEditor() {
    cuerpo_textarea.style.height =
        (window.innerHeight -
            (barraNavegacion.offsetHeight +
                titulo.offsetHeight +
                grupoBotonesFormato.offsetHeight) - 60) + "px";
    vista_previa_tiempo_real.style.maxHeight = cuerpo_textarea.style.height;
}

window.addEventListener('resize', ajustarDimensionesCuerpoEditor);



//editor grafico
//variables de estado de etiquetas del editor grafico
var textarea_cuerpo = document.getElementById("cuerpo_articulo");

//referencias botones del editor grafico
var boton_em = $('#boton_em');
var boton_p = $('#boton_p');
var boton_strong = $('#boton_strong');
var boton_u = $('#boton_u');
var boton_img = $('#boton_img');
var boton_a = $('#boton_a');

//eventos on clic de los botones del editor

var textoSeleccionado = "";
var textoSeleccionadoConEtiquetas = "";
var textoAntesDeSeleccion = "";
var textoDespuesDeSeleccion = "";
boton_p.on("click", function () {
    if (textarea_cuerpo.selectionStart === textarea_cuerpo.selectionEnd) {
        textoDespuesDeSeleccion = "";
        textoAntesDeSeleccion = "";

        for (i = 0; i < textarea_cuerpo.selectionStart; i++) {
            textoAntesDeSeleccion += textarea_cuerpo.value.charAt(i);

        }
        for (i = textarea_cuerpo.selectionStart; i < textarea_cuerpo.value.length; i++) {
            textoDespuesDeSeleccion += textarea_cuerpo.value.charAt(i);
        }
        textarea_cuerpo.value = textoAntesDeSeleccion + "<p>\n\n</p>" + textoDespuesDeSeleccion;

        textarea_cuerpo.selectionStart = textoAntesDeSeleccion.length + 4;
        textarea_cuerpo.selectionEnd = textoAntesDeSeleccion.length + 4;
        textarea_cuerpo.focus();

    } else {
        for (var i = textarea_cuerpo.selectionStart; i < textarea_cuerpo.selectionEnd; i++) {
            textoSeleccionado += textarea_cuerpo.value.charAt(i);
        }
        textoSeleccionadoConEtiquetas = "<p>" + textoSeleccionado + "</p>";
        console.log(textoSeleccionado);
        console.log(textoSeleccionadoConEtiquetas);
        textoAntesDeSeleccion = "";
        textoDespuesDeSeleccion = "";

        for (i = 0; i < textarea_cuerpo.selectionStart; i++) {
            textoAntesDeSeleccion += textarea_cuerpo.value.charAt(i);
        }
        for (i = textarea_cuerpo.selectionEnd; i < textarea_cuerpo.value.length; i++) {
            textoDespuesDeSeleccion += textarea_cuerpo.value.charAt(i);
        }
        textarea_cuerpo.value = textoAntesDeSeleccion + textoSeleccionadoConEtiquetas + textoDespuesDeSeleccion;
        textoSeleccionado = "";
        textoSeleccionadoConEtiquetas = "";
        textoAntesDeSeleccion = "";
        textoDespuesDeSeleccion = "";
    }
    reflejarCodigoEnVistaPrevia();
});
boton_strong.on("click", function () {
    if (textarea_cuerpo.selectionStart === textarea_cuerpo.selectionEnd) {
        textoDespuesDeSeleccion = "";
        textoAntesDeSeleccion = "";

        for (i = 0; i < textarea_cuerpo.selectionStart; i++) {
            textoAntesDeSeleccion += textarea_cuerpo.value.charAt(i);

        }
        for (i = textarea_cuerpo.selectionStart; i < textarea_cuerpo.value.length; i++) {
            textoDespuesDeSeleccion += textarea_cuerpo.value.charAt(i);
        }
        textarea_cuerpo.value = textoAntesDeSeleccion + "<strong></strong>" + textoDespuesDeSeleccion;

        textarea_cuerpo.selectionStart = textoAntesDeSeleccion.length + 8;
        textarea_cuerpo.selectionEnd = textoAntesDeSeleccion.length + 8;
        textarea_cuerpo.focus();

    } else {
        for (var i = textarea_cuerpo.selectionStart; i < textarea_cuerpo.selectionEnd; i++) {
            textoSeleccionado += textarea_cuerpo.value.charAt(i);
        }
        textoSeleccionadoConEtiquetas = "<strong>" + textoSeleccionado + "</strong>";
        console.log(textoSeleccionado);
        console.log(textoSeleccionadoConEtiquetas);
        textoAntesDeSeleccion = "";
        textoDespuesDeSeleccion = "";

        for (i = 0; i < textarea_cuerpo.selectionStart; i++) {
            textoAntesDeSeleccion += textarea_cuerpo.value.charAt(i);
        }
        for (i = textarea_cuerpo.selectionEnd; i < textarea_cuerpo.value.length; i++) {
            textoDespuesDeSeleccion += textarea_cuerpo.value.charAt(i);
        }
        textarea_cuerpo.value = textoAntesDeSeleccion + textoSeleccionadoConEtiquetas + textoDespuesDeSeleccion;
        textoSeleccionado = "";
        textoSeleccionadoConEtiquetas = "";
        textoAntesDeSeleccion = "";
        textoDespuesDeSeleccion = "";
    }
    reflejarCodigoEnVistaPrevia();
});
boton_em.on("click", function () {
    if (textarea_cuerpo.selectionStart === textarea_cuerpo.selectionEnd) {
        textoDespuesDeSeleccion = "";
        textoAntesDeSeleccion = "";

        for (i = 0; i < textarea_cuerpo.selectionStart; i++) {
            textoAntesDeSeleccion += textarea_cuerpo.value.charAt(i);

        }
        for (i = textarea_cuerpo.selectionStart; i < textarea_cuerpo.value.length; i++) {
            textoDespuesDeSeleccion += textarea_cuerpo.value.charAt(i);
        }
        textarea_cuerpo.value = textoAntesDeSeleccion + "<em></em>" + textoDespuesDeSeleccion;

        textarea_cuerpo.selectionStart = textoAntesDeSeleccion.length + 4;
        textarea_cuerpo.selectionEnd = textoAntesDeSeleccion.length + 4;
        textarea_cuerpo.focus();

    } else {
        for (var i = textarea_cuerpo.selectionStart; i < textarea_cuerpo.selectionEnd; i++) {
            textoSeleccionado += textarea_cuerpo.value.charAt(i);
        }
        textoSeleccionadoConEtiquetas = "<em>" + textoSeleccionado + "</em>";
        console.log(textoSeleccionado);
        console.log(textoSeleccionadoConEtiquetas);
        textoAntesDeSeleccion = "";
        textoDespuesDeSeleccion = "";

        for (i = 0; i < textarea_cuerpo.selectionStart; i++) {
            textoAntesDeSeleccion += textarea_cuerpo.value.charAt(i);
        }
        for (i = textarea_cuerpo.selectionEnd; i < textarea_cuerpo.value.length; i++) {
            textoDespuesDeSeleccion += textarea_cuerpo.value.charAt(i);
        }
        textarea_cuerpo.value = textoAntesDeSeleccion + textoSeleccionadoConEtiquetas + textoDespuesDeSeleccion;
        textoSeleccionado = "";
        textoSeleccionadoConEtiquetas = "";
        textoAntesDeSeleccion = "";
        textoDespuesDeSeleccion = "";
    }
    reflejarCodigoEnVistaPrevia();
});
boton_u.on("click", function () {
    if (textarea_cuerpo.selectionStart === textarea_cuerpo.selectionEnd) {
        textoDespuesDeSeleccion = "";
        textoAntesDeSeleccion = "";

        for (i = 0; i < textarea_cuerpo.selectionStart; i++) {
            textoAntesDeSeleccion += textarea_cuerpo.value.charAt(i);

        }
        for (i = textarea_cuerpo.selectionStart; i < textarea_cuerpo.value.length; i++) {
            textoDespuesDeSeleccion += textarea_cuerpo.value.charAt(i);
        }
        textarea_cuerpo.value = textoAntesDeSeleccion + "<u></u>" + textoDespuesDeSeleccion;

        textarea_cuerpo.selectionStart = textoAntesDeSeleccion.length + 3;
        textarea_cuerpo.selectionEnd = textoAntesDeSeleccion.length + 3;
        textarea_cuerpo.focus();

    } else {
        for (var i = textarea_cuerpo.selectionStart; i < textarea_cuerpo.selectionEnd; i++) {
            textoSeleccionado += textarea_cuerpo.value.charAt(i);
        }
        textoSeleccionadoConEtiquetas = "<u>" + textoSeleccionado + "</u>";
        console.log(textoSeleccionado);
        console.log(textoSeleccionadoConEtiquetas);
        textoAntesDeSeleccion = "";
        textoDespuesDeSeleccion = "";

        for (i = 0; i < textarea_cuerpo.selectionStart; i++) {
            textoAntesDeSeleccion += textarea_cuerpo.value.charAt(i);
        }
        for (i = textarea_cuerpo.selectionEnd; i < textarea_cuerpo.value.length; i++) {
            textoDespuesDeSeleccion += textarea_cuerpo.value.charAt(i);
        }
        textarea_cuerpo.value = textoAntesDeSeleccion + textoSeleccionadoConEtiquetas + textoDespuesDeSeleccion;
        textoSeleccionado = "";
        textoSeleccionadoConEtiquetas = "";
        textoAntesDeSeleccion = "";
        textoDespuesDeSeleccion = "";
    }
    reflejarCodigoEnVistaPrevia();
});

var campoLinkUrl = document.getElementById("link_url");
var campoLinkTexto = document.getElementById("link_texto");

boton_a.on('click', function () {
    //ver si hay texto seleccionado o no
    if (textarea_cuerpo.selectionStart !== textarea_cuerpo.selectionEnd) {
        for (var i = textarea_cuerpo.selectionStart; i < textarea_cuerpo.selectionEnd; i++) {
            textoSeleccionado += textarea_cuerpo.value.charAt(i);
        }
        campoLinkTexto.value = textoSeleccionado;
        textoSeleccionado = "";
    }
});

function insertarVinculo() {
    if (textarea_cuerpo.selectionStart === textarea_cuerpo.selectionEnd) {
        textoDespuesDeSeleccion = "";
        textoAntesDeSeleccion = "";

        for (i = 0; i < textarea_cuerpo.selectionStart; i++) {
            textoAntesDeSeleccion += textarea_cuerpo.value.charAt(i);

        }
        for (i = textarea_cuerpo.selectionStart; i < textarea_cuerpo.value.length; i++) {
            textoDespuesDeSeleccion += textarea_cuerpo.value.charAt(i);
        }
        var a_href = "<a href='" + campoLinkUrl.value + "'>" + campoLinkTexto.value + "</a>";
        textarea_cuerpo.value = textoAntesDeSeleccion + a_href + textoDespuesDeSeleccion;

        textarea_cuerpo.selectionStart = textoAntesDeSeleccion.length + (a_href.length - 4);
        textarea_cuerpo.selectionEnd = textoAntesDeSeleccion.length + (a_href.length - 4);
        textarea_cuerpo.focus();

    } else {
        for (var i = textarea_cuerpo.selectionStart; i < textarea_cuerpo.selectionEnd; i++) {
            textoSeleccionado += textarea_cuerpo.value.charAt(i);
        }
        textoSeleccionadoConEtiquetas = "<a href='" + campoLinkUrl.value + "'>" + textoSeleccionado + "</a>";
        console.log(textoSeleccionado);
        console.log(textoSeleccionadoConEtiquetas);
        textoAntesDeSeleccion = "";
        textoDespuesDeSeleccion = "";

        for (i = 0; i < textarea_cuerpo.selectionStart; i++) {
            textoAntesDeSeleccion += textarea_cuerpo.value.charAt(i);
        }
        for (i = textarea_cuerpo.selectionEnd; i < textarea_cuerpo.value.length; i++) {
            textoDespuesDeSeleccion += textarea_cuerpo.value.charAt(i);
        }
        textarea_cuerpo.value = textoAntesDeSeleccion + textoSeleccionadoConEtiquetas + textoDespuesDeSeleccion;
        textoSeleccionado = "";
        textoSeleccionadoConEtiquetas = "";
        textoAntesDeSeleccion = "";
        textoDespuesDeSeleccion = "";
    }
    reflejarCodigoEnVistaPrevia();
    campoLinkUrl.value = "";
    campoLinkTexto.value = "";
}

$('#cuerpo_articulo').on('input', function () {
    reflejarCodigoEnVistaPrevia();
});

function reflejarCodigoEnVistaPrevia() {
    vista_previa_tiempo_real.innerHTML = document.getElementById("cuerpo_articulo").value;
}
var idArt,idTimer;
function editar(idArticulo){
    idArt = idArticulo;
    abrir_editor();
    document.getElementById("mensajeDeGuardado").classList.remove("oculto");
    estaArticuloEnEdicion = true;
    document.getElementById("botones_articulo_modificar").classList.remove("oculto");
    document.getElementById("boton_flotante_publicar").classList.add("oculto");
    document.getElementById("boton_publicar").classList.add("oculto");
    //solicita titulo de publicacion
    $.get("/admin/SolicitarInfoArticulo",{id:idArticulo,dato:1},function(respuesta){
       titulo.value = respuesta;
       document.title = "Editando: " + respuesta + " - erik.tech";
    });
    
    //solicita encabezado de publicacion
    $.get("/admin/SolicitarInfoArticulo",{id:idArticulo,dato:2},function(respuesta){
        encabezado_DOM.value = respuesta;
    });
    
    //solicita cuerpo de publicacion
    $.get("/admin/SolicitarInfoArticulo",{id:idArticulo,dato:3},function(respuesta){
        cuerpo_textarea.value = respuesta;
        reflejarCodigoEnVistaPrevia();
    });
    
    //solicita categorias de publicacion
    $.get("/admin/SolicitarInfoArticulo",{id:idArticulo,dato:4},function(respuesta){

        for(var i=0;i<7;i++){
            document.getElementsByClassName("categoria")[i].checked = respuesta[i] === "1";
        }
        
    });
    idTimer = setInterval(function(){
        if(estaArticuloEnEdicion){
            save();
        }
    },5000);
}

$('#boton_quit').on('click',function(){
    if(confirm("¿Estás seguro? Perderás todos los cambios")){
        descartarArticuloEnEdicion();
        document.getElementById("botones_articulo_modificar").classList.add("oculto");
        document.getElementById("boton_flotante_publicar").classList.remove("oculto");
        reflejarCodigoEnVistaPrevia();
        document.getElementById("mensajeDeGuardado").innerText = "";
        document.getElementById("mensajeDeGuardado").classList.add("oculto");
        document.getElementById("boton_publicar").classList.remove("oculto");
        clearInterval(idTimer);
        estaArticuloEnEdicion = false;
        abrir_editor();
    }
});

$('#boton_save').on('click',function(){
    save();
});
function save(){
    $.post("/admin/editar",{
        id:idArt,
        nombre:titulo.value,
        encabezado:encabezado_DOM.value,
        cuerpo:cuerpo_textarea.value,
        linux:$('#linux_check').is(":checked"),
        windows: $('#windows_check').is(":checked"),
        macos: $('#macos_check').is(":checked"),
        android: $('#android_check').is(":checked"),
        desarrollo: $('#desarrollo_check').is(":checked"),
        gaming: $('#gaming_check').is(":checked"),
        hardare: $('#hardware_check').is(":checked"),
        __RequestVerificationToken:tokenDeVerificacion
    },function(){
        var fecha = new Date();
        document.getElementById("mensajeDeGuardado").innerText = "Guardado por ultima vez: " + obtenerHoraEnFormato12(fecha.getHours(),fecha.getMinutes(),fecha.getSeconds());
    });
}
function obtenerHoraEnFormato12(horas24,minutos24,segundos24){
    var horas, minutos,segundos;
    if(horas24<=9){
        horas = "0" + horas24;
    }else{
        horas = horas24-12;
    }
    if(minutos24<=9){
        minutos = "0" + minutos24;
    }else{
        minutos = minutos24;
    }
    if(segundos24<=9){
        segundos = "0" + segundos24;
    }else{
        segundos = segundos24;
    }
    if(horas==="00"){
        horas = "12";
    }
    if(horas24>11){
        return horas + ":" + minutos + ":" + segundos + " p.m.";
    }else{
        return horas + ":" + minutos + ":" + segundos + " a.m.";
    }
}