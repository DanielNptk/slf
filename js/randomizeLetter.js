const letterCharSet = ['A', 'B', 'C', 'D', 'E', 'F'];
const fontClassSet = ['font-one', 'font-two', 'font-three'];

let letterChar = [...letterCharSet];

const applyLetterChar = () => {
    let randomLetter = Math.floor(Math.random() * (letterChar.length - 2));

    let pushLetter = letterChar.splice(randomLetter, 1).toString();
    letterChar.push(pushLetter);

    return pushLetter;
}

const applyFontClass = () => {
    let randomFontClass = Math.floor(Math.random() * (fontClassSet.length - 1));

    let pushFontClass = fontClassSet.splice(randomFontClass, 1).toString();
    fontClassSet.push(pushFontClass);

    return pushFontClass;
}

const randomizeLetter = {
    applyLetterChar,
    applyFontClass
}

export default randomizeLetter;