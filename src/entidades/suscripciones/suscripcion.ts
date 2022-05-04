import { NivelDeSuscripcion } from './tipos';

export interface ISuscripcion {
  _id: string;
  idUsuario: string;
  idLicencia: string;
  idPago: string;
  createdAt: string;
  updatedAt: string;
  active: boolean;
  expiracion: string;
  tipo: NivelDeSuscripcion;
}
