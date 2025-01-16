import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

declare var paypal: any;

@Component({
  selector: 'app-paypal-list',
  templateUrl: './paypal-list.component.html',
  styleUrls: ['./paypal-list.component.css']
})
export class PaypalListComponent implements OnInit {
  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;

  producto = {
    descripcion: 'Servicio en venta',
    precio: 50
  };

  constructor(private router: Router) {}

  ngOnInit() {
    paypal
      .Buttons({
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.producto.descripcion,
                amount: {
                  currency_code: 'USD',
                  value: this.producto.precio
                }
              }
            ]
          });
        },
        onApprove: async (data: any, actions: any) => {
          const capture: any = await actions.order.capture();
          this.router.navigate(['home/lugares/add']);
        }
      })
      .render(this.paypalElement.nativeElement);
  }
}
