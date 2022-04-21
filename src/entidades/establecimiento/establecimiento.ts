import { IUbicacion } from '../../compartidos/ubicacion';

export interface IEstablecimiento {
  _id: string;
  nombre: string;
  ubicacion: IUbicacion[];
  createdAt: string;
  updatedAt: string;
  active: boolean;
}
