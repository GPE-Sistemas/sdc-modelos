import { ICoordenadas } from "./coordenadas";

export interface IUbicacion {
  poligono: ICoordenadas[];
  centro?: ICoordenadas;
  nombre?: string;
  superficie?: number;
}
