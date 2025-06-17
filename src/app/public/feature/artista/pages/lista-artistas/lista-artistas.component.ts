import { Component, inject, OnInit } from '@angular/core';
import { MuestraArtistaComponent } from '../../../../../admin/feature/artista/models/muestra-artista/muestra-artista.component';
import { AdminService } from '../../../../../admin/core/services/admin.service';
import { artista } from '../../../../../admin/core/Interfaces/artista';

@Component({
  selector: 'app-lista-artistas',
  standalone: true,
  imports: [MuestraArtistaComponent],
  templateUrl: './lista-artistas.component.html',
  styleUrl: './lista-artistas.component.css'
})
export class ListaArtistasComponent implements OnInit{
  ngOnInit(): void {
   this.traerArtistas();
  }
  listaArtistas:artista[]= []
  service = inject(AdminService);

  traerArtistas()
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
}
