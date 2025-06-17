import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../../admin/core/services/admin.service';
import { user } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  rutas = inject(Router);
  service = inject(AdminService);
  fb = inject(FormBuilder);

  formulario = this.fb.nonNullable.group(
    {
      usuario : ["",Validators.required],
      password: ["",Validators.required]
    }
  )

  usuari: user=
  {
    usuario:"",
    password:"",
    tipo:""
  }

  irRegistro()
  {
    this.rutas.navigate(["registro"]);
  }

  loginAndLogout()
  {
    if(this.formulario.valid)
    {
       const credenciales: user = {
      usuario: this.formulario.value.usuario!,
      password: this.formulario.value.password!,
    };

    this.service.LogIn(credenciales).subscribe(
      {
        next:(usuario)=>
        {
            localStorage.setItem("token", "123.123.123");
          if(usuario.tipo == "ADMIN")
          {
            this.rutas.navigate(["main-admin/discos"])
            
          }
          else
          {
            this.rutas.navigate(["discos-public"])
          }
        },
        error:(err:Error)=>
        {
          alert("Error al iniciar sesion")
          console.log(err.message);
        }
      }
    )
  }    
}

}
  

