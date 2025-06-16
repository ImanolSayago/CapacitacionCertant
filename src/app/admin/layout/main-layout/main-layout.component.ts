import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

  rutas = inject(Router);

  irFormDiscos()
  {
    this.rutas.navigate(["agregarDiscos"])
  }

  irCanciones()
  {
    this.rutas.navigate(["canciones"])
  }

  irArtistas()
  {
    this.rutas.navigate(["listaArtista"])
  }

}
