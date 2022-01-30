import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { StringCollection } from './StringCollection';
import { LinkedList } from './LinkedList';
StringCollection;

// const newNumCol = new NumbersCollection([10, 3, -2, -10]);
// const sorter = new Sorter(newNumCol);
// sorter.sort();
// console.log(newNumCol.data);

// const newStrCol = new StringCollection('tEstinGbeSt');
// const sorterStr = new Sorter(newStrCol);
// sorterStr.sort();
// console.log(newStrCol.data);

// const newLinkedList = new LinkedList();
// newLinkedList.add(500);
// newLinkedList.add(-20);
// newLinkedList.add(30);
// newLinkedList.add(-100);
// newLinkedList.add(99);
// const sorter = new Sorter(newLinkedList);
// sorter.sort();
// newLinkedList.print();

const newLinkedList = new LinkedList();
newLinkedList.add(500);
newLinkedList.add(-20);
newLinkedList.add(30);
newLinkedList.add(-100);
newLinkedList.add(99);
newLinkedList.sort();
newLinkedList.print();
