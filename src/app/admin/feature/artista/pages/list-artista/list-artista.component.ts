import { Component, inject, OnInit } from '@angular/core';
import { AdminService } from '../../../../core/services/admin.service';
import { artista } from '../../../../core/Interfaces/artista';
import { MuestraArtistaComponent } from "../../models/muestra-artista/muestra-artista.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-artista',
  standalone: true,
  imports: [MuestraArtistaComponent],
  templateUrl: './list-artista.component.html',
  styleUrl: './list-artista.component.css'
})
export class ListArtistaComponent implements OnInit {
  ngOnInit(): void {
   this.cargaDatos();
  }
  listaArtistas:artista[]= []
  rutas = inject(Router);
  service = inject(AdminService);

  cargaDatos()
  {
    this.service.getArtistas().subscribe(
      {
        next:(response)=>
        {
          this.listaArtistas = response;
        },
        error:(err:Error)=>
        {
          console.log(err.message);
        }
      }
    )
  }

 

  eliminarArtista(id:number)
  {
    this.service.deleteArtista(id).subscribe(
      {
        next:()=>
        {
          alert("Artista eliminado");
        },
        error:(err:Error)=>
        {
          console.log(err.message)
          alert("El artista no se pudo eliminar")
        }
      }
    )
  }
}
