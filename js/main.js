/* Debo tomar los datos que se ingresen en el textarea
y enviarlos a un div con texto en la parte inferior de 
la pagina al apretar el boton enviar
y evitar que se envie tarea en blanco (valor) */


document.getElementById("boton").addEventListener("click",
	function () {
	var box = document.getElementById("tareas");
	nueva = document.createElement("div");
	nueva.setAttribute("class", "cajastarea");

	var input = document.getElementById("inputtarea");
	var tarea = input.value;
	contenido = document.createTextNode(tarea);

	// Agrego trash
	var trash = document.createElement("i");
	trash.setAttribute("class", "fa fa-trash fa-2x pull-right");
	nueva.appendChild(trash);

	// Agrego Checkbox
	var checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	nueva.appendChild(checkbox);

		if (tarea == "") {
			alert("Debe ingresar una tarea a realizar");
		}
		else {
			nueva.appendChild(contenido);
			box.appendChild(nueva);
		}
	}
);




/* Funciones para checkbox y delete icon */


/*

	trash.addEventListener("click", 
		function (){
			box.removeChild(nueva);
		}
	);

	

*/