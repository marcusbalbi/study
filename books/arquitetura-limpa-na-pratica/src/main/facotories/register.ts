import { MongodbUserRepository } from '@/external/repositories/mondogb/mondogb-user-repository';
import { RegisterUserOnMaillingList } from '@/usecases/register-user-on-mailling-list';
import { RegisterUserController } from '@/web-controllers/register-user-controller';

export const makeRegisterUserController = (): RegisterUserController => {
  const mondogbUserRepository = new MongodbUserRepository();
  const registerUserOnMaillingListUseCase = new RegisterUserOnMaillingList(
    mondogbUserRepository
  );

  return new RegisterUserController(registerUserOnMaillingListUseCase);
};
