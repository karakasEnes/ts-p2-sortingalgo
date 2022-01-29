export class NumbersCollection {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  swap(indexLeft: number, indexRight: number): void {
    const leftHand = this.data[indexLeft];
    this.data[indexLeft] = this.data[indexRight];
    this.data[indexRight] = leftHand;
  }

  compare(indexLeft: number, indexRight: number): boolean {
    return this.data[indexLeft] > this.data[indexRight];
  }
}
