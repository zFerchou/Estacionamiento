import { Component, AfterViewInit, ViewChild, ElementRef, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { bootstrapApplication } from '@angular/platform-browser';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('exampleModal', { static: false }) modalElement: ElementRef | undefined;

  misVideos: any[] = [];
  videoId!: string;
  videoUrl: SafeResourceUrl | undefined;


  constructor(private _youtube: YoutubeService, private sanitizer: DomSanitizer) {
    this._youtube.obtenerVideos().subscribe((resp: any) => {
      console.log(resp);
      this.misVideos = resp.items;
    });
  }

  ngAfterViewInit() {
    // El modal se puede abrir aquí si es necesario
  }

  detalleVideo(detalle: string) {
    console.log(detalle);
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${detalle}`);
    this.openModal();
  }
  

  openModal() {
    if (this.modalElement) {
      const modal = this.modalElement.nativeElement;
      const bootstrapModal = new bootstrap.Modal(modal);
      bootstrapModal.show();
    }
  }

  closeModal() {
    if (this.modalElement) {
      const modal: HTMLElement = this.modalElement.nativeElement;
      modal.classList.remove('show'); // Elimina la clase 'show' para ocultar el modal
    }
  }
}

