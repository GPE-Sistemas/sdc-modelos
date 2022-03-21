import { TiposDeLicencia } from './tipos';

export interface ILicemcia {
  _id: string;
  idUsuario: string;
  createdAt: string;
  updatedAt: string;
  active: boolean;
  expiry: string;
  tipo: TiposDeLicencia;
}
