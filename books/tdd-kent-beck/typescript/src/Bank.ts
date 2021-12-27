import { Expression } from './Expression'
import { Money } from './Money'

const currenciesToKey = (pair: Pair): string => {
  return `${pair.from}_${pair.to}`
}
interface Rates {
  [index: string]: number
}

interface Pair {
  from: string
  to: string
}
export class Bank {
  private readonly rates: Rates = {}
  reduce(source: Expression, to: string): Money {
    return source.reduce(this, to)
  }

  addRate(from: string, to: string, rate: number): void {
    const currencies: Pair = { from, to }
    this.rates[currenciesToKey(currencies)] = rate
  }

  rate(from: string, to: string): number {
    if (from === to) {
      return 1
    }
    return this.rates[currenciesToKey({ from, to })]
  }
}
