function cargaContextoCanvas(idCanvas) {
    let elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        let contexto = elemento.getContext('2d');
        if (contexto) {
            return contexto;
        }
    }

    return false;
}

window.onload = function () {
    let contexto = cargaContextoCanvas('micanvas');
    if (contexto) {
      contexto.lineWidth = 1;
      contexto.font = "30px Arial";
      contexto.strokeText("Para cualquier sugerencia, ¡Contáctanos!", 10, 70); //Mostrado en contacto.html
      contexto.strokeStyle = "Black";
    }
}