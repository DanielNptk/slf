import { Letter } from "./Letter.js"

const createLetter = () => {
    let letterObj = new Letter();

    let letterElem = document.createElement('div');
    letterElem.innerHTML = `${letterObj.letterChar}`;
    letterElem.classList.add(letterObj.fontClass);
    letterElem.classList.add('letter');
    letterElem.dataset.following = 'false';

    return letterElem;
}

export default createLetter;