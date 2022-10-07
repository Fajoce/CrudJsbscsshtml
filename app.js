document.getElementById("formulario").addEventListener("submit", crear)

function crear(e){
    nombre = document.getElementById("nombre").value
    apellido = document.getElementById("apellido").value
    edad = document.getElementById("edad").value;
    fecha = document.getElementById("fecha").value

    let student =  {
        nombre, apellido, edad,fecha
    }
  debugger;
   if(localStorage.getItem("Estudiantes") === null){
        let estudiantes = [];
        estudiantes.push(student);
        localStorage.setItem("Estudiantes", JSON.stringify(estudiantes))
    } else{
        let estudiantes = JSON.parse(localStorage.getItem("Estudiantes"))
        estudiantes.push(student)
        localStorage.setItem("Estudiantes", JSON.stringify(estudiantes))
      
    }
    
    leer();
    document.getElementById("formulario").reset();
    e.preventDefault();
    
    console.log("Estudiante Guardado Correctamente")
}

function leer(){
let estudiantes = JSON.parse(localStorage.getItem("Estudiantes"));
document.getElementById("tbody").innerHTML ="";
for(let i=0; i < estudiantes.length; i++){
let nombre = estudiantes[i].nombre;
let apellido = estudiantes[i].apellido;
let edad = estudiantes[i].edad;
let fecha = estudiantes[i].fecha;
document.getElementById("tbody").innerHTML +=
`<tr>
<td>${nombre}</td>
<td>${apellido}</td>
<td>${edad}</td>
<td>${fecha}</td>
<td><button class="btn btn-success" onclick="Editar('${nombre}')">Edit</button>
<button class="btn btn-danger" onclick="eliminar('${nombre}')">Delete</button></td>
`
}
}
leer();

function Editar(nombre){
  var div = document.getElementById("body");
let estudiantes = JSON.parse(localStorage.getItem("Estudiantes"));
for(let i= 0; i < estudiantes.length; i++){
    if(estudiantes[i].nombre === nombre){
        document.getElementById("body").innerHTML = `
        <div class="container mt-4" id="body">
        <div class="card col-6 d-flex justify-content-center">
            <div class="card-body">
        <div class="card-body">
            <form id="formulario">
          <h5 class="card-title">Editar Estudiantes</h5>
          <p class="card-text">Insertar</p>
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="text" class="form-control" id="nnombre" value="${estudiantes[i].nombre}">
          </div>
          <div class="mb-3">
            <label for="apellido" class="form-label">Apellido</label>
            <input type="text" class="form-control" id="napellido" value="${estudiantes[i].apellido}">
          </div>
          <div class="mb-3">
            <label for="edad" class="form-label">Edad</label>
            <input type="number" class="form-control" id="nedad" value="${estudiantes[i].edad}">
          </div>
          <div class="mb-3">
            <label for="fecha" class="form-label">Fecha</label>
            <input type="date" class="form-control" id="nfecha" value="${estudiantes[i].fecha}">
          </div>
          <div class="mb-3">
          <td><button class="btn btn-success" onclick="actualizar('${i}')">Actualizar</button></td>
          <td><button class="btn btn-danger">Cancelar</button></td> 
          </div>
        </form>
        </div>
      </div>
    </div>
        `
        }
        div.style = 'block';
}
}

function actualizar(i){  
    let estudiantes = JSON.parse(localStorage.getItem("Estudiantes"));
    estudiantes[i].nombre = document.getElementById('nnombre').value;
    estudiantes[i].apellido = document.getElementById('napellido').value;
    estudiantes[i].edad = document.getElementById('nedad').value;
    estudiantes[i].fecha = document.getElementById('nfecha').value;
    localStorage.setItem("Estudiantes", JSON.stringify(estudiantes));
}

//Eliminar

function eliminar(nombre){
    let estudiantes = JSON.parse(localStorage.getItem("Estudiantes"));
    for(let i= 0; i < estudiantes.length; i++){
        if(estudiantes[i].nombre == nombre){
            estudiantes.splice(i,1);
            alert('Dato eliminado Correctamente')
        }
    } 
    localStorage.setItem("Estudiantes", JSON.stringify(estudiantes));
    leer();
}

