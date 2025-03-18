# Challenge Alura Latam "Amigo Secreto"
# Amigo Secreto

Este es un proyecto web que permite gestionar un sorteo de "Amigo Secreto" de forma sencilla e interactiva.

## Tecnologías Utilizadas
- **HTML5**
- **CSS3**
- **JavaScript**

## Funcionalidades
- Agregar nombres de participantes en el sorteo.
- Visualizar la lista de amigos agregados.
- Realizar el sorteo del "Amigo Secreto" de forma aleatoria.

## Instrucciones de Uso
1. Escribe el nombre del participante en el campo de texto.
2. Haz clic en el botón "Añadir" para agregar el nombre a la lista.
3. Repite este proceso para todos los participantes.
4. Una vez agregados los nombres, haz clic en el botón "Sortear amigo" para que se realice el sorteo.

## Capturas de Pantalla
### Agregar Nombres
![Captura de pantalla 2025-03-17 213650](https://github.com/user-attachments/assets/42bd1f0a-9967-4e2c-a429-fa932ac2f96d)


### Sorteo Realizado
![Captura de pantalla 2025-03-17 213508](https://github.com/user-attachments/assets/6c892209-a1bf-40e0-b70f-c660486985d9)


## Explicación del Código JavaScript
El archivo `app.js` maneja la lógica principal del proyecto.

### Funcionalidad de Agregar Amigos
```javascript
const amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre) {
        amigos.push(nombre);
        mostrarAmigos();
        input.value = "";
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
```

### Funcionalidad del Sorteo
```javascript
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Agrega al menos dos amigos para realizar el sorteo.");
        return;
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    const amigosSorteados = [...amigos];
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        let amigoSecreto;

        do {
            const indiceAleatorio = Math.floor(Math.random() * amigosSorteados.length);
            amigoSecreto = amigosSorteados[indiceAleatorio];
        } while (amigo === amigoSecreto);

        amigosSorteados.splice(amigosSorteados.indexOf(amigoSecreto), 1);

        const li = document.createElement("li");
        li.textContent = `${amigo} --> ${amigoSecreto}`;
        resultado.appendChild(li);
    }
}
```

## Instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/nor84/challenge-amigo-secreto_esp-main.git
   ```
2. Abre el archivo `index.html` en tu navegador favorito.

## Autor
**Norman Valenzuela Zavala**


