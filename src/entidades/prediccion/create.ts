import { IPrediccionEnfermedad, IPrediccionEstacion } from "./schema";

export interface ICreatePrediccion {
  fecha: string;
  idSiembra: string;
  enfermedades?: IPrediccionEnfermedad[];
  estacion?: IPrediccionEstacion;
}
