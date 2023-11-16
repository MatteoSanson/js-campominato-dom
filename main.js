'use strict';

function elementoCella(tag, className, content) {
    const element = document.createElement(tag);
    element.classList.add(className);
    element.append(content);

    return element;
}

function aggiungiEventoClick(element, clickedCells) {
    element.addEventListener('click', function() {
        if (!element.classList.contains('clicked')) {
            element.classList.add('clicked');
            const cellNumber = element.textContent;
            console.log('Cella cliccata:', cellNumber);
            clickedCells.push(cellNumber);
        }
    });
}

let grigliaGenerata = false;
let clickedCells = [];

const griglia = document.querySelector('.griglia');
const playButton = document.querySelector('.play');
const startMessage = document.querySelector('.start-message');

playButton.addEventListener('click', function() {
    startMessage.style.display = 'none';

    griglia.innerHTML = '';
    grigliaGenerata = false;
    clickedCells = [];

    if (!grigliaGenerata) {
        for (let i = 1; i <= 100; i++) {
            const mioElemento = elementoCella('div', 'cell', i);
            aggiungiEventoClick(mioElemento, clickedCells);
            griglia.append(mioElemento);
        }
        grigliaGenerata = true;
    }
});