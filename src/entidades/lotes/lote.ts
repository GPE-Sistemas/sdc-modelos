import { IUbicacion } from '../../compartidos/ubicacion';

export interface ILote {
  nombre: string;
  ubicacion: IUbicacion;
  createdAt: Date;
  upDatedAt: Date;
  deletedAt: Date;
  deleted: boolean;
  active: boolean;
  idEstablecimiento: string;
}
