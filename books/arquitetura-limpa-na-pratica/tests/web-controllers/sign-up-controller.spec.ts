import { UserData } from '@/entities';
import { RegisterUserOnMaillingList } from '@/usecases/register-user-on-mailling-list';
import { UserRepository } from '@/usecases/register-user-on-mailling-list/ports';
import { InMemoryUserRepository } from '@/usecases/register-user-on-mailling-list/repository';
import { HttpRequest, HttpResponse } from '@/web-controllers/ports';
import { RegisterUserController } from '@/web-controllers/register-user-controller';

describe('Register User web Controller', () => {
  test('should return status code 201 when signup user', async () => {
    const request: HttpRequest = {
      body: {
        email: 'any@mail.com',
        name: 'Jhon doe',
      },
    };
    const users: UserData[] = [];
    const repo: UserRepository = new InMemoryUserRepository(users);
    const usecase = new RegisterUserOnMaillingList(repo);
    const controller = new RegisterUserController(usecase);
    const response: HttpResponse = await controller.handle(request);
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual(request.body);

    const user = repo.findUserByEmail(response.body.email);
    expect(user).toBeDefined();
  });
});
