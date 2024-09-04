import { IDistribuidor } from "./distribuidor";
import { IEstablecimiento } from "./establecimiento";
import { ILote } from "./lote";
import { IProductor } from "./productor";
import { IQuimica } from "./quimica";
import { ISiembra } from "./siembra";

interface IPronosticoRiego {
  fecha?: string;
  regar?: boolean;
  afd?: number;
  consumoAgua?: number;
  lluvias?: number;
  saldoDiario?: number;
  ccProcentual?: number;
  previsionConsumo3Dias?: number;
}

interface IAguaDisponibleNivel {
  profundidad?: number;
  capacidadCampo?: number;
  aguaUtil?: number;
  fraccionDeConsumo?: number;
  capacidadDeRetencion?: number;
  aguaUtilFacilmenteDisponible?: number;
}

interface IResultadoPrediccionRiego {
  fecha?: string;
  cantidad?: number;
}

interface IVariablesPrediccionRiego {
  aguaTotalDisponible: number;
  niveles: IAguaDisponibleNivel[];
  umbralDeRiego: number;
  et0Promedio: number;
  aguaUtilPotencial: number;
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
