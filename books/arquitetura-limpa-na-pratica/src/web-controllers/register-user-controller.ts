import { UserData } from '@/entities';
import { RegisterUserOnMaillingList } from '@/usecases/register-user-on-mailling-list';
import { HttpRequest, HttpResponse } from './ports';
import { created } from './utils/http-helpers';

export class RegisterUserController {
  private readonly usecase: RegisterUserOnMaillingList;
  constructor(usecase: RegisterUserOnMaillingList) {
    this.usecase = usecase;
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const userData: UserData = request.body;
    const result = await this.usecase.registerUserOnMaillingList(userData);

    if (result.isRight()) {
      return created(result.value);
    }
  }
}
