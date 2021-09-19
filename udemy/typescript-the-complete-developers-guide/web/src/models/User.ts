import axios, { AxiosResponse } from "axios";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

const rootURL = "http://localhost:3000/users";

export class User {
  events: Eventing = new Eventing();
  sync: Sync<UserProps> = new Sync(rootURL);
  attributes: Attributes<UserProps>;
  constructor(attrs: UserProps) {
    this.attributes = new Attributes(attrs);
  }
}
