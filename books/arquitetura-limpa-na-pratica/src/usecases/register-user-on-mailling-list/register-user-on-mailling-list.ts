import { InvalidEmailError, InvalidNameError } from '@/entities/errors';
import { User, UserData } from '@/entities';
import { Either, left, right } from '@/shared';
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
