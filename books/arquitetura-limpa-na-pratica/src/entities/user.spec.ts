import { left } from '../shared';
import { InvalidEmailError } from './errors/invalid-email-error';
import { User } from './user';

describe('User domain entity', () => {
  test('should not create with invalid email', () => {
    const invalidEmail = 'jajajaj@@@gmail.com';
    const error = User.create({ name: 'Jhon doe', email: invalidEmail });
    expect(error).toEqual(left(new InvalidEmailError()));
  });
});
