import { UserData } from '@/entities';
import { RegisterUserOnMaillingList } from '@/usecases/register-user-on-mailling-list';
import { MissingParamError } from './errors';
import { HttpRequest, HttpResponse } from './ports';
import { badRequest, created } from './utils/http-helpers';

export class RegisterUserController {
  private readonly usecase: RegisterUserOnMaillingList;
  constructor(usecase: RegisterUserOnMaillingList) {
    this.usecase = usecase;
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const userData: UserData = request.body;
    const result = await this.usecase.registerUserOnMaillingList(userData);

    if (!request.body.name) {
      return badRequest(new MissingParamError('name'));
    }

    if (!request.body.email) {
      return badRequest(new MissingParamError('email'));
    }

    if (result.isLeft()) {
      return badRequest(result.value);
    }
    return created(result.value);
  }
}
