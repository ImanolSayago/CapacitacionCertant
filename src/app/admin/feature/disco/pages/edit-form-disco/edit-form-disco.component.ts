import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AdminService } from '../../../../core/services/admin.service';
import { disco, DiscoDTO } from '../../../../core/Interfaces/disco';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-form-disco',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-form-disco.component.html',
  styleUrl: './edit-form-disco.component.css'
})
export class EditFormDiscoComponent implements OnInit {

  rutas = inject(Router);
  route = inject(ActivatedRoute);
  service = inject(AdminService);
  fb = inject(FormBuilder);

  discoID : number = 0;
  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
      this.discoID = Number(params.get('id'));
      this.traerDisco();
  })

  
  }

  formulario= this.fb.nonNullable.group(
    {
      titulo:["",Validators.required],
      anoCreacion:["",Validators.required]
    }
  )


  disco: DiscoDTO = 
  {
    titulo:"",
    anoCreacion:"",
    artistaId:0,
    cancionesIds: []
  }



  traerDisco()
  {
    this.service.getDiscosById(this.discoID).subscribe(
      {
        next:(response)=>
        {
          this.disco.titulo = response.titulo
          this.disco.anoCreacion = response.anoCreacion
          this.disco.artistaId = response.artista.id!

        this.formulario.patchValue({
        titulo: this.disco.titulo,
        anoCreacion: this.disco.anoCreacion
        });
        },
        error:(err:Error)=>
        {
          console.log(err.message);
            this.rutas.navigate(['/main-admin/discos']);
        }
      }
    )
    
  }

  enviarEdit()
  {
    this.disco.titulo = this.formulario.value.titulo!
    this.disco.anoCreacion = this.formulario.value.anoCreacion!

    this.service.editDisco(this.discoID,this.disco).subscribe(
      {
        next:()=>
        {
          alert("disco editado con exito");
          this.rutas.navigate(["main-admin"])
        },
        error:(err:Error)=>
        {
          alert("No se pudo completar la edicion del disco");
          console.log(err.message);
        }
      }
    )
  }

}
