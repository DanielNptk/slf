import createLetter from "./createLetter.js"
import letterArray from "./letterArray.js"

let field = document.querySelector('.field');
let fieldCoords = field.getBoundingClientRect();

let letterElem;

let top;
let left;

const letterHandler = (e) => {
    try {
        top = e.clientY - fieldCoords.top - field.clientTop - letterElem.clientHeight / 2;
        left = e.clientX - fieldCoords.left - field.clientLeft - letterElem.clientWidth / 2;
        letterElem.style.top = top + 'px';
        letterElem.style.left = left + 'px';
    } catch(err) {
        console.log(new Error('Letter element does not exist!'));
    }
}

const spawnNewLetter = () => {
    return new Promise((resolve) => {
        letterElem = createLetter();
        letterArray.push(letterElem);

        setTimeout(() => {
            letterElem.animate([{opacity: 0}, {opacity: 1}], {
                duration: 200,
                easing: 'linear'
            });
    
            resolve(field.append(letterElem));
    
            console.log(letterArray);
        }, 200);
    });    
}

const makeLetterFollow = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(field.addEventListener('mousemove', letterHandler));
        }, 800);
    }).catch(console.log(new Error('There is no letter to make it follow you!')));
}

const placeLetter = () => {
    return new Promise((resolve) => {
        resolve(field.removeEventListener('mousemove', letterHandler));
    });
}

const letterControls = {
    spawnNewLetter,
    makeLetterFollow,
    placeLetter,
}

export default letterControls;