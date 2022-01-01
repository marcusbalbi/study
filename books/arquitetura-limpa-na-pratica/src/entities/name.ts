import { Either, left, right } from '../shared';
import { InvalidNameError } from './errors/invalid-name-error';

export class Name {
  private readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static create(value: string): Either<InvalidNameError, Name> {
    if (Name.validate(value)) {
      return right(new Name(value));
    }

    return left(new InvalidNameError());
  }

  static validate(value: string): boolean {
    if (!value) {
      return false;
    }
    if (value.trim().length < 2 || value.trim().length > 256) {
      return false;
    }
    return true;
  }
}
