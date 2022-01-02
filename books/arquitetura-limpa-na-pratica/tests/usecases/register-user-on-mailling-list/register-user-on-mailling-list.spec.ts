import { UserData } from '@/entities';
import { UserRepository } from '@/usecases/register-user-on-mailling-list/ports';
import { RegisterUserOnMaillingList } from '@/usecases/register-user-on-mailling-list';
import { InMemoryUserRepository } from '@/usecases/register-user-on-mailling-list/repository';

describe('Register user on mailling list use case', () => {
  test('should add user with complete data to mailling list', async () => {
    const users: UserData[] = [];
    const repo: UserRepository = new InMemoryUserRepository(users);
    const usecase = new RegisterUserOnMaillingList(repo);
    const name = 'any_name';
    const email = 'any@email.com';

    const response = await usecase.perform({ name, email });
    const user = await repo.findUserByEmail(email);
    expect(user.name).toBe(name);
    expect(response.value.name).toBe('any_name');
  });

  test('should not add user with with invalid email', async () => {
    const users: UserData[] = [];
    const repo: UserRepository = new InMemoryUserRepository(users);
    const usecase = new RegisterUserOnMaillingList(repo);
    const name = 'Jhon doe';
    const email = 'invalidemail';

    const response = await usecase.perform({ name, email });
    const user = await repo.findUserByEmail(email);
    expect(user).toBeFalsy();
    expect(response.isLeft()).toBe(true);
    expect(response.value.name).toEqual('InvalidEmailError');
  });

  test('should not add user with with invalid name', async () => {
    const users: UserData[] = [];
    const repo: UserRepository = new InMemoryUserRepository(users);
    const usecase = new RegisterUserOnMaillingList(repo);
    const name = 'O     ';
    const email = 'any@email.com';

    const response = await usecase.perform({ name, email });
    const user = await repo.findUserByEmail(email);
    expect(user).toBeFalsy();
    expect(response.isLeft()).toBe(true);
    expect(response.value.name).toEqual('InvalidNameError');
  });
});
