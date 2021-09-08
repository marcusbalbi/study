import { Sortable } from "./Sorter";
export class NumbersCollection implements Sortable {
  constructor(private data: number[]) {}

  public swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
  public compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  get length() {
    return this.data.length;
  }
}
