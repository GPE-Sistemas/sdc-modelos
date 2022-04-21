import { IUbicacion } from '../../compartidos/ubicacion';

export interface IUpdateEstablecimiento {
  nombre?: string;
  ubicacion?: IUbicacion[];
  updatedAt?: string;
  active?: boolean;
}
