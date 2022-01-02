import { UserData } from '@/entities';
import { RegisterUserOnMaillingList } from '@/usecases/register-user-on-mailling-list';
import { InMemoryUserRepository } from '@/usecases/register-user-on-mailling-list/repository';
import { RegisterUserController } from '@/web-controllers/register-user-controller';

export const makeRegisterUserController = (): RegisterUserController => {
  const userCollection: UserData[] = [];
  const inMemoryUserRepository = new InMemoryUserRepository(userCollection);
  const registerUserOnMaillingListUseCase = new RegisterUserOnMaillingList(
    inMemoryUserRepository
  );

  return new RegisterUserController(registerUserOnMaillingListUseCase);
};
