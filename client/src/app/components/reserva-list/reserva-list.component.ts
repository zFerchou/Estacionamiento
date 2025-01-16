import { Component, HostBinding } from '@angular/core';
import { VehiculosService } from 'src/app/services/vehiculos.service';
import { Vehiculo } from 'src/app/models/Vehiculo';
import { ActivatedRoute,Router } from '@angular/router';



@Component({
  selector: 'app-reserva-list',
  templateUrl: './reserva-list.component.html',
  styleUrls: ['./reserva-list.component.css']
})
export class ReservaListComponent {
  @HostBinding ('class')classes='row';
  vehiculos: any =[];

  constructor(private vehiculosService : VehiculosService, private router:Router){}



  ngOnInit(){ this.getVehiculo();

  }

  getVehiculo(){
    this.vehiculosService.getReservas().subscribe(
      resp => { 
        this.vehiculos =resp;
        
        //console.log(resp),
      },
      err => console.error(err)
    )
  }
 
  putVehiculo(IdVehiculo:number, updateVehiculo:Vehiculo){
    this.vehiculosService.updateVehiculo(updateVehiculo).subscribe(
      resp => { 
        this.vehiculos =resp;
        
        //console.log(resp),
      },
      err => console.error(err)
    )
  }


  deleteVehiculo(matricula : string){
		console.log(matricula);
		this.vehiculosService.deleteVehiculo(matricula).subscribe(
		resp => {console.log(resp); 
    this.getVehiculo();},
    err => console.error(err))}


    
}