let enviar = document.getElementById("enviar");
let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let area = document.getElementById("area");
let usuario = document.getElementById("usuario");
let edad = document.getElementById("edad");
let direccion = document.getElementById("direccion");
let email = document.getElementById("email");
let validacion = false;
let person = {};
let personas = JSON.parse(localStorage.getItem("Personas")) || [];

class Persona {
  nombre;
  apellido;
  area;
  usuario;
  edad;
  email;

  constructor(nombre, apellido, area, usuario, edad, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.area = area;
    this.usuario = usuario;
    this.edad = edad;
    this.email = email;
  }

  validar() {
    if (
      this.nombre == "" ||
      this.apellido == "" ||
      this.area == "" ||
      this.usuario == "" ||
      this.edad == "" ||
      this.email == ""
    ) {
      return false;
    } else {
      return true;
    }
  }
  fullName() {
    return this.nombre + " " + this.apellido;
  }
}

enviar.addEventListener("click", () => {
    person = new Persona(
      nombre.value,
      apellido.value,
      area.value,
      usuario.value,
      edad.value,
      email.value
    );
  
    validacion = person.validar();
    if (validacion) {
      person.fullName = person.fullName();
      personas.push(person);
      console.log(personas);
  
      nombre.value = "";
      apellido.value = "";
      area.value = "";
      usuario.value = "";
      edad.value = "";
      direccion.value = "";
      email.value = "";
  
      localStorage.setItem("Personas", JSON.stringify(personas));
    } else {
      alert("Ingrese todos los campos");
    }
  });
  