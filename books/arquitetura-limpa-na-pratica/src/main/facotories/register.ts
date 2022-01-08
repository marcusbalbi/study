import { NodeMailerEmailService } from '@/external/mail-services/node-mailer-email-service';
import { MongodbUserRepository } from '@/external/repositories/mondogb/mondogb-user-repository';
import { RegisterUserAndSendEmailUseCase } from '@/usecases/register-user-and-send-email/regiser-user-and-send-email';
import { RegisterUserOnMaillingList } from '@/usecases/register-user-on-mailling-list';
import { EmailOptions } from '@/usecases/send-email/ports/email-service';
import { SendEmail } from '@/usecases/send-email/send-email';
import { RegisterUserAndSendEmailController } from '@/web-controllers/register-user-and-send-email-controller';
import { getEmailOptions } from '../config/email';

export const makeRegisterAndSendEmailUserController =
  (): RegisterUserAndSendEmailController => {
    const mondogbUserRepository = new MongodbUserRepository();
    const registerUserOnMaillingListUseCase = new RegisterUserOnMaillingList(
      mondogbUserRepository
    );

    const sendEmail = new SendEmail(getEmailOptions(), new NodeMailerEmailService());
    const useCase = new RegisterUserAndSendEmailUseCase(
      registerUserOnMaillingListUseCase,
      sendEmail
    );

    return new RegisterUserAndSendEmailController(useCase);
  };
