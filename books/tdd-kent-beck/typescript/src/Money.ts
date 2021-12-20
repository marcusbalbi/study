export class Money {
  constructor(protected readonly amount: number) {}

  getAmount(): number {
    return this.amount
  }

  equals(other: Money): boolean {
    if (this.constructor !== other.constructor) {
      return false
    }
    return this.amount === other.getAmount()
  }
}
