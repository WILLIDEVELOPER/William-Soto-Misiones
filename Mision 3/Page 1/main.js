let lista = document.getElementById("listica");
let busqueda = document.getElementById("busqueda");
let personas = JSON.parse(localStorage.getItem("Personas"));
let listica = "";
let listado = "";
personas.sort((a, b) => a.area.localeCompare(b.area));
personas.forEach((element) => {
  for (const key in element) {
    listado = `<tr class='text-center text-black font-bold'><td class='px-6 py-4 whitespace-nowrap'>${element["area"]}</td><td class='px-6  py-4 whitespace-nowrap'>${element["fullName"]}</td><td class='px-6 py-4 whitespace-nowrap'>${element["usuario"]}</td><td class='px-6 py-4 whitespace-nowrap text-red-600'>${element["email"]}</td><td class='px-6 py-4 whitespace-nowrap  font-medium'>${element["edad"]}</td></tr>`;
  }
  listica += listado;
});
if (listica) {
  lista.innerHTML = listica;
}

busqueda.addEventListener("input", (e) => {
  let usuario = personas.filter((persona) =>
    persona.usuario.includes(e.target.value)
  );
  usuario.forEach((element) => {
    for (const key in element) {
      listado = `<tr class='text-center text-black font-bold'><td class='px-6 py-4 whitespace-nowrap'>${element["area"]}</td><td class='px-6  py-4 whitespace-nowrap'>${element["fullName"]}</td><td class='px-6 py-4 whitespace-nowrap'>${element["usuario"]}</td><td class='px-6 py-4 whitespace-nowrap text-red-600'>${element["email"]}</td><td class='px-6 py-4 whitespace-nowrap  font-medium'>${element["edad"]}</td></tr>`;
    }
  });
  if (e.target.value.length > 0) {
    if (listado) {
      lista.innerHTML = listado;
    }
  } else {
    lista.innerHTML = listica;
  }
});
