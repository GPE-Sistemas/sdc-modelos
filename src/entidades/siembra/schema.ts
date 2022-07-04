import { ICoordenadas } from "../../compartidos";
import { IDepartamento } from "../departamento";
import { IDistribuidor } from "../distribuidor";
import { IEstablecimiento } from "../establecimiento";
import { ILote } from "../lote";
import { IPrediccion } from "../prediccion";
import { IProductor } from "../productor";
import { IQuimica } from "../quimica";
import { ISemilla } from "../semilla";

export interface ISiembra {
  _id: string;
  idQuimica?: string;
  idDistribuidor?: string;
  idProductor?: string;
  idEstablecimiento?: string;
  idLote: string;
  idDepartamento?: string;
  idSemilla: string;
  fechaSiembra: string;
  fechaFinal?: string;
  coordenadas?: ICoordenadas;
  ultimaPrediccion?: IPrediccion;
  // Populate
  quimica?: IQuimica;
  distribuidor?: IDistribuidor;
  productor?: IProductor;
  establecimiento?: IEstablecimiento;
  lote?: ILote;
  departamento?: IDepartamento;
  semilla?: ISemilla;
}
