import { IUbicacion } from "../../compartidos/ubicacion";

export interface ICreateEstablecimiento {
  idQuimica?: string;
  idDistribuidor?: string;
  idProductor: string;
  nombre: string;
  ubicacion?: IUbicacion[];
}
