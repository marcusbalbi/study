export class InvalidNameError extends Error {
  name: string = 'InvalidNameError';
  constructor(name: string) {
    super();
    this.message = `Invalid Name: ${name}`;
  }
}
