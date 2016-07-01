/* Debo tomar los datos que se ingresen en el textarea
y enviarlos a un div con texto en la parte inferior de 
la pagina al apretar el boton enviar
y evitar que se envie tarea en blanco (valor) */

document.getElementById("boton").addEventListener("click",
	function () {
	box = document.getElementById("tareas");
	nueva = document.createElement("div");
	nueva.setAttribute("class", "cajastarea");

	input = document.getElementById("inputtarea");
	tarea = input.value;
	contenido = document.createTextNode(tarea);

	// Agrego trash
	trash = document.createElement("i");
	trash.setAttribute("class", "fa fa-trash fa-2x pull-right");
	trash.setAttribute("Onclick", "borrar()");
	nueva.appendChild(trash);
	
	// Agrego Checkbox
	checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	checkbox.setAttribute("Onclick", "tachado()");
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
	function borrar () {
		box.removeChild(nueva); 	
	};

	function tachado () {
		if(checkbox.checked) {
		contenido.setAttribute("class", "tachado");
		}
	};
	
/*
	
document.getElementsByTagName("i").addEventListener("click", 
		function (){
			nueva.removeChild(box);
		}
	);
borrar = 
*/