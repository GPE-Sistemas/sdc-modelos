import { IUbicacion } from '../../compartidos/ubicacion';

export interface IUpdateLote {
  nombre?: string;
  ubicacion?: IUbicacion;
  createdAt?: string;
  upDatedAt?: string;
  deletedAt?: string;
  active?: boolean;
  idEstablecimiento?: string;
}
