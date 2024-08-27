import { IQuimica } from "./quimica";

export interface IDistribuidor {
  _id?: string;
  idQuimica?: string;
  nombre?: string;
  logo?: string;
  fechaCreacion?: string;
  // Populate
  quimica?: IQuimica;
}

type OmitirCreate = "_id" | "quimica";
export interface ICreateDistribuidor
  extends Omit<Partial<IDistribuidor>, OmitirCreate> {}

type OmitirUpdate = "_id" | "quimica";
export interface IUpdateDistribuidor
  extends Omit<Partial<IDistribuidor>, OmitirUpdate> {}
