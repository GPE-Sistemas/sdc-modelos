import { IIntegracion } from '../compartidos';
import { IEmpresa } from './empresa';

export interface IQuimica {
  _id?: string;
  nombre?: string;
  logo?: string;
  fechaCreacion?: string;
  idEmpresas?: string[];
  integraciones?: IIntegracion[];
  //
  empresas?: IEmpresa[];
}

type OmitirCreate = '_id' | 'empresas';
export interface ICreateQuimica extends Omit<Partial<IQuimica>, OmitirCreate> {}

type OmitirUpdate = '_id' | 'empresas';
export interface IUpdateQuimica extends Omit<Partial<IQuimica>, OmitirUpdate> {}
