import { UserData } from '../../../entities/user-data';
import { UserRepository } from '../ports/user-repository';

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

  async findAllUsers(): Promise<UserData[]> {
    return this.userData.map((user) => {
      return { ...user };
    });
  }

  async exists(user: UserData): Promise<boolean> {
    return this.userData.some((u) => u.email === user.email);
  }
}
