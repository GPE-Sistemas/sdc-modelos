import { IDistribuidor } from './distribuidor';
import { IProductor } from './productor';
import { IQuimica } from './quimica';
import { IPermiso } from './usuario';

export interface IApikey {
  _id?: string;
  //
  identificacion?: string;
  key?: string;
  // Permisos
  idProductor?: string;
  idDistribuidor?: string;
  idQuimica?: string;
  permisos?: IPermiso[];
  // Populate
  productor?: IProductor;
  distribuidor?: IDistribuidor;
  quimica?: IQuimica;
}

type OmitirCreate = '_id' | 'productor' | 'distribuidor' | 'quimica';

export interface ICreateApikey extends Omit<Partial<IApikey>, OmitirCreate> {}

type OmitirUpdate = '_id' | 'productor' | 'distribuidor' | 'quimica';

export interface IUpdateApikey extends Omit<Partial<IApikey>, OmitirUpdate> {}
