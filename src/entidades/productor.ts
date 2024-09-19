import { IIntegracion } from '../compartidos';
import { IDistribuidor } from './distribuidor';
import { IQuimica } from './quimica';

export interface IProductor {
  _id?: string;
  idQuimica?: string;
  idDistribuidor?: string;
  nombre?: string;
  logo?: string;
  fechaCreacion?: string;
  integraciones?: IIntegracion[];
  // Populate
  quimica?: IQuimica;
  distribuidor?: IDistribuidor;
}

type OmitirCreate = '_id' | 'quimica' | 'distribuidor';
export interface ICreateProductor
  extends Omit<Partial<IProductor>, OmitirCreate> {}

type OmitirUpdate = '_id' | 'quimica' | 'distribuidor';
export interface IUpdateProductor
  extends Omit<Partial<IProductor>, OmitirUpdate> {}
