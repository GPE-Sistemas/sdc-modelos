import { UsuarioRol } from "../../compartidos/usuarioRoles";

export interface IRolPorEstablecimiento {
  idUsuario: string;
  idEStablecimiento: string;
  rol: UsuarioRol;
}
