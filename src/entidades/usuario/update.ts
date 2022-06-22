import { IDatosPersonales, IPermiso } from "./schema";

export interface IUpdateUsuario {
  _id: string;
  activo?: boolean;
  username?: string;
  password?: string;
  hash?: string;
  permisos: IPermiso[];
  datosPersonales?: IDatosPersonales;
}
