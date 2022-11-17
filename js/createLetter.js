import { Letter } from "./Letter.js"

// let field = document.querySelector('.field');

const createLetter = () => {
    let letterObj = new Letter();

    let letterElem = document.createElement('div');
    letterElem.innerHTML = `${letterObj.letterChar}`;
    letterElem.classList.add(letterObj.fontClass);
    letterElem.classList.add('letter');
    letterElem.dataset.following = 'false';

    return letterElem;
}

// field.addEventListener('click', createLetter);
export default createLetter;