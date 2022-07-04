import { IPrediccionEnfermedad, IPrediccionEstacion } from "./schema";

export interface IUpdatePrediccion {
  fecha?: string;
  etapa?: number;
  idSiembra?: string;
  enfermedades?: IPrediccionEnfermedad[];
  estacion: IPrediccionEstacion;
}
