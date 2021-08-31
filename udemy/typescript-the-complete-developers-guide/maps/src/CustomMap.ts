/// <reference types="@types/google.maps" />
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(elementId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(elementId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(mappeble: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappeble.location.lat,
        lng: mappeble.location.lng,
      },
    });

    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappeble.markerContent(),
      });
      infoWindow.open({ map: this.googleMap }, marker);
    });
  }
}
