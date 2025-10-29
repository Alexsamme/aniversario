// Referencia al audio
const musica = document.getElementById("musicaFondo");
musica.volume = 0.3; // volumen moderado

// Mostrar álbum
document.getElementById("abrirAlbum").addEventListener("click", function() {
  document.getElementById("portada").classList.remove("active");
  document.getElementById("album").classList.add("active");

  // reproducir música
  musica.play().catch(() => {
    console.log("El navegador bloqueó la reproducción automática.");
  });
});

// Volver a portada
document.getElementById("volver").addEventListener("click", function() {
  document.getElementById("album").classList.remove("active");
  document.getElementById("portada").classList.add("active");
  musica.pause();
});

// Slideshow
let slideIndex = 1;
mostrarSlide(slideIndex);

function cambiarSlide(n) {
  mostrarSlide(slideIndex += n);
}

function mostrarSlide(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Contador hacia el aniversario (29-10-2025)
const fechaObjetivo = new Date("October 29, 2025 00:00:00").getTime();

setInterval(() => {
  const ahora = new Date().getTime();
  const distancia = fechaObjetivo - ahora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("tiempo").innerHTML =
    `${dias}d ${horas}h ${minutos}m ${segundos}s`;

  if (distancia < 0) {
    document.getElementById("tiempo").innerHTML = "🎉 ¡Ya cumplimos 2 años! 💖";
  }
}, 1000);
