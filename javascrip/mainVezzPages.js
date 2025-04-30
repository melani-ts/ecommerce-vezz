

window.addEventListener("load", () => {
  const audio = document.getElementById("miAudio");
  audio.volume = 0.01;
  audio.play().catch(error => {
    console.log("Reproducción automática bloqueada por el navegador:", error);
  });
});

function irATienda() {
  window.location.href = 'pages/tienda.html';
}

function irAOfertas() {
  window.location.href = '#ofertas';
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn11').addEventListener('click', irATienda);
  document.getElementById('btn21').addEventListener('click', irAOfertas);
});
