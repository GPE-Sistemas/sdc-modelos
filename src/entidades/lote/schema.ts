import { IUbicacion } from "../../compartidos/ubicacion";
import { IDepartamento } from "../departamento";
import { IDistribuidor } from "../distribuidor";
import { IEstablecimiento } from "../establecimiento";
import { IProductor } from "../productor";
import { IQuimica } from "../quimica";

export interface ILote {
  _id: string;
  nombre: string;
  ubicacion?: IUbicacion;
  idQuimica?: string;
  idDistribuidor?: string;
  idProductor?: string;
  idEstablecimiento: string;
  idDepartamento?: string;
  // Populate
  quimica?: IQuimica;
  distribuidor?: IDistribuidor;
  productor?: IProductor;
  establecimiento?: IEstablecimiento;
  departamento?: IDepartamento;
}
