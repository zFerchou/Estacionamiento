import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { VehiculosService } from './services/vehiculos.service';
import { HttpClientModule } from '@angular/common/http'; // Importa solo HttpClientModule, elimina HttpClientJsonpModule
import { ReservaListComponent } from './components/reserva-list/reserva-list.component';
import { LugaresListComponent } from './components/lugares-list/lugares-list.component';
import { HomeListComponent } from './components/home-list/home-list.component';
import { ReservaFormComponent } from './components/reserva-form/reserva-form.component';
import { LoginComponent } from './components/login/login.component';
import { InicioseListComponent } from './components/iniciose-list/iniciose-list.component';
import { InicioseFormComponent } from './components/iniciose-form/iniciose-form.component';
import { PerfilFormComponent } from './components/perfil-form/perfil-form.component';
import { EditReserFormComponent } from './components/edit-reser-form/edit-reser-form.component';
import { EditPerFormComponent } from './components/edit-per-form/edit-per-form.component';
import { PagoFormComponent } from './components/pago-form/pago-form.component';
import { PagoListComponent } from './components/pago-list/pago-list.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HomeComponent } from './components/home/home.component';
import { YoutubePipe } from './pipe/youtube.pipe';
import { FormsModule } from '@angular/forms'; // Importar FormsModule desde '@angular/forms'
import { GoogleMap } from '@angular/google-maps';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { FacetimeComponent } from './components/facetime/facetime.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { UbicacionListComponent } from './components/ubicacion-list/ubicacion-list.component';
import { MapsModule } from './maps/maps.module';
import { PaypalListComponent } from './components/paypal-list/paypal-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ReservaListComponent,
    LugaresListComponent,
    HomeListComponent,
    ReservaFormComponent,
    LoginComponent,
    InicioseListComponent,
    InicioseFormComponent,
    PerfilFormComponent,
    EditReserFormComponent,
    EditPerFormComponent,
    PagoFormComponent,
    PagoListComponent,
    HomeComponent,
    YoutubePipe,
    NoticiasComponent,
    UbicacionListComponent,
    FacetimeComponent,
    MapViewComponent,
    LoadingComponent,
    PaypalListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MapsModule
  ],
  providers: [
    VehiculosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

