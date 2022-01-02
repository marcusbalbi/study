import { Either, left, right } from '../shared';
import { InvalidEmailError } from './errors/invalid-email-error';

export class Email {
  public readonly value: string;

  private constructor(value: string) {
    this.value = value;
  }

  static create(value: string): Either<InvalidEmailError, Email> {
    if (Email.validate(value)) {
      return right(new Email(value));
    }

    return left(new InvalidEmailError(value));
  }

  static validate(value: string): boolean {
    const emailRegex =
      /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    if (!value) {
      return false;
    }

    if (value.length > 320) {
      return false;
    }

    if (!emailRegex.test(value)) {
      return false;
    }

    const [local, domain] = value.split('@');

    if (local.length <= 0 || local.length > 64) {
      return false;
    }

    if (domain.length <= 0 || domain.length > 255) {
      return false;
    }

    const domainParts = domain.split('.');

    if (domainParts.some((part) => part.length > 63)) {
      return false;
    }

    return true;
  }
}
