import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../core/footer/footer.component";

@Component({
  selector: 'app-main-public',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './main-public.component.html',
  styleUrl: './main-public.component.css'
})
export class MainPublicComponent {
rutas = inject(Router);

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
}
