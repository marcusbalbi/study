import { InvalidEmailError } from '../../entities/errors/invalid-email-error';
import { InvalidNameError } from '../../entities/errors/invalid-name-error';
import { UserData } from '../../entities/user-data';
import { left } from '../../shared';
import { UserRepository } from './ports/user-repository';
import { RegisterUserOnMaillingList } from './register-user-on-mailling-list';
import { InMemoryUserRepository } from './repository/in-memory-user-repository';

describe('Register user on mailling list use case', () => {
  test('should add user with complete data to mailling list', async () => {
    const users: UserData[] = [];
    console.log(users);
    const repo: UserRepository = new InMemoryUserRepository(users);
    const usecase = new RegisterUserOnMaillingList(repo);
    const name = 'any_name';
    const email = 'any@email.com';

    const response = await usecase.registerUserOnMaillingList({ name, email });
    const user = await repo.findUserByEmail(email);
    expect(user.name).toBe(name);
    expect(response.value.name).toBe('any_name');
  });

  test('should not add user with with invalid email', async () => {
    const users: UserData[] = [];
    console.log(users);
    const repo: UserRepository = new InMemoryUserRepository(users);
    const usecase = new RegisterUserOnMaillingList(repo);
    const name = 'Jhon doe';
    const email = 'invalidemail';

    const response = await usecase.registerUserOnMaillingList({ name, email });
    const user = await repo.findUserByEmail(email);
    expect(user).toBeFalsy();
    expect(response.isLeft()).toBe(true);
    expect(response).toEqual(left(new InvalidEmailError()));
  });

  test('should not add user with with invalid name', async () => {
    const users: UserData[] = [];
    console.log(users);
    const repo: UserRepository = new InMemoryUserRepository(users);
    const usecase = new RegisterUserOnMaillingList(repo);
    const name = 'O     ';
    const email = 'any@email.com';

    const response = await usecase.registerUserOnMaillingList({ name, email });
    const user = await repo.findUserByEmail(email);
    expect(user).toBeFalsy();
    expect(response.isLeft()).toBe(true);
    expect(response).toEqual(left(new InvalidNameError()));
  });
});
