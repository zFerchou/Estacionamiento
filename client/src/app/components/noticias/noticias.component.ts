import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {
  noticias: any[] = [];
  secciones: string[] = ['technology', 'business', 'health']; // Ejemplo de secciones
  seccionSeleccionada: string = 'technology'; // Sección por defecto
  busqueda: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getNoticias();
  }

  getNoticias() {
    const apiKey = 'b073c116789b49fdbf89d59c1b7d6079';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=US&category=${this.seccionSeleccionada}&apiKey=${apiKey}`;

    this.http.get(apiUrl).subscribe((data: any) => {
      this.noticias = data.articles;
    });
  }

  cambiarSeccion(seccion: string) {
    this.seccionSeleccionada = seccion;
    this.getNoticias();
  }
}