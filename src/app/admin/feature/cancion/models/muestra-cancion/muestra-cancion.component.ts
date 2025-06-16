import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { cancion } from '../../../../core/Interfaces/cancion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-muestra-cancion',
  standalone: true,
  imports: [],
  templateUrl: './muestra-cancion.component.html',
  styleUrl: './muestra-cancion.component.css'
})
export class MuestraCancionComponent {
  @Input() listaCanciones!: cancion[];

  @Output() eliminarCancionEvent = new EventEmitter<number>();

  rutas = inject(Router);
  onEliminarClick(idArtista: number): void {
      this.eliminarCancionEvent.emit(idArtista);
  }

   irCrearCanciones()
  {
    this.rutas.navigate(["crearCanciones"])
  }
}

