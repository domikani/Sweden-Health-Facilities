import * as Leaflet from 'leaflet';
// By default, zoom the map to this level
const defaultZoom = 14;

const sweden = {
  coords: new Leaflet.LatLng(62.1983366, 17.5671981),
  zoom: 5
};

// Create a class to manage our map and popup
export class LeafletMap {
  map: Leaflet.Map;
  marker: Leaflet.Marker;

  constructor(el: string | HTMLElement) {
    this.map = Leaflet.map(el);

    // Add the Open Street Maps tile layer
    Leaflet
      .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
      .addTo(this.map);
    // Show an initial map of Sweden zoomed out
    this.map.setView(sweden.coords, sweden.zoom);

  }


  // update method, takes a location info, and updates the map and popup
  update(lat: number, lng: number, name: string, facility: string, icon: string): void {
    const facilityIcon = Leaflet.icon({
      iconUrl: icon,
      iconSize: [50, 50], // width and height of the image in pixels
      shadowSize: [35, 20], // width, height of optional shadow image
      iconAnchor: [12, 12], // point of the icon which will correspond to marker's location
      popupAnchor: [0, 0]
    });

    // convert lat/lng to Leaflet LatLng Object
    const coords = new Leaflet.LatLng(lat, lng);
    // Reposition the map to this location
    this.map.setView(coords, defaultZoom);
    if (this.marker) {
      this.marker.setLatLng(coords);
      this.marker.setIcon(facilityIcon);
    } else {
      this.marker = Leaflet
        .marker(coords, {icon: facilityIcon})
        .bindPopup(name)
        .addTo(this.map);
    }

    // Update popup to the same position, with new name text
  }
}
