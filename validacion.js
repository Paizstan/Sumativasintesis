document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("citaForm");
  const mensajesDiv = document.createElement("div");
  mensajesDiv.id = "mensajesDiv";
  form.appendChild(mensajesDiv);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    mensajesDiv.innerHTML = ""; // Limpiar mensajes previos
    let valid = true;
    let messages = [];

    const servicio = document.getElementById("servicio");
    const fecha = document.getElementById("fecha");
    const hora = document.getElementById("hora");
    const tipoMascota = document.getElementById("tipoMascota");

    const servicioError = document.getElementById("servicioError");
    const fechaError = document.getElementById("fechaError");
    const horaError = document.getElementById("horaError");
    const tipoMascotaError = document.getElementById("tipoMascotaError");

    if (!servicio.value) {
      valid = false;
      messages.push("Debe seleccionar un servicio.");
      servicioError.textContent = "Por favor, seleccione un servicio.";
      servicio.classList.add("is-invalid");
    } else {
      servicioError.textContent = "";
      servicio.classList.remove("is-invalid");
    }
    if (!fecha.value) {
      valid = false;
      messages.push("Debe seleccionar una fecha válida.");
      fechaError.textContent = "Por favor, seleccione una fecha.";
      fecha.classList.add("is-invalid");
    } else {
      fechaError.textContent = "";
      fecha.classList.remove("is-invalid");
    }
    if (!hora.value) {
      valid = false;
      messages.push("Debe seleccionar un horario válido.");
      horaError.textContent = "Por favor, seleccione una hora.";
      hora.classList.add("is-invalid");
    } else {
      horaError.textContent = "";
      hora.classList.remove("is-invalid");
    }
    if (!tipoMascota.value) {
      valid = false;
      messages.push("Debe seleccionar el tipo de mascota.");
      tipoMascotaError.textContent =
        "Por favor, seleccione un tipo de mascota.";
      tipoMascota.classList.add("is-invalid");
    } else {
      tipoMascotaError.textContent = "";
      tipoMascota.classList.remove("is-invalid");
    }

    // Mostrar mensajes de error o éxito
    if (!valid) {
      messages.forEach((msg) => {
        const p = document.createElement("p");
        p.textContent = msg;
        p.style.color = "red";
        mensajesDiv.appendChild(p);
      });
    } else {
      mensajesDiv.innerHTML =
        "<p style='color: green;'>¡Cita agendada con éxito!</p>";
      form.reset(); // Limpiar formulario tras éxito
    }
  });
});
