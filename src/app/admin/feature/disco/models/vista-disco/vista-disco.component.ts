import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { disco } from '../../../../core/Interfaces/disco';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-disco',
  standalone: true,
  imports: [],
  templateUrl: './vista-disco.component.html',
  styleUrl: './vista-disco.component.css'
})
export class VistaDiscoComponent {

  @Input() listaDiscos!: disco[];

  @Output() eliminarDiscoEvent= new EventEmitter<number>();

  rutas = inject(Router);

  irDisco(id:number)
  {
    this.rutas.navigate([`discos/${id}`])
  }

  onClickEliminar(idDisco:number)
  {
    this.eliminarDiscoEvent.emit(idDisco);
  }
}
