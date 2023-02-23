import { IPrediccionEnfermedad, IPrediccionEstacion } from "./schema";

export interface IUpdatePrediccion {
  fecha?: string;
  etapa?: number;
  nombreEtapa?: string;
  idSiembra?: string;
  enfermedades?: IPrediccionEnfermedad[];
  estacion: IPrediccionEstacion;
  idQuimica?: string;
  idDistribuidor?: string;
  idProductor?: string;
  idEstablecimiento?: string;
}
