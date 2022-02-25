import { UsuarioRol } from "../../compartidos/usuarioRoles";

export interface ICreateRolPorEstablecimiento {
  idUsuario: string;
  idEStablecimiento: string;
  rol: UsuarioRol;
}
