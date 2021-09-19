import { Model } from "./Model";
interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

const rootURL = "http://localhost:3000/users";

export class User extends Model<UserProps> {}
