import { ICoordenadas, IGeoJSONPoint } from "../compartidos";
import { ICrono } from "./crono";
import { IDepartamento } from "./departamento";
import { IDistribuidor } from "./distribuidor";
import { IEstablecimiento } from "./establecimiento";
import { ILote } from "./lote";
import { IPrediccion } from "./prediccion";
import { IPrediccionRiego } from "./prediccion-riego";
import { IProductor } from "./productor";
import { IQuimica } from "./quimica";
import { ISemilla } from "./semilla";

export type TTipoFijacionN = "0" | "> 0 < 30" | "> 30 < 60" | "> 60";
export type TTipoDosisN = "Muy Baja" | "Baja" | "Alta" | "Muy Alta";
export type TTipoRendimiento = "Muy Bajo" | "Bajo" | "Alto" | "Muy Alto";
export type TTipoManejoAgronomico = "Malo" | "Promedio" | "Bueno" | "Excelente";
export type TTipoIntensidadLluvias =
  | "Suaves"
  | "Moderadas"
  | "Intensas"
  | "Muy Intensas";
export type TTipoMateriaOrganica = "< 1" | "> 1 < 3" | "> 3 < 5" | "> 5";

export interface IHuellaHidrica {
  gris?: {
    litrosKgFertilizante?: number;
    litrosKgAgroquimico?: number;
    litrosKg?: number;
    litrosKcal?: number;
  };
  azul?: {
    litrosKcal?: number;
    litrosKg?: number;
  };
  verde?: {
    litrosKcal?: number;
    litrosKg?: number;
  };
  total?: {
    litrosKcal?: number;
    litrosKg?: number;
  };
}

export interface ISiembra {
  _id?: string;
  idQuimica?: string;
  idDistribuidor?: string;
  idProductor?: string;
  idEstablecimiento?: string;
  idLote?: string;
  idDepartamento?: string;
  idSemilla?: string;
  idCrono?: string;
  fechaSiembra?: string;
  fechaCosecha?: string;
  activa?: boolean;
  coordenadas?: ICoordenadas;
  geojson?: IGeoJSONPoint;
  ultimaPrediccion?: IPrediccion;

  // Datos para huella hídrica
  humedadCosecha?: number;
  rendimientoObtenidoKgHa?: number;
  rendimientoObtenidoKgHaSeco?: number;
  lluviasPromedio?: number;
  fijacionN?: TTipoFijacionN;
  dosisN?: TTipoDosisN;
  rendimiento?: TTipoRendimiento;
  manejoAgronómico?: TTipoManejoAgronomico;
  intensidadLluvias?: TTipoIntensidadLluvias;
  materiaOrganica?: TTipoMateriaOrganica;
  huellaHidrica?: IHuellaHidrica;

  // Populate
  quimica?: IQuimica;
  distribuidor?: IDistribuidor;
  productor?: IProductor;
  establecimiento?: IEstablecimiento;
  lote?: ILote;
  departamento?: IDepartamento;
  semilla?: ISemilla;
  crono?: ICrono;
}

type OmitirCreate =
  | "_id"
  | "quimica"
  | "distribuidor"
  | "productor"
  | "establecimiento"
  | "lote"
  | "departamento"
  | "semilla"
  | "crono";
export interface ICreateSiembra extends Omit<Partial<ISiembra>, OmitirCreate> {}

type OmitirUpdate =
  | "_id"
  | "quimica"
  | "distribuidor"
  | "productor"
  | "establecimiento"
  | "lote"
  | "departamento"
  | "semilla"
  | "crono";
export interface IUpdateSiembra extends Omit<Partial<ISiembra>, OmitirUpdate> {}
