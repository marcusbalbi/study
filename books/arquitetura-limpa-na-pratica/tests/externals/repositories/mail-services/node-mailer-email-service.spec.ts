import { NodeMailerEmailService } from '@/external/mail-services/node-mailer-email-service';
import { MailServiceError } from '@/usecases/errors/mail-service-error';
import { createEmailOptions } from '@tests/fixtures/email';

jest.mock('nodemailer');
const nodemailer = require('nodemailer');
const sendEmailMock = jest.fn().mockReturnValueOnce('ok');
nodemailer.createTransport.mockReturnValue({ sendMail: sendEmailMock });

describe('Nodemailer mail service adapter', () => {
  beforeEach(() => {
    sendEmailMock.mockClear();
    nodemailer.createTransport.mockClear();
  });
  test('should return ok if email sent', async () => {
    const nodemailer = new NodeMailerEmailService();
    const result = await nodemailer.send(createEmailOptions());
    expect(result.value).toBe(true);
  });
  test('should return error if email not sent', async () => {
    const nodeMailer = new NodeMailerEmailService();
    sendEmailMock.mockImplementationOnce(() => {
      throw new Error();
    });
    const result = await nodeMailer.send(createEmailOptions());
    expect(result.isLeft()).toBe(true);
    expect(result.value).toBeInstanceOf(MailServiceError);
  });
});
