import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { Map, Popup, Marker} from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapDiv')
  mapDivElement!: ElementRef
  
constructor(private locationService:LocationService){}

ngAfterViewInit(): void {
if(!this.locationService.useLocation) throw Error('No hay locationService.useLocation');
const ubicacionFija: [number, number] = [-100.93215597382475, 21.16894618918139]; // Longitud y Latitud de Nueva York como ejemplo
const coordinates = this.locationService.useLocation ? [ubicacionFija, this.locationService.useLocation] : [];

const map = new Map({
  container: this.mapDivElement.nativeElement,
  style: 'mapbox://styles/mapbox/streets-v12',
  center: ubicacionFija, // Usar ubicación fija en lugar de this.locationService.useLocation
  zoom: 14,
});

const popup = new Popup()
.setHTML(`
<h6>Aqui te encuentras</h6>  
<span>Estas en esta parte del mundo</span>
`);
const popup1 = new Popup()
.setHTML(`
<h6>Estacionamiento</h6>  
<span>Aqui estamos</span>
`);

map.on('load', () => {
  map.addLayer({
    id: 'line',
    type: 'line',
    source: {
      type: 'geojson',
      data: {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: coordinates, // Utiliza la variable coordinates aquí
        },
      },
    },
    layout: {
      'line-join': 'round',
      'line-cap': 'round',
    },
    paint: {
      'line-color': 'blue',
      'line-width': 3,
    },
  });
});


  new Marker({color: 'red'})
  .setLngLat( this.locationService.useLocation)
  .setPopup (popup)
  .addTo(map)

  new Marker({color: 'green'})
  .setLngLat( ubicacionFija)
  .setPopup (popup1)
  .addTo(map)
}

}