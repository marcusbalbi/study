import { Expression } from './Expression'
import { Money } from './Money'

export class Sum implements Expression {
  constructor(public readonly augend: Money, public readonly addend: Money) {}

  reduce(to: string): Money {
    const amount = this.addend.getAmount() + this.augend.getAmount()

    return new Money(amount, to)
  }
}
