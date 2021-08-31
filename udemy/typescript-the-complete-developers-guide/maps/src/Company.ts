import faker from "faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
    this.color = "blue";
  }
  color: string;

  markerContent(): string {
    return `
    <div>
      <h2>Company name is ${this.companyName}</h2>
      <h3>Company Catchpharse is ${this.catchPhrase}</h3>
    </div>
    `;
  }
}
