import { IUbicacion } from "../../compartidos/ubicacion";

export interface IUpdateLote {
  nombre?: string;
  ubicacion?: IUbicacion;
  idQuimica?: string;
  idDistribuidor?: string;
  idProductor?: string;
  idEstablecimiento?: string;
  idDepartamento?: string;
}
