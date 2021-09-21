import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(
    protected rootUrl: string,
    protected deserialize: (json: K) => T
  ) {}

  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: K) => {
        const user = this.deserialize(value);
        this.models.push(user);
      });
    });
    this.events.trigger("change");
  }
}
