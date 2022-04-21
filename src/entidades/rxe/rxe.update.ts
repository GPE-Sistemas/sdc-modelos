import { UsuarioRol } from "../../compartidos/usuarioRoles";

export interface IUpdateRolPorEstablecimiento {
  idUsuario?: string;
  idEStablecimiento?: string;
  rol?: UsuarioRol;
}
