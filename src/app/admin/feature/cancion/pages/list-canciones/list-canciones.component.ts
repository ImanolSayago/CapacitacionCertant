import { Component, inject, OnInit } from '@angular/core';
import { MuestraCancionComponent } from "../../models/muestra-cancion/muestra-cancion.component";
import { AdminService } from '../../../../core/services/admin.service';
import { cancion } from '../../../../core/Interfaces/cancion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-canciones',
  standalone: true,
  imports: [MuestraCancionComponent],
  templateUrl: './list-canciones.component.html',
  styleUrl: './list-canciones.component.css'
})
export class ListCancionesComponent implements OnInit {
  ngOnInit(): void {
    this.traerLista()
  }

  rutas = inject(Router);
  service = inject(AdminService);

  listaCanciones:cancion[] = []

  traerLista()
  {
    this.service.getCanciones().subscribe(
      {
        next:(response)=>
        {
          this.listaCanciones= response
        },
        error:(err:Error)=>
        {
          console.log(err.message)
        }
      }
    )
  }

  eliminarArtista(id: number)
  {
    this.service.deleteArtista(id).subscribe(
      {
        next:()=>
        {
          alert("Artista eliminado con exito");
        },
        error:(err:Error)=>
        {
          console.log(err.message);
          alert("el artista no se pudo eliminar")
        }
      }
    )
  }
}
