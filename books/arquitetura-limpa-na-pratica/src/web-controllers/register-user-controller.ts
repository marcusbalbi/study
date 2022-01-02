import { UserData } from '@/entities';
import { UseCase } from '@/usecases/ports';
import { MissingParamError } from './errors';
import { HttpRequest, HttpResponse } from './ports';
import { badRequest, created, serverError } from './utils/http-helpers';

export class RegisterUserController {
  private readonly usecase: UseCase;
  constructor(usecase: UseCase) {
    this.usecase = usecase;
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    try {
      const userData: UserData = request.body;
      const result = await this.usecase.perform(userData);

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
    } catch (err) {
      return serverError(err);
    }
  }
}
