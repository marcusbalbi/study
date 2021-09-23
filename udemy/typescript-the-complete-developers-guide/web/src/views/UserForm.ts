import { User, UserProps } from "../models/User";
import { View } from "./View";
export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-age": this.onSetAgeClick,
      "click:.set-name": this.onSetNameClick,
      "click:.save-user": this.onSaveUserClick,
    };
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };
  onSaveUserClick = (): void => {
    this.model.save();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector("input");

    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get("name")}"  />
        <button class="set-name" >Change Name</button>
        <button class="set-age" >Set random age</button>
        <button class="save-user" >Save user</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");

    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
