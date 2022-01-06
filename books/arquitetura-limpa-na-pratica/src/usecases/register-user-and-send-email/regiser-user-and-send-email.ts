import { UserData } from '@/entities';
import { InvalidEmailError, InvalidNameError } from '@/entities/errors';
import { Either, left, right } from '@/shared';
import { UseCase } from '@/usecases/ports';
import { RegisterUserOnMaillingList } from '@/usecases/register-user-on-mailling-list';
import { SendEmail } from '@/usecases/send-email/send-email';
import { MailServiceError } from '../errors/mail-service-error';

export class RegisterUserAndSendEmailUseCase implements UseCase {
  private regiserUserUseCase: RegisterUserOnMaillingList;
  private sendEmailUseCase: SendEmail;
  constructor(
    registerUserUseCase: RegisterUserOnMaillingList,
    sendEmailUseCase: SendEmail
  ) {
    this.regiserUserUseCase = registerUserUseCase;
    this.sendEmailUseCase = sendEmailUseCase;
  }

  async perform(
    request: UserData
  ): Promise<
    Either<InvalidEmailError | InvalidNameError | MailServiceError, UserData>
  > {
    const userOrError = await this.regiserUserUseCase.perform(request);

    if (userOrError.isLeft()) {
      return left(userOrError.value);
    }

    const emailSentOrError = await this.sendEmailUseCase.perform(
      userOrError.value
    );

    if (emailSentOrError.isLeft()) {
      return left(emailSentOrError.value);
    }

    return right(userOrError.value);
  }
}
