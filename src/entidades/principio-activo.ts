export interface IPrincipioActivo {
  _id?: string;
  nombre?: string;
  koc?: number;
  persistencia?: string;
}

type OmitirCreate = "_id" | "empresa";
export interface ICreatePrincipioActivo
  extends Omit<Partial<IPrincipioActivo>, OmitirCreate> {}

type OmitirUpdate = "_id" | "empresa";
export interface IUpdatePrincipioActivo
  extends Omit<Partial<IPrincipioActivo>, OmitirUpdate> {}
