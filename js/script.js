//ativar links do Menu

const links = document.querySelectorAll(".header-menu a");

function activeLink(link) {
  const url = window.location.href;
  const hrefMenuClicked = link.href;

  if (url.includes(hrefMenuClicked)) {
    link.classList.add("active");
  }
}

links.forEach(activeLink);

//Ativar itens do orçamento

function activeParams(paramsUrl) {
  const element = document.getElementById(paramsUrl);
  if (element) element.checked = true;
}

const paramUrl = new URLSearchParams(window.location.search);

paramUrl.forEach(activeParams);

// Perguntas Frenquetes

const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const response = document.getElementById(controls);

  response.classList.toggle("active");

  const active = response.classList.contains("active");

  pergunta.setAttribute("aria-expanded", active);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de Bicicleta
const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia("min-width: 1000px").matches;

  if (media) {
    galeriaContainer.prepend(img);
  }
}

function eventoGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeria.forEach(eventoGaleria);
