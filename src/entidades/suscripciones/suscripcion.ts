import { NivelDeSuscripcion } from './tipos';

export interface ISuscripcion {
  idUsuario: string;
  idLicencia: string;
  idPago: string;
  createdAt: string;
  updatedAt: string;
  active: boolean;
  expiry: string;
  tipo: NivelDeSuscripcion;
}
