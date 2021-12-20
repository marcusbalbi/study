export class Dollar {
  constructor(public amount: number) {}
  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier)
  }

  equals(other: Dollar): boolean {
    return this.amount === other.amount
  }
}
