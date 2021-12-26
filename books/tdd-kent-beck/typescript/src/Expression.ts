import { Money } from './Money'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Expression {
  reduce: (to: string) => Money
}
