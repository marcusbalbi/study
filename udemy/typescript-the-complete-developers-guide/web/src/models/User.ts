interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;
export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): number | string {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
    this.trigger("change");
  }

  on(eventName: string, callback: Callback): void {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length == 0) {
      return;
    }
    handlers.forEach((callback) => {
      callback();
    });
  }
}
