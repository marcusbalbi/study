/// <reference types="@types/google.maps" />

import { Company } from "./Company";
import { User } from "./User";

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 5,
      center: { lat: 0, lng: 0 },
    });
  }

  addUserMarker(user: User): void {
    new google.maps.Marker({ map: this.googleMap, position: user.location });
  }
  addCompanyMarker(company: Company): void {}
}
