import { EstadoAlerta, IEstadoAlerta } from './estado';

export interface ICreateAlerta {
  // Tentant
  idQuimica?: string;
  idDistribuidor?: string;
  idProductor?: string;
  idEstablecimiento?: string;
  idSiembra?: string;
  // Datos Autogenerados
  fecha?: string;
  // Estados de la alerta
  estados?: IEstadoAlerta[];
  estadoActual?: EstadoAlerta;
  activa?: boolean;
  // Datos especificos de la alerta de acuerdo al tipo de dispositivo
  descripcion?: string;
  reportes?: Record<string, any>[];
}
