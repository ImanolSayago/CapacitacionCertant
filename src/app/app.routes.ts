import { Routes } from '@angular/router';
import { MainLayoutComponent } from './admin/layout/main-layout/main-layout.component';
import { ListDiscoComponent } from './admin/feature/disco/pages/list-disco/list-disco.component';
import { DiscoInformacionComponent } from './admin/feature/disco/pages/disco-informacion/disco-informacion.component';
import { FormDiscoComponent } from './admin/feature/disco/pages/form-disco/form-disco.component';
import { ListCancionesComponent } from './admin/feature/cancion/pages/list-canciones/list-canciones.component';
import { FormCancionComponent } from './admin/feature/cancion/pages/form-cancion/form-cancion.component';
import { ListArtistaComponent } from './admin/feature/artista/pages/list-artista/list-artista.component';
import { FormArtistaComponent } from './admin/feature/artista/pages/form-artista/form-artista.component';


export const routes: Routes = [
 {
        path: '', // Esta es la ruta raíz. Cuando la URL esté vacía, se renderizará MainLayoutComponent.
        component: MainLayoutComponent,
        // Aquí viene la clave: 'children' define las rutas que se cargarán *dentro* del <router-outlet> de MainLayoutComponent.
        children: [
            {
                path: '', // Ruta vacía dentro del children: esto significa '/'. Podrías poner aquí un componente de inicio.
                          // Por ejemplo, aquí podrías querer un DashboardComponent para el admin.
                          // Si no tienes un componente específico para la raíz del layout, puedes omitir esta entrada,
                          // pero es común tener una página de inicio.
                          // Si quisieras que el listado de discos fuera la "página principal" del layout:
                          // path: '', component: ListDiscoComponent
                redirectTo: 'discos', // Puedes redirigir a 'discos' si quieres que sea la primera página
                pathMatch: 'full'     // Asegura que la redirección sea solo si la URL es exactamente vacía.
            },
            {
                path: 'discos', // Esta ruta ahora será '/discos' (porque está anidada bajo '')
                component: ListDiscoComponent
            },
            {
                path: 'discos/:id', // Esta ruta ahora será '/discos/:id'
                component: DiscoInformacionComponent
            },
            {
                path:"agregarDiscos",
                component:FormDiscoComponent
            },
            {
                path:"canciones",
                component: ListCancionesComponent
            },

             {
                path:"crearCanciones",
                component: FormCancionComponent
            },

            {
                path:"listaArtista",
                component: ListArtistaComponent
            },
            {
                path:"crearArtista",
                component:FormArtistaComponent
            }
            // Agrega aquí todas las demás rutas que quieras que usen este layout, por ejemplo:
            // { path: 'artistas', component: ListArtistaComponent },
            // { path: 'artistas/:id', component: ArtistaInformacionComponent },
            // { path: 'agregar-disco', component: AddDiscoComponent },
            // { path: 'agregar-cancion', component: AddCancionComponent },
            // { path: 'agregar-artista', component: AddArtistaComponent }
        ]
    },
];
