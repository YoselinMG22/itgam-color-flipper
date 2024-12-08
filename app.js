const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Obteniendo control del botón y del span
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Agregando el event listener para cambiar el color
btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  const colorPicked = colors[randomNumber];
  document.body.style.backgroundColor = colorPicked;
  color.textContent = colorPicked;
});

// Función para generar un número aleatorio
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}