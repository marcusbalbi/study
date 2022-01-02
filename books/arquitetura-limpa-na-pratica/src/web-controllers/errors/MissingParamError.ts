export class MissingParamError extends Error {
  name: string = 'MissingParamError';

  constructor(param: string) {
    super();
    this.message = `Missing parameter ${param} from request`;
  }
}
