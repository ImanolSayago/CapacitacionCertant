import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../../../core/services/admin.service';
import { artista } from '../../../../core/Interfaces/artista';

@Component({
  selector: 'app-form-artista',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-artista.component.html',
  styleUrl: './form-artista.component.css'
})
export class FormArtistaComponent  {

  fb = inject(FormBuilder);
  service = inject(AdminService);

  artista:artista = {
    nombre: '',
    tipo: ''
  }

  formulario = this.fb.nonNullable.group(
    {
      nombre:["",Validators.required],
      tipo:["",Validators.required]
    }
  );

  enviarFormulario()
  {
    this.artista.nombre = this.formulario.value.nombre!
    this.artista.tipo = this.formulario.value.tipo!

    console.log("datos del artista",this.artista);

    this.service.addArtista(this.artista).subscribe(
      {
        next:()=>
        {
          alert("Artista creado con exito");
        },
        error:(err:Error)=>
        {
          console.log(err.message);
          alert("El artista no se pudo crear")
        }
      }
    )
  }

}
