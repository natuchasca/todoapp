/**
 * Debo tomar los datos que se ingresen en el textarea
 * y enviarlos a un div con texto en la parte inferior de
 * la pagina al apretar el boton enviar
 * y evitar que se envie tarea en blanco (valor)
 */

var TaskManager = function() {
  this.tasks = [];
  this.localKey = 'task_manager_key';
};

TaskManager.prototype.addTask = function(title) {
  var task = {title: title, isCompleted: false, id: +new Date()};
  this.tasks.push(task);
  this.reloadTasks();
  
  return task;
};

TaskManager.prototype.reloadTasks = function() {
  localStorage.removeItem(this.localKey);
  localStorage.setItem(this.localKey, JSON.stringify(this.tasks));
};

TaskManager.prototype.loadTasks = function() {
  var tasks = JSON.parse(localStorage.getItem(this.localKey));

  if (tasks !== null) {
    this.tasks = tasks;
  }

  return this.tasks;
};

TaskManager.prototype.find = function(taskId){
  var index = 0;
  this.tasks.forEach(function(tarea, id) {
    if (tarea.id === taskId) {
      index = id;
    }
  });
  return index;
}

TaskManager.prototype.removeTask = function(taskId) {
  this.tasks.splice(this.find(taskId),1);
  this.reloadTasks();
};

TaskManager.prototype.setState = function(taskId, newState) {
  console.log(taskId, newState);
  this.tasks[this.find(taskId)].isCompleted = newState;
  this.reloadTasks();
  console.log(this.tasks);
};

var taskManager = new TaskManager();

// Función para limpiar input de tareas al enviar
function cleanInput() {
  var tarea = document.getElementById("inputtarea");
  tarea.value = "";
  tarea.focus();
}

function addNewTask(task) {
  var nuevaTarea = document.createElement("p");
  var contenido = document.createTextNode(task.title);
  
  // Creo la caja de tarea
  var box = document.getElementById("tareas");
  var nueva = document.createElement("div");

  nuevaTarea.innerHTML = task.title;
  nuevaTarea.setAttribute("class", "cajatexto");

  nueva.id=nueva;
  nueva.setAttribute("class", "cajastarea");

  // Creo trash y evento para borrar con confirmacion
  trash = document.createElement("i");
  trash.setAttribute("class", "fa fa-trash fa-lg pull-right mg-top toquedecolor");
  trash.addEventListener("click", function () {
    var borrar = document.getElementById("id");
    box = nueva.parentNode;
    if (confirm("¿Borrar esta tarea?")){
      taskManager.removeTask(nueva.getAttribute('data-id'));
      box.removeChild(nueva);
    }
  });
  
  // Creo Checkbox y evento para cambio de texto
  checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.addEventListener("click", function() {
    var tachar = document.getElementById("id");
    var check = this.checked;
    if (check) {
        nuevaTarea.innerHTML = task.title.strike(); 
    } else { 
      nuevaTarea.innerHTML = task.title;
    }
    taskManager.setState(this.parentNode.getAttribute('data-id'), check);
  });

  if (task.isCompleted) {
    checkbox.checked = true;
    nuevaTarea.innerHTML = task.title.strike();
  }

  nueva.setAttribute('data-id', task.id);
  nueva.appendChild(checkbox); // Agrego checkbox
  nueva.appendChild(nuevaTarea); // Agrego contenido de tarea
  nueva.appendChild(trash); // Agrego trash icon
  box.appendChild(nueva); // Agrego caja de tarea a listado de tareas
}

function onClick() {
  // Recojo valor con texto del input y creo tarea
  var tarea = document.getElementById("inputtarea").value;

  // Condición para no ingresar tarea vacia
  if (tarea == "") {
    alert("Debe ingresar una tarea a realizar");
  } else {
    var task = taskManager.addTask(tarea);
    // Añado la nueva tarea
    addNewTask(task);
    cleanInput(); // Llamo a la funcion clean para limpiar campo de texto
  }
}

document.addEventListener("DOMContentLoaded", function() {
  taskManager.loadTasks().forEach(function(task){
    addNewTask(task);
  });
});

document.getElementById("boton").addEventListener("click", onClick);
