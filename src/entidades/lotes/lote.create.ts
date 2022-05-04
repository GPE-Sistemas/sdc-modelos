import { IUbicacion } from '../../compartidos/ubicacion';

export interface ICreateLote {
  nombre: string;
  ubicacion: IUbicacion;
  createdAt: string;
  upDatedAt: string;
  deletedAt: string;
  deleted: boolean;
  active: boolean;
  idEstablecimiento: string;
}
