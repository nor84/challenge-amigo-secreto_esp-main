// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const listaAmigos = document.getElementById('listaAmigos');
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya fue agregado.");
        return;
    }

    amigos.push(nombre);

    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    listaAmigos.appendChild(nuevoElemento);

    inputAmigo.value = "";  // Limpiar el campo de texto
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Se requieren al menos 2 amigos para realizar el sorteo.");
        return;
    }

    let sorteados = [...amigos];
    let valido = false;

    while (!valido) {
        sorteados.sort(() => Math.random() - 0.5);
        valido = true;
        
        for (let i = 0; i < amigos.length; i++) {
            if (amigos[i] === sorteados[i]) {
                valido = false;
                break;
            }
        }
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpiar resultado anterior

    for (let i = 0; i < amigos.length; i++) {
        const resultadoElemento = document.createElement("li");
        resultadoElemento.textContent = `${amigos[i]} → ${sorteados[i]}`;
        resultado.appendChild(resultadoElemento);
    }
}   
