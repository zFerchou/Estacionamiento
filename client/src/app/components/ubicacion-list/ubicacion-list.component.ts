import { Component} from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-ubicacion-list',
  templateUrl: './ubicacion-list.component.html',
  styleUrls: ['./ubicacion-list.component.css']
})
export class UbicacionListComponent {

constructor(private locationService: LocationService){}

get isUserLocationReady(){
return this.locationService.isUserLocationReady;
}

}
