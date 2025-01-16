import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiamVzdXNzb3RvIiwiYSI6ImNsbm5mdDlxbjA1eXMya3Bnc2hvZ3F5ODkifQ.DsvfKQYazl-9CD-6zgjDSw';


if(!navigator.geolocation){
  alert ('Navegador no soporta el geolocation')
  throw new Error('Navegador no soporta el geolocation')
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
