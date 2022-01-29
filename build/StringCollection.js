"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringCollection = void 0;
class StringCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    swap(indexLeft, indexRight) {
        const characters = this.data.split('');
        const leftHand = characters[indexLeft];
        characters[indexLeft] = characters[indexRight];
        characters[indexRight] = leftHand;
        this.data = characters.join('');
    }
    compare(indexLeft, indexRight) {
        return (this.data[indexLeft].toLowerCase() > this.data[indexRight].toLowerCase());
    }
}
exports.StringCollection = StringCollection;
