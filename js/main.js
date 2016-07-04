/* Debo tomar los datos que se ingresen en el textarea
y enviarlos a un div con texto en la parte inferior de 
la pagina al apretar el boton enviar
y evitar que se envie tarea en blanco (valor) */

document.getElementById("boton").addEventListener("click",
	function () {
	// Creo texto del input
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
	/*nueva.innerHTML="<span onclick='borrar(this)'><i class='fa fa-trash fa-lg pull-right'></i></span>"+"<input type='checkbox' class='pull-left'>"+tarea;
*/
	// Creo trash y evento para borrar
	trash = document.createElement("i");
	trash.setAttribute("class", "fa fa-trash fa-lg pull-right mg-top");
	trash.addEventListener("click", 
		function (){
	    confirm("borrarás esta tarea");
	    var borrar = document.getElementById("id");
	    box = nueva.parentNode;
	    box.removeChild(nueva);
	  }
	);
	
	// Creo Checkbox y cambio de texto
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
	
		if (tarea == "") {
			alert("Debe ingresar una tarea a realizar");
		}
		else {
			nueva.appendChild(checkbox); // Agrego checkbox
			nueva.appendChild(nuevaTarea); // Agrego contenido de tarea
			nueva.appendChild(trash); // Agrego trash icon
			box.appendChild(nueva); // Agrego caja de tarea a listado de tareas
		}
	}

);


/*
var inputBoxValue = getInputValue();
	if (inputBoxValue !== "") {
		doTarea(inputBoxValue);
		clean();
}
var clean = function() {
	var inputBox = document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}*/

// Al hacer click se borrara caja contenedora de trash
// al hacer click el texto del mismo contenedor se tachara 
 /*function find_tarea(contenido){
    var listaDeTareas = document.getElementById("tareas");
    for (var i=0; i<listaDeTareas.length; i++){
      if(listaDeTareas[i].innerHTML==contenido)
        return false;
    }
    return true;
  }*/

//Funciones para checkbox y delete icon 
	

/*	function tachado () {
		if(checkbox.checked){
			contenido.innerHTML=tarea.strike(); 
		}else{
			contenido.innerHTML=tarea;
		}
	};
*/

/* limpiar campo input */
/*


var clean = function() {
	var inputBox = document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}*/
	
/*
	
document.getElementsByTagName("i").addEventListener("click", 
		function (){
			nueva.removeChild(box);
		}
	);
borrar = 
*/
