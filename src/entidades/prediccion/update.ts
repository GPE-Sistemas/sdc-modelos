import { IPrediccionEnfermedad, IPrediccionEstacion } from "./schema";

export interface IUpdatePrediccion {
  fecha?: string;
  idSiembra?: string;
  enfermedades?: IPrediccionEnfermedad[];
  estacion: IPrediccionEstacion;
}
