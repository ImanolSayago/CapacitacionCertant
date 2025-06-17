import { Component, inject, OnInit } from '@angular/core';
import { MuestraCancionComponent } from '../../../../../admin/feature/cancion/models/muestra-cancion/muestra-cancion.component';
import { cancion } from '../../../../../admin/core/Interfaces/cancion';
import { AdminService } from '../../../../../admin/core/services/admin.service';

@Component({
  selector: 'app-list-canciones-public',
  standalone: true,
  imports: [MuestraCancionComponent],
  templateUrl: './list-canciones-public.component.html',
  styleUrl: './list-canciones-public.component.css'
})
export class ListCancionesPublicComponent implements OnInit {
  ngOnInit(): void {
    this.traerCanciones()
  }

  service = inject(AdminService);

  listaCanciones: cancion[] = []

  traerCanciones()
  {
    this.service.getCanciones().subscribe(
      {
        next:(response)=>{
          this.listaCanciones = response;
        },
        error:(err:Error)=>{
          console.log(err.message);
        }
      }
    )
  }


}
