import { IDistribuidor } from "./distribuidor";
import { IEstablecimiento } from "./establecimiento";
import { ILote } from "./lote";
import { IProductor } from "./productor";
import { IQuimica } from "./quimica";
import { ISiembra } from "./siembra";

export interface IPronosticoRiego {
  fecha?: string;
  regar?: boolean;
  afd?: number;
  et0?: number;
  kc?: number;
  consumoAgua?: number;
  lluvias?: number;
  saldoDiario?: number;
  ccPorcentual?: number;
  previsionConsumo3Dias?: number;
}

export interface IAguaDisponibleNivel {
  profundidad?: number;
  capacidadCampo?: number;
  aguaUtil?: number;
  fraccionDeConsumo?: number;
  capacidadDeRetencion?: number;
  aguaUtilFacilmenteDisponible?: number;
  humedadSueloLeida?: number;
}

export interface IResultadoPrediccionRiego {
  fecha?: string;
  cantidad?: number;
}

export interface IAguaNivel {
  numeroDeSensor: number;
  humedad: number;
  aguaUtil: number;
}

export interface IVariablesPrediccionRiego {
  et0Promedio: number;
  umbralDeRiego: number;
  aguaTotalDisponible: number;
  aguaUtilPotencial: number;
  niveles: IAguaDisponibleNivel[];
  lecturaNiveles: IAguaNivel[];
  aguaUtilReal: number;
  pronosticosRiego: IPronosticoRiego[];
}

export interface IPrediccionRiego {
  _id?: string;
  idQuimica?: string;
  idDistribuidor?: string;
  idProductor?: string;
  idEstablecimiento?: string;
  //
  fechaCreacion?: string;
  fechaPrediccion?: string;
  idSiembra?: string;
  idLote?: string;
  regar?: IResultadoPrediccionRiego[];
  variables?: IVariablesPrediccionRiego;

  // Populate
  quimica?: IQuimica;
  distribuidor?: IDistribuidor;
  productor?: IProductor;
  establecimiento?: IEstablecimiento;
  siembra?: ISiembra;
  lote?: ILote;
}

type OmitirCreate =
  | "_id"
  | "siembra"
  | "quimica"
  | "distribuidor"
  | "productor"
  | "establecimiento";
export interface ICreatePrediccionRiego
  extends Omit<Partial<IPrediccionRiego>, OmitirCreate> {}

type OmitirUpdate =
  | "_id"
  | "siembra"
  | "quimica"
  | "distribuidor"
  | "productor"
  | "establecimiento";
export interface IUpdatePrediccionRiego
  extends Omit<Partial<IPrediccionRiego>, OmitirUpdate> {}
