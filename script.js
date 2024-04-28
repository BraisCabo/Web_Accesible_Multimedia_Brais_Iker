document.addEventListener("DOMContentLoaded", function () {
  const videoElement = document.getElementById("video");
  const audioElement = document.getElementById("audioDescripcion");
  audioElement.volume = 0

  videoElement.addEventListener("pause", function () {
    // Pausa el audio cuando el video se pausa
    audioElement.pause();
  });

  videoElement.addEventListener("play", function () {
    // Reinicia el audio cuando el video se reproduce
    if (audioElement.paused) {
      audioElement.play();
    }
  });

  // Control para alternar la descripción de audio
  const toggleButton = document.querySelector("button");
  toggleButton.addEventListener("click", function () {
    const audioDesc = document.getElementById("audioDescripcion");
    if (audioDesc.volume > 0) {
      audioDesc.volume = 0;
      this.textContent = "Activar Descripción por audio";
    } else {
      audioDesc.volume = 1;
      this.textContent = "Desactivar Descripción por audio";
    }
  });
});

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Previene el envío real para demostración
  var nombre = document.getElementById("nombre").value; // Obtiene el nombre del input
  var email = document.getElementById("email").value; // Obtiene el email del input
  var postal = document.getElementById("postal").value; // Obtiene la postal seleccionada del select

  // Construye un mensaje personalizado
  var mensaje =
    "Gracias " +
    nombre +
    ", tu postal de '" +
    postal +
    "' ha sido enviada a " +
    email +
    " !";

  // Establece el mensaje en el contenedor y lo muestra
  document.getElementById("mensajeEnvio").textContent = mensaje;
  document.getElementById("mensajeEnvio").style.display = "block";
});
