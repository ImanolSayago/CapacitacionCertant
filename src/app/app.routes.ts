import { Routes } from '@angular/router';
import { MainLayoutComponent } from './admin/layout/main-layout/main-layout.component';
import { ListDiscoComponent } from './admin/feature/disco/pages/list-disco/list-disco.component';
import { DiscoInformacionComponent } from './admin/feature/disco/pages/disco-informacion/disco-informacion.component';
import { FormDiscoComponent } from './admin/feature/disco/pages/form-disco/form-disco.component';
import { ListCancionesComponent } from './admin/feature/cancion/pages/list-canciones/list-canciones.component';
import { FormCancionComponent } from './admin/feature/cancion/pages/form-cancion/form-cancion.component';
import { ListArtistaComponent } from './admin/feature/artista/pages/list-artista/list-artista.component';
import { FormArtistaComponent } from './admin/feature/artista/pages/form-artista/form-artista.component';
import { MainPublicComponent } from './public/layout/main-public/main-public.component';
import { ListDiscosComponent } from './public/feature/disco/pages/list-discos/list-discos.component';
import { ListCancionesPublicComponent } from './public/feature/cancion/pages/list-canciones-public/list-canciones-public.component';
import { ListaArtistasComponent } from './public/feature/artista/pages/lista-artistas/lista-artistas.component';
import { LoginComponent } from './auth/login/login.component';
import { authGuardFn } from './auth/guard/Auth-guard-fn';
import { RegisterComponent } from './auth/register/register.component';
import { EditFormDiscoComponent } from './admin/feature/disco/pages/edit-form-disco/edit-form-disco.component';


export const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path:"registro",
    component:RegisterComponent
  },

  {
    path: "main-admin",
    component: MainLayoutComponent,
    canActivate: [authGuardFn],
    children: [
      { path: '', redirectTo: 'discos', pathMatch: 'full' },

      { path: 'discos', component: ListDiscoComponent },

      { path: 'discos-admin/:id', component: DiscoInformacionComponent },
      { path: 'agregarDiscos', component: FormDiscoComponent },

      { path: 'canciones', component: ListCancionesComponent },

      { path: 'crearCanciones', component: FormCancionComponent },
      { path: 'listaArtista', component: ListArtistaComponent },
      { path: 'crearArtista', component: FormArtistaComponent },
      {path:"edit-disco/:id", component:EditFormDiscoComponent},
    ]
  },

  {
    path: '',
    component: MainPublicComponent,
     canActivate: [authGuardFn],
    children: [
      { path: '', redirectTo: 'discos-public', pathMatch: 'full' },
      { path: 'inicio', component: MainPublicComponent },
      { path: 'discos-public', component: ListDiscosComponent },
      { path: 'discos-public/:id', component: DiscoInformacionComponent },
      { path: 'canciones-public', component: ListCancionesPublicComponent },
      { path: 'artistas-public', component: ListaArtistasComponent },
    ]
  },

  {
    path: '**',
    redirectTo: 'login'
  }
];
