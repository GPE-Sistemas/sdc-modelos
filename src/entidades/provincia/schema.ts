import { IUbicacion } from "../../compartidos/ubicacion";

export interface IProvincia {
  _id: string;
  nombre: string;
  ubicacion?: IUbicacion;
}
