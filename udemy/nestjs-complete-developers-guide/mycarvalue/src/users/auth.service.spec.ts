import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

it('can create a instance of auth service', async () => {
  // Fake user service
  const fakeUserService: Partial<UsersService> = {
    find: () => Promise.resolve([]),
    create: (newuser: CreateUserDto) =>
      Promise.resolve({
        id: 1,
        email: newuser.email,
        password: newuser.password,
      } as User),
  };
  const module = await Test.createTestingModule({
    providers: [
      AuthService,
      {
        provide: UsersService,
        useValue: fakeUserService,
      },
    ],
  }).compile();

  const service = module.get(AuthService);

  expect(service).toBeDefined();
});
