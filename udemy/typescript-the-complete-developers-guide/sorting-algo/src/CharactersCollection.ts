import { Sortable } from "./Sorter";
export class CharactersCollection implements Sortable {
  constructor(private data: string) {}

  public swap(leftIndex: number, rightIndex: number): void {
    const chars = this.data.split("");

    const leftHand = chars[leftIndex];
    chars[leftIndex] = chars[rightIndex];
    chars[rightIndex] = leftHand;

    this.data = chars.join("");
  }
  public compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  get length() {
    return this.data.length;
  }
}
