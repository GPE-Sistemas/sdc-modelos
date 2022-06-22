import { IDatosPersonales, IPermiso } from "./schema";

export interface IUpdateUsuario {
  activo?: boolean;
  username?: string;
  password?: string;
  hash?: string;
  permisos?: IPermiso[];
  datosPersonales?: IDatosPersonales;
}
