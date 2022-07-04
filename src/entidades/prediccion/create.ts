import { IPrediccionEnfermedad, IPrediccionEstacion } from "./schema";

export interface ICreatePrediccion {
  fecha: string;
  etapa?: number;
  idSiembra: string;
  enfermedades?: IPrediccionEnfermedad[];
  estacion?: IPrediccionEstacion;
}
