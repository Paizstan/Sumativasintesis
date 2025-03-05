document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactoForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");

    const nombreError = document.getElementById("nombreError");
    const emailError = document.getElementById("emailError");
    const mensajeError = document.getElementById("mensajeError");

    if (!nombre.value) {
      valid = false;
      nombreError.textContent = "Por favor, ingrese su nombre.";
      nombre.classList.add("is-invalid");
    } else {
      nombreError.textContent = "";
      nombre.classList.remove("is-invalid");
    }
    if (!email.value) {
      valid = false;
      emailError.textContent = "Por favor, ingrese su email.";
      email.classList.add("is-invalid");
    } else {
      emailError.textContent = "";
      email.classList.remove("is-invalid");
    }
    if (!mensaje.value) {
      valid = false;
      mensajeError.textContent = "Por favor, ingrese su mensaje.";
      mensaje.classList.add("is-invalid");
    } else {
      mensajeError.textContent = "";
      mensaje.classList.remove("is-invalid");
    }

    // Mostrar mensaje de éxito si el formulario es válido
    if (valid) {
      alert("Mensaje enviado con éxito. ¡Gracias por contactarnos!");
      form.reset(); // Limpiar formulario tras éxito
    }
  });
});
