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
  @Input() isAdmin!: boolean;

  @Output() eliminarDiscoEvent= new EventEmitter<number>();

  rutas = inject(Router);

  irDiscoAdmin(id:number)
  {
    this.rutas.navigate([`main-admin/discos-admin/${id}`])
  }

  irDiscoUser(id:number)
  {
     this.rutas.navigate([`main-admin/discos-public/${id}`])
  }

  onClickEliminar(idDisco:number)
  {
    this.eliminarDiscoEvent.emit(idDisco);
  }

  irEdit(id:number)
  {
    this.rutas.navigate([`main-admin/edit-disco/${id}`]);
  }
}
