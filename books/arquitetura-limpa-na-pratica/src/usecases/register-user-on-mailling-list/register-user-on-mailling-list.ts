import { InvalidEmailError, InvalidNameError } from '@/entities/errors';
import { User, UserData } from '@/entities';
import { Either, left, right } from '@/shared';
import { UserRepository } from './ports/user-repository';
import { UseCase } from '../ports/use-case';

type Error = InvalidEmailError | InvalidNameError

export class RegisterUserOnMaillingList implements UseCase {
  private repository: UserRepository;
  constructor(repository: UserRepository) {
    this.repository = repository;
  }

  public async perform(request: UserData): Promise<Either<Error, UserData>> {
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
