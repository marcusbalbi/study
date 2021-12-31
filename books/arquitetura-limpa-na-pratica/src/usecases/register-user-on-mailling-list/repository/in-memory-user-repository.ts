import { UserRepository } from '../ports/user-repository';
import { UserData } from '../user-data';

export class InMemoryUserRepository implements UserRepository {
  private userData: UserData[] = [];

  constructor(userData: UserData[]) {
    this.userData = userData;
  }

  add(user: UserData): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async findUSerByEmail(email: string): Promise<UserData> {
    const user = this.userData.find((user) => user.email === email);
    return user || null;
  }

  findAllUsers(): Promise<UserData[]> {
    throw new Error('Method not implemented.');
  }

  exists(user: UserData): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
