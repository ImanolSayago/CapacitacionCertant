import { artista } from "./artista";
import { disco } from "./disco";

export interface cancion{
    id?: number;
    titulo:string;
    autor: artista;
    disco:disco
}

export interface cancionDTO{
    titulo: string;
    autorID: number;
    discoId: number;
}