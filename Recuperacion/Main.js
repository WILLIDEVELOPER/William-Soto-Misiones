let url = "https://jsonplaceholder.typicode.com/users";

const getUsers = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  return data;
};
getUsers(url)
  .then((data) => {
    localStorage.setItem("Usuarios", JSON.stringify(data));
  })
  .catch((error) => {
    console.error(error);
  });

let users = JSON.parse(localStorage.getItem("Usuarios"));
let email = document.getElementById("email");
let username = document.getElementById("user");
let log = document.getElementById("login");
let modal = document.getElementById("modal");
let closeM = document.getElementById("close");
let mensaje = document.getElementById("mensaje");
let emailRes = document.getElementById("respuesta");
let usuarioRes = document.getElementById("respuestaU");

log.addEventListener(
  "click",
  () => {
    let usuario = users.find((el) => el.username == username.value);
    let setEmail = users.find((el) => el.email == email.value);

    if (usuario && setEmail) {
      location.href = "./Pagina2.html"
    } else {
      modal.hidden = false;
      if (!usuario) {
        mensaje.innerHTML = `El Nombre de Usuario identificado como:  <span class=" font-extrabold underline text-2xl"> ${username.value}</span>  no existe, Por favor digite un nombre de usuario valido`;
        username.style.borderColor = "red";
        usuarioRes.hidden = false;
        usuarioRes.innerHTML = "Usuario Incorrecto";
        usuarioRes.style.color = "red";
        email.style.borderColor = "";
        emailRes.hidden = true;
      } else if (!setEmail) {
        mensaje.innerHTML = `El Correo identificado como:  <span class=" font-extrabold underline text-2xl"> ${email.value}</span>  no existe, Por favor digite un nombre de usuario valido`;
        email.style.borderColor = "red";
        emailRes.hidden = false;
        emailRes.innerHTML = "Email Incorrecto";
        emailRes.style.color = "red";
        username.style.borderColor = "";
        usuarioRes.hidden = true;
      }
    }

    closeM.addEventListener("click", () => {
      modal.hidden = true;
    });
  }
  //   });
);
