import { InvalidEmailError } from '@/entities/errors';
import { Either, left, right } from '@/shared';
import { MailServiceError } from '@/usecases/errors/mail-service-error';
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

class MailServiceStub implements EmailService {
  async send(
    options: EmailOptions
  ): Promise<Either<MailServiceError, boolean>> {
    return right(true);
  }
}
class MailServiceErrorStub implements EmailService {
  async send(
    options: EmailOptions
  ): Promise<Either<MailServiceError, boolean>> {
    return left(new MailServiceError());
  }
}

describe('Send Email', () => {
  test('should email user with valid name and email address', async () => {
    const stub = new MailServiceStub();
    const useCase = new SendEmail(emailOptions, stub);
    const response = await useCase.perform({ name: toName, email: toEmail });
    expect(response.isRight()).toBe(true);
    expect(response.value).toBe(true);
  });
  test('should not send email with invalid data', async () => {
    const stub = new MailServiceStub();
    const useCase = new SendEmail(emailOptions, stub);
    const response = await useCase.perform({ name: toName, email: 'invalid' });
    expect(response.isLeft()).toBe(true);
    expect(response.value).toBeInstanceOf(InvalidEmailError);
  });
  test('should return error when service fails', async () => {
    const stub = new MailServiceErrorStub();
    const useCase = new SendEmail(emailOptions, stub);
    const response = await useCase.perform({ name: toName, email: toEmail });
    expect(response.isLeft()).toBe(true);
    expect(response.value).toBeInstanceOf(MailServiceError);
  });
});
