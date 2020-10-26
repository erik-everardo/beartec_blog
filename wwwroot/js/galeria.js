//Erik Everardo
//Galeria de imagenes
//funciones y eventos


var campoURLImagenExterna = document.getElementById("url_imagen_externa");
var vistaPreviaImagenCargaExterna = document.getElementById("vista_previa_imagen_carga_externa");
var campoNombreImagenExterna = document.getElementById("nombre_imagen_externa");
var campoNombreImagenPropia  = document.getElementById("nombre_imagen_propia");

$('#url_imagen_externa').on('input',function(){
   vistaPreviaImagenCargaExterna.innerHTML = "<img width='100%' src='" + campoURLImagenExterna.value + "'></img>";
    campoNombreImagenExterna.value = campoURLImagenExterna.value.substr(campoURLImagenExterna.value.lastIndexOf("/") + 1);
});
function cargarImagenExterna(){
    $.post("/admin/CargarURLImagenes",{
        idUsuario:idUsuario,
        url:campoURLImagenExterna.value,
        nombre:campoNombreImagenExterna.value,
        externa:true,
        password:passwordActual,
        __RequestVerificationToken: tokenDeVerificacion
    },function(){
        
    })
}
$('#btn_agregar_imagen_externa').on('click',function(){
    cargarImagenExterna();
});
window.addEventListener("resize",definirAlturaListaDeImagenes);
function definirAlturaListaDeImagenes() {
    if (window.innerWidth <= 768) {
        document.getElementById("lista_imagenes").style.maxHeight =
            (window.innerHeight - barraNavegacion.offsetHeight - document.getElementById("header_galeria_imagenes").offsetHeight -
                document.getElementById("cuadro_izq_galeria").offsetHeight - 8) + "px";
    } else {
        document.getElementById("lista_imagenes").style.maxHeight =
            (window.innerHeight - barraNavegacion.offsetHeight - document.getElementById("header_galeria_imagenes").offsetHeight - 8) + "px";
    }
    document.getElementById("cuadro_izq_galeria").style.maxHeight = document.getElementById("lista_imagenes").style.maxHeight;
}

//funcion para abrir vista previa de una imagen
function vistaPreviaImagen(url) {
    //pantalla de movil: ocultar cuadro de vista previa y abrir en nueva penstaña la imagen
    if (window.innerWidth<=768) {
        window.open(url,"_blank");
    } else {
        document.getElementById("vista_previa_imagen_galeria").innerHTML = 
            "<a href='" + url + "' target='_blank'><img class='w-100' src='" + url + "'></a>"
    }
}
var inputFile = document.querySelector("#archivo_imagen_propia");

$('#btn_subir_imagen_propia').on('click',function(){
    subirImagen(campoNombreImagenPropia.value);
});
$('#archivo_imagen_propia').on('input',function() {
   document.getElementById("vista_previa_imagen_subir").innerHTML =
       "<img src'#' id='imgElem' class='w-100'>";
   var reader = new FileReader();
   reader.onload = function (e) {
       $('#imgElem').attr('src', e.target.result); // Renderizamos la imagen
   };
    reader.readAsDataURL(inputFile.files[0]);
    campoNombreImagenPropia.value = inputFile.files[0].name;
});
function setUpImagesSpace(){
    var whereToRender = document.getElementById("lista_imagenes");
    whereToRender.innerHTML = "";
    //setting up container with needed css classes
    var cardsContainer = document.createElement("div");
    cardsContainer.classList
        .add("card-columns");
    cardsContainer.id = "pictures_container";
    whereToRender.appendChild(cardsContainer);
}
function insertImage(item){
    var cardsContainer = document.getElementById("pictures_container");
    var imageCard = document.createElement("div");
    imageCard.classList
        .add("card");
    imageCard.classList
        .add("custom-card-gallery");
    var imageElement = document.createElement("img");
    imageElement.classList
        .add("card-img-top");
    imageElement.classList
        .add("custom-card-gallery-image");
    var deleteButton = document.createElement("button");
    deleteButton.classList
        .add("btn");
    deleteButton.classList
        .add("btn-danger");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    
    item.getDownloadURL().then(function (url){
        console.log(url);
        imageElement.src = url;
        imageCard.appendChild(imageElement);
        cardsContainer.appendChild(imageCard)
        imageElement.onclick = function(){
          window.open(url,"_blank");  
        };
        return item;
    }).then(function(item){
        item.getMetadata().then(function(res){
            var cardBodyElement = document.createElement("div");
            cardBodyElement.classList
                .add("card-body");
            var cardBodyTitleElement = document.createElement("h5");
            cardBodyTitleElement.classList
                .add("card-title");
            var cardBodyParagraphElement = document.createElement("p");
            cardBodyParagraphElement.classList
                .add("card-text");
            cardBodyTitleElement.innerHTML = res.name;
            cardBodyParagraphElement.innerHTML = res.size;

            // meto los elementos al card body
            cardBodyElement.appendChild(cardBodyTitleElement);
            cardBodyElement.appendChild(cardBodyParagraphElement);
            cardBodyElement.appendChild(deleteButton);

            // meto el card body a card
            imageCard.appendChild(cardBodyElement);
            
            deleteButton.onclick = function () {
                // function defined at LayoutDashboard.cshtml
                
                if(confirm("¿Quieres eliminar " + res.name + "?")){
                    deleteImage(res.fullPath);
                }
            }
        });
        
    });
    
}
function resetearVistaPreviaGaleria(){
    document.getElementById("vista_previa_imagen_galeria").innerHTML =
        "<p class='card-text'>Haz clic en un elemento de la derecha</p>";
}