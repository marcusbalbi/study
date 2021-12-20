import { Money } from './Money'

export class Euro extends Money {
  times(multiplier: number): Euro {
    return new Euro(this.amount * multiplier)
  }
}
