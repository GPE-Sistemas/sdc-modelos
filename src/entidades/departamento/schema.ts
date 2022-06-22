import { IUbicacion } from "../../compartidos/ubicacion";
import { IProvincia } from "../provincia";

export interface IDepartamento {
  _id: string;
  nombre: string;
  ubicacion?: IUbicacion;
  idProvincia: string;
  // Populate
  provincia?: IProvincia;
}
