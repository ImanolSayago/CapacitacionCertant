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

  archivoSeleccionado!:File;

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
     canciones: this.fb.control<number[]>([]),
    
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
  if (this.formulario.invalid) {
    alert("Complete todos los campos correctamente");
    return;
  }

 
  const discoObj = {
    titulo: this.formulario.value.titulo!,
    anoCreacion: this.formulario.value.anoCreacion!,
    artistaId: this.formulario.value.artista!,
    cancionesIds: this.formulario.value.canciones ?? []
  };

  const formData = new FormData();

  formData.append('disco', new Blob([JSON.stringify(discoObj)], { type: 'application/json' }));

  if (this.archivoSeleccionado) {
    formData.append('imagen', this.archivoSeleccionado);
  } else {
    alert("Tenés que seleccionar una imagen");
    return;
  }

  this.service.addDiscoconIMG(formData).subscribe({
    next: () => alert("Disco creado con imagen!"),
    error: (err) => {
      console.error(err);
      alert("Error al crear disco con imagen");
    }
  });
}

onFileSelected(event: Event) {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.archivoSeleccionado = input.files[0];
  }
}

}