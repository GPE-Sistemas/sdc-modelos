import { IDistribuidor } from '../distribuidor';
import { IEstablecimiento } from '../establecimiento';
import { IProductor } from '../productor';
import { IQuimica } from '../quimica';
import { EstadoAlerta, IEstadoAlerta } from './estado';

export interface IAlerta {
  _id?: string;
  // Tentant
  idQuimica?: string;
  idDistribuidor?: string;
  idProductor?: string;
  idEstablecimiento?: string;
  // Datos Autogenerados
  fecha?: string;
  // Estados de la alerta
  estados?: IEstadoAlerta[];
  estadoActual?: EstadoAlerta;
  activa?: boolean;
  // Datos especificos de la alerta de acuerdo al tipo de dispositivo
  descripcion?: string;
  reportes?: Record<string, any>[];
  // Virtuals
  quimica?: IQuimica;
  distribuidor?: IDistribuidor;
  productor?: IProductor;
  establecimiento?: IEstablecimiento;
}
