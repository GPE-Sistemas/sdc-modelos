import { ICoordenadas } from './coordenadas';

export interface IUbicacion {
  poligono: ICoordenadas[];
  nombre?: string;
  superficie?: number;
}
