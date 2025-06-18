import { artista } from "./artista";
import { cancion } from "./cancion";

export interface disco{

    id?: number;
    titulo:string;
    anoCreacion:string;
    artista:artista; 
    canciones:cancion[];
    urlImg?:string;
}

export interface DiscoDTO {
  titulo: string;
  anoCreacion: string;
  artistaId: number;
  cancionesIds: number[];
}