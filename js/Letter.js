import randomizeLetter from "./randomizeLetter.js"

export class Letter {
    constructor() {
        this.letterChar = randomizeLetter.applyLetterChar();
        this.fontClass = randomizeLetter.applyFontClass();
        this.following = false;
    }
}

