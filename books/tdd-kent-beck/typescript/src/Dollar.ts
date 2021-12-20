export class Dollar {
  constructor(public amount: number) {}
  times(multiplier: number): void {
    this.amount = this.amount * multiplier
  }
}
