import { InvalidEmailError } from '../../entities/errors/invalid-email-error';
import { InvalidNameError } from '../../entities/errors/invalid-name-error';
import { User } from '../../entities/user';
import { UserData } from '../../entities/user-data';
import { Either, left, right } from '../../shared';
import { UserRepository } from './ports/user-repository';

type Result = Either<InvalidEmailError | InvalidNameError, UserData>;

export class RegisterUserOnMaillingList {
  private repository: UserRepository;
  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  public async registerUserOnMaillingList(request: UserData): Promise<Result> {
    const userOrError = User.create(request);
    if (userOrError.isLeft()) {
      return left(userOrError.value);
    }

    if (!(await this.repository.exists(request))) {
      this.repository.add(request);
    }

    return right(request);
  }
}
