"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(data) {
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
    get length() {
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
exports.LinkedList = LinkedList;
