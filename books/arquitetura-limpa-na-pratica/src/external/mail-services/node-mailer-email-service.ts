import { Either, left, right } from '@/shared';
import { MailServiceError } from '@/usecases/errors/mail-service-error';
import {
  EmailOptions,
  EmailService,
} from '@/usecases/send-email/ports/email-service';
import * as nodemailer from 'nodemailer';

export class NodeMailerEmailService implements EmailService {
  async send(
    options: EmailOptions
  ): Promise<Either<MailServiceError, boolean>> {
    try {
      const transporter = nodemailer.createTransport({
        host: options.host,
        port: options.port,
        auth: {
          user: options.username,
          pass: options.password,
        },
      });
      await transporter.sendMail({
        from: options.from,
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html,
        attachments: options.attachments,
      });
      return right(true);
    } catch (err) {
      return left(new MailServiceError());
    }
  }
}
