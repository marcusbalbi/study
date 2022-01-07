import { InvalidEmailError } from '@/entities/errors';
import { MailServiceError } from '@/usecases/errors/mail-service-error';
import { SendEmail } from '@/usecases/send-email/send-email';
import { createEmailOptions } from '@tests/fixtures/email';
import { MailServiceErrorStub, MailServiceStub } from '@tests/utils/mocks/mail-service-mock';

describe('Send Email', () => {
  const toEmail = 'jhon@mail.com';
  const toName = 'Jhon Doe';
  test('should email user with valid name and email address', async () => {
    const stub = new MailServiceStub();
    const options = createEmailOptions();
    const useCase = new SendEmail(options, stub);
    const response = await useCase.perform({ name: toName, email: toEmail });
    expect(response.isRight()).toBe(true);
    expect(response.value).toBe(true);
  });
  test('should not send email with invalid data', async () => {
    const stub = new MailServiceStub();
    const options = createEmailOptions();
    const useCase = new SendEmail(options, stub);
    const response = await useCase.perform({ name: toName, email: 'invalid' });
    expect(response.isLeft()).toBe(true);
    expect(response.value).toBeInstanceOf(InvalidEmailError);
  });
  test('should return error when service fails', async () => {
    const stub = new MailServiceErrorStub();
    const options = createEmailOptions();
    const useCase = new SendEmail(options, stub);
    const response = await useCase.perform({ name: toName, email: toEmail });
    expect(response.isLeft()).toBe(true);
    expect(response.value).toBeInstanceOf(MailServiceError);
  });
});
