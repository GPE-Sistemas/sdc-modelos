import { IUbicacion } from "../compartidos/ubicacion";
import { IDepartamento } from "./departamento";
import { IDistribuidor } from "./distribuidor";
import { IEstablecimiento } from "./establecimiento";
import { IProductor } from "./productor";
import { IQuimica } from "./quimica";

export interface ILote {
  _id?: string;
  nombre?: string;
  ubicacion?: IUbicacion;
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
}

type OmitirCreate =
  | "_id"
  | "quimica"
  | "distribuidor"
  | "productor"
  | "departamento";
export interface ICreateLote extends Omit<Partial<ILote>, OmitirCreate> {}

type OmitirUpdate =
  | "_id"
  | "quimica"
  | "distribuidor"
  | "productor"
  | "departamento";
export interface IUpdateLote extends Omit<Partial<ILote>, OmitirUpdate> {}
