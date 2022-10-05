import { ICoordenadas } from "../../compartidos";
import { IPrediccion } from "../prediccion";

export interface IUpdateSiembra {
  idQuimica?: string;
  idDistribuidor?: string;
  idProductor?: string;
  idEstablecimiento?: string;
  idLote?: string;
  idDepartamento?: string;
  idSemilla?: string;
  idCronotrigo?: string;
  fechaSiembra?: string;
  fechaCosecha?: string;
  coordenadas?: ICoordenadas;
  ultimaPrediccion?: IPrediccion;
}
