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
      
      if (!servicio.value) {
          valid = false;
          messages.push("Debe seleccionar un servicio.");
      }
      if (!fecha.value) {
          valid = false;
          messages.push("Debe seleccionar una fecha válida.");
      }
      if (!hora.value) {
          valid = false;
          messages.push("Debe seleccionar un horario válido.");
      }
      if (!tipoMascota.value) {
          valid = false;
          messages.push("Debe seleccionar el tipo de mascota.");
      }

      // Mostrar mensajes de error o éxito
      if (!valid) {
          messages.forEach(msg => {
              const p = document.createElement("p");
              p.textContent = msg;
              p.style.color = "red";
              mensajesDiv.appendChild(p);
          });
      } else {
          mensajesDiv.innerHTML = "<p style='color: green;'>¡Cita agendada con éxito!</p>";
          form.reset(); // Limpiar formulario tras éxito
      }
  });
});
