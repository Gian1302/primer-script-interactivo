const nombre = prompt("¿Cuál es tu nombre?");
const anioNacimientoTexto = prompt("¿En qué año naciste?");
const ciudad = prompt("¿En qué ciudad vives?");
const numeroFavoritoTexto = prompt("¿Cuál es tu número favorito?");

const anioNacimiento = parseInt(anioNacimientoTexto);
const numeroFavorito = parseFloat(numeroFavoritoTexto);

const anioActual = new Date().getFullYear();
const edad = anioActual - anioNacimiento;

let numeroFavoritoDuplicado = numeroFavorito * 2;
numeroFavoritoDuplicado = numeroFavoritoDuplicado + 10;

const saludo =
  "¡Hola, " + nombre + "! Tenés " + edad +
  " años y vivís en " + ciudad + ".";

const mensajeNumero =
  "Tu número favorito (" + numeroFavorito +
  ") duplicado y con el bonus es: " + numeroFavoritoDuplicado + ".";

  console.log(saludo);
console.log(mensajeNumero);

alert(saludo + "\n" + mensajeNumero);