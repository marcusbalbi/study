export class Money {
  constructor(protected readonly amount: number) {}
  times(multiplier: number): Money {
    return new Money(this.amount * multiplier)
  }

  getAmount(): number {
    return this.amount
  }

  equals(other: Money): boolean {
    return this.amount === other.getAmount()
  }
}
