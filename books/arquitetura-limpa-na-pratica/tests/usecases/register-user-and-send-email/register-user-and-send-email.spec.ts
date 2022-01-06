import { UserData } from '@/entities';
import { Either, right } from '@/shared';
import { MailServiceError } from '@/usecases/errors/mail-service-error';
import { RegisterUserAndSendEmailUseCase } from '@/usecases/register-user-and-send-email/regiser-user-and-send-email';
import { RegisterUserOnMaillingList } from '@/usecases/register-user-on-mailling-list';
import { UserRepository } from '@/usecases/register-user-on-mailling-list/ports';
import { InMemoryUserRepository } from '@/usecases/register-user-on-mailling-list/repository';
import {
  EmailOptions,
  EmailService,
} from '@/usecases/send-email/ports/email-service';
import { SendEmail } from '@/usecases/send-email/send-email';

const attachmentFilePath = '../resources/text.txt';
const fromName = 'Test';
const fromEmail = 'from_email@mail.com';
const toName = 'To Test';
const toEmail = 'to_email@mail.com';
const subject = 'test e-mail';
const body = 'Hello world!';
const bodyHtml = '<b>Test</b>';
const attachment = [
  {
    filename: attachmentFilePath,
    contentType: 'text/plain',
  },
];
const emailOptions: EmailOptions = {
  host: 'test',
  port: 867,
  username: 'test',
  password: 'test',
  from: `${fromName} ${fromEmail}`,
  to: `${toName} <${toEmail}>`,
  subject,
  text: body,
  html: bodyHtml,
  attachments: attachment,
};

class MailServiceMock implements EmailService {
  public countEmail = 0;
  async send(
    options: EmailOptions
  ): Promise<Either<MailServiceError, boolean>> {
    this.countEmail++;
    return right(true);
  }
}

describe('Register User and Send Email', () => {
  test('should add user with complete data to mailling list', async () => {
    const users: UserData[] = [];
    const repo: UserRepository = new InMemoryUserRepository(users);
    const usecase = new RegisterUserOnMaillingList(repo);
    const name = 'any_name';
    const email = 'any@email.com';
    const mockEmailService = new MailServiceMock();
    const useCaseSendEmail = new SendEmail(emailOptions, mockEmailService);

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
