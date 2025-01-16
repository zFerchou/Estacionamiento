import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from '../models/Usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private currentUser: Usuario | null = null;


  constructor(private http: HttpClient) {}

  loginToServer(correo: string, password1: string): Observable<any> {
    // Define las cabeceras para la solicitud, si es necesario
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Realiza una solicitud HTTP al backend y maneja las respuestas de error
    return this.http.post('http://192.168.0.8:3000/api/login', { correo, password1 }, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        // Maneja las respuestas de error aquí
        if (error.status === 401) {
          // Código 401 indica que las credenciales son incorrectas
          return throwError('Credenciales incorrectas');
        } else {
          // Otras respuestas de error, maneja de acuerdo a tus necesidades
          return throwError('Error en la solicitud de inicio de sesión');
        }
      })
    );
    
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  setLoggendInStatus(status: boolean) {
    this.isLoggedIn = status;
  }

  logout() {
    this.isLoggedIn = false;
  }

  setCurrentUser(usuario: Usuario) {
    this.currentUser = usuario;
  }

  getCurrentUser(): Usuario | null {
    return this.currentUser;
  }
  
}

