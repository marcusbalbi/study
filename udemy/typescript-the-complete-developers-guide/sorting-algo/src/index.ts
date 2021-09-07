import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const collection = new NumbersCollection([15, 12, -10, 0, -5, 23]);
const sorter = new Sorter(collection);
sorter.sort();
console.log(sorter.collection);
