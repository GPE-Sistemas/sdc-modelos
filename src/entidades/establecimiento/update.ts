import { IUbicacion } from "../../compartidos/ubicacion";

export interface IUpdateEstablecimiento {
  idQuimica?: string;
  idDistribuidor?: string;
  idProductor: string;
  nombre?: string;
  ubicacion?: IUbicacion[];
}
