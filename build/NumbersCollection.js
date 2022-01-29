"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
class NumbersCollection {
    constructor(data) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    swap(indexLeft, indexRight) {
        const leftHand = this.data[indexLeft];
        this.data[indexLeft] = this.data[indexRight];
        this.data[indexRight] = leftHand;
    }
    compare(indexLeft, indexRight) {
        return this.data[indexLeft] > this.data[indexRight];
    }
}
exports.NumbersCollection = NumbersCollection;
