import { Email } from './email';

describe('Email validation', () => {
  test('should not accept null strings', () => {
    const email = null;
    expect(Email.validate(email)).toBeFalsy();
  });

  test('should not accept empty strings', () => {
    const email = '';
    expect(Email.validate(email)).toBeFalsy();
  });

  test('should not accept strings larger then 320 chars', () => {
    const email = 'balbi'.repeat(70) + '@mail.com';
    expect(Email.validate(email)).toBeFalsy();
  });

  test('should accept valid email', () => {
    const email = 'balbimarcus@gmail.com';
    expect(Email.validate(email)).toBeTruthy();
  });

  test('should not accept local part larger than 64 chars', () => {
    const email = 'm'.repeat(65) + '@mail.com';
    expect(Email.validate(email)).toBeFalsy();
  });

  test('should not accept domain part larger than 255 chars', () => {
    const email = `balbimarcus@${'gmail'.repeat(60)}.com`;
    expect(Email.validate(email)).toBeFalsy();
  });

  test('should not accept empty local part', () => {
    const email = '@gmail.com';
    expect(Email.validate(email)).toBeFalsy();
  });

  test('should not accept empty domain part', () => {
    const email = 'balbimarcus@';
    expect(Email.validate(email)).toBeFalsy();
  });

  test('should not accept domain with a part greater than 63 chars', () => {
    const email = `balbimarcus@${'d'.repeat(64)}.com`;
    expect(Email.validate(email)).toBeFalsy();
  });
});
