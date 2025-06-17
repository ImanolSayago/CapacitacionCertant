import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, ObservableLike, tap } from 'rxjs';
import { disco, DiscoDTO } from '../Interfaces/disco';
import { artista } from '../Interfaces/artista';
import { cancion, cancionDTO } from '../Interfaces/cancion';
import { user } from '../../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private api = "http://localhost:8080";
  private http = inject(HttpClient);
  isLogin:boolean = false;

  //servicios para discos//
  getDiscos():Observable<disco[]>
  {
    const url = `${this.api}/api/disco/traer`;
    return this.http.get<disco[]>(url);
  }

  getDiscosById(id:number):Observable<disco>
  {
    const url = `${this.api}/api/disco/traer/${id}`;
    return this.http.get<disco>(url);
  }

  addDisco(disc:DiscoDTO):Observable<disco>
  {
    const url = `${this.api}/api/disco/crear`
    return this.http.post<disco>(url,disc);
  }

  deleteDisco(id:number):Observable<void>
  {
    const url = `${this.api}/api/disco/delete/${id}`;
    return this.http.delete<void>(url);
  }



  //servicios para artista//
  getArtistas():Observable<artista[]>
  {
    const url = `${this.api}/api/artista/traer`;

    return this.http.get<artista[]>(url);
  }

  getArtistaById(id:number):Observable<artista>
  {
    const url = `${this.api}/api/artista/traer/${id}`;

    return this.http.get<artista>(url);
  }
 
  addArtista(art: artista):Observable<artista>
  {
    const url = `${this.api}/api/artista/crear`
    return this.http.post<artista>(url,art);
  }

  deleteArtista(id:number):Observable<void>
  {
    const url = `${this.api}/api/artista/delete/${id}`;
    return this.http.delete<void>(url);
  }

  //servicios para canciones//

  getCanciones():Observable<cancion[]>
  {
    const url = `${this.api}/api/cancion/traer`;
    return this.http.get<cancion[]>(url);
  }

  getCancionesById(id:number):Observable<cancion>
  {
    const url = `${this.api}/api/cancion/traer/${id}`;
    return this.http.get<cancion>(url);
  }

  addCancion(can:cancionDTO):Observable<cancion>
  {
    const url = `${this.api}/api/cancion/crear`
    return this.http.post<cancion>(url,can);
  }

  deleteCancion(id:number):Observable<void>
  {
    const url = `${this.api}/api/cancion/borrar/${id}`;
    return this.http.delete<void>(url);
  }


  //logIn//

  LogIn(credenciales: user): Observable<user> {
  const url = `${this.api}/api/usuario/login`; 

  return this.http.post<user>(url, credenciales).pipe(
    tap(usuario => {
      this.isLogin = true;
    })
  );
}

  logOut()
  {
    this.isLogin = false;
    localStorage.removeItem("token")
  }

  getIsLoggedIn():boolean{
    return this.isLogin;
  }
}
