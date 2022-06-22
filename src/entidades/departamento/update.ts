import { IUbicacion } from "../../compartidos/ubicacion";

export interface IUpdateDepartamento {
  nombre?: string;
  ubicacion?: IUbicacion;
  idProvincia?: string;
}
