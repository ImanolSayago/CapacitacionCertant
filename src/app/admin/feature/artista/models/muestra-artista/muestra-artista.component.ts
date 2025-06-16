import { Component, EventEmitter, inject, Input, Output, output } from '@angular/core';
import { artista } from '../../../../core/Interfaces/artista';
import { Router } from '@angular/router';

@Component({
  selector: 'app-muestra-artista',
  standalone: true,
  imports: [],
  templateUrl: './muestra-artista.component.html',
  styleUrl: './muestra-artista.component.css'
})
export class MuestraArtistaComponent {

  @Input() listaArtistas!:artista[];
  @Output() eliminarArtistaEvent = new EventEmitter<number>()

  rutas = inject(Router);

  onEliminarClick(idArtista: number): void {
      this.eliminarArtistaEvent.emit(idArtista);
  }

  irCrearArtistas()
  {
    this.rutas.navigate(["crearArtista"])
  }
}
