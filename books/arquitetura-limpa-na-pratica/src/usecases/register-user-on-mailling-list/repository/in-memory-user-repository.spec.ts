import { UserData } from '../../../entities/user-data';
import { InMemoryUserRepository } from './in-memory-user-repository';

describe('In Memory User Repository', () => {
  test('should return null if user not found', async () => {
    const users: UserData[] = [];
    const userRepo = new InMemoryUserRepository(users);
    const user = await userRepo.findUSerByEmail('any@mail.com');
    expect(user).toBeNull();
  });
  test('should return user if its found on repo', async () => {
    const userData = { name: 'Balbi', email: 'any@mail.com' };
    const users: UserData[] = [];
    const userRepo = new InMemoryUserRepository(users);
    await userRepo.add(userData);
    const user = await userRepo.findUSerByEmail('any@mail.com');
    expect(user).toEqual(userData);
  });
  test('should return all users', async () => {
    const users: UserData[] = [];
    const userRepo = new InMemoryUserRepository(users);
    await userRepo.add({ name: 'Balbi', email: 'any@mail.com' });
    await userRepo.add({ name: 'Balbi2', email: 'any2@mail.com' });
    const usersFound = await userRepo.findAllUsers();
    expect(usersFound.length).toBe(2);
  });
});
