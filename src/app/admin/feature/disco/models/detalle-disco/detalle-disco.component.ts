import { Component, Input } from '@angular/core';
import { disco } from '../../../../core/Interfaces/disco';

@Component({
  selector: 'app-detalle-disco',
  standalone: true,
  imports: [],
  templateUrl: './detalle-disco.component.html',
  styleUrl: './detalle-disco.component.css'
})
export class DetalleDiscoComponent {

  @Input() disc!:disco;
}
