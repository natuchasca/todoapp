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

		if (tarea == "") {
			alert("Ingrese tarea a realizar");
		}
		else {
			nueva.appendChild(contenido);
			box.appendChild(nueva);
		}
	}
);




/*

	var trash = document.createElement("i");
	trash.setAttribute("class", "fa fa-trash");
	trash.addEventListener("click", 
		function (){
			box.innerHTML = "";
		}
	);

	var checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	checkbox.appendChild(box);

*/