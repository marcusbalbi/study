/// <reference types="@types/google.maps" />
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 3,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(mappeble: Mappable) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappeble.location.lat,
        lng: mappeble.location.lng,
      },
    });
  }
}
