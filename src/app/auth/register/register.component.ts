import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../admin/core/services/admin.service';
import { user } from '../../interfaces/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent{

  service = inject(AdminService);
  fb = inject(FormBuilder);

  listaUsuarios:user[] = [];



  formulario = this.fb.nonNullable.group(
    {
      usuario:["",Validators.required],
      password: ["",Validators.required],
      
    }
  )

  cargarUsuario()
  {
    const usuario: user ={
      usuario: this.formulario.value.usuario!,
      password:this.formulario.value.password!,
      tipo: "USER"
    }

    this.service.getUsuarios().subscribe(
      {
        next:(response)=>
        {
          
          this.listaUsuarios = response;
          const encontrado =  this.listaUsuarios.find(e=>e.usuario == usuario.usuario);

              if(encontrado){
              alert("Ese nombre de usuario ya existe, elija otro")
              return;
              }

               this.service.addUser(usuario).subscribe(
      {
        next:()=>{
          alert("Usuario creado con exito")
        },
        error:(err:Error)=>
        {
          console.log(err.message);
        }
      }
    )
        },
        error:(err:Error)=>
        {
          console.log(err.message);
        }
      }
    )

 

  
  }
}
