import { TipoDeLicencia } from './tipos';

export interface ILicenciaUpdate {
  createdAt?: string;
  updatedAt?: string;
  active?: boolean;
  expiry?: string;
  tipo?: TipoDeLicencia;
}
