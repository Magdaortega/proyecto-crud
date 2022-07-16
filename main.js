//Estoy creando una función que me permita agregar tareas
let app = new function() {
  this.el = document.getElementById('tasks');

  this.tasks = [];

  //quiero agregar botones para editar y borrar la información de tareas ingresadas
  
  this.FetchAll = function() {
    let data = '';

    if (this.tasks.length > 0) {
      for (i = 0; i < this.tasks.length; i++) {
        data += '<tr>';
        data += '<td>'+(i+1)+". " + this.tasks[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
        data += '</tr>';
      }
    }

    this.Count(this.tasks.length);
    return this.el.innerHTML = data;
  };

  this.Add = function () {
    el = document.getElementById('add-todo');
    //en esta función estoy obteniendo el valor que fue ingresado en la tarea.
    var task = el.value;

    if (task) {
      this.tasks.push(task.trim());
      //Estoy agregando la posibilidad de editar el input agregado
      el.value = '';
      this.FetchAll();
    }
  };
//estoy agregando una funcionalidad que me permita al apretar el botón de aditar, que se traslade la tarea a un cuadro de texto para poder hacerlo.
  this.Edit = function (item) {
    var el = document.getElementById('edit-todo');
    el.value = this.tasks[item];
    document.getElementById('edit-box').style.display = 'block';
    self = this;

    document.getElementById('save-edit').onsubmit = function() {
      var task = el.value;

      if (task) {
        self.tasks.splice(item, 1, task.trim());
        self.FetchAll();
        CloseInput();
      }
    }
  };
//Estoy agregando la funcionalidad de borrar tareas que ya no quiero en mi tablero.
  this.Delete = function (item) {
    this.tasks.splice(item, 1);
    this.FetchAll();
  };
//estoy creando un contador de tareas ingresadas para saber cuantas tareas pendientes tengo
  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'Tasks';

    if (data) {
        if(data ==1){
            name = 'Task'
        }
      el.innerHTML = data + ' ' + name ;
    } 
    else {
      el.innerHTML = 'No ' + name;
    }
  };
  
}

app.FetchAll();

function CloseInput() {
  document.getElementById('edit-box').style.display = 'none';
}