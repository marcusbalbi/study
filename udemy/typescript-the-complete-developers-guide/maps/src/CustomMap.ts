/// <reference types="@types/google.maps" />
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 5,
      center: { lat: 0, lng: 0 },
    });
  }
}
