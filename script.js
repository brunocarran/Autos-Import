
function mostrarImagenModelo() {
    const modelo = document.getElementById('modelo').value;
    const imagenDiv = document.getElementById('imagen-modelo');
    const imagenes = {
        'a3': 'images/audi_a3.jpg',
        'serie3': 'images/bmw_serie3.jpg',
        'cclass': 'images/mercedes_cclass.jpg',
        'golf': 'images/vw_golf.jpg'
    };

    if (imagenes[modelo]) {
        imagenDiv.innerHTML = `<img src="${imagenes[modelo]}" alt="${modelo}" style="max-width: 100%; margin-top: 1rem;">`;
    } else {
        imagenDiv.innerHTML = '';
    }
}
