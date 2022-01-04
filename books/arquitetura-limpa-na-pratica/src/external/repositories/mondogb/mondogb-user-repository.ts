import { UserData } from '@/entities';
import { UserRepository } from '@/usecases/register-user-on-mailling-list/ports';
import { MongoHelper } from './helper';

export class MongodbUserRepository implements UserRepository {
  async add(user: UserData): Promise<void> {
    const userCollection = MongoHelper.getCollection('users');
    const exists = await this.exists(user);
    if (!exists) {
      await userCollection.insertOne(user);
    }
  }

  async findUserByEmail(email: string): Promise<UserData> {
    const userCollection = MongoHelper.getCollection('users');
    const user = await userCollection.findOne({ email });

    if (!user) {
      return null;
    }

    return {
      name: user.name,
      email: user.email,
    };
  }

  async findAllUsers(): Promise<UserData[]> {
    return [];
    // const userCollection = MongoHelper.getCollection('users');

    // const users = await userCollection.find();

    // if (!users) {
    //   return [];
    // }
    // return users.map((u) => {
    //   return {
    //     name: u.name,
    //     email: u.email,
    //   };
    // });
  }

  async exists(user: UserData): Promise<boolean> {
    const result = await this.findUserByEmail(user.email);

    if (result != null) {
      return true;
    }
    return false;
  }
}
