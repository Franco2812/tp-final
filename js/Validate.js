function cargarDatos() {
  let name = document.getElementById("name").value;
  let email = document.getElementById ("email").value;
  let phone = document.getElementById ("phone").value;
  let message = document.getElementById ("message").value;

  let tabla = document.getElementById("tablaFormulario");
  let fila = tabla.insertRow(tabla.length);
  let cName = fila.insertCell(0);
  let cEmail = fila.insertCell(1);
  let cPhone = fila.insertCell(2);
  let cMessage = fila.insertCell(3);
  cName.innerHTML = name;
  cEmail.innerHTML = email;
  cPhone.innerHTML = phone;
  cMessage.innerHTML = message;

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
  
} 




const btnEnviar = document.getElementById('btn-enviar');

const validación = (e) => {
  e.preventDefault();
  const nombreDeUsuario = document.getElementById('usuario');
  const direcciónEmail = document.getElementById('email');
  
if (usuario.value === "") {
   alert("Por favor, escribe tu nombre de usuario.");
    usuario.focus();
  return false;
  }
    
  if (email.value === "") {
   alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }

  if (!emailVálido(email.value)) {
    alert("Por favor, escribe un correo electrónico válido");
    emailAddress.focus();
    return false;
  }
  
  return true; Se pueden enviar los datos del formulario al servidor
}

const emailVálido = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


submitBtn.addEventListener('click', validate);

const enviar = document.getElementById("enviar");

enviar.addEventListener("click", validar);

