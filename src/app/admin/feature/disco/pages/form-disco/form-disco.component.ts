import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { artista } from '../../../../core/Interfaces/artista';
import { cancion } from '../../../../core/Interfaces/cancion';
import { AdminService } from '../../../../core/services/admin.service';
import { disco, DiscoDTO } from '../../../../core/Interfaces/disco';

@Component({
  selector: 'app-form-disco',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-disco.component.html',
  styleUrl: './form-disco.component.css'
})
export class FormDiscoComponent implements OnInit {
  ngOnInit(): void {
    this.cargaDatos()
  
  }

  fb = inject(FormBuilder);
  service = inject(AdminService);
  listaArtistas:artista[] = []
  listaCancionesDisponibles: cancion[] = [];

  canciones: cancion[] = []

  art:artista = {
  id: 0,
  nombre: '',
  tipo: ''
  }

  formulario = this.fb.nonNullable.group(
    {
      titulo: ['', Validators.required],
      anoCreacion: ['', Validators.required],
      artista: [0,Validators.required],
     canciones: this.fb.control<number[]>([], Validators.required)
    }
  )

  cargaDatos()
  {
    this.service.getArtistas().subscribe(
      {
        next:(response)=>
        {
          this.listaArtistas = response;
          console.log(this.listaArtistas);
        },
        error:(err:Error)=>
        {
          console.log(err.message);
        }
      }
    )

    this.service.getCanciones().subscribe(
      {
        next:(response)=>
        {
          this.listaCancionesDisponibles = response;
          console.log(this.listaCancionesDisponibles)
        },
        error:(err:Error)=>
        {
          console.log(err.message);
        }
      }
    )
  }

  agregarCancion(c: cancion) {
  const cancionesFormArray = this.formulario.get('canciones') as FormArray;

  cancionesFormArray.push(
    this.fb.group({
      id: [c.id],
      titulo: [c.titulo, Validators.required],
      autor: [c.autor, Validators.required]
    })
  );
}

  enviarFormulario() {
  const artistaId = this.formulario.value.artista!;
  const cancionIds: number[] = this.formulario.value.canciones ?? [];

  const discoDTO: DiscoDTO = {
    titulo: this.formulario.value.titulo ?? "",
    anoCreacion: this.formulario.value.anoCreacion!,
    artistaId: artistaId,
    cancionesIds: cancionIds
  };

  this.service.addDisco(discoDTO).subscribe({
    next: () => {
      alert("Disco creado con éxito");
    },
    error: (err: Error) => {
      console.log(err.message);
      alert("No se pudo crear el disco");
    }
  });
}

}