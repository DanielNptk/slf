import createLetter from "./createLetter.js"
import letterArray from "./letterArray.js"

let field = document.querySelector('.field');
let fieldCoords = field.getBoundingClientRect();

let letterElem;

let top;
let left;

let difX = 0;
let difY = 0;

let posX = 0;
let posY = 0;

let req;

const letterHandler = (e) => {
    try {
        top = e.clientY - fieldCoords.top - field.clientTop - letterElem.clientHeight / 2;
        left = e.clientX - fieldCoords.left - field.clientLeft - letterElem.clientWidth / 2;
    } catch(err) {
        console.log(new Error('Letter element does not exist!'));
    }
}

function followSmooth() {
    if(top && left) {
        difX = top - posX;
        difY = left - posY;

        posX += (difX / 15);
        posY += (difY / 15);

        letterElem.style.top = posX + 'px';
        letterElem.style.left = posY + 'px';
    }

    req = requestAnimationFrame(followSmooth);
}

function stopFollowSmooth() {
    cancelAnimationFrame(req);
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
        }, 100);
    });    
}

const makeLetterFollow = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(field.addEventListener('mousemove', letterHandler));

            followSmooth();
        }, 800);
    })
    // .catch(console.log(new Error('There is no letter to make it follow you!')));
}

const placeLetter = () => {
    return new Promise((resolve) => {
        stopFollowSmooth();

        resolve(field.removeEventListener('mousemove', letterHandler));
    });
}

const letterControls = {
    spawnNewLetter,
    makeLetterFollow,
    placeLetter,
}

export default letterControls;