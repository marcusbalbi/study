import { Test } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

describe('AuthService', () => {
  let service: AuthService = null;
  let fakeUserService: Partial<UsersService> = null;
  beforeEach(async () => {
    // Fake user service
    fakeUserService = {
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
    service = module.get(AuthService);
  });

  it('can create a instance of auth service', async () => {
    expect(service).toBeDefined();
  });
  it('creates a new user with a salted and hash password', async () => {
    const user = await service.signUp('asdf@asdf.com', 'abc123');
    expect(user.password).not.toEqual('abc123');
    const [salt, hash] = user.password.split('.');
    expect(salt).toBeDefined();
    expect(hash).toBeDefined();
  });

  it('throws an Error if user tries to signup with a email that is in use', (done) => {
    fakeUserService.find = () => {
      return Promise.resolve([
        { id: 1, email: 'teste@test.com', password: 'abc123' } as User,
      ]);
    };
    service
      .signUp('teste@test.com', 'abc123')
      .then(() => {
        done(new Error('email should be in use'));
      })
      .catch(() => done());
  });
  it('throws if signin is called with an unused email', (done) => {
    service
      .signIn('teste@test.com', 'abc123')
      .then(() => {
        done(new Error('email shouldnt  be found'));
      })
      .catch(() => done());
  });
  it('throws if an invalid password is provided', (done) => {
    fakeUserService.find = () => {
      return Promise.resolve([
        { id: 1, email: 'teste@test.com', password: 'abc1234' } as User,
      ]);
    };
    service
      .signIn('teste@test.com', 'abc123')
      .then(() => {
        done(new Error('email shouldnt  be found'));
      })
      .catch((err) => {
        done();
      });
  });
  it('returns a user with email and password is provided correctly', async () => {
    const userStored = await service.signUp('teste@test.com', 'abc123');

    fakeUserService.find = () => {
      return Promise.resolve([userStored]);
    };
    const user = await service.signIn('teste@test.com', 'abc123');
    expect(user).toBeDefined();
  });
});
