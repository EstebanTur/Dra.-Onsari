const circleContainer = document.querySelector(".circle-container");
const botonCircle = circleContainer.querySelector(".circle");
const mainDiv = document.querySelector(".main");
const header = document.querySelector("header");
const toggler = document.querySelector(".navbar-toggler");
// const reveals = document.querySelectorAll(".reveal");
let container = null;
let paragraph = null;

let isParagraphVisible = false;

botonCircle.addEventListener("touchstart", (e) => {
  e.preventDefault();
  if (isParagraphVisible) {
    container.remove();
    paragraph.remove();
    isParagraphVisible = false;
    document.querySelector("body").style.filter = "";
    mainDiv.classList.remove("blur-container");
  } else {
    // Crear un contenedor para el párrafo y agregar clase
    container = document.createElement("div");
    container.classList.add("div-popup");

    // Crear un párrafo y agregar contenido con un enlace
    paragraph = document.createElement("p");
    paragraph.classList.add("div-popup-p");
    const link = document.createElement("a");
    link.classList.add("div-popup-a");
    link.href = "https://wa.me/541134051002";
    link.textContent = "Reserva tu turno";
    paragraph.appendChild(link);
    // Establecer estilos para el contenedor
    container.classList.add("container-turno");

    // Establecer estilos para el párrafo
    link.classList.add("parrafo-turno");

    // Agregar el párrafo al contenedor y el contenedor al DOM
    container.appendChild(paragraph);
    document.body.appendChild(container);
    isParagraphVisible = true;
    mainDiv.classList.add("blur-container");
  }
});
//Agregar reveal a los H1 y P
// document.querySelectorAll("h1, p").forEach((element) => {
//   element.classList.add("reveal");
// });
//Revelar contenido al scrollear
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

//Efecto vidrio al tocar el toggler
let vidriado = false;
header.addEventListener("touchstart", () => {
  console.log("hola");
  if (!vidriado) {
    header.classList.add(".vidrio");
    header.style.boxShadow = "  0 4px 30px rgba(0, 0, 0, 0.1) ";
    console.log("chau");
    vidriado = true;
  } else {
    console.log("otra");
    header.style.boxShadow = "none ";
    vidriado = false;
  }
});
//Scroll y desaparicion del corazonn

mainDiv.addEventListener("touchmove", (e) => {
  circleContainer.style.transition = "opacity 0.5s";
  circleContainer.style.opacity = "0.1";

  console.log("hola move");
});
mainDiv.addEventListener("touchend", (e) => {
  circleContainer.style.opacity = "0.9";
  console.log(" move out");
});
// function reveal() {
//   for (let i = 0; i < reveals.length; i++) {
//     const windowHeight = window.innerHeight;
//     const elementTop = reveals[i].getBoundingClientRect().top;
//     const elementVisible = 150;
//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }
// window.addEventListener("scroll", reveal);

// // To check the scroll position on page load
// reveal();

// botonCircle.addEventListener("touchstart", (e) => {
//   e.preventDefault();
//   botonCircle.classList.add("newCircle");
//   document.querySelector("main").style.filter = "blur(2px)";
//   document.body.style.zIndex = "-1";

//   // Mover el botón al centro de la pantalla
//   turnoText = document.createElement("div");

//   turnoText.textContent = "Saque turno";
//   turnoText.classList.add("turno");
//   turnoText.style.position = "fixed";
//   turnoText.style.top = "50%";
//   turnoText.style.left = "50%";
//   turnoText.style.transform = "translate(-50%, -50%) scale(0)";
//   turnoText.style.opacity = "0";
//   turnoText.style.zIndex = "99";
//   document.body.appendChild(turnoText);

//   // Animación de entrada del texto
//   botonCircle.style.transition = "all 0.5s ease";
//   turnoText.style.transition = "all 0.5s ease";
//   setTimeout(() => {
//     botonCircle.style.transform = "translate(-250%, -250%)";
//     turnoText.style.transform = "translate(-50%, -50%) scale(1)";
//     botonCircle.style.opacity = "1";
//     turnoText.style.opacity = "1";
//   }, 500);
// });
