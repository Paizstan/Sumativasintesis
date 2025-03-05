document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("citaForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let valid = true;

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
      servicioError.textContent = "Por favor, seleccione un servicio.";
      servicio.classList.add("is-invalid");
    } else {
      servicioError.textContent = "";
      servicio.classList.remove("is-invalid");
    }
    if (!fecha.value) {
      valid = false;
      fechaError.textContent = "Por favor, seleccione una fecha.";
      fecha.classList.add("is-invalid");
    } else {
      fechaError.textContent = "";
      fecha.classList.remove("is-invalid");
    }
    if (!hora.value) {
      valid = false;
      horaError.textContent = "Por favor, seleccione una hora.";
      hora.classList.add("is-invalid");
    } else {
      horaError.textContent = "";
      hora.classList.remove("is-invalid");
    }
    if (!tipoMascota.value) {
      valid = false;
      tipoMascotaError.textContent = "Por favor, seleccione un tipo de mascota.";
      tipoMascota.classList.add("is-invalid");
    } else {
      tipoMascotaError.textContent = "";
      tipoMascota.classList.remove("is-invalid");
    }

    // Mostrar mensaje de éxito si el formulario es válido
    if (valid) {
      alert("¡Cita agendada con éxito!");
      form.reset(); // Limpiar formulario tras éxito
    }
  });
});
