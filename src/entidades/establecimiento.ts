import { IUbicacion } from '../compartidos/ubicacion';
import { IPronosticoEstacionMeteorologica } from './clima';
import { IDistribuidor } from './distribuidor';
import { IPrediccion } from './prediccion';
import { IProductor } from './productor';
import { IQuimica } from './quimica';

export interface IEstablecimiento {
  _id?: string;
  idQuimica?: string;
  idDistribuidor?: string;
  idProductor?: string;
  nombre?: string;
  ubicacion?: IUbicacion[];
  fechaCreacion?: string;
  pronostico?: IPronosticoEstacionMeteorologica;
  // Populate
  quimica?: IQuimica;
  distribuidor?: IDistribuidor;
  productor?: IProductor;
}

type OmitirCreate = '_id' | 'fechaCreacion';
export interface ICreateEstablecimiento
  extends Omit<Partial<IEstablecimiento>, OmitirCreate> {}

type OmitirUpdate = '_id' | 'fechaCreacion';
export interface IUpdateEstablecimiento
  extends Omit<Partial<IEstablecimiento>, OmitirUpdate> {}
