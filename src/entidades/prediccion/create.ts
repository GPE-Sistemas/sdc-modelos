import { IPrediccionEnfermedad } from "./schema";

export interface ICreatePrediccion {
  fecha: string;
  idSiembra: string;
  enfermedades: IPrediccionEnfermedad[];
  idEstacion: string;
  distanciaMetros: number;
}
