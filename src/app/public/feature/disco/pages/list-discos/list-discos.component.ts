import { Component, inject, OnInit } from '@angular/core';
import { VistaDiscoComponent } from '../../../../../admin/feature/disco/models/vista-disco/vista-disco.component';
import { AdminService } from '../../../../../admin/core/services/admin.service';
import { disco } from '../../../../../admin/core/Interfaces/disco';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list-discos',
  standalone: true,
  imports: [VistaDiscoComponent,FormsModule],
  templateUrl: './list-discos.component.html',
  styleUrl: './list-discos.component.css'
})
export class ListDiscosComponent implements OnInit{
  ngOnInit(): void {
    this.traerDiscos();
  }

  listaDiscos:disco[] = []
  listaDiscosFiltrada: disco[] = [];       
  filtroTexto: string = ''; 

  service = inject(AdminService);

  traerDiscos()
  {
    this.service.getDiscos().subscribe(
      {
        next:(response)=>{
          this.listaDiscos = response;
          this.listaDiscosFiltrada = response;
        },
        error:(err:Error)=>
        {
          console.log(err.message);
        }
      }
    )
  }

   aplicarFiltros() {
    const texto = this.filtroTexto.toLowerCase().trim();
    this.listaDiscosFiltrada = this.listaDiscos.filter(disco => 
      disco.titulo.toLowerCase().includes(texto) || 
      disco.artista.nombre.toLowerCase().includes(texto)
    );
  }
}
