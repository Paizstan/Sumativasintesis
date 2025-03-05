document.addEventListener("DOMContentLoaded", function () {
  const citasLink = document.getElementById("citasLink");
  const tiendaLink = document.getElementById("tiendaLink");
  const logoutButton = document.getElementById("logoutButton");
  const loginButton = document.getElementById("loginButton");
  const registerButton = document.getElementById("registerButton");

  function checkUserLoggedIn(event) {
    if (!localStorage.getItem("userLoggedIn")) {
      event.preventDefault();
      alert("Debe registrarse o iniciar sesión para acceder a esta sección.");
      return false;
    }
    return true;
  }

  if (citasLink) {
    citasLink.addEventListener("click", checkUserLoggedIn);
  }

  if (tiendaLink) {
    tiendaLink.addEventListener("click", checkUserLoggedIn);
  }

  if (logoutButton) {
    logoutButton.addEventListener("click", function () {
      localStorage.removeItem("userLoggedIn");
      alert("Sesión cerrada exitosamente.");
      updateUI();
    });
  }

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value.trim();
      const loginError = document.getElementById("loginError");

      console.log("Intentando iniciar sesión con:", email, password);

      const user = JSON.parse(localStorage.getItem(email));

      if (user && user.password === password) {
        alert(`Bienvenido, ${user.name}!`);
        localStorage.setItem("userLoggedIn", email);
        loginError.classList.add("d-none");
        loginForm.reset();

        var loginModal = bootstrap.Modal.getInstance(
          document.getElementById("loginModal")
        );
        if (loginModal) loginModal.hide();

        updateUI(); // Llamar a updateUI inmediatamente después de iniciar sesión

        setTimeout(() => {
        location.reload();
        }, 500); // Fuerza la recarga para actualizar la UI
      } else {
        loginError.classList.remove("d-none");
        console.log(
          "Error de inicio de sesión: usuario no encontrado o contraseña incorrecta."
        );
      }
    });
  }

  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("registerName").value.trim();
      const email = document.getElementById("registerEmail").value.trim();
      const password = document.getElementById("registerPassword").value.trim();
      const emailError = document.getElementById("emailError");

      console.log("Intentando registrar con:", name, email, password);

      if (localStorage.getItem(email)) {
        emailError.classList.remove("d-none");
        console.log("Error de registro: el correo ya está registrado.");
      } else if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        console.log("Error de registro: la contraseña es demasiado corta.");
      } else {
        localStorage.setItem(email, JSON.stringify({ name, password }));
        alert("Registro exitoso. Ahora puedes iniciar sesión.");
        registerForm.reset();
        emailError.classList.add("d-none");

        var registerModal = bootstrap.Modal.getInstance(
          document.getElementById("registerModal")
        );
        if (registerModal) registerModal.hide();
      }
    });
  }

  function updateUI() {
    const userLoggedIn = localStorage.getItem("userLoggedIn");

    if (logoutButton) {
      logoutButton.style.display = userLoggedIn ? "inline-block" : "none";
    }
    if (loginButton) {
      loginButton.style.display = userLoggedIn ? "none" : "inline-block";
    }
    if (registerButton) {
      registerButton.style.display = userLoggedIn ? "none" : "inline-block";
    }
  }

  updateUI();
});
