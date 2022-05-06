import { IUbicacion } from '../../compartidos/ubicacion';

export interface ILote {
  _id: string;
  nombre: string;
  ubicacion: IUbicacion;
  createdAt: string;
  upDatedAt: string;
  deletedAt?: string;
  active: boolean;
  idEstablecimiento: string;
}
