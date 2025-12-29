// Inicialización del array vacío
let listaDeTareas = [];


let agregarMas = true;

while (agregarMas) {
  
  let tarea = prompt("Ingresa una nueva tarea:");

  
  if (tarea !== null && tarea.trim() !== "") {
    listaDeTareas.push(tarea.trim()); 
  } else {
    alert("No ingresaste ninguna tarea. Intenta de nuevo.");
    continue; 
  }

  
  agregarMas = confirm("¿Deseas agregar otra tarea?");
}


console.log("--- Lista de Tareas Pendientes ---");
listaDeTareas.forEach((tarea, index) => {
  console.log(`${index + 1}. ${tarea}`);
});