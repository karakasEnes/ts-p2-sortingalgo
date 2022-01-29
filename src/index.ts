import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { StringCollection } from './StringCollection';
StringCollection;

const newNumCol = new NumbersCollection([10, 3, -2, -10]);

const newStrCol = new StringCollection('tEstinGbeSt');

// console.log(newNumCol.length);
// console.log(newNumCol.data);

const sorter = new Sorter(newNumCol);
const sorterStr = new Sorter(newStrCol);
sorterStr.sort();

sorter.sort();
console.log(newNumCol.data);
console.log(newStrCol.data);
