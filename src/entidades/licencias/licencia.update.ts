import { TipoDeLicencia } from './tipos';

export interface IUpdateLicencia {
  createdAt?: string;
  updatedAt?: string;
  active?: boolean;
  expiry?: string;
  tipo?: TipoDeLicencia;
}
