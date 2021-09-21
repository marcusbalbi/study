import { Model } from "./Model";
import { Eventing } from "./Eventing";
import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
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
}
