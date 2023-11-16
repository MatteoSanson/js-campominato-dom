'use strict';

function elementoCella(tag, classNames, content) {
    const element = document.createElement(tag);
    classNames.forEach(className => element.classList.add(className));
    element.append(content);

    return element;
}

function aggiungiEventoClick(element, clickedCells) {
    element.addEventListener('click', function () {
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
const levelSelect = document.getElementById('level');

playButton.addEventListener('click', function () {
    startMessage.style.display = 'none';

    griglia.innerHTML = '';
    grigliaGenerata = false;
    clickedCells = [];

    const selectedLevel = levelSelect.value;

    let cellClass;
    let targetCellCount;

    switch (selectedLevel) {
        case 'livello1':
            cellClass = 'cell-1';
            targetCellCount = 100;
            break;
        case 'livello2':
            cellClass = 'cell-2';
            targetCellCount = 81;
            break;
        case 'livello3':
            cellClass = 'cell-3';
            targetCellCount = 49;
            break;
        default:
            cellClass = 'cell-1';
            targetCellCount = 100;
            break;
    }

    if (!grigliaGenerata) {
        let i = 1;
        while (document.querySelectorAll(`.${cellClass}`).length < targetCellCount) {
            const mioElemento = elementoCella('div', ['cell', cellClass], i);
            aggiungiEventoClick(mioElemento, clickedCells);
            griglia.append(mioElemento);
            i++;
        }
        grigliaGenerata = true;
    }
});