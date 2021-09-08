import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

// const collection = new NumbersCollection([15, 12, -10, 0, -5, 23]);
// const sorter = new Sorter(collection);
// sorter.sort();
// console.log(sorter.collection);

// console.log("=============================");
// const collectionChars = new CharactersCollection("Arara");
// const sorter2 = new Sorter(collectionChars);
// sorter2.sort();
// console.log(sorter2.collection);


const collection = new LinkedList();
collection.add(5);
collection.add(-10);
collection.add(-5);
collection.add(0);
collection.add(23);
const sorter = new Sorter(collection);
sorter.sort();
console.log(collection.print());
