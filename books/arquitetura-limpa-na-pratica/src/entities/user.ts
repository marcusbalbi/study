import { Either, left, right } from '@/shared';
import { Email, Name, UserData } from './';
import { InvalidEmailError, InvalidNameError } from './errors';

export class User {
  public readonly email: Email;
  public readonly name: Name;

  private constructor(name: Name, email: Email) {
    this.name = name;
    this.email = email;
  }

  static create(
    userData: UserData
  ): Either<InvalidNameError | InvalidEmailError, User> {
    const nameOrError = Name.create(userData.name);
    if (nameOrError.isLeft()) {
      return left(new InvalidNameError(userData.name));
    }

    const emailOrError = Email.create(userData.email);
    if (emailOrError.isLeft()) {
      return left(new InvalidEmailError(userData.email));
    }
    const name = nameOrError.value as Name;
    const email = emailOrError.value as Email;
    return right(new User(name, email));
  }
}
