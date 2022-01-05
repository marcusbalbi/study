import { MongoHelper } from '@/external/repositories/mondogb/helper';
import { MongodbUserRepository } from '@/external/repositories/mondogb/mondogb-user-repository';

describe('Mongodb User Reposotory', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  beforeEach(() => {
    MongoHelper.clearCollection('users');
  });

  test('when user is added, it should exists', async () => {
    const userRepository = new MongodbUserRepository();
    const user = {
      name: 'Jhon doe',
      email: 'any@mail.com',
    };

    await userRepository.add(user);
    expect(await userRepository.exists(user)).toBeTruthy();
  });

  test('find all users should return all added users', async () => {
    const userRepository = new MongodbUserRepository();

    await userRepository.add({
      name: 'Jhon doe',
      email: 'jhon@mail.com',
    });
    await userRepository.add({
      name: 'Jane doe',
      email: 'jane@mail.com',
    });
    await userRepository.add({
      name: 'Josh doe',
      email: 'josh@mail.com',
    });
    const users = await userRepository.findAllUsers();
    expect(users.length).toBe(3);
  });
});
