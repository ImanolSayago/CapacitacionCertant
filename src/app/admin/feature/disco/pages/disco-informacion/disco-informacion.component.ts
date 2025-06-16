import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../../../core/services/admin.service';
import { disco } from '../../../../core/Interfaces/disco';
import { artista } from '../../../../core/Interfaces/artista';
import { cancion } from '../../../../core/Interfaces/cancion';
import { DetalleDiscoComponent } from "../../models/detalle-disco/detalle-disco.component";

@Component({
  selector: 'app-disco-informacion',
  standalone: true,
  imports: [DetalleDiscoComponent],
  templateUrl: './disco-informacion.component.html',
  styleUrl: './disco-informacion.component.css'
})
export class DiscoInformacionComponent implements OnInit {

  rutas = inject(Router);
  route = inject(ActivatedRoute);
  service = inject(AdminService);

  listaCanciones:cancion[] = [];

  art:artista={
    id: 0,
    nombre: '',
    tipo: ''
  }

  disc:disco = {
    id: 0,
    titulo: '',
    anoCreacion: '',
    artista: this.art,
    canciones: []
  }

  discoID = 0;
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.discoID = Number(params.get('id'));

      this.traerDisco();
  })
}

traerDisco()
{
  this.service.getDiscosById(this.discoID).subscribe(
    {
      next:(response)=>
      {
       this.disc= response;
       this.listaCanciones = response.canciones;
      },

      error:(err:Error)=>
      {
        console.log(err.message);
      }
    }
  )
}




}