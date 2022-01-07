import { Either, left, right } from '@/shared';
import { MailServiceError } from '@/usecases/errors/mail-service-error';
import {
  EmailOptions,
  EmailService,
} from '@/usecases/send-email/ports/email-service';

export class MailServiceStub implements EmailService {
  async send(
    options: EmailOptions
  ): Promise<Either<MailServiceError, boolean>> {
    return right(true);
  }
}

export class MailServiceErrorStub implements EmailService {
  async send(
    options: EmailOptions
  ): Promise<Either<MailServiceError, boolean>> {
    return left(new MailServiceError());
  }
}

export class MailServiceMock implements EmailService {
  public countEmail = 0;
  async send(
    options: EmailOptions
  ): Promise<Either<MailServiceError, boolean>> {
    this.countEmail++;
    return right(true);
  }
}
