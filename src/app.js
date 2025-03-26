import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//variables
const palo =['♦','♥','♠','♣']
const valor =['A','2','3','4','5','6','7','8','9','10','J','Q','K']
const cardHeader = document.querySelector('#card-header')
const cardBody = document.querySelector('#card-body')
const cardFooter = document.querySelector('#card-footer')
const cardButton = document.querySelector('#card-button')
//funciones
const numRandom = (arr) => {
  return Math.floor(Math.random ()* arr.length)
}
const extraerValor = (arr) => {
  return arr[numRandom(arr)]
}

const generarCarta = (arrPalos,arrValor) => {
  const valorRandom = extraerValor(valor);
  const paloRandom = extraerValor(palo);

// Limpiar clases anteriores
   cardHeader.classList.remove('rojo', 'negro');
   cardFooter.classList.remove('rojo', 'negro');


// Aplicar las clases de color según el palo
  if (paloRandom === '♠' || paloRandom === '♣') {
    cardHeader.classList.add('negro');
    cardFooter.classList.add('negro');
  } else {
    cardHeader.classList.add('rojo');
    cardFooter.classList.add('rojo');
  }

  cardHeader.textContent = paloRandom;
  cardBody.textContent = valorRandom;
  cardFooter.textContent = paloRandom;
}

cardButton.addEventListener('click', () => {
  generarCarta(palo, valor);
})

window.onload = function() {
  cardHeader.classList.add('rojo');
  cardBody.classList.add('negro');
  cardFooter.classList.add('rojo')
};

cardButton.addEventListener('click', () => {
  generarCarta(palo, valor);
})
