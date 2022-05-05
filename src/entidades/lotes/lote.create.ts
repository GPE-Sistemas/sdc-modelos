import { IUbicacion } from '../../compartidos/ubicacion';

export interface ICreateLote {
  nombre: string;
  ubicacion: IUbicacion;
  idEstablecimiento: string;
}
