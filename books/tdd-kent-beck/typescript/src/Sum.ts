import { Bank } from './Bank'
import { Expression } from './Expression'
import { Money } from './Money'

export class Sum implements Expression {
  constructor(
    public readonly augend: Expression,
    public readonly addend: Expression
  ) {}

  plus(addend: Expression): Expression {
    return new Sum(this, addend)
  }

  times(multiplier: number): Expression {
    return new Sum(this.augend.times(multiplier), this.addend.times(multiplier))
  }

  reduce(bank: Bank, to: string): Money {
    const amount =
      this.addend.reduce(bank, to).getAmount() +
      this.augend.reduce(bank, to).getAmount()

    return new Money(amount, to)
  }
}
