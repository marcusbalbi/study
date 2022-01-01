import { left, right } from '../shared';
import { InvalidEmailError } from './errors/invalid-email-error';
import { InvalidNameError } from './errors/invalid-name-error';
import { User } from './user';

describe('User domain entity', () => {
  test('should not create with invalid email', () => {
    const invalidEmail = 'jajajaj@@@gmail.com';
    const error = User.create({ name: 'Jhon doe', email: invalidEmail });
    expect(error).toEqual(left(new InvalidEmailError()));
  });

  test('should not create user with invalid name (few chars)', () => {
    const invalidName = 'O       ';
    const error = User.create({ email: 'any@mail.com', name: invalidName });
    expect(error).toEqual(left(new InvalidNameError()));
  });
  test('should not create user with invalid name (too many chars)', () => {
    const invalidName = 'O'.repeat(257);
    const error = User.create({ email: 'any@mail.com', name: invalidName });
    expect(error).toEqual(left(new InvalidNameError()));
  });

  test('should create user with valid data', () => {
    const user = User.create({ email: 'any@mail.com', name: 'Jhon doe' });
    expect(user.isRight()).toBe(true);
    const userCreated = user.value as User;
    expect(userCreated.name.value).toBe('Jhon doe');
    expect(userCreated.email.value).toBe('any@mail.com');
  });
});
