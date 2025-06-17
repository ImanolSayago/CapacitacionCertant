import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../../public/core/footer/footer.component";
import { AdminService } from '../../core/services/admin.service';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

  rutas = inject(Router);
  menuAbierto: boolean = false;

  service = inject(AdminService)

  irFormDiscos()
  {
    this.rutas.navigate(["main-admin/agregarDiscos"])
  }

  irCanciones()
  {
    this.rutas.navigate(["main-admin/canciones"])
  }

  irArtistas()
  {
    this.rutas.navigate(["main-admin/listaArtista"])
  }

  logout()
  {
    this.service.logOut();
    this.rutas.navigate(["login"])
  }
}
