export class StringCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  swap(indexLeft: number, indexRight: number): void {
    const characters = this.data.split('');
    const leftHand = characters[indexLeft];
    characters[indexLeft] = characters[indexRight];
    characters[indexRight] = leftHand;
    this.data = characters.join('');
  }

  compare(indexLeft: number, indexRight: number): boolean {
    return (
      this.data[indexLeft].toLowerCase() > this.data[indexRight].toLowerCase()
    );
  }
}
