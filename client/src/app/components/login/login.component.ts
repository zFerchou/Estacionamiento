import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  correo: string = '';
  password1: string = '';
  loading = false; // Variable de bandera para controlar la visibilidad del spinner
  showErrorMessage = false;
  constructor(private authService: AuthService, private router: Router) {}

  onGoogleLogin(){

  }

  login(): void {
    this.loading = true; // Muestra el spinner al iniciar sesión
    this.showErrorMessage = false;

    this.authService.loginToServer(this.correo, this.password1).subscribe(response => {
      if ((<any>response).success) {
        this.authService.setLoggendInStatus(true);
        this.authService.setCurrentUser((<any>response).usuario);
        console.log("login" + (<any>response));
        this.router.navigate(['home/perfil']);
      } else {
        // Las credenciales son incorrectas, muestra un alert.
        alert('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
        this.loading = false; // Oculta el spinner en caso de error
      }
    },
    (error) => {
      // Error en la solicitud al servidor
      alert('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
      this.loading = false; // Oculta el spinner en caso de error
    });
  }
}



