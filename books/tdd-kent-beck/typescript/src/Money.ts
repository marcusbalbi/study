import { Bank } from './Bank'
import { Expression } from './Expression'
import { Sum } from './Sum'

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

  times(multiplier: number): Expression {
    return new Money(this.amount * multiplier, this.currency)
  }

  equals(other: Money): boolean {
    if (this.currency !== other.getCurrency()) {
      return false
    }
    return this.amount === other.getAmount()
  }

  plus(addend: Expression): Expression {
    return new Sum(this, addend)
  }

  reduce(bank: Bank, to: string): Money {
    const rate = bank.rate(this.currency, to)
    return new Money(this.amount / rate, to)
  }
}
