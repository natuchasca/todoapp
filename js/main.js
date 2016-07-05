/* Debo tomar los datos que se ingresen en el textarea
y enviarlos a un div con texto en la parte inferior de 
la pagina al apretar el boton enviar
y evitar que se envie tarea en blanco (valor) */

document.getElementById("boton").addEventListener("click",
	function () {
	// Recojo valor con texto del input y creo tarea
	var tarea = document.getElementById("inputtarea").value;
	var nuevaTarea = document.createElement("p");
	var contenido = document.createTextNode(tarea);
	nuevaTarea.innerHTML = tarea;
	nuevaTarea.setAttribute("class", "cajatexto");

	// Creo la caja de tarea
	var box = document.getElementById("tareas");
	var nueva = document.createElement("div");
	nueva.id=nueva;
	nueva.setAttribute("class", "cajastarea");

	// Creo trash y evento para borrar con confirmacion
	trash = document.createElement("i");
	trash.setAttribute("class", "fa fa-trash fa-lg pull-right mg-top toquedecolor");
	trash.addEventListener("click", 
		function (){
	    var borrar = document.getElementById("id");
	    box = nueva.parentNode;
	    if (confirm("¿Borrar esta tarea?")){
	        box.removeChild(nueva);
	    } 
	  }
	);
	
	// Creo Checkbox y evento para cambio de texto
	checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	checkbox.addEventListener("click", 
		function () {
			var tachar = document.getElementById("id");
			if(this.checked){
		      nuevaTarea.innerHTML = tarea.strike(); 
		    }else{ 
		      nuevaTarea.innerHTML = tarea;
		    }
		}
	);
	// Condición para no ingresar tarea vacia
		if (tarea == "") {
			alert("Debe ingresar una tarea a realizar");
		}
		else {
			nueva.appendChild(checkbox); // Agrego checkbox
			nueva.appendChild(nuevaTarea); // Agrego contenido de tarea
			nueva.appendChild(trash); // Agrego trash icon
			box.appendChild(nueva); // Agrego caja de tarea a listado de tareas
			cleaninput(); // Llamo a la funcion clean para limpiar campo de texto
		}
	}

);


// Función para limpiar input de tareas al enviar
var cleaninput = function() {
	var tarea = document.getElementById("inputtarea");
	tarea.value = "";
	tarea.focus();
}