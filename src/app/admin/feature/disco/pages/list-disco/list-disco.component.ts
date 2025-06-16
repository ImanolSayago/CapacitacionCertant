import { Component, inject, OnInit } from '@angular/core';
import { AdminService } from '../../../../core/services/admin.service';
import { disco } from '../../../../core/Interfaces/disco';
import { VistaDiscoComponent } from "../../models/vista-disco/vista-disco.component";

@Component({
  selector: 'app-list-disco',
  standalone: true,
  imports: [VistaDiscoComponent],
  templateUrl: './list-disco.component.html',
  styleUrl: './list-disco.component.css'
})
export class ListDiscoComponent implements OnInit {


  ngOnInit(): void {
    this.traerDiscos();
  }

  service= inject(AdminService);
  listaDiscos: disco[]= []

  traerDiscos()
  {
    this.service.getDiscos().subscribe(
      {
        next:(response)=>
        {
          this.listaDiscos = response;
        },
        error:(err:Error)=>
        {
          console.log(err.message);
        }
      }
    )
  }

  eliminarDisco(id:number)
  {
    this.service.deleteDisco(id).subscribe(
      {
        next:()=>
        {
          alert("Disco eliminado con exito")
        },
        error:(err:Error)=>
        {
          console.log(err.message);
          alert("El disco no se pudo eliminar")
        }
      }
    )
  }

}
