import { IDistribuidor } from "./distribuidor";
import { IProductor } from "./productor";
import { IQuimica } from "./quimica";
import { IPermiso } from "./usuario";

export interface IApikey {
  _id?: string;
  //
  fechaCreacion?: string;
  identificacion?: string;
  key?: string;
  permisos?: IPermiso[];
}

type OmitirCreate = "_id" | "productor" | "distribuidor" | "quimica";

export interface ICreateApikey extends Omit<Partial<IApikey>, OmitirCreate> {}

type OmitirUpdate = "_id" | "productor" | "distribuidor" | "quimica";

export interface IUpdateApikey extends Omit<Partial<IApikey>, OmitirUpdate> {}
