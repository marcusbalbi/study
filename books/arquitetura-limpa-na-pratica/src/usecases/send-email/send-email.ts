import { User, UserData } from '@/entities';
import { Either, left } from '@/shared';
import { MailServiceError } from '../errors/mail-service-error';
import { UseCase } from '../ports';
import { EmailOptions, EmailService } from './ports/email-service';

export class SendEmail implements UseCase {
  private readonly emailOptions: EmailOptions;
  private readonly emailService: EmailService;

  constructor(emailOptions: EmailOptions, emailService: EmailService) {
    this.emailOptions = emailOptions;
    this.emailService = emailService;
  }

  async perform(
    userData: UserData
  ): Promise<Either<MailServiceError, boolean>> {
    const user = User.create(userData);

    if (user.isLeft()) {
      return left(user.value);
    }

    const emailInfo: EmailOptions = Object.assign({}, this.emailOptions, {
      to: `${user.value.name} <${user.value.email}>`,
    });
    return this.emailService.send(emailInfo);
  }
}
