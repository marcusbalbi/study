import { User } from '@/entities';

describe('User domain entity', () => {
  test('should not create with invalid email', () => {
    const invalidEmail = 'jajajaj@@@gmail.com';
    const error = User.create({ name: 'Jhon doe', email: invalidEmail })
      .value as Error;
    expect(error.name).toEqual('InvalidEmailError');
    expect(error.message).toEqual('Invalid Email: ' + invalidEmail);
  });

  test('should not create user with invalid name (few chars)', () => {
    const invalidName = 'O       ';
    const error = User.create({ email: 'any@mail.com', name: invalidName })
      .value as Error;
    expect(error.name).toEqual('InvalidNameError');
  });
  test('should not create user with invalid name (too many chars)', () => {
    const invalidName = 'O'.repeat(257);
    const error = User.create({ email: 'any@mail.com', name: invalidName })
      .value as Error;
    expect(error.name).toEqual('InvalidNameError');
  });

  test('should create user with valid data', () => {
    const user = User.create({ email: 'any@mail.com', name: 'Jhon doe' });
    expect(user.isRight()).toBe(true);
    const userCreated = user.value as User;
    expect(userCreated.name.value).toBe('Jhon doe');
    expect(userCreated.email.value).toBe('any@mail.com');
  });
});
