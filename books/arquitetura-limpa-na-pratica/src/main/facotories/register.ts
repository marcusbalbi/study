import { MongodbUserRepository } from '@/external/repositories/mondogb/mondogb-user-repository';
// import { RegisterUserAndSendEmailUseCase } from '@/usecases/register-user-and-send-email/regiser-user-and-send-email';
import { RegisterUserOnMaillingList } from '@/usecases/register-user-on-mailling-list';
// import { SendEmail } from '@/usecases/send-email/send-email';
import { RegisterUserAndSendEmailController } from '@/web-controllers/register-user-and-send-email-controller';

export const makeRegisterUserController =
  (): RegisterUserAndSendEmailController => {
    const mondogbUserRepository = new MongodbUserRepository();
    const registerUserOnMaillingListUseCase = new RegisterUserOnMaillingList(
      mondogbUserRepository
    );
    // const sendEmail = new SendEmail(createEmailOptions(), new MailServiceMock()); // TODO change to valid values
    // const useCase = new RegisterUserAndSendEmailUseCase(
    //   registerUserOnMaillingListUseCase,
    //   sendEmail
    // );

    return new RegisterUserAndSendEmailController(
      registerUserOnMaillingListUseCase
    );
  };
