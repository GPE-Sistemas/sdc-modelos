import { TipoDeLicencia } from './tipos';

export interface IUpdateLicencia {
  createdAt?: string;
  updatedAt?: string;
  active?: boolean;
  expiracion?: string;
  tipo?: TipoDeLicencia;
}
