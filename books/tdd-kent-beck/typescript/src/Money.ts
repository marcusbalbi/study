export abstract class Money {
  constructor(protected readonly amount: number) {}

  static dollar(amount: number): Money {
    return new Dollar(amount)
  }

  static euro(amount: number): Money {
    return new Euro(amount)
  }

  getAmount(): number {
    return this.amount
  }

  equals(other: Money): boolean {
    if (this.constructor !== other.constructor) {
      return false
    }
    return this.amount === other.getAmount()
  }

  abstract times(multiplier: number): Money
}

export class Dollar extends Money {
  times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier)
  }
}
export class Euro extends Money {
  times(multiplier: number): Euro {
    return new Euro(this.amount * multiplier)
  }
}
