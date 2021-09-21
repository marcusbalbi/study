import { Model } from "./Model";
import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Collection } from "./Collection";
export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

const rootURL = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static buildUser(data: UserProps) {
    return new User(new Attributes(data), new Eventing(), new ApiSync(rootURL));
  }

  static buildUserCollection(): Collection<User, UserProps> {
    const collection = new Collection<User, UserProps>(rootURL, User.buildUser);

    return collection;
  }
}
