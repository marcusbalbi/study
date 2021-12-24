export class Money {
  constructor(protected readonly amount: number, protected currency: string) {}

  static dollar(amount: number): Money {
    return new Money(amount, 'USD')
  }

  static euro(amount: number): Money {
    return new Money(amount, 'EUR')
  }

  getAmount(): number {
    return this.amount
  }

  getCurrency(): string {
    return this.currency
  }

  times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency)
  }

  equals(other: Money): boolean {
    if (this.currency !== other.getCurrency()) {
      return false
    }
    return this.amount === other.getAmount()
  }
}
