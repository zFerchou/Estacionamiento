import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservaListComponent } from './components/reserva-list/reserva-list.component';
import { HomeListComponent } from './components/home-list/home-list.component';
import { LugaresListComponent } from './components/lugares-list/lugares-list.component';
import { LoginComponent } from './components/login/login.component';
import { InicioseListComponent } from './components/iniciose-list/iniciose-list.component';
import { ReservaFormComponent } from './components/reserva-form/reserva-form.component'
import { InicioseFormComponent } from './components/iniciose-form/iniciose-form.component';
import { PerfilFormComponent } from './components/perfil-form/perfil-form.component';
import { EditReserFormComponent } from './components/edit-reser-form/edit-reser-form.component';
import { EditPerFormComponent } from './components/edit-per-form/edit-per-form.component';
import { PagoFormComponent } from './components/pago-form/pago-form.component';
import { PagoListComponent } from './components/pago-list/pago-list.component';
import { HomeComponent } from './components/home/home.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { FacetimeComponent } from './components/facetime/facetime.component';
import { UbicacionListComponent } from './components/ubicacion-list/ubicacion-list.component';
import { PaypalListComponent } from './components/paypal-list/paypal-list.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeListComponent
  }, 
  
  {
    path:'home/reserva',
    component: ReservaListComponent
  },  
  {
    path:'home/noticias',
    component: NoticiasComponent
  },
  {
    path:'home/facetime',
    component: FacetimeComponent
  },    
  {
    path:'home/registros/add',
    component: ReservaFormComponent
  },
  {
    path:'home/lugares/add',
    component: LugaresListComponent
  },
  {
    path:'home/login',
    component: LoginComponent
  },
  {
    path:'home/paypal',
    component: PaypalListComponent
  },
  {
    path:'home/crea_cuenta',
    component: InicioseFormComponent

  },
  {
    path:'home/perfil',
    component: PerfilFormComponent

  },
  {
  path:'home/editRese/:id',
  component: EditReserFormComponent

},
{
  path:'home/editPer/:idUs',
  component: EditPerFormComponent

},
{
  path:'home/pago',
  component: PagoFormComponent

},
{
  path:'home/ubicacion',
  component: UbicacionListComponent

},
{
  path:'home/pagoTabla',
  component: PagoListComponent

},
{path: 'home/youtube', component:HomeComponent},
{path: 'home/**', redirectTo: 'home/youtube', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

