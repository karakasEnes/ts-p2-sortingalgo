class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList {
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
}
