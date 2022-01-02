export class InvalidEmailError extends Error {
  name: string = 'InvalidEmailError';
  constructor(email: string) {
    super();
    this.message = `Invalid Email: ${email}`;
  }
}
