import { IPrediccionEnfermedad } from "./schema";

export interface IUpdatePrediccion {
  fecha?: string;
  idSiembra?: string;
  enfermedades?: IPrediccionEnfermedad[];
  idEstacion?: string;
  distanciaMetros?: number;
}
