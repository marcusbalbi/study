import { UserData } from '@/entities';
import { InvalidEmailError, InvalidNameError } from '@/entities/errors';
import { UseCase } from '@/usecases/ports/use-case';
import { RegisterUserAndSendEmailUseCase } from '@/usecases/register-user-and-send-email/regiser-user-and-send-email';
import { RegisterUserOnMaillingList } from '@/usecases/register-user-on-mailling-list';
import { UserRepository } from '@/usecases/register-user-on-mailling-list/ports';
import { InMemoryUserRepository } from '@/usecases/register-user-on-mailling-list/repository';
import { SendEmail } from '@/usecases/send-email/send-email';
import { MissingParamError } from '@/web-controllers/errors';
import { HttpRequest, HttpResponse } from '@/web-controllers/ports';
import { RegisterUserAndSendEmailController } from '@/web-controllers/register-user-and-send-email-controller';
import { createEmailOptions } from '@tests/fixtures/email';
import { MailServiceMock } from '@tests/utils/mocks/mail-service-mock';

class StubErrorUseCase implements UseCase {
  perform(request: any): Promise<any> {
    throw new Error('Error UseCase.');
  }
}

describe('Register User web Controller', () => {
  const users: UserData[] = [];
  const repo: UserRepository = new InMemoryUserRepository(users);
  const registerUserUseCase = new RegisterUserOnMaillingList(repo);
  const options = createEmailOptions();
  const sendEmailUseCase = new SendEmail(options, new MailServiceMock());
  const useCase = new RegisterUserAndSendEmailUseCase(registerUserUseCase, sendEmailUseCase);
  const controller = new RegisterUserAndSendEmailController(useCase);

  test('should return status code 200 when signup user', async () => {
    const request: HttpRequest = {
      body: {
        email: 'any@mail.com',
        name: 'Jhon doe',
      },
    };
    const response: HttpResponse = await controller.handle(request);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(request.body);

    const user = repo.findUserByEmail(response.body.email);
    expect(user).toBeDefined();
  });
  test('should return status code 400 when invalid name', async () => {
    const request: HttpRequest = {
      body: {
        email: 'any@mail.com',
        name: 'J     ',
      },
    };
    const response: HttpResponse = await controller.handle(request);
    expect(response.statusCode).toBe(400);
    expect(response.body).toBeInstanceOf(InvalidNameError);
  });

  test('should return status code 400 when invalid email', async () => {
    const request: HttpRequest = {
      body: {
        email: '@mail.com',
        name: 'Jhon doe',
      },
    };
    const response: HttpResponse = await controller.handle(request);
    expect(response.statusCode).toBe(400);
    expect(response.body).toBeInstanceOf(InvalidEmailError);
  });

  test('should return status code 400 when missing name parameter', async () => {
    const request: HttpRequest = {
      body: {
        email: 'any@mail.com',
      },
    };
    const response: HttpResponse = await controller.handle(request);
    expect(response.statusCode).toBe(400);
    expect(response.body).toBeInstanceOf(MissingParamError);
    expect(response.body.message).toEqual(
      'Missing parameter name from request'
    );
  });

  test('should return status code 400 when missing email parameter', async () => {
    const request: HttpRequest = {
      body: {
        name: 'Jhon Doe',
      },
    };
    const response: HttpResponse = await controller.handle(request);
    expect(response.statusCode).toBe(400);
    expect(response.body).toBeInstanceOf(MissingParamError);
    expect(response.body.message).toEqual(
      'Missing parameter email from request'
    );
  });

  test('should return status code 500 when exceptional problem happens', async () => {
    const request: HttpRequest = {
      body: {
        name: 'Jhon Doe',
        email: 'any@mail.com',
      },
    };
    const stubErrorUsecase: UseCase = new StubErrorUseCase();
    const errorController = new RegisterUserAndSendEmailController(stubErrorUsecase);
    const response: HttpResponse = await errorController.handle(request);
    expect(response.statusCode).toBe(500);
  });
});
