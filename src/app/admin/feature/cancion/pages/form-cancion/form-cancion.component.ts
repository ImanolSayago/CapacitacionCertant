import { Component, inject, OnInit } from '@angular/core';
import { cancion, cancionDTO } from '../../../../core/Interfaces/cancion';
import { artista } from '../../../../core/Interfaces/artista';
import { AdminService } from '../../../../core/services/admin.service';
import { disco } from '../../../../core/Interfaces/disco';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-cancion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-cancion.component.html',
  styleUrl: './form-cancion.component.css'
})
export class FormCancionComponent implements OnInit {
  ngOnInit(): void {
    this.cargarDatos();
  }

  service= inject(AdminService);
  fb = inject(FormBuilder);

  listaDiscos:disco[] = []
  listaArtistas:artista[] = []

  formulario = this.fb.nonNullable.group({
    titulo:["",Validators.required],
    idArtista:[0,Validators.required],
    idDisco:[0,Validators.required]
  })

  cargarDatos()
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

    this.service.getDiscos().subscribe({
      next:(response)=>
      {
        this.listaDiscos = response;
      },
      error:(err:Error)=>
      {
        console.log(err.message);
      }
    })
  }


  enviarFormulario()
  {
    const cancion:cancionDTO ={
      titulo: this.formulario.value.titulo!,
      autorID: this.formulario.value.idArtista!,
      discoId: this.formulario.value.idDisco!,
      
    }

    this.service.addCancion(cancion).subscribe(
      {
        next:()=>
        {
          alert("Cancion cargada correctamente")
        },
        error:(err:Error)=>
        {
          console.log(err.message);
        }
      }
    )
  }

}
