let lista = document.getElementById("listica");
let busqueda = document.getElementById("busqueda");
let personas = JSON.parse(localStorage.getItem("Personas")) || [];
let listica = "";
let listado = "";
let contador = {};
let rowArea;
let crear = document.getElementById("crear");
let ultimaArea = ""; // Inicializamos la variable que guardará el último valor de área impreso

personas.forEach((element) => {
  rowArea = element.area;
  contador[rowArea] = (contador[rowArea] || 0) + 1;
});

const crearTabla = (element) => {
  const numPersonas = contador[element.area];
  const row = document.createElement("tr");
  let cell = document.createElement("td");
  row.style.textAlign = "center";
  cell.setAttribute("rowspan", numPersonas);
  if (element.area !== ultimaArea) {
    // Comprobamos si el área actual es igual a la última impresa
    cell.innerHTML = element.area;
    ultimaArea = element.area; // Actualizamos el valor de última área impresa
    row.appendChild(cell);
  }

  cell = document.createElement("td");
  cell.innerText = element.fullName;
  row.appendChild(cell);
  cell = document.createElement("td");
  cell.innerText = element.usuario;
  row.appendChild(cell);
  cell = document.createElement("td");
  cell.innerText = element.email;
  row.appendChild(cell);
  cell = document.createElement("td");
  cell.innerText = element.edad;
  row.appendChild(cell);
  lista.appendChild(row);
};

personas.forEach((element) => {
  crearTabla(element);
});

busqueda.addEventListener("input", (e) => {
  lista.innerHTML = "";
  let persona = personas.filter((persona) =>
    persona.usuario.includes(e.target.value)
  );
  persona.forEach(el =>{
    if (e.target.value.length ) {
      persona.forEach((element) => {
        crearTabla(element);
      });
    }
  })
  

});

crear.addEventListener("click", () => {
  location.href = "../Page 2/index.html";
});
