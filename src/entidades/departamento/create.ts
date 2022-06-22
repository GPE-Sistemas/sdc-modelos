import { IUbicacion } from "../../compartidos/ubicacion";

export interface ICreateDepartamento {
  nombre: string;
  ubicacion?: IUbicacion;
  idProvincia: string;
}
