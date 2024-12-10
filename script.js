document.getElementById("botonEnviar").addEventListener("click", function () {
  var nombre = document.getElementById("nombre").value;
  var edad = document.getElementById("edad").value;
  var genero = document.getElementById("genero").value;
  var universidad = document.getElementById("universidad").value;
  var carrera = document.getElementById("carrera").value;
  var semestre = document.getElementById("semestre").value;
  var materia = document.getElementById("materia").value;
  var trabaja = document.getElementById("trabaja").value;
  var elementoResultado = document.getElementById("resultado");
  var mensaje;

  // Validar edad
  if (isNaN(edad) || edad <= 0) {
    mensaje = "Por favor, introduce una edad válida.";
  } else {
    if (genero === "masculino") {
      mensaje = edad < 18 ? "Hola, joven " + nombre + " ¿Cómo se encuentra?" : "Hola, señor " + nombre + " ¿Cómo se encuentra?";
    } else if (genero === "femenino") {
      mensaje = edad < 18 ? "Hola, joven señorita " + nombre + " ¿Cómo se encuentra?" : "Hola, señora " + nombre + " ¿Cómo se encuentra?";
    } else {
      mensaje = "Hola, " + nombre + " ¿Cómo se encuentra?";
    }
    if (edad >= 60) {
      mensaje += " ¡Felicidades por la sabiduría que los años traen!";
    } else if (edad >= 18) {
      mensaje += " Estás en una gran etapa de tu vida, ¡aprovéchala!";
    } else {
      mensaje += " Recuerda siempre disfrutar y aprender cada día.";
    }
  }

  // Construir el contenido de resultados
  var formularioResultados = "<h3>Resultados</h3>";
  formularioResultados += "<p><strong>Nombre:</strong> " + nombre + "</p>";
  formularioResultados += "<p><strong>Edad:</strong> " + edad + "</p>";
  formularioResultados += "<p><strong>Género:</strong> " + genero + "</p>";
  formularioResultados += "<p><strong>Universidad:</strong> " + universidad + "</p>";
  formularioResultados += "<p><strong>Carrera:</strong> " + carrera + "</p>";
  formularioResultados += "<p><strong>Semestre:</strong> " + semestre + "</p>";
  formularioResultados += "<p><strong>Materia Favorita:</strong> " + materia + "</p>";
  formularioResultados += "<p><strong>¿Trabaja actualmente?:</strong> " + trabaja + "</p>";
  formularioResultados += "<p><strong>Mensaje:</strong> " + mensaje + "</p>";

  // Mostrar los resultados en el contenedor
  elementoResultado.innerHTML = formularioResultados;
});
