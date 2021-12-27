import { Bank } from './Bank'
import { Expression } from './Expression'
import { Money } from './Money'

export class Sum implements Expression {
  constructor(public readonly augend: Expression, public readonly addend: Expression) {}
  plus(addend: Expression): Expression {
    return null
  }

  reduce(bank: Bank, to: string): Money {
    const amount = this.addend.reduce(bank, to).getAmount() + this.augend.reduce(bank, to).getAmount()

    return new Money(amount, to)
  }
}
