import { IUbicacion } from '../../compartidos/ubicacion';

export interface ICreateLote {
  nombre: string;
  ubicacion: IUbicacion;
  createdAt: string;
  upDatedAt: string;
  deletedAt?: string;
  active: boolean;
  idEstablecimiento: string;
}
