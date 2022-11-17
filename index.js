import letterControls from "./js/letterControls.js"
import letterArray from "./js/letterArray.js"

let field = document.querySelector('.field');

async function constrolLetter() {
    if(letterArray.length) await letterControls.placeLetter();
    await letterControls.spawnNewLetter();
    await letterControls.makeLetterFollow();
};

field.addEventListener('click', constrolLetter);