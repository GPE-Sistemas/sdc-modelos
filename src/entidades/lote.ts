import { IUbicacion } from "../compartidos/ubicacion";
import { IDepartamento } from "./departamento";
import { IDistribuidor } from "./distribuidor";
import { IEstablecimiento } from "./establecimiento";
import { IEstacion } from "./estacion";
import { IProductor } from "./productor";
import { IQuimica } from "./quimica";

export interface ISuelo {
  profundidad?: number;
  textura?:
    | "Arcilloso"
    | "Franco arcilloso"
    | "Franco"
    | "Franco arenoso"
    | "Arenoso";
  hayRaices?: boolean;
  capacidadDeCampo?: number;
  puntoMarchitez?: number;
  numeroDeSensor?: number;
}

export interface ILote {
  _id?: string;
  nombre?: string;
  ubicacion?: IUbicacion;
  capacidadDeCampo?: number;
  idSondaSuelo?: string;
  suelo?: ISuelo[];
  capacidadDeRiego?: number;
  puntoMarchitez?: number;
  anchoDeBulbo?: number;
  idQuimica?: string;
  idDistribuidor?: string;
  idProductor?: string;
  idEstablecimiento?: string;
  idDepartamento?: string;
  // Populate
  quimica?: IQuimica;
  distribuidor?: IDistribuidor;
  productor?: IProductor;
  establecimiento?: IEstablecimiento;
  departamento?: IDepartamento;
  sondaSuelo?: IEstacion;
}

type OmitirCreate =
  | "_id"
  | "quimica"
  | "distribuidor"
  | "productor"
  | "establecimiento"
  | "departamento"
  | "sondaSuelo";
export interface ICreateLote extends Omit<Partial<ILote>, OmitirCreate> {}

type OmitirUpdate =
  | "_id"
  | "quimica"
  | "distribuidor"
  | "productor"
  | "establecimiento"
  | "departamento"
  | "sondaSuelo";
export interface IUpdateLote extends Omit<Partial<ILote>, OmitirUpdate> {}
