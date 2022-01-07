import { UserData } from '@/entities';
import { RegisterUserAndSendEmailUseCase } from '@/usecases/register-user-and-send-email/regiser-user-and-send-email';
import { RegisterUserOnMaillingList } from '@/usecases/register-user-on-mailling-list';
import { UserRepository } from '@/usecases/register-user-on-mailling-list/ports';
import { InMemoryUserRepository } from '@/usecases/register-user-on-mailling-list/repository';
import { SendEmail } from '@/usecases/send-email/send-email';
import { createEmailOptions } from '@tests/fixtures/email';
import { MailServiceMock } from '@tests/utils/mocks/mail-service-mock';

describe('Register User and Send Email', () => {
  test('should add user with complete data to mailling list', async () => {
    const users: UserData[] = [];
    const repo: UserRepository = new InMemoryUserRepository(users);
    const usecase = new RegisterUserOnMaillingList(repo);
    const name = 'any_name';
    const email = 'any@email.com';
    const mockEmailService = new MailServiceMock();
    const options = createEmailOptions();
    const useCaseSendEmail = new SendEmail(options, mockEmailService);

    const registerUserAndSendEmailUseCase = new RegisterUserAndSendEmailUseCase(
      usecase,
      useCaseSendEmail
    );

    const response = await registerUserAndSendEmailUseCase.perform({
      name,
      email,
    });
    const user = await repo.findUserByEmail(email);
    expect(user.name).toBe(name);
    expect(response.value.name).toBe('any_name');
    expect(mockEmailService.countEmail).toBe(1);
  });
});
