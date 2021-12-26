import { Expression } from './Expression'

export class Money implements Expression {
  constructor(
    private readonly amount: number,
    private readonly currency: string
  ) {}

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

  plus(addend: Money): Expression {
    return new Money(this.getAmount() + addend.getAmount(), this.currency)
  }
}
