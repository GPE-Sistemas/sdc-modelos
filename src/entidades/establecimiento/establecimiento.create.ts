import { IUbicacion } from '../../compartidos/ubicacion';

export interface ICreateEstablecimiento {
  nombre: string;
  ubicacion: IUbicacion[];
}
