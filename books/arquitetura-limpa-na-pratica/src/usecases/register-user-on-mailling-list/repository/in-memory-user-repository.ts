import { UserRepository } from '../ports/user-repository';
import { UserData } from '../user-data';

export class InMemoryUserRepository implements UserRepository {
  private userData: UserData[] = [];

  constructor(userData: UserData[]) {
    this.userData = userData;
  }

  async add(user: UserData): Promise<void> {
    if (!(await this.exists(user))) {
      this.userData = this.userData.concat(user);
    }
  }

  async findUSerByEmail(email: string): Promise<UserData> {
    const user = this.userData.find((user) => user.email === email);
    return user || null;
  }

  findAllUsers(): Promise<UserData[]> {
    throw new Error('Method not implemented.');
  }

  async exists(user: UserData): Promise<boolean> {
    return this.userData.some((u) => u.email === user.email);
  }
}
