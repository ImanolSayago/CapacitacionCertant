import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../core/footer/footer.component";
import { AdminService } from '../../../admin/core/services/admin.service';

@Component({
  selector: 'app-main-public',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './main-public.component.html',
  styleUrl: './main-public.component.css'
})
export class MainPublicComponent {
rutas = inject(Router);
menuAbierto: boolean = false;
service = inject(AdminService)

irDiscos()
{
  this.rutas.navigate(["discos-public"])
}

irCanciones()
{
  this.rutas.navigate(["canciones-public"])
}

irArtistas()
{
  this.rutas.navigate(["artistas-public"])
}

 logout()
  {
    this.service.logOut();
    this.rutas.navigate(["login"])
  }
}
