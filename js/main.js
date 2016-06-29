function agregarTarea () {
	var box = document.getElementById("tareas");
	var nuevo = document.createElement("div");
	var tarea = document.getElementById("tarea");
	nuevo.appendChild(tarea);
	tareas.appendChild(nuevo);
}
