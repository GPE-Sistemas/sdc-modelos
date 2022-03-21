import { TipoDeLicencia } from './tipos';

export interface ILicencia {
  _id: string;
  licenciaId: string;
  idUsuario: string;
  createdAt: string;
  updatedAt: string;
  active: boolean;
  expiry: string;
  tipo: TipoDeLicencia;
}
