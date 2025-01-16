import { Component, OnInit,HostBinding, ViewChild, ElementRef } from '@angular/core';
import { Vehiculo } from 'src/app/models/Vehiculo';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { Router, Navigation } from '@angular/router';
import { createClient } from '@google/maps';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reserva-form',
  templateUrl: './reserva-form.component.html',
  styleUrls: ['./reserva-form.component.css']
})
export class ReservaFormComponent {


  @ViewChild('mapContainer')
  gmap!: ElementRef;
  map!: google.maps.Map;
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();

  ngAfterViewInit() {
    this.initMap();
    this.calculateAndDisplayRoute();
  }

  initMap() {
    const mapOptions: google.maps.MapOptions = {
      center: this.position,
      zoom: 14,
    };
    this.map = new google.maps.Map(this.gmap.nativeElement, mapOptions);
    this.directionsRenderer.setMap(this.map);
  }

  calculateAndDisplayRoute() {
    const request: google.maps.DirectionsRequest = {
      origin: this.position,
      destination: this.position2,
      travelMode: google.maps.TravelMode.DRIVING,
    };
    this.directionsService.route(request, (result, status) => {
      if (status == google.maps.DirectionsStatus.OK) {
        this.directionsRenderer.setDirections(result);
      }
    });
  }

  
  @HostBinding('class') classes = 'row';
  vehiculo: Vehiculo= { 
   matricula: '',
   nombreDue: '',
   modelo: '',
   color: '',
   espacio: '',
   created_at: new Date()
 
  }
  title = 'gmaps';
  position = {
    lat:21.167222120274293, 
    lng:-100.93105226305462
  };

  position2 = {
    lat:21.160204128594074, 
    lng: -100.9292843661324
  };

  label = {
    color: 'red',
    text: 'Estacionamiento UTNG'
  };

  label2 = {
    color: 'blue',
    text: 'Estacionamiento de Paseo Dolores'
  }
  constructor(private vehiculosService : VehiculosService, private router:Router){}
  ngOInit(){}
   
 newReserva(){
   this.vehiculosService.saveVehiculos(this.vehiculo).subscribe(
    resp => {
      console.log(resp);
      this.router.navigate(['home/reserva']);
    },
    err => console.log(err)
  );
}
 
}
