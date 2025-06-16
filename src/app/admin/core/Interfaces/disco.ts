import { artista } from "./artista";
import { cancion } from "./cancion";

export interface disco{

    id?: number;
    titulo:string;
    anoCreacion:string;
    artista:artista; //un artista o una banda
    canciones:cancion[] //lista canciones
}

export interface DiscoDTO {
  titulo: string;
  anoCreacion: string;
  artistaId: number;
  cancionesIds: number[];
}