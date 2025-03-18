# challenge-amigo-secreto_esp-main
Este proyecto es una página web interactiva desarrollada con HTML, CSS y JavaScript, que permite organizar un sorteo de "Amigo Secreto" de forma sencilla y divertida.

Características Principales

Permite agregar nombres de participantes.

Lista a los participantes en pantalla.

Realiza el sorteo del "Amigo Secreto", asignando aleatoriamente un amigo a cada participante.

Tecnologías Utilizadas

HTML5 para la estructura del contenido.

CSS3 para el diseño y la apariencia visual.

JavaScript para la lógica del sorteo y la interactividad.

Instalación y Uso

Clona este repositorio:

git clone https://github.com/nor84/challenge-amigo-secreto_esp-main.git

Abre el archivo index.html en tu navegador favorito.

Escribe el nombre de los participantes en el campo de texto y haz clic en "Añadir".

Cuando todos los nombres hayan sido agregados, haz clic en "Sortear amigo" para ver los resultados.

Explicación del Código JavaScript

El archivo app.js contiene la lógica principal del proyecto. A continuación se describe su funcionamiento:

1. Agregar Amigos

La función agregarAmigo() toma el valor ingresado en el campo de texto.

Si el nombre no está vacío ni repetido, lo agrega a la lista de amigos.

let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        input.value = '';
    } else {
        alert('El nombre está vacío o ya fue agregado.');
    }
}

2. Actualizar la Lista de Amigos

La función actualizarLista() muestra en pantalla los nombres que se han agregado.

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

3. Sorteo de Amigo Secreto

La función sortearAmigo() reorganiza aleatoriamente la lista de amigos y genera las combinaciones para el sorteo.

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Agrega al menos 2 amigos para realizar el sorteo.');
        return;
    }

    const resultado = document.getElementById('resultado');
    let amigosSorteados = [...amigos];

    do {
        amigosSorteados.sort(() => Math.random() - 0.5);
    } while (!esValido(amigos, amigosSorteados));

    resultado.innerHTML = amigos.map((amigo, index) =>
        `<li>${amigo} -> ${amigosSorteados[index]}</li>`).join('');
}

function esValido(listaOriginal, listaSorteada) {
    return listaOriginal.every((amigo, index) => amigo !== listaSorteada[index]);
}

Capturas de Pantalla

Ingreso de nombres:


Sorteo de amigos:


Autor

Norman Valenzuela Zavala

Si tienes alguna duda o sugerencia, no dudes en comunicarte.

Este proyecto fue desarrollado como parte del Challenge Oracle ONE - Alura Latam.

