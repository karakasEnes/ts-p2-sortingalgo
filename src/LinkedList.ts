import { Sorter } from './Sorter';
class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    //means its firs time you are adding a node
    // inside your LinkedList
    if (!this.head) {
      this.head = node;
      return;
    }

    //means you have to find tail of your LinkedList so
    //you will know where to add the node.

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    while (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;

    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('index out of scope');
    }

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error('index out of scope');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('empty list');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    if (!this.head) {
      console.log('empty list');
      return;
    }

    let node: Node | null = this.head;

    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
