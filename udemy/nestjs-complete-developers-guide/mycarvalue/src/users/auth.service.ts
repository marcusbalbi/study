import { BadRequestException, Injectable } from '@nestjs/common';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { UsersService } from './users.service';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signUp(email: string, password: string) {
    const users = await this.usersService.find(email);

    if (users.length) {
      throw new BadRequestException('email in use');
    }

    // generate salt
    const salt = randomBytes(8).toString('hex');

    // hash salt and password together
    const hash = (await scrypt(password, salt, 32)) as Buffer;

    // join hashed result and salt together
    const result = `${salt}.${hash.toString('hex')}`;

    // create new user and save
    const user = await this.usersService.create({
      email,
      password: result,
    });

    // return the user
    return user;
  }

  signIn() {}
}
