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

export interface INivelCapacidadCampo {
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

export interface INivelLecturaSensor {
  numeroDeSensor?: number;
  humedad?: number;
  profundidad?: number;
  aguaUtil?: number;
  fraccionDeConsumo?: number;
  capacidadDeRetencion?: number;
  aguaUtilFacilmenteDisponible?: number;
  humedadSueloLeida?: number;
}

export interface ICalculoRaices {
  profundidad?: number;
  nivel?: number;
  capacidadCampo?: number;
  precipitaciones?: number;
  humedadMaxima?: number;
  humedadInicioDia?: number;
  humedadFinDia?: number;
  humedadInicioNoche?: number;
  humedadFinNoche?: number;
  deltaDiario?: number;
  deltaDia?: number;
  pendienteDia?: number;
  deltaNoche?: number;
  pendienteNoche?: number;
  relacionDiaNoche?: number;
  condicion?: "Aceptado" | "Rechazado";
  hayRaices?: boolean;
}

export interface IVariablesPrediccionRiego {
  calculoRaices?: ICalculoRaices[];
  et0Promedio?: number;
  umbralDeRiego?: number;
  aguaUtilFacilmenteDisponiblePotencial?: number;
  capacidadRetencionTotal?: number;
  nivelesCapacidadCampo?: INivelCapacidadCampo[];
  nivelesLecturaSensor?: INivelLecturaSensor[];
  aguaUtilFacilmenteDisponibleReal?: number;
  pronosticosRiego?: IPronosticoRiego[];
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
