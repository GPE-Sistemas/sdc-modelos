import { IUbicacion } from "../../compartidos/ubicacion";

export interface ICreateLote {
  nombre: string;
  ubicacion?: IUbicacion;
  idQuimica?: string;
  idDistribuidor?: string;
  idProductor?: string;
  idEstablecimiento: string;
  idDepartamento?: string;
}
