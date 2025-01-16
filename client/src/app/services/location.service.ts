import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
public useLocation: [number, number] | undefined;

get isUserLocationReady(): boolean {
  return !!this.useLocation;
}
constructor(){
  this.getUserLocation();
}

public async getUserLocation(): Promise<[number, number] >{
  return new Promise((resolve, reject) =>{
    navigator.geolocation.getCurrentPosition(
      ({coords})=> {
        this.useLocation = [coords.longitude, coords.latitude];
        resolve(this.useLocation)
      },
      (err)=>{
        alert('No se pudo obtener la geolocalizacion')
        console.log(err);
        reject();
      }
    );
  } );
}
}
