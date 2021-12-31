import { Either } from '../shared';
import { InvalidEmailError } from './errors/invalid-email-error';
import { UserData } from './user-data';

export class User {
  static create(userData: UserData): Either<InvalidEmailError, User> {}
}
