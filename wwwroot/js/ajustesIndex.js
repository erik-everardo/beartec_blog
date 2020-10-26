var storage = window.localStorage;
var barra_index = document.getElementById("barra_index");
var boton_modo_oscuro = document.getElementById("boton_modo_oscuro");
var articulosIndex = document.getElementsByClassName("card-articulo");

$('#boton_modo_oscuro').on('click', function () {
    if (storage.getItem("oscuro")) {
        if (storage.getItem("oscuro") === "on") {
            ajustarColor("off");
        } else {
            ajustarColor("on");
        }
    }
});

function ajustarColor(modo) {
    if (modo === "on") {
        storage.setItem("oscuro", "on");
        if (barra_index.classList.contains("navbar-light")) barra_index.classList.remove("navbar-light");
        if (barra_index.classList.contains("bg-light")) barra_index.classList.remove("bg-light");
        if (!barra_index.classList.contains("navbar-dark")) barra_index.classList.add("navbar-dark");
        if (!barra_index.classList.contains("bg-dark")) barra_index.classList.add("bg-dark");

        if (boton_modo_oscuro.classList.contains("btn-light")) {
            boton_modo_oscuro.classList.remove("btn-light");
            boton_modo_oscuro.classList.add("btn-dark");
        }

        if (document.body.classList.contains("bg-light")) document.body.classList.remove("bg-light");
        document.body.classList.add("bg-dark");
        if (document.body.classList.contains("text-dark")) document.body.classList.remove("text-dark");
        document.body.classList.add("text-light");

        boton_modo_oscuro.innerHTML = '<i class="far fa-sun"></i>';

        for (var i = 0; i < articulosIndex.length; i++) {
            if (!articulosIndex[i].classList.contains("bg-dark")) articulosIndex[i].classList.add("bg-dark");
            if (!articulosIndex[i].classList.contains("text-light")) articulosIndex[i].classList.add("text-light");
        }
    }
    if (modo === "off") {
        storage.setItem("oscuro", "off");
        if (barra_index.classList.contains("navbar-dark")) {
            barra_index.classList.remove("navbar-dark");
        }
        if (barra_index.classList.contains("bg-dark")) {
            barra_index.classList.remove("bg-dark");
        }
        if (!barra_index.classList.contains("navbar-light")) {
            barra_index.classList.add("navbar-light");
        }
        if (!barra_index.classList.contains("bg-light")) {
            barra_index.classList.add("bg-light");
        }
        if (boton_modo_oscuro.classList.contains("btn-dark")) {
            boton_modo_oscuro.classList.remove("btn-dark");
            boton_modo_oscuro.classList.add("btn-light");
        }

        if (document.body.classList.contains("bg-dark")) document.body.classList.remove("bg-dark");
        document.body.classList.add("bg-light");
        if (document.body.classList.contains("text-light")) document.body.classList.remove("text-light");
        document.body.classList.add("text-dark");

        boton_modo_oscuro.innerHTML = '<i class="far fa-moon"></i>';

        for (var i = 0; i < articulosIndex.length; i++) {
            if (articulosIndex[i].classList.contains("bg-dark")) articulosIndex[i].classList.remove("bg-dark");
            if (articulosIndex[i].classList.contains("text-light")) articulosIndex[i].classList.remove("text-light");
        }
    }
}

function modoOscuroIndex() {
    //se asegura que el elemento existe, si no, lo crea!
    if (storage.getItem("oscuro")) {
        if (storage.getItem("oscuro") === "on") {
            ajustarColor("on");
            boton_modo_oscuro.innerHTML = '<i class="far fa-sun"></i>';
            boton_modo_oscuro.classList.add("btn-dark");
        } else {
            ajustarColor("off");

            boton_modo_oscuro.innerHTML = '<i class="far fa-moon"></i>';
            boton_modo_oscuro.classList.add("btn-light");
        }
    } else {
        storage.setItem("oscuro", "off");
        boton_modo_oscuro.classList.add("btn-light");
    }
}