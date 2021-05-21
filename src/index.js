import cuadro1_jpeg from './assets/pictures/cuadro1.jpeg';

console.log("LALALALA");

const mainDiv = document.querySelector('#main');

const subH1 = document.createElement('h1');
subH1.textContent = 'THIS IS THE SHIT!!';

const cuadro1 = document.createElement('img');
cuadro1.src = cuadro1_jpeg;

mainDiv.appendChild(subH1);
mainDiv.appendChild(cuadro1);
