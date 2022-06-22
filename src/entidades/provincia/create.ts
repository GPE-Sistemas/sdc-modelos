import { IUbicacion } from "../../compartidos/ubicacion";

export interface ICreateProvincia {
  nombre: string;
  ubicacion?: IUbicacion;
}
