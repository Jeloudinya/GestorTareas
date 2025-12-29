let listaDeTareas = [];

const input = document.getElementById('tareaInput');
const boton = document.getElementById('agregarBtn');
const lista = document.getElementById('listaDeTareas');

boton.addEventListener('click', agregarTarea);

function agregarTarea() {
    const tarea = input.value.trim();
    if(tarea === "") {
        alert("Ingresa una tarea válida");
        return;
    }

    listaDeTareas.push(tarea);
    input.value = "";
    mostrarTareas();
}

function mostrarTareas() {
    lista.innerHTML = "";
    listaDeTareas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${tarea}`;
        lista.appendChild(li);
    });
}
