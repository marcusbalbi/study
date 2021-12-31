import { UserData } from '../user-data';
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
});
