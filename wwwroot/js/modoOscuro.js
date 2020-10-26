/* erik cavazos
Modo oscuro
Incluye las funciones para cambiar a modo oscuro y claro y asigna el modo al cargar la pagina
*/
function cambiarAModoOscuro() {
    modoOscuro = true;
    alert("modo oscuro no disponible ahora");
    /*
    if (barra.classList.contains("navbar-light"))
        barra.classList.remove("navbar-light");
    if (barra.classList.contains("bg-light"))
        barra.classList.remove("bg-light");
    barra.classList.add("navbar-dark");
    barra.classList.add("bg-dark");
    if (document.body.classList.contains("bg-light")) document.body.classList.remove("bg-light");
    if (document.body.classList.contains("text-body")) document.body.classList.remove("text-body");
    document.body.classList.add("bg-dark");
    document.body.classList.add("text-light");
    if (cuerpo_textarea.classList.contains("bg-light")) cuerpo_textarea.classList.remove("bg-light");
    if (cuerpo_textarea.classList.contains("text-body")) cuerpo_textarea.classList.remove("text-body");
    cuerpo_textarea.classList.add("bg-dark");
    cuerpo_textarea.classList.add("text-light");
    if (tabsCapaEditor.classList.contains("bg-light"))
        tabsCapaEditor.classList.remove("bg-light");
    tabsCapaEditor.classList.add("bg-dark");
    if (titulo.classList.contains("bg-light"))
        titulo.classList.remove("bg-light");
    titulo.classList.add("bg-dark");
    */
}

function cambiarAModoClaro() {
    modoOscuro = false;
    /*
    if (barra.classList.contains("navbar-dark"))
        barra.classList.remove("navbar-dark");
    if (barra.classList.contains("bg-dark"))
        barra.classList.remove("bg-dark");
    barra.classList.add("navbar-light");
    barra.classList.add("bg-light");
    if (document.body.classList.contains("bg-dark")) document.body.classList.remove("bg-dark");
    if (document.body.classList.contains("text-light")) document.body.classList.remove("text-light");
    document.body.classList.add("bg-light");
    document.body.classList.add("text-body");
    if (cuerpo_textarea.classList.contains("bg-dark")) cuerpo_textarea.classList.remove("bg-dark");
    if (cuerpo_textarea.classList.contains("text-light")) cuerpo_textarea.classList.remove("text-light");
    cuerpo_textarea.classList.add("bg-light");
    cuerpo_textarea.classList.add("text-body");
    if (tabsCapaEditor.classList.contains("bg-dark"))
        tabsCapaEditor.classList.remove("bg-dark");
    tabsCapaEditor.classList.add("bg-light");
    if (titulo.classList.contains("bg-dark"))
        titulo.classList.remove("bg-dark");
    titulo.classList.add("bg-light");
    */
}

/*function guardarCambiosDeModoOscuro(esModoOscuro) {
    var aEnviar;
    if (esModoOscuro) {
        aEnviar = {
            modoOscuro: "on",
            __RequestVerificationToken: tokenDeVerificacion,
            id: idUsuario,
            pass: passwordActual
        };
        $.post("/admin/ModificarAjustes", aEnviar);
    } else if (!esModoOscuro) {
        aEnviar = {
            modoOscuro: "off",
            __RequestVerificationToken: tokenDeVerificacion,
            id: idUsuario,
            pass: passwordActual
        };
        $.post("/admin/ModificarAjustes", aEnviar);
    }
}*/