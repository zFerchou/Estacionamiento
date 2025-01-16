import { Component, HostBinding } from '@angular/core';
import { PagosService } from 'src/app/services/pago.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Pagos } from 'src/app/models/Pagos';

@Component({
  selector: 'app-pago-list',
  templateUrl: './pago-list.component.html',
  styleUrls: ['./pago-list.component.css']
})
export class PagoListComponent {
  @HostBinding ('class')classes='row';
  pagos: any =[];

  constructor(private pagoService : PagosService, private router:Router){}



  ngOnInit(){ this.getPagos();

  }

  getPagos(){
    this.pagoService.getPago().subscribe(
      resp => { 
        this.pagos =resp;

        console.log(resp)
      },
      err => console.error(err)
    )
  }
  deletePago( IDPago: number){
		console.log(IDPago);
		this.pagoService.deletePago(IDPago).subscribe(
		resp => {console.log(resp); 
    this.getPagos();
    this.router.navigate(['home/paypal']);},
    err => console.error(err))}

    
}
